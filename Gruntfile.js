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

      const { path, upstream } = CONFIG.modules[key];

      bashTask(
        `Pull & Rebase ${key}`,
        `bash ./scripts/Git-pull-rebase.sh ${path} ${upstream}`
      );

    });
  });

  grunt.registerTask("remotePrune", function(remote) {
    const moduleKeys = _.keys(CONFIG.modules);
    moduleKeys && moduleKeys.forEach((key) => {

      const { path } = CONFIG.modules[key];

      bashTask(
        `Remote Prune ${key} for ${remote}`,
        `bash ./scripts/Git-remote-prune.sh ${path} ${remote}`
      );

    });
  });

  function bashTask (title, execStr) {
    console.log(`\n[Deva] ${title}\n`.underline.green);
    if (sh.exec(`${execStr}`).code != 0) {
      console.log(`\n=> Error`.red);
      return;
    }

    console.log(`\n=> Success`.green);
  }
};

