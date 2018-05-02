"use strict";

const sh = require('shelljs');
const _ = require('underscore');
const debug = require('debug')('Deva');
const colors = require('colors');
const CONFIG = require('./Project');

sh.config.verbose = true;

module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
  });

  grunt.registerTask("pullRebaseMaster", function() {
    const moduleKeys = _.keys(CONFIG.modules);
    moduleKeys && moduleKeys.forEach((key) => {

      const { path, remote } = CONFIG.modules[key];
      console.log(`\n[Deva] Pull & Rebase ${key}\n`.underline.green);
      if (sh.exec(`bash ./scripts/Git-pull-rebase.sh ${path} ${remote}`).code != 0) {
        console.log(`\n=> Error`.red);
        return;
      }

      console.log(`\n=> Success`.green);

    });
  });
};

