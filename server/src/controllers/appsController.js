const axios = require('axios');
const { promisify } = require('util');
const readdir = promisify(require('fs').readdir);

module.exports = {
	async index(req, res){
		try {
			const arr = [];
			const apps = await readdir('G:/Projects/someApps');
			await apps.forEach(async app => {
				await arr.push(require(`G:/Projects/someApps/${app}/config`));
			});
			res.status(200).send(arr);
		} catch (err) {
			res.status(500).send({
				error: 'error everyone escape'
			});
		}
	}
};