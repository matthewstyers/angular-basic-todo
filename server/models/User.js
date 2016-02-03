var keystone = require('keystone');
var Types = keystone.Field.Types;

var User = new keystone.List('User', {
	// add some config here eventually
});

User.add({
	name: {
		type: Types.Name,
		required: true,
		index: true
	},
	email: {
		type: Types.Email,
		required: true,
		index: true
	},
	password: {
		type: Types.Password,
		required: true
	},
	isAdmin: {
		type: Boolean,
		index: true
	}
});

// legacy permission function
User.schema.virtual('canAccessKeystone')
	.get(function() {
		return this.isAdmin;
	});


User.register();
