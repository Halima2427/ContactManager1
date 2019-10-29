const express=require('express');
var mongoose=require('mongoose');
var bodyParser=require('body-parser');
var cors = require('cors');
const app=express();

var { contactapp }=require("./contactschema.js");

mongoose.Promise=global.Promise;
mongoose.connect('mongodb://vasanth:vasanth7788@ds157654.mlab.com:57654/zenclass');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.post('/postcontact',function (req,res) {
    res.header("Access-Control-Allow-Origin","*");
    console.log(req.body);
    var conData=req.body;

    var con=new contactapp(conData);
    con.save().then(function(data)
    {
        res.json({
            message:"Success"
        })
    }).catch(function(err){
        res.status(500).json({
            message:"Error"
        })
    })

    
});

 app.get('/getcontact',function(req,res)
 {
    res.header("Access-Control-Allow-Origin","*");
    contactapp.find().then(function(conData)
     {
         res.json(conData)
     }).catch(function(err){
         res.status(500).json(
             {
                 message:"Error"
             }
         )
     })
 });


 app.put('/updcontact/:id',function(req,res){
    
    contactapp.updateOne({_id:req.params.id},req.body).then(function(conData)
 {
     console.log(req.body);
          res.json({
         message:"updated"
     })
     
 }).catch(function(err)
 {
     console.log(err);
 })

 });

 app.delete('/delcontact/:id',function(req,res){
    contactapp.findByIdAndDelete({_id:req.params.id}).then(function(data){
        console.log(data);
        res.json(
            {
            message:"deleted"
        })
    }).catch(function(err)
    {
        console.log(err);
        res.json(
            {
            error:err
        })
    })

});

 app.listen(3000);  