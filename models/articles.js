var mongoose = require("mongoose");

//MONGOOSE / SCHEMA-MODEL CONFIG
var articleSchema = new mongoose.Schema({
	title: String,
	image: String,
	post: String,
	author: {
		id: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User"
		},
		username: String,
		full_name: String,
	},
	comments: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "Comment"
		}
	]
});

module.exports = mongoose.model("Article", articleSchema);
