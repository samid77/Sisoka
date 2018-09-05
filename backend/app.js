// ==================================================== SERVER CONFIG ==================================================
var express = require('express'); 
var app = express();

app.use('/assets', express.static('assets'));
// to display image

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var upload = require('express-fileupload');
app.use(upload());

var cors = require('cors');
app.use(cors());

const crypto = require('crypto');
const secret = 'abcdefg';

const mysql = require('mysql');
const db = mysql.createConnection({ 
  host : 'localhost', 
  port: '3306',
  user : 'root', 
  password : 'root',
  database : 'sisoka',
  multipleStatements: true
});
db.connect();

// ================================================== CRUD DATA SISWA ==================================================

app.post('/TambahDataSiswa', (req, res) => {
  // var data = req.body.namasiswa

  var inputDataSiswa = `INSERT INTO`
  db.query(inputDataSiswa, (err, result) => {
    if (err) throw err
    else res.send('1')
  })
})

app.post('/EditDataSiswa')

app.post('/HapusDataSiswa')

app.get('/ListSiswa')

// ================================================== CRUD DATA GURU ==================================================

app.post('/TambahDataGuru')

app.post('/EditDataGuru')

app.post('/HapusDataGuru')

app.post('/ListGuru')

// ================================================== CRUD DATA MATERI ==================================================

app.post('/TambahMateri')

app.post('/EditMateri')

app.post('/HapusMateri')

app.post('/ListMateri')

// ================================================== CRUD DATA SUBMATERI ==================================================

app.post('/TambahSubMateri')

app.post('/EditSubMateri')

app.post('/HapusSubMateri')

app.post('/ListSubMateri')

// ================================================== CRUD DATA JENJANG ==================================================

app.post('/TambahJenjang')

app.post('/EditJenjang')

app.post('/HapusJenjang')

app.post('/ListJenjang')

// ================================================== CRUD DATA KELAS ==================================================

app.post('/TambahKelas')

app.post('/EditKelas')

app.post('/HapusKelas')

app.post('/ListKelas')

// ========================================== CRUD DATA KEGIATAN BELAJAR MENGAJAR (KBM) ==========================================

app.post('/TambahKBM')

app.post('/EditKBM')

app.post('/HapusKBM')

app.post('/ListKBM')

// ========================================== PORT LISTEN TO 3001 ==========================================

app.listen(3001);


