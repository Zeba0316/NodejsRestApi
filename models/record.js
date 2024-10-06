const mongoose=require('mongoose');
const recordSchema =new mongoose.Schema(
    {
        createdAt:{type:Date,required:true},
        updatedAt:{type:Date,required:true},
        bodyTemperature:{type:Number,required:true},
        bloodPressure:
        {
            systolic:{type:Number,required:true},
            diastolic:{type:Number,required:true}
        },
        heartRate:{type:Number,required:true},
    }
    
)
const Record=mongoose.model('Record',recordSchema)
module.exports=Record;