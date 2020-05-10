const express=require('express');
const cors=require('cors');
const geocode=require('./Apis/geocode');
const weatherFetch=require('./Apis/weatherFetch')

const app=express();


app.use(cors());
app.use(express.json())

const PORT=process.env.PORT || 7000;

app.get('/weatherReport',(req,res)=>{
    
    if(!req.query.address){
       return res.send({Error:'Provide the address'})
    }
    geocode(req.query.address,(error,data)=>{
         weatherFetch(data.latitude,data.longlitude,(error,getdata)=>{
         res.send({getdata})

        })
    })
});






app.listen(PORT,()=>{
    console.log('server is ruunign on port',PORT)
})