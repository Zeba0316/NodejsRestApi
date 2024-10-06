const express = require("express");
const router = express.Router();
const controller=require("../controllers/controller")

// api to retrieve all data
router.get("/",controller.getAllData);

// api to create new data
router.post("/",controller.createData);

// api to update data   
router.put("/:id",controller.updateData);

// api to delete data
router.delete("/:id",controller.deleteData);

module.exports = router;