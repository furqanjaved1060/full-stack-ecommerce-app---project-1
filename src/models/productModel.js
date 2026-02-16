import mongoose from "mongoose";

const productSchema = mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  discount: { type: Number, default: 0 },
  images: [{ type: String }], // URLs or file paths
  stock: { type: Number, default: 0 },
  brand: { type: String, required: true },
  category: { type: String, required: true },
});

export const productModel = mongoose.model("product", productSchema);
