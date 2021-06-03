import glob from 'glob-promise';

// I love the globber and the globber loves me

let playbooks;

beforeAll(() => glob('src/assets/playbooks/**/*.json').then((contents) => {
  playbooks = contents;
}));

describe('Playbooks', () => {
  it('should be testing against an array of paths to playbook JSONs', () => {
    console.log(playbooks);
    expect(playbooks).toBeInstanceOf(Array);
  });
});
