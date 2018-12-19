module.exports = (app) => {
	const authenticationController = require('./controllers/authenticationController');
	const registerPolicy = require('./policies/registerPolicy');
	const appsControler = require('./controllers/appsController');

	app.post('/register',
		registerPolicy.register,
		authenticationController.register);

	app.post('/login',
		authenticationController.login);
		
	app.get('/apps',
		appsControler.index);
};