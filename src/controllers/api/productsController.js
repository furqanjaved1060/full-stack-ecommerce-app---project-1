import mongoose from "mongoose";
import { productModel } from "../../models/productModel.js";

export const createProduct = async (req, res) => {
  const fileNamesArray = req.files.map((c) => c.filename);
  if (fileNamesArray.length === 0)
    return res
      .status(400)
      .json({ message: "Atleast one product image is required" });
  try {
    const createdProduct = await productModel.create({
      ...req.body,
      images: fileNamesArray,
    });
    return res
      .status(201)
      .json({ message: "Product created successfully", data: createdProduct });
  } catch (err) {
    // Mongoose Validation Error
    if (err instanceof mongoose.Error.ValidationError) {
      const errorMessage = Object.values(err.errors).map((err) => err.message);
      return res.status(400).json({
        message: errorMessage[0],
      });
    }

    // Fallback - Server Error
    console.error({
      name: err.name,
      message: err.message,
    });
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

export const updateProduct = async (req, res) => {
  const fileNamesArray = req.files.map((c) => c.filename);
  if (fileNamesArray.length === 0)
    return res
      .status(400)
      .json({ message: "Atleast one product image is required" });
  try {
    const updatedProduct = await productModel.findOneAndUpdate(
      { _id: req.params.productId },
      {
        ...req.body,
        images: fileNamesArray,
      },
      { new: true }
    );
    if (!updatedProduct)
      return res.status(404).json({ message: "Product not found" });
    return res
      .status(200)
      .json({ message: "Product updated successfully", data: updatedProduct });
  } catch (err) {
    // Mongoose Validation Error
    if (err instanceof mongoose.Error.ValidationError) {
      const errorMessage = Object.values(err.errors).map((err) => err.message);
      return res.status(400).json({
        message: errorMessage[0],
      });
    }

    // Fallback - Server Error
    console.error({
      name: err.name,
      message: err.message,
    });
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const deletedProduct = await productModel.findOneAndDelete({
      _id: req.params.productId,
    });
    if (!deletedProduct)
      return res.status(404).json({ message: "Product not found" });
    return res.status(200).json({ message: "Product deleted successfully" });
  } catch (err) {
    // Fallback - Server Error
    console.error({
      name: err.name,
      message: err.message,
    });
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};
