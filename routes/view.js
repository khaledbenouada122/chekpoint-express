const express= require('express')
const router = express.Router()
const path = require('path')

const authMiddelware = (req,res,next)=>{
    let date = new Date()
    let day = date .getDay()
    let houres = date .getHours()
        console.log(day,houres)
        if((day>1 && day<6)&&(hours>9 && hours <17)){
            res.sendFile(path.join(__dirname,'../','public','home.html'))
            next();
        }else{
            res.sendFile(path.join(__dirname,'../','public','error.html'))
        }
    }
    router.get('/',authMiddelware, (req,res) => {
        res.sendFile(path.join(__dirname+'/public/home.html'))
      })
      router.get('/service',authMiddelware,(req,res)=>{
        res.sendFile(path.join(__dirname+'/public/Services.html'))
      })
      router.get('/contact',authMiddelware,(req,res)=>{
        res.sendFile(path.join(__dirname+'/public/contact.html'))
      })

      module.exports=router