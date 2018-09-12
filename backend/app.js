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

// const crypto = require('crypto');
// const secret = 'abcdefg';
// NOTE: We won't use crypto (use bcryptjs instead), but I did not delete this code if one day we need it, just un-comment the code

const bcryptjs = require('bcryptjs')

const db = require('./dbconfig/mysqlconnect');

// ================================================== CRUD DATA SISWA ==================================================

app.post('/TambahDataSiswa', (req, res) => {
  // var data = req.body.namasiswa

  // var inputDataSiswa = `INSERT INTO`
  // db.query(inputDataSiswa, (err, result) => {
  //   if (err) throw err
  //   else res.send('1')
  // })
})

app.post('/EditDataSiswa')

app.post('/HapusDataSiswa')

app.get('/ListSiswa', (req, res) => {
  var DataSiswa = `SELECT * FROM data_siswa`;
  db.query(DataSiswa, (err, result) => {
    if(err) {
      throw err;
    } else {
      res.status(200).send(result);
    }
  })
})

// ================================================== CRUD DATA GURU ==================================================

app.post('/TambahDataGuru', (req, res) => 
{
  // var nama_lengkap = req.body.nama_lengkap
  // var NIP = req.body.NIP
  // var tempat_lahir = req.body.tempat_lahir
  // var tanggal_lahir = req.body.tanggal_lahir
  // var agama_id = req.body.agama_id
  // var jenis_kelamin = req.body.jenis_kelamin
  // var gelar = req.body.gelar
  // var jabatan = req.body.jabatan
  // var alamat = req.body.alamat
  // var nomor_telp = req.body.nomor_telp

  // var addDataGuru = `INSERT INTO data_guru (nama_lengkap, NIP, tempat_lahir,
  // tanggal_lahir, agama_id, jenis_kelamin, gelar, jabatan,
  // alamat, nomor_telp, password) VALUES ("${nama_lengkap}", "${NIP}", "${tempat_lahir}", "${tanggal_lahir}",
  // "${agama_id}", "${jenis_kelamin}", "${gelar}", "${jabatan}", "${alamat}", "${nomor_telp}", "${NIP}")`
  // db.query(addDataGuru, (err, result) => 
  // {
  //   if (err) throw err
  //   else res.status(200).send('1')
  // })
})

app.post('/EditDataGuru')

app.post('/HapusDataGuru')

app.get('/ListGuru', (req, res) => 
{
  var DataGuru = `SELECT data_guru.id, data_guru.nama_lengkap, data_guru.NIP, data_guru.tempat_lahir, data_guru.tanggal_lahir,
  master_agama.agama, data_guru.jenis_kelamin, data_guru.gelar, data_guru.jabatan,
  data_guru.alamat, data_guru.nomor_telp FROM data_guru JOIN master_agama ON data_guru.agama=master_agama.id`;
  db.query(DataGuru, (err, result) => 
  {
    if (err) throw err
    else res.status(200).send(result);
  })
})

// ================================================== CRUD DATA MATERI ==================================================

app.post('/TambahMateri')

app.post('/EditMateri')

app.post('/HapusMateri')

app.get('/ListMateri', (req, res) => {
  var DataMateri = `SELECT * FROM master_materi`
  db.query(DataMateri, (err, result) => {
    if (err) throw err
    else res.status(200).send(result);
  })
})

// ================================================== CRUD DATA SUBMATERI ==================================================

app.post('/TambahSubMateri')

app.post('/EditSubMateri')

app.post('/HapusSubMateri')

app.get('/ListSubMateri', (req, res) => {
  var DataSubMateri = `SELECT * FROM submateri`
  db.query(DataSubMateri, (err, result) => {
    if (err) throw err
    else res.status(200).send(result)
  })
})

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

// ========================================== PORT LISTEN TO 3001 ==========================================

app.listen(8080, (req, res) =>{
  console.log(`Server started ...`)
});


