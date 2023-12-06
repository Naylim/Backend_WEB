const express = require('express');
const router = express.Router();

// Import the controller functions
const {
  createDonador,
  getDonadores,
  getDonador,
  updateDonador,
  deleteDonador
} = require('../controladores/donadorCtrl');

router.post('/', createDonador);
router.get('/', getDonadores);
router.get('/:id', getDonador);
router.put('/:id', updateDonador);
router.delete('/:id', deleteDonador);

module.exports = router;
