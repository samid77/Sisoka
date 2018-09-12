const express = require('express');
const router = express.Router();

/**
 * @route GET api/jenjang/test
 * @desc Test Jenjang Route
 * @access Public
 */

router.get('/test', (req, res) => {
    res.json({msg: 'Jenjang route success'});
})

/**
 * @route POST api/jenjang/TambahJenjang
 * @desc Tambah Data Jenjang
 * @access Public
 */

router.post('/TambahJenjang', (req, res) => {

})

/**
 * @route POST api/jenjang/EditJenjang
 * @desc Edit Data Jenjang
 * @access Public
 */

router.post('/EditJenjang', (req, res) => {

})

/**
 * @route POST api/jenjang/HapusJenjang
 * @desc Hapus Data Jenjang
 * @access Public
 */

router.post('/HapusJenjang', (req, res) => {

})

/**
 * @route GET api/jenjang/ListJenjang
 * @desc List Data Jenjang
 * @access Public
 */

router.get('/ListJenjang', (req, res) => {
    var DataJenjang = `SELECT * FROM master_jenjang`
    db.query(DataJenjang, (err, result) => {
        if (err) throw err
        else res.status(200).send(result)
    })
})

module.exports = router;