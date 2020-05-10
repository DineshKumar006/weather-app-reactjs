import React, { Component } from 'react';
import Form from './From';
import * as Api from '../Api/api';
// import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import './style.css'

import Loader from './Loader';

class WeatherReport extends Component {
    state={
      address:'',
      lat:'',
      log:'',
      temperature: '',
      weather_descriptions:'',
      location:'',
      region:'',
      country:'',
      weather_icons:'',
      date:new Date().toDateString(),
      flag:false
    }
  


    ReportData=()=>{
        Api.weatherReport(this.state.address).then(res=>{
            // console.log(res)
            this.setState({
               lat:res.data.getdata.latitude,
               log:res.data.getdata.longlitude,
                temperature:res.data.getdata.temperature,
                location:res.data.getdata.location,
                country:res.data.getdata.country,
                region:res.data.getdata.region,
                weather_descriptions:res.data.getdata.weather_descriptions,
                weather_icons:res.data.getdata.weather_icons,
                flag:false
      
            })
          })
      }

  submitHandler=async (e)=>{
      this.setState({flag:true});
    e.preventDefault();
    console.log(e.target.elements.location.value);
    this.setState({
      address:e.target.elements.location.value
    })
    setTimeout(() => {
        this.ReportData();
    }, 100);
  } 

  

  changeHandler=(event)=>{
    this.setState({flag:true});
    console.log(event.target.value)

    this.setState({
        address:event.target.value
    })

    setTimeout(() => {
       this.ReportData(); 
    }, 100);
}

  render(){
    
let cardData=(
    <div>


    <Card className='head'  >
    <CardActionArea className='cardhead'>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2" className='cardarea'>
          Weather Report
        </Typography>

        <Typography gutterBottom variant="body2"  variant="h6" component="h2">
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
      <Typography component='h2' variant="h6">
         Location : {this.state.location?this.state.location:'Loading....' },
          
        </Typography>

      </CardContent>
                </li>

                <li>
                <CardContent>
      <Typography component='h2' variant="h6">
      Country:{this.state.country?this.state.country:'Loading....'}

        </Typography>

      </CardContent>
                </li>
                <li>
                <CardContent>
        <Typography component='h2' variant="h6">
            temperature : {this.state.temperature?this.state.temperature+' °C':'Loading....' }
        </Typography>
       
      </CardContent>

                </li>

                <li>
                <CardContent>
      <Typography component='h2' variant="h6">
            Region : {this.state.region?this.state.region:'Loading....' }
        </Typography>

      </CardContent>
                </li>

                <li>
                <CardContent>
      <Typography component='h2' variant="h6">
            weather_descriptions : {this.state.weather_descriptions?this.state.weather_descriptions:'Loading....' }
        </Typography>

      </CardContent>

                </li>

         

                <li>
                <CardContent>
      <Typography component='h2' variant="h6">
            Latitude : {this.state.lat?this.state.lat:'Loading....' }
        </Typography>

      </CardContent>

                </li>

               

                <li>
                <CardContent>
      <Typography component='h2' variant="h6">
            Longitude : {this.state.log?this.state.log:'Loading....' }
        </Typography>

      </CardContent>

                </li>

               {/*  */}
              </ul>

             
     
    </CardActionArea>
    <CardActions>
      
    </CardActions>

  </Card>

  <hr></hr>
  <Form submitHandler={this.submitHandler} changeHandler={this.changeHandler}/>
</div>

)

    return(
    <div>
            <div>
            <img src={this.state.weather_icons} alt='Icon'/>
            </div>
        
            <div className='container'>
            {this.state.flag?<Loader/>: cardData}
            {/* {cardData} */}
   
            </div>
      </div>
    )
  }
}

export default WeatherReport