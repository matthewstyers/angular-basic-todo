// Simulate config options from your production environment by
// customising the .env file in your project's root folder.
require('dotenv').load();

// Require keystone
var keystone = require('keystone');
// var browserSync = require('browser-sync');

keystone.init({
  'brand': 'Abstract Media',
  // 'favicon': 'public/favicon.ico',
  'mongo': process.env.MONGO_URI || process.env.MONGOLAB_URI ||
    'mongodb://localhost/styers-angular-code-assessment',
	'name': 'styers-angular-code-assessment',
  'port': process.env.PORT || 3000,
	'sass': 'public',
	'static': 'public',
	'views': 'server/templates/views',
	'view engine': 'jade',

	'auto update': false,
	'session': true,

	'auth': true,
	'user model': 'User',
});

keystone.import('server/models');

keystone.set('locals', {
	_: require('lodash'),
	env: keystone.get('env'),
	utils: keystone.utils,
	editable: keystone.content.editable
});

keystone.set('routes', require('./server/routes'));

keystone.start({
  // once the application mounts, start the livereload server
	onMount: function() {
		if (process.env.NODE_ENV === 'development') {
			keystone.app.use(require('connect-livereload')());
		}
	}
});
