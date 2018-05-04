"use strict";

const PATH = 'path/to/project';
const CONFIG = {
  path: PATH,
  modules: {
    'plant-seed': {
      path: `${PATH}/plant-seed`,
      upstream: 'upstream'
    },
    'life-grows': {
      path: `${PATH}/life-grows`,
      upstream: 'upstream'
    }
  }
};

module.exports = CONFIG;

