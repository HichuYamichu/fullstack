module.exports = (app) => {
	const registerController = require('./controllers/registerController');
	const registerPolicy = require('./policies/registerPolicy');

	app.post('/register',
		registerPolicy.register,
		registerController.register);
};