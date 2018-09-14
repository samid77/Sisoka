const express = require('express');
const router = express.Router();
const db = require('../../dbconfig/mysqlconnect');

/**
 * @route GET api/kelas/test
 * @desc Test Kelas Route
 * @access Public
 */

router.get('/test', (req, res) => {
    res.json({msg: 'Kelas route success'});
})

/**
 * @route POST api/kelas/TambahKelas
 * @desc Tambah Data Kelas
 * @access Public
 */

router.post('/TambahKelas', (req, res) => {

})

/**
 * @route POST api/kelas/EditKelas
 * @desc Edit Data Kelas
 * @access Public
 */

router.post('/EditKelas', (req, res) => {

})

/**
 * @route POST api/kelas/HapusKelas
 * @desc Hapus Data Kelas
 * @access Public
 */

router.post('/HapusKelas', (req, res) => {

})

/**
 * @route GET api/kelas/ListNamaKelas
 * @desc List Data Nama Kelas
 * @access Public
 */

router.get('/ListNamaKelas', (req, res) => {
  var DataNamKelas = `SELECT * FROM nama_kelas`
  db.query(DataNamKelas, (err, result) => {
    if (err) throw err
    else res.status(200).send(result)
  })
})

module.exports = router;