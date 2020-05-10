const request=require('request');


const weatherFetch=(lat,log,callback)=>{
   weatherUrl='http://api.weatherstack.com/forecast?access_key=a627a3fe73d0f03ab9f3e3ab9fbcfcb7&query='+lat+','+log+''

   request({url:weatherUrl,json:true},(error,response)=>{
       if(error){
           return callback('Error, something went wrong',undefined);
       }
       const modifiedData={
        latitude:lat,
        longlitude:log, 
        temperature: response.body.current.temperature,
        weather_descriptions:response.body.current.weather_descriptions[0],
        location:response.body.location.name,
        region:response.body.location.region,
        country:response.body.location.country,
        weather_icons:response.body.current.weather_icons[0]
    }
    return callback(undefined,modifiedData)

   })

}

module.exports=weatherFetch;