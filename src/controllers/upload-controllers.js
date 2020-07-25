
class UploadController {

async uploadpicture(req, res) {
  const file = req.file;
    var path;
    if (!file) {
      const error = new Error('No File')
      error.httpStatusCode = 400
      return next(error)
    }
    path = req.file.path;
  
    res.json({ fileUrl: 'http://localhost:4000/devices/' + req.file.filename , Imagename : req.file.filename});
  
}
}
module.exports = UploadController