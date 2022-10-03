const { default: mongoose } = require('mongoose');
const moongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
	lable: {
		type: String,
		require: true,
		maxLength: 20
	},
	amount: {
		type: String
	},
	createdAt: {
		type: Date,
		default: Date.now()
	},
	history: [
		{
			type: Object
		}
	],
	isDeleted: {
		type: Boolean,
		default: false
	}
});

module.exports = mongoose.model('Lables', ProductSchema);
