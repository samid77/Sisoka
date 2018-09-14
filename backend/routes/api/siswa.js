const express = require('express');
const router = express.Router();
const db = require('../../dbconfig/mysqlconnect');

/**
 * @route GET api/siswa/testsiswa
 * @desc Test Siswa Route
 * @access Public
 */

router.get('/testsiswa', (req, res) => {
  res.json({msg: 'Siswa route success'});
})

/**
 * @route POST api/siswa/TambahDataSiswa
 * @desc Tambah Data Siswa
 * @access Public
 */

router.post('/TambahDataSiswa', (req, res) => {
  // var data = req.body.namasiswa

  // var inputDataSiswa = `INSERT INTO`
  // db.query(inputDataSiswa, (err, result) => {
  //   if (err) throw err
  //   else res.send('1')
  // })
})

/**
 * @route POST api/siswa/EditDataSiswa
 * @desc Edit Data Siswa
 * @access Public
 */

router.post('/EditDataSiswa', (req, res) => {

})

/**
 * @route POST api/siswa/HapusDataSiswa
 * @desc Hapus Data Siswa
 * @access Public
 */

router.post('/HapusDataSiswa', (req, res) => {

})

/**
 * @route GET api/siswa/ListSiswa
 * @desc List Data Siswa
 * @access Public
 */

router.get('/ListSiswa', (req, res) => {
  var DataSiswa = `SELECT * FROM data_siswa`;
  db.query(DataSiswa, (err, result) => {
    if(err) {
      throw err;
    } else {
      res.status(200).send(result);
    }
  })
})

module.exports = router;