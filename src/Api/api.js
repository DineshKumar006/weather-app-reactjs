import axios from 'axios';

export const geocode= async (url)=>{
    // const url='http://api.mapbox.com/geocoding/v5/mapbox.places/'+this.props.address+'.json?access_token=pk.eyJ1IjoiZGluZXNoa3VtYXI1IiwiYSI6ImNrOW1jbmIwZzAzNHUzZW1rOTJnd2dzNWkifQ.yEkvbcD_jRKO_j4dvtXDnQ&limit=1'
  console.log(url)
    const response  =await axios.get(url).then(res=>{

        const modifiedData={
                   latitude:res.data.features[0].center[1],
                   longlitude:res.data.features[0].center[0]
               }
               return modifiedData
         })
    
    // console.log(response)
    return response
};


export const fetchReport=async (url)=>{
   
    //  const url='http://api.weatherstack.com/forecast?access_key=a627a3fe73d0f03ab9f3e3ab9fbcfcb7&query='+lat+','+log+'&units=m&country=India'
   const response= await axios.get(url).then(response=>{
       console.log(response)
        const modifiedData={    
                temperature: response.data.current.temperature,
                weather_descriptions:response.data.current.weather_descriptions[0],
                location:response.data.location.name,
                region:response.data.location.region,
                country:response.data.location.country,
                weather_icons:response.data.current.weather_icons[0]
            }
        return modifiedData 
   });
    
  return response;
}


