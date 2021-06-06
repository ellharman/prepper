import glob from 'glob-promise';
import Ajv from 'ajv';
import schema from '../../src/assets/playbook-schemas/schema.json';

// I love the globber and the globber loves me
// Gets the paths of all playbook JSONs in the playbooks folder
const playbooks = glob.sync('./src/assets/playbooks/**/*.json');

const ajv = new Ajv({ strictTuples: false });

describe('Playbook loading', () => {
  it('should be testing against an array of paths to playbook JSONs', () => {
    expect(playbooks).toBeInstanceOf(Array);
  });
  // Validates each of the playbooks at the paths in /public/playbooks against
  // the schema at public/playbook-schemas
  test.each(playbooks)(
    'validate JSON at %s',
    (path) => {
      // eslint-disable-next-line global-require, import/no-dynamic-require
      const jsonToValidate = require(`../../${path}`);
      const validate = ajv.compile(schema);
      const valid = validate(jsonToValidate);
      if (!valid) console.log(`Playbook JSON failed to validate with ${JSON.stringify(validate.errors[0].message)} at JSON path ${JSON.stringify(validate.errors[0].instancePath)}`);
      expect(valid).toBe(true);
    },
  );
});
