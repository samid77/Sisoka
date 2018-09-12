/** Server configuration */
var express = require('express'); 
var app = express();

app.use('/assets', express.static('assets'));
// to display image

/** Body parser configuration */
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var upload = require('express-fileupload');
app.use(upload());

var cors = require('cors');
app.use(cors());

// const crypto = require('crypto');
// const secret = 'abcdefg';
// NOTE: We won't use crypto (use bcryptjs instead), but I did not delete this code if one day we need it, just un-comment the code

/** Port configuration */
const port = process.env.PORT || 8080;
app.listen(port, (req, res) =>{
  console.log(`Server started at port ${port}...`)
});

/** Route configuration */
const guru = require('./routes/api/guru');
const jenjang = require('./routes/api/jenjang');
const kbm = require('./routes/api/kbm');
const kelas = require('./routes/api/kelas');
const materi = require('./routes/api/materi');
const siswa = require('./routes/api/siswa');

app.use('/api/guru', guru);
app.use('/api/jenjang', jenjang);
app.use('/api/kbm', kbm);
app.use('/api/kelas', kelas);
app.use('/api/materi', materi);
app.use('/api/siswa', siswa);