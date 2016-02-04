var keystone = require('keystone');
var middleware = require('./middleware');
var importRoutes = keystone.importer(__dirname);

//middleware
keystone.pre('routes', middleware.initLocals);
keystone.pre('render', middleware.flashMessages);

var rest = require('restful-keystone')(
	keystone, {
		root: '/api/v0'
	});

// Import Route Controllers
var routes = {
	views: importRoutes('./views')
};

// Setup Route Bindings
exports = module.exports = function(app) {
	// Views
	app.get('/', routes.views.index);

	//start the api engine
	rest.expose({
		ListItem: true,
		Todo: {
			populate: 'items'
		}
	}).start();
};
