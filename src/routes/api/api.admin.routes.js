import express from "express";
import {
  createProduct,
  deleteProduct,
  updateProduct,
} from "../../controllers/api/productsController.js";
import { uploadProductImage } from "../../config/multer-config.js";

export const apiAdminRouter = express.Router();

// Products Controller
// getting products directly by server (no need for client to call this)
apiAdminRouter.post(
  "/products",
  uploadProductImage.array("images"),
  createProduct
);
apiAdminRouter.put(
  "/products/:productId",
  uploadProductImage.array("images"),
  updateProduct
);
apiAdminRouter.delete(
  "/products/:productId",
  deleteProduct
);