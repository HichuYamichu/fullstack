module.exports = (app) => {
	const loadDatabase = require('./controllers/loadDatabase');

	app.get('/testing', async (req, res) => {
		const data = await loadDatabase();
		res.send(await data.find({}).toArray());
	});

	app.post('/register', async (req, res) => {
		const data = await loadDatabase();
		await data.insertOne({
			email: req.body.email,
			password: req.body.password
		});
		res.status(201).send();
	});

	// async function loadDatabase() {
	// 	const client = await db.MongoClient.connect(`mongodb://${config.dbUser}:${config.dbPassword}@ds056559.mlab.com:56559/first_fullstack_app_db`, { useNewUrlParser: true });

	// 	return client.db('first_fullstack_app_db').collection('testing');
	// }
};