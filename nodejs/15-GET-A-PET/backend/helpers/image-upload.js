const multer = require('multer');
const path = require('path');

const imageStorage = multer.diskStorage({
  destination: (req, files, cb) => {
    let folder = '';

    if (req.baseUrl.includes('users')) {
      folder = 'users';
    } else if (req.baseUrl.includes('pets')) {
      folder = 'pets';
    }

    cb(null, `public/imgs/${folder}`);
  },
  filename: (req, file, cb) => {
    cb(
      null,
      Date.now() +
        String(Math.floor(Math.random() * 1000)) +
        path.extname(file.originalname)
    );
  },
});

const imageUpload = multer({
  storage: imageStorage,
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(png|jpg)$/)) {
      return cb(new Error('Por favor, envie apenas png ou jpg!'));
    }

    cb(undefined, true);
  },
});

module.exports = { imageUpload };
