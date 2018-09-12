const express = require('express');
const router = express.Router();

/**
 * @route GET api/Materi/test
 * @desc Test Materi route
 * @access Public
 */

 router.get('/test', (req, res) => {
     res.json({msg: 'Materi route success'});
 })

/**
 * @route POST api/Materi/TambahMateri
 * @desc Tambah data materi
 * @access Public
 */

router.post('/TambahMateri', (req, res) => {

})

/**
 * @route POST api/Materi/EditMateri
 * @desc Edit data materi
 * @access Public
 */

router.post('/EditMateri', (req, res) => {

})


/**
 * @route POST api/Materi/HapusMateri
 * @desc Hapus data materi
 * @access Public
 */

router.post('/HapusMateri', (req, res) => {

})


/**
 * @route GET api/Materi/ListMateri
 * @desc List data materi
 * @access Public
 */

router.get('/ListMateri', (req, res) => {
  var DataMateri = `SELECT * FROM master_materi`
  db.query(DataMateri, (err, result) => {
    if (err) throw err
    else res.status(200).send(result);
  })
})

/**
 * @route POST api/Materi/TambahSubMateri
 * @desc Tambah data sub-materi
 * @access Public
 */

router.post('/TambahSubMateri', (req, res) => {

})

/**
 * @route POST api/Materi/EditSubMateri
 * @desc Edit data sub-materi
 * @access Public
 */

router.post('/EditSubMateri', (req, res) => {

})

/**
 * @route POST api/Materi/HapusSubMateri
 * @desc Hapus data sub-materi
 * @access Public
 */

router.post('/HapusSubMateri', (req, res) => {

})

/**
 * @route POST api/Materi/ListSubMateri
 * @desc List data sub-materi
 * @access Public
 */

router.get('/ListSubMateri', (req, res) => {
  var DataSubMateri = `SELECT * FROM submateri`
  db.query(DataSubMateri, (err, result) => {
    if (err) throw err
    else res.status(200).send(result)
  })
})

 module.exports = router;