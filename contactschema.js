var mongoose=require('mongoose');
var contactapp=mongoose.model('Contactapp',{
    Name:{type:String},
    Phone:{type:Number},
    Email:{type:String}
    
});
module.exports={ contactapp };
