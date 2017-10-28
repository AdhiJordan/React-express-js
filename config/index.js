var configVal = require('./config');


module.exports = {
	getDbConnectionString: function() {
		return 'mongodb://' + 
		configVal.username + ':' + 
		configVal.password + '@ds113435.mlab.com:13435/nodetodo';
	}
}