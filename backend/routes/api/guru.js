const express = require('express');
const router = express.Router();
const bcryptjs = require('bcryptjs')
const db = require('../../dbconfig/mysqlconnect');

/**
 * @route GET api/guru/testguru
 * @desc Test Guru Route
 * @access Public
 */

router.get('/testguru', (req, res) => {
  res.json({msg: 'Guru route success'});
})

/**
 * @route POST api/guru/TambahDataGuru
 * @desc Tambah Data Guru
 * @access Public
 */

router.post('/TambahDataGuru', (req, res) => {
  var nama_lengkap = req.body.nama_lengkap
  var NIP = req.body.NIP
  var tempat_lahir = req.body.tempat_lahir
  var tanggal_lahir = req.body.tanggal_lahir
  var agama_id = req.body.agama_id
  var jenis_kelamin = req.body.jenis_kelamin
  var gelar = req.body.gelar
  var jabatan = req.body.jabatan
  var alamat = req.body.alamat
  var nomor_telp = req.body.nomor_telp
 
  if (req.files)
  {
    var foto_guru = req.files.foto_guru
    var nama_foto = '../../assets/foto_guru/' + req.files.foto_guru.name

    foto_guru.mv(nama_foto, (err) => 
    {
      if (err) throw err
      else
      {
        var addDataGuru = `INSERT INTO data_guru (nama_lengkap, NIP, tempat_lahir,
        tanggal_lahir, agama_id, jenis_kelamin, gelar, jabatan,
        alamat, nomor_telp, password, foto) VALUES ("${nama_lengkap}", "${NIP}", "${tempat_lahir}", "${tanggal_lahir}",
        "${agama_id}", "${jenis_kelamin}", "${gelar}", "${jabatan}", "${alamat}", "${nomor_telp}", "${NIP}", "${nama_foto}")`
        db.query(addDataGuru, (err, result) => 
        {
          if (err) throw err
          else res.status(200).send('1')
        })
      }
    })
  }
})

/**
 * @route POST api/guru/EditDataGuru
 * @desc Edit Data Guru
 * @access Public
 */

router.post('/EditDataGuru', (req, res) => {
  var guru_id = req.body.guru_id

  var nama_lengkap = req.body.nama_lengkap
  var NIP = req.body.NIP
  var tempat_lahir = req.body.tempat_lahir
  var tanggal_lahir = req.body.tanggal_lahir
  var agama_id = req.body.agama_id
  var jenis_kelamin = req.body.jenis_kelamin
  var gelar = req.body.gelar
  var jabatan = req.body.jabatan
  var alamat = req.body.alamat
  var nomor_telp = req.body.nomor_telp
 
  if (req.files)
  {
    var foto_guru = req.files.foto_guru
    var nama_foto = '../../assets/foto_guru/' + req.files.foto_guru.name

    foto_guru.mv(nama_foto, (err) => 
    {
      if (err) throw err
      else
      {
        var addDataGuru = `UPDATE data_guru SET nama_lengkap=?, NIP=?, tempat_lahir=?,
        tanggal_lahir=?, agama_id=?, jenis_kelamin=?, gelar=?, jabatan=?,
        alamat=?, nomor_telp=?, foto=? WHERE guru_id="${guru_id}"`
        db.query(addDataGuru, [nama_lengkap, NIP, tempat_lahir, tanggal_lahir, agama_id,
        jenis_kelamin, gelar, jabatan, alamat, nomor_telp, nama_foto], (err, result) => 
        {
          if (err) throw err
          else res.status(200).send('1')
        })
      }
    })
  }
  else
  {
    var addDataGuru = `UPDATE data_guru SET nama_lengkap=?, NIP=?, tempat_lahir=?,
    tanggal_lahir=?, agama_id=?, jenis_kelamin=?, gelar=?, jabatan=?,
    alamat=?, nomor_telp=? WHERE guru_id="${guru_id}"`
    db.query(addDataGuru, [nama_lengkap, NIP, tempat_lahir, tanggal_lahir, agama_id,
    jenis_kelamin, gelar, jabatan, alamat, nomor_telp], (err, result) => 
    {
      if (err) throw err
      else res.status(200).send('1')
    })
  }
})

/**
 * @route POST api/guru/EditPasswordGuru
 * @desc Edit Password Guru
 * @access Public
 */

router.post('/EditPassGuru', (req, res) => {
  var guru_id = req.body.guru_id
  var password_lama = req.body.password_lama
  var password_baru = req.body.password_baru

  var checkPassGuru = `SELECT password FROM data_guru WHERE id="${guru_id}"`
  db.query(checkPassGuru, (err, result) => {
    if (err) throw err
    else
    {
      bcryptjs.compare(password_lama, result[0].password, (err, result) => {
        if (err) throw err
        else
        {
          if (result)
          {
            var updatePasswordGuru = `UPDATE data_guru SET password="${password_baru}"`
            db.query(updatePasswordGuru, (err, result) => {
              if (err) throw err
              else res.status(200).send('1')
            })
          }
          else
          {
            res.send('-1')
            // old_password incorect
          }
        }
      })
    }
  })
})

/**
 * @route POST api/guru/HapusDataGuru
 * @desc Hapus Data Guru
 * @access Public
 */
 
router.post('/HapusDataGuru', (req, res) => {

})

/**
 * @route POST api/guru/ListGuru
 * @desc List Data Guru
 * @access Public
 */

router.get('/ListGuru', (req, res) => {
  var DataGuru = `SELECT data_guru.id, data_guru.nama_lengkap, data_guru.NIP, master_materi.materi
  FROM data_guru
  JOIN pengajar_materi ON data_guru.id=pengajar_materi.guru_id
  JOIN master_materi ON pengajar_materi.materi_id=master_materi.id`;
  db.query(DataGuru, (err, result) => 
  {
    if (err) throw err
    else res.status(200).send(result);
  })
})

/**
 * @route POST api/guru/ListGuru/:guru_id
 * @desc Detail Data Guru
 * @access Public
 */

router.get('/ListGuru/:guru_id', (req, res) => {
  var guru_id = req.params.guru_id
  var DataGuru = `SELECT data_guru.nama_lengkap, data_guru.NIP,
  data_guru.tempat_lahir, data_guru.tanggal_lahir, master_agama.agama,
  data_guru.jenis_kelamin, data_guru.gelar, data_guru.jabatan,
  data_guru.alamat, data_guru.nomor_telp, master_materi.materi
  FROM data_guru
  JOIN master_agama ON data_guru.agama_id=master_agama.id
  JOIN pengajar_materi ON data_guru.id=pengajar_materi.guru_id
  JOIN master_materi ON pengajar_materi.materi_id=master_materi.id
  WHERE data_guru.id="${guru_id}"`;
  db.query(DataGuru, (err, result) => 
  {
    if (err) throw err
    else res.status(200).send(result);
  })
})

module.exports = router;