import React, { Component } from 'react';
import Form from './From';
import * as Api from '../Api/api';
// import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './style.css'
class Geocode extends Component {

  constructor(props){
    super(props);
    this.state={
      address:'',
      lat:'',
      log:'',
      temperature: '',
      weather_descriptions:'',
      location:'',
      region:'',
      country:'',
      weather_icons:'',
      date:new Date().toDateString()
    }
  }

  submitHandler=async (e)=>{
    e.preventDefault();
    console.log(e.target.elements.location.value);
    this.setState({
      address:e.target.elements.location.value
    })

  const url='http://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(e.target.elements.location.value)+'.json?access_token=pk.eyJ1IjoiZGluZXNoa3VtYXI1IiwiYSI6ImNrOW1jbmIwZzAzNHUzZW1rOTJnd2dzNWkifQ.yEkvbcD_jRKO_j4dvtXDnQ&limit=1'

    await Api.geocode(url).then(res=>{
      console.log(res)

      this.setState({
        lat:res.latitude,
        log:res.longlitude
      })
    });

  
  const lat=this.state.lat;
  const log=this.state.log;
  const weatherUrl='http://api.weatherstack.com/forecast?access_key=a627a3fe73d0f03ab9f3e3ab9fbcfcb7&query='+lat+','+log+''

    await Api.fetchReport(weatherUrl).then(res=>{
      console.log(res)
      this.setState({
          temperature:res.temperature,
          location:res.location,
          country:res.country,
          region:res.region,
          weather_descriptions:res.weather_descriptions,
          weather_icons:res.weather_icons

      })
    })

  } 

  render(){
    

    return(
      <div>
      {/* <Form submitHandler={this.submitHandler}/> */}
        
      <div>
      {/* {this.state.temperature} */}

      <img src={this.state.weather_icons} alt='Icon'/>
      </div>
         

<div className='container'>


      <Card className='head' item xs={9} md={3} >
      <CardActionArea className='cardhead'>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" className='cardarea'>
            Weather Report
          </Typography>
          <Typography gutterBottom variant="body2"  variant="h7" component="h2">
                {this.state.date}
          </Typography>


          {this.state.temperature?
            <Typography color="textSecondary" component="p" >
            Today's temperature is {this.state.temperature} degree celcius and it will be {this.state.weather_descriptions} 
          </Typography>
          :null}
          

        </CardContent>
                <ul>
                  <li>
                  <CardContent>
        <Typography component='h2' variant="h7">
           Location : {this.state.location?this.state.location:'Loading....' },
            
              Country:{this.state.country?this.state.country:'Loading....'}
          </Typography>

        </CardContent>
                  </li>

                  <li>
                  <CardContent>
          <Typography component='h2' variant="h7">
              temperature : {this.state.temperature?this.state.temperature+' °C':'Loading....' }
          </Typography>
         
        </CardContent>

                  </li>

                  <li>
                  <CardContent>
        <Typography component='h2' variant="h7">
              Region : {this.state.region?this.state.region:'Loading....' }
          </Typography>

        </CardContent>
                  </li>

                  <li>
                  <CardContent>
        <Typography component='h2' variant="h7">
              weather_descriptions : {this.state.weather_descriptions?this.state.weather_descriptions:'Loading....' }
          </Typography>

        </CardContent>

                  </li>

           

                  <li>
                  <CardContent>
        <Typography component='h2' variant="h7">
              Latitude : {this.state.lat?this.state.lat:'Loading....' }
          </Typography>

        </CardContent>

                  </li>

                 

                  <li>
                  <CardContent>
        <Typography component='h2' variant="h7">
              Longitude : {this.state.log?this.state.log:'Loading....' }
          </Typography>

        </CardContent>

                  </li>

                 
                </ul>
       
      </CardActionArea>
      <CardActions>
      <Form submitHandler={this.submitHandler}/>
      </CardActions>
    </Card>
      
    </div>
      </div>
    )
  }
}

export default Geocode