const fetch = require("node-fetch")

module.exports = async function(req, res, next){
	const url = req.query.url

	const result = await fetch(url)
	result.body.pipe(res)
}