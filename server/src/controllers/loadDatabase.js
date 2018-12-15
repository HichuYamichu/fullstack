module.exports = async function loadDatabase() {
	const db = require('mongodb');
	const config = require('../config');
	
	const client = await db.MongoClient.connect(`mongodb://${config.dbUser}:${config.dbPassword}@ds056559.mlab.com:56559/first_fullstack_app_db`, { useNewUrlParser: true });

	const userCollection = client.db('first_fullstack_app_db').collection('testing');
	const testCollection = client.db('first_fullstack_app_db').collection('test2');

	const collections = {
		users: userCollection,
		test: testCollection
	};
	
	return collections;

};