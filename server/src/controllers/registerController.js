const loadDatabase = require('./loadDatabase');

module.exports = {
	async register (req, res){
		const data = await loadDatabase();
		const email = await data.findOne({email: req.body.email});
		try{
			if(email) throw 'user already exists';		
			await data.insertOne({
				email: req.body.email,
				password: req.body.password
			});
			res.send({message: 'it works!'});
		}catch(err){
			res.status(400).send({error: err});
		}
	}
		
};