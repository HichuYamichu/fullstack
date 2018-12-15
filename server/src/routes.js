module.exports = (app) => {
	const authenticationController = require('./controllers/authenticationController');
	const registerPolicy = require('./policies/registerPolicy');

	app.post('/register',
		registerPolicy.register,
		authenticationController.register);

	app.post('/login',
		authenticationController.login);
};