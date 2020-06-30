import multer from 'multer';

const storage = multer.diskStorage({
    destination: (req, file, cd) => cd(null, "uploads/"),
    filename: (req, file, cb) => cb(null, file.originalname)
})

const uploads = multer({ storage: storage });

export default uploads;