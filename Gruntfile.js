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
      if (sh.cd(`${path}`).code === 0) {
        sh.exec(`git checkout master`);
        sh.exec(`git pull ${remote} master --rebase`);
      }

    });
  });
};

