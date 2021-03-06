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


export const fetchReport= (url)=>{
   
    //  const url='http://api.weatherstack.com/forecast?access_key=a627a3fe73d0f03ab9f3e3ab9fbcfcb7&query='+lat+','+log+'&units=m&country=India'
   const response=  axios.get(url).then(response=>{
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



export const weatherReport=async(address)=>{
//    const data= await axios.get('http://localhost:7000/weatherReport?address='+address+'').then(res=>{
    const data= await axios.get('https://weather-app-backendv2.herokuapp.com/weatherReport?address='+address+'').then(res=>{

        return res
    })

    return data;

}


export const fetchCountries=async()=>{
    const countriesName= await axios.get('https://weather-app-backendv2.herokuapp.com/counties/name').then(res=>{
        return res
   });

   return countriesName
}