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

const bcryptjs = require('bcryptjs')
const db = require('./dbconfig/mysqlconnect');


// ================================================== CRUD DATA JENJANG ==================================================

app.post('/TambahJenjang')

app.post('/EditJenjang')

app.post('/HapusJenjang')

app.get('/ListJenjang', (req, res) => {
  var DataJenjang = `SELECT * FROM master_jenjang`
  db.query(DataJenjang, (err, result) => {
    if (err) throw err
    else res.status(200).send(result)
  })
})

// ================================================== CRUD DATA KELAS ==================================================

app.post('/TambahKelas')

app.post('/EditKelas')

app.post('/HapusKelas')

app.get('/ListNamaKelas', (req, res) => {
  var DataNamKelas = `SELECT * FROM nama_kelas`
  db.query(DataNamKelas, (err, result) => {
    if (err) throw err
    else res.status(200).send(result)
  })
})

// ========================================== CRUD DATA KEGIATAN BELAJAR MENGAJAR (KBM) ==========================================

app.post('/TambahKBM')

app.post('/EditKBM')

app.post('/HapusKBM')

app.post('/ListKBM')


/** Port configuration */

const port = process.env.PORT || 8080;
app.listen(port, (req, res) =>{
  console.log(`Server started at port ${port}...`)
});

/** Route configuration */
const siswa = require('./routes/api/siswa');
const guru = require('./routes/api/guru');
const materi = require('./routes/api/materi');

app.use('/api/siswa', siswa);
app.use('/api/guru', guru);
app.use('/api/materi', materi);


