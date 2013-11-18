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
        console.log('Create basic Maple Project.');
    }

  var prompts = [{
    name: 'proj_name',
    message: 'Project Name'
  },{
    name: 'description',
    message: 'Description',
    default: 'The better HTML/CSS Project'
  }, {
    name: 'version',
    message: 'Version',
    default: '0.0.1'
  }];

  this.prompt(prompts, function (props) {
    this.props = props;
    cb();
  }.bind(this));
};

MapleGenerator.prototype.app = function app() {
  this.directory('src/.', '.')
  this.template('_bower.json', 'bower.json');
  this.template('_package.json', 'package.json');
};