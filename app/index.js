'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');


var MapleGenerator = module.exports = function MapleGenerator(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);

  this.on('end', function () {
    this.installDependencies({ skipInstall: options['skip-install'] });
  });

  this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(MapleGenerator, yeoman.generators.Base);

MapleGenerator.prototype.askFor = function askFor() {
  var cb = this.async();

    // welcome message
    if (!this.options['skip-welcome-message']) {
        console.log(this.yeoman);
        console.log('Out of the box I include HTML5 Boilerplate and jQuery.');
    }

  var prompts = [{
    name: 'proj_name',
    message: 'Project Name',
    default: 'maple'
  }];

  this.prompt(prompts, function (props) {

    cb();
  }.bind(this));
};

MapleGenerator.prototype.app = function app() {
  this.directory('.', '.')
};