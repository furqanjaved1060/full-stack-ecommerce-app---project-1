import multer from "multer";
import path from "path";
import fs from "fs";

export const createUploader = (folderName) => {
  // Full path inside public/images/uploads
  const uploadPath = path.join("public", "images", "uploads", folderName);

  // Ensure folder exists
  if (!fs.existsSync(uploadPath)) {
    fs.mkdirSync(uploadPath, { recursive: true });
  }

  // Disk storage config
  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, uploadPath);
    },
    filename: (req, file, cb) => {
      const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
      const ext = path.extname(file.originalname);

      cb(null, `${file.fieldname}-${uniqueSuffix}${ext}`);
    },
  });

  return multer({ storage });
};

export const uploadProductImage = createUploader("products");
