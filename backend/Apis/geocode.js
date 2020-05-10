const request=require('request');


const weatherData= (address,callback)=>{
    const url='http://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+'.json?access_token=pk.eyJ1IjoiZGluZXNoa3VtYXI1IiwiYSI6ImNrOW1jbmIwZzAzNHUzZW1rOTJnd2dzNWkifQ.yEkvbcD_jRKO_j4dvtXDnQ&limit=1'
    request({url:url,json:true}, (error,res)=>{

        if(error){
            return callback('Error something went wrong',undefined)
        }

        const modifiedData={
            latitude:res.body.features[0].center[1],
            longlitude:res.body.features[0].center[0]
        }
        return callback(undefined,modifiedData)
    })
}   
module.exports=weatherData



