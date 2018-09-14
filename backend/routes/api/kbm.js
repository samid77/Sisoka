const express = require('express');
const router = express.Router();

/**
 * @route GET api/kbm/testkbm
 * @desc Test KBM Route
 * @access Public
 */

router.get('/testkbm', (req, res) => {
    res.json({msg: 'KBM route success'});
})

/**
 * @route POST api/kbm/TambahKBM
 * @desc Tambah Data KBM
 * @access Public
 */

router.post('/TambahKBM', (req, res) => {
    
})

/**
 * @route POST api/kbm/EditKBM
 * @desc Edit Data KBM
 * @access Public
 */

router.post('/EditKBM', (req, res) => {
    
})

/**
 * @route POST api/kbm/HapusKBM
 * @desc Hapus Data KBM
 * @access Public
 */

router.post('/HapusKBM', (req, res) => {
    
})

/**
 * @route POST api/kbm/ListKBM
 * @desc List Data KBM
 * @access Public
 */

router.get('/ListKBM', (req, res) => {
    
})

module.exports = router;