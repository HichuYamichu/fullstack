const loadDatabase = require('./loadDatabase');
const jwt = require('jsonwebtoken');
const config = require('../config');

function signUser (user){
	const ONE_DAY = 60 * 60 * 24;
	return jwt.sign(user, config.authentication.jwtSecret, {expiresIn: ONE_DAY});
}

module.exports = {
	async register (req, res){
		const { users } = await loadDatabase();
		const email = await users.findOne({email: req.body.email});
		try{
			if(email) throw 'user already exists';		
			await users.insertOne({
				email: req.body.email,
				password: req.body.password
			});
			res.send({message: 'it works!'});
		}catch(err){
			res.status(400).send({error: err});
		}
	},
	async login(req, res){
		const { users } = await loadDatabase();
		try{
			const { email, password } = req.body;
			const user = await users.findOne({
				email: email,
				password: password
			});
			if(!user){
				return res.status(402).send({
					error: 'Invalid login info'
				});
			}

			const isPasswordValid = password == user.password;

			if(!isPasswordValid){
				return res.status(402).send({
					error: 'Invalid login info'
				});
			}
			res.send({
				token: signUser(user),
				user: user
			});
		}catch(err){
			res.status(400).send({error: err});
		}
	}
		
};