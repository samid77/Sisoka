const express = require('express');
const router = express.Router();

/**
 * @route GET api/guru/test
 * @desc Test guru route
 * @access Public
 */

 router.get('/test', (req, res) => {
     res.json({msg: 'Guru route success'});
 })

/**
 * @route POST api/guru/TambahDataGuru
 * @desc Tambah data guru
 * @access Public
 */

 router.post('/TambahDataGuru', (req, res) => 
 {
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
 
   var addDataGuru = `INSERT INTO data_guru (nama_lengkap, NIP, tempat_lahir,
   tanggal_lahir, agama_id, jenis_kelamin, gelar, jabatan,
   alamat, nomor_telp, password) VALUES ("${nama_lengkap}", "${NIP}", "${tempat_lahir}", "${tanggal_lahir}",
   "${agama_id}", "${jenis_kelamin}", "${gelar}", "${jabatan}", "${alamat}", "${nomor_telp}", "${NIP}")`
   db.query(addDataGuru, (err, result) => 
   {
     if (err) throw err
     else res.status(200).send('1')
   })
 })
 
 /**
 * @route POST api/guru/EditDataGuru
 * @desc Edit data guru
 * @access Public
 */

 router.post('/EditDataGuru', (req, res) => {

 })

 /**
 * @route POST api/guru/HapusDataGuru
 * @desc Hapus data guru
 * @access Public
 */
 
 router.post('/HapusDataGuru', (req, res) => {

 })
 
 /**
 * @route POST api/guru/ListDataGuru
 * @desc List data guru
 * @access Public
 */

 router.get('/ListGuru', (req, res) => 
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


 
 module.exports = router;