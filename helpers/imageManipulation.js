const Jimp = require("jimp");
const RequestError = require("./RequestError");

const jimpOptimization = (filename) => {
  Jimp.read(filename, (err, image) => {
    if (err) throw RequestError(err.message);
    image.resize(256, 256).write(filename);
  });
};

module.exports = { jimpOptimization };
