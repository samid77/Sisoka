const express = require('express');
const router = express.Router();
const db = require('../../dbconfig/mysqlconnect');

/**
 * @route GET api/siswa/test
 * @desc Test siswa route
 * @access Public
 */

 router.get('/test', (req, res) => {
     res.json({msg: 'Siswa route success'});
 })

/**
 * @route GET api/siswa/TambahDataSiswa
 * @desc Tambah Data 
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
 * @desc Edit data siswa
 * @access Public
 */

router.post('/EditDataSiswa', (req, res) => {

})

/**
 * @route POST api/siswa/HapusDataSiswa
 * @desc Hapus data siswa
 * @access Public
 */

router.post('/HapusDataSiswa', (req, res) => {

})


/**
 * @route GET api/siswa/ListSiswa
 * @desc List data siswa
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