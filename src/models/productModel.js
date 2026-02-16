import mongoose from "mongoose";

const productSchema = mongoose.Schema(
  {
    title: { type: String, trim: true, required: true },
    description: { type: String, trim: true, required: true },
    price: { type: Number, required: true },
    discount: { type: Number, default: 0 },
    images: [{ type: String, trim: true, required: true }], // URLs or file paths
    stock: { type: Number, required: true },
    brand: { type: String, trim: true, required: true },
    category: { type: String, trim: true, required: true },
  },
  { timestamps: true }
);

export const productModel = mongoose.model("product", productSchema);
