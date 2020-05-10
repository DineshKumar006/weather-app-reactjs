
const request=require('request');



const countriesName=async(callback)=>{

const url='https://restcountries.eu/rest/v2/all';

request({url:url,json:true},(error,res)=>{

    if(error){
      return  callback('Error',undefined);
    } 
    return callback(undefined,res.body);
})}


module.exports=countriesName;