var babelify = require('babelify');
var browserify = require('browserify-middleware');
var keystone = require('keystone');
var middleware = require('./middleware');
var importRoutes = keystone.importer(__dirname);
// var rest = require('restful-keystone');
// Common Middleware
keystone.pre('routes', middleware.initLocals);
keystone.pre('render', middleware.flashMessages);

// var rest = require('restful-keystone')(
// 	keystone, {
// 		root: '/api/v0'
// 	});

// Import Route Controllers
var routes = {
	views: importRoutes('./views')
};

// Setup Route Bindings
exports = module.exports = function(app) {
	// in development, do an 'on-the-fly' build of client-side
	// and make the scripts available at /js/_path_to_script_
	if (process.env.NODE_ENV === 'development') {
		app.use('/js', browserify('./client', {
			transform: [babelify.configure({
				plugins: ['object-assign']
			})]
		}));
	}

	// Views
	app.get('/', routes.views.index);

	//start the api engine
	// rest.expose({
	// 	Post: true,
	// }).start();
};
