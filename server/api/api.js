/**
 * Created by brand on 1/12/2017.
 */
const express = require('express')

const fakeDb = require('../fakeDb')

// ROUTES FOR OUR API
// =============================================================================
const router = express.Router()              // get an instance of the express Router

router.get('/experience', (req, res) => {
  setTimeout(() => {
    res.status(200).json(fakeDb.experience)
  }, 300)
})

module.exports = router
