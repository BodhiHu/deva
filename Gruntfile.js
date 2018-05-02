"use strict";

const sh = require('shelljs');
const _ = require('underscore');
const CONFIG = require('./Project');

module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
  });
  grunt.registerTask("pullRebaseMaster", function() {
    sh.echo(`TODO: pullRebaseMaster`);
    const moduleKeys = _.keys(CONFIG.modules);
    moduleKeys && moduleKeys.forEach((key) => {
      const module = CONFIG.modules[key];
    });
  });
};

