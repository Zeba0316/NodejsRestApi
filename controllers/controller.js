const Record=require("../models/record")

// retrieving all data
const getAllData=async(req,res)=>{
    try{
        const records=await Record.find()
        res.status(200).json(records)
    }catch(err){
        res.status(500).json(`error fetching the records: ${err}`)   
    }
}

// creating new data
const createData=async(req, res) => {
    const { createdAt, updatedAt, bodyTemperature, bloodPressure, heartRate } = req.body;
    try {
      const newRecord = new Record({
          createdAt:createdAt,  
          updatedAt:updatedAt,
          bodyTemperature:bodyTemperature,
          bloodPressure:bloodPressure,
          heartRate:heartRate
      });
      const savedRecord = await newRecord.save();
      res.status(200).json(savedRecord);
    } catch (err) {
      res.status(500).json(err);
    }
  };

// updating data
const updateData=async(req, res) => {
    try {
      const {  updatedAt, bodyTemperature, bloodPressure, heartRate } = req.body;
      const updateRecord = await Record.findByIdAndUpdate(
        req.params.id,
        {
          updatedAt:updatedAt,
          bodyTemperature:bodyTemperature,
          bloodPressure:bloodPressure,
          heartRate:heartRate},
      );
      if (!updateRecord) {
        return res.status(404).json({ message: "Health record not found" });
      }
      res.status(200).json(updateRecord);
    } catch (err) {
      res.status(400).json({ message: "Error updating health record", err });
    }
  };

// deleting data
const deleteData=async(req, res) => {
    try {
      const deletedRecord = await Record.findByIdAndDelete(req.params.id);
      if (!deletedRecord) {
        return res.status(404).json({ message: "Health record not found" });
      }
      res.status(200).json({ message: "Health record deleted successfully" });
    } catch (err) {
      res.status(400).json({ message: "Error deleting health record", err });
    }
  }

module.exports={getAllData,createData,updateData,deleteData}