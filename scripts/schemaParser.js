const $RefParser = require("json-schema-ref-parser");
const merge = require("json-schema-merge-allof");
const traverse = require('json-schema-traverse');
const { kdsResolver, customResolver } = require("./schemaResolver");

// TODO deduplicate this (whole file), this should (mostly) be consumed from @kickstartDS directly

// TODO this one, too, is a poor mans version of @kickstartds/jsonschema-utils mergeAnyOfEnums
// which is also used inside the kickstartDS-schema-toolkit for the same purpose
// Should vanish with the rest of the duplicated JSON Schema stuff here
const mergeAnyOfEnums = (schema) => {
  traverse(schema, {
    cb: (subSchema, pointer, rootSchema) => {
      const propertyName = pointer.split('/').pop();

      if (
        subSchema.anyOf &&
        subSchema.anyOf.length === 2 &&
        subSchema.anyOf.every((anyOf) => anyOf.type === 'string' && anyOf.enum) &&
        rootSchema.allOf &&
        rootSchema.allOf.length === 2 &&
        rootSchema.allOf.some((allOf) => allOf.properties[propertyName]?.type === 'string')
      ) {
        subSchema.type = subSchema.anyOf[0].type;
        subSchema.default = subSchema.anyOf[0].default;
        subSchema.enum = subSchema.anyOf.reduce((enumValues, anyOf) => {
          anyOf.enum.forEach((value) => {
            if (!enumValues.includes(value)) enumValues.push(value);
          });

          return enumValues;
        }, []);

        delete rootSchema.allOf[rootSchema.allOf.findIndex((allOf) => allOf.properties[propertyName]?.type === 'string')].properties[propertyName];
        delete subSchema.anyOf;
      }
    },
  });
};

const parse = (schemaPath) =>
  new $RefParser().dereference(schemaPath, {
    resolve: {
      kds: {
        order: 1,
        ...kdsResolver,
      },
      custom: {
        order: 2,
        ...customResolver,
      },
    },
  });

const dereference = async (schemaPath) => {
  const schema = await parse(schemaPath);
  mergeAnyOfEnums(schema);

  const merged = merge(schema, { ignoreAdditionalProperties: true });
  return merged;
};

module.exports = { dereference };
