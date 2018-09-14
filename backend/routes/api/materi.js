const express = require('express');
const router = express.Router();
const db = require('../../dbconfig/mysqlconnect');

/**
 * @route GET api/materi/testmateri
 * @desc Test Materi Route
 * @access Public
 */

router.get('/testmateri', (req, res) => {
  res.json({msg: 'Materi route success'});
})

/**
 * @route POST api/materi/TambahMateri
 * @desc Tambah Data Materi
 * @access Public
 */

router.post('/TambahMateri', (req, res) => {

})

/**
 * @route POST api/materi/EditMateri
 * @desc Edit Data Materi
 * @access Public
 */

router.post('/EditMateri', (req, res) => {

})

/**
 * @route POST api/materi/HapusMateri
 * @desc Hapus Data Materi
 * @access Public
 */

router.post('/HapusMateri', (req, res) => {

})

/**
 * @route GET api/materi/ListMateri
 * @desc List Data Materi
 * @access Public
 */

router.get('/ListMateri', (req, res) => {
  var DataMateri = `SELECT * FROM master_materi`
  db.query(DataMateri, (err, result) => {
    if (err) throw err
    else res.status(200).send(result);
  })
})

// ======================================================= SUB - MATERI =======================================================

/**
 * @route POST api/materi/TambahSubMateri
 * @desc Tambah Data Sub-materi
 * @access Public
 */

router.post('/TambahSubMateri', (req, res) => {

})

/**
 * @route POST api/materi/EditSubMateri
 * @desc Edit Data Sub-materi
 * @access Public
 */

router.post('/EditSubMateri', (req, res) => {

})

/**
 * @route POST api/materi/HapusSubMateri
 * @desc Hapus Data Sub-materi
 * @access Public
 */

router.post('/HapusSubMateri', (req, res) => {

})

/**
 * @route GET api/materi/ListSubMateri
 * @desc List Data Sub-materi
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