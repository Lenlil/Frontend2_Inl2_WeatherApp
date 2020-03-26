import React, {Component} from 'react';

let today = new Date();

export default class DisplayWeather extends React.Component{   

    render ()
    {      
         let imgurl = "https://openweathermap.org/img/wn/" + (this.props.todaysweather.weather && this.props.todaysweather.weather.map(a => a.icon))  + "@2x.png";

        return (<React.Fragment>            
                <h2>{this.props.todaysweather.name}</h2>   
                <p>Datum: {today.toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric'})}</p>   
                <p>Tid: {today.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})}</p>             
                <p>Temperatur: {this.props.todaysweather.main && this.props.todaysweather.main.temp} °C</p>                
                <img src={imgurl} ></img>                                                   
          </React.Fragment> );
    }
}    
