var TBK = require('./tbk');
/*
	Put the "secrets" dictionary here, you can modify its contents before initializing the TBK object
 */

function createClient(config) {
	return new Promise((resolve, reject) => {
		var _client = new TBK(config, function (error, client) {
			if (error) {
				reject(error)
			} else {
				resolve(_client)
			}

		});

	});
};


module.exports = createClient;