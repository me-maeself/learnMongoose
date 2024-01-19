const mongoose = require("mongoose");

main()
	.then(() => console.log("Connection Success"))
	.catch((err) => console.log(err));

async function main() {
	await mongoose.connect("mongodb://127.0.0.1:27017/shopApp");
}

const productSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		maxLength: 20,
	},
	price: {
		type: Number,
		required: true,
		min: [0, "Price must be positive you dodo!"],
	},
	onSale: {
		type: Boolean,
		default: false,
	},
	categories: [String],
	qty: {
		online: {
			type: Number,
			default: 0,
		},
		inStore: {
			type: Number,
			default: 0,
		},
	},
	sizes: {
		type: String,
		enum: ["S", "M", "L"],
	},
});

const Product = mongoose.model("Product", productSchema);

const bike = new Product({
	name: "Tire Pump",
	price: 19.5,
	categories: ["Cycling"],
	sizes: "S",
});

bike.save()
	.then((data) => {
		console.log("It worked");
		console.log(data);
	})
	.catch((e) => {
		console.log(e);
	});

// Product.findOneAndUpdate(
// 	{ name: "Tire Pump" },
// 	{ price: -19.99 },
// 	{ new: true, runValidators: true }
// )
// 	.then((data) => {
// 		console.log("It worked");
// 		console.log(data);
// 	})
// 	.catch((e) => {
// 		console.log(e);
// 	});
