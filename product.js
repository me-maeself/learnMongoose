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

productSchema.methods.greet = function () {
	console.log(this.name);
	console.log("Hello, Hey, Howdy!!");
};

// const bike = new Product({
// 	name: "Tire Pump",
// 	price: 19.5,
// 	categories: ["Cycling"],
// 	sizes: "S",
// });

// bike.save()
// 	.then((data) => {
// 		console.log("It worked");
// 		console.log(data);
// 	})
// 	.catch((e) => {
// 		console.log(e);
// 	});

// // Product.findOneAndUpdate(
// // 	{ name: "Tire Pump" },
// // 	{ price: -19.99 },
// // 	{ new: true, runValidators: true }
// // )
// // 	.then((data) => {
// // 		console.log("It worked");
// // 		console.log(data);
// // 	})
// // 	.catch((e) => {
// // 		console.log(e);
// // 	});

productSchema.methods.toggleOnSale = function () {
	this.onSale = !this.onSale;
	return this.save();
};

productSchema.methods.addCategory = function (newCat) {
	this.categories.push(newCat);
	return this.save();
};

productSchema.statics.fireSale = function () {
	return this.updateMany({}, { onSale: true, price: 0 });
};

const Product = mongoose.model("Product", productSchema);

// const findProduct = async function () {
// 	const foundProduct = await Product.findOne({ name: "Mountain Bike" });
// 	console.log(foundProduct);
// 	await foundProduct.toggleOnSale();
// 	await foundProduct.addCategory("Outdoors");
// 	console.log(foundProduct);
// };

Product.fireSale().then((res) => console.log(res));

// findProduct();
