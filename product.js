const mongoose = require("mongoose");

main()
	.then(() => console.log("Success"))
	.catch((err) => console.log(err));

async function main() {
	await mongoose.connect("mongodb://127.0.0.1:27017/shopApp");
}

const productSchema = new mongoose.Schema({
	name: {
		type: String,
	},
	price: {
		type: Number,
	},
});

const Product = mongoose.model("Product", productSchema);

const bike = new Product({
	// name: "Mountain Bike",
	price: 599,
});

bike.save()
	.then((data) => {
		console.log("It worked");
		console.log(data);
	})
	.catch((e) => {
		console.log(e);
	});
