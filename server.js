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
	'static': 'public',
	'views': 'client/templates/views',
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
  // onHttpServerCreated: function() {
  //   var socketio = require('socket.io');
  //   keystone.set('io', socketio.listen(keystone.httpServer));
  // },
  // once the application mounts, start the livereload server
	onMount: function() {
		if (process.env.NODE_ENV === 'development') {
			keystone.app.use(require('connect-livereload')());
		}
	// },
  // onStart: function() {
	// 	var io = keystone.get('io');
	// 	var session = keystone.get('express session');
	// 	// Share session between express and socketio
	// 	io.use(function(socket, next) {
	// 		session(socket.handshake, {}, next);
	// 	});
	// 	io.on('connection', function(socket) {
	// 		console.log('user connected');
	// 		socket.on('chat message', function(msg) {
	// 			console.log('message: ' + msg);
	// 			io.emit('chat message', msg);
	// 		});
	// 	});
  }
});
