import express from "express";
import { productModel } from "../../models/productModel.js";

export const webAdminRouter = express.Router();

webAdminRouter.get("/dashboard", async (req, res) => {
  try {
    const allProducts = await productModel.find();
    return res.status(200).render("admin-dashboard-page", { allProducts });
  } catch (err) {
    // For myself
    console.error({
      name: err.name,
      message: err.message,
    });
    // For frontend
    return res.status(500).render("error-page", {
      message: "Something went wrong",
    });
  }
});
