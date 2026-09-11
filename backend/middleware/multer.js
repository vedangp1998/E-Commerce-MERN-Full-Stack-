import multer from "multer";

const storage = multer.memoryStorage();

// singleUpload
export const singleUpload = multer({ storage }).single("file");


//multipleUpload
export const multipleUpload = multer({ storage }).array("files", 5);
