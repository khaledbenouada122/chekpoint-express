const express =require('express')
const app = express()
app.use(express.static(__dirname+'/public'))
app.use(express.json())
app.use('/view' , require('./routes/view'))

app.listen(4800,(err)=>{
 if (err) throw err
 else{
    console.log(" the program is runing in port 4800")
 }
})
