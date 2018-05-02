"use strict";

const PATH = 'path/to/project';
const CONFIG = {
  path: PATH,
  modules: {
    'plant-seed': {
      path: `${PATH}/plant-seed`,
      remote: 'upstream'
    },
    'life-grows': {
      path: `${PATH}/life-grows`,
      remote: 'upstream'
    }
  }
};

module.exports = CONFIG;

