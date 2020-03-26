import React, {Component} from 'react';

export default class Forecast extends React.Component{

render = () => {
 
    let imgurl = "https://openweathermap.org/img/wn/" + (this.props.dayforecast.weather && this.props.dayforecast.weather.map(a => a.icon))  + "@2x.png";
    let date = new Date(this.props.weather.dt_txt);

    return (<React.Fragment>            
            <h2>{this.props.dayforecast.name}</h2>   
            <p>Datum: {date.toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric'})}</p>   
            <p>Tid: {date.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})}</p>             
            <p>Temperatur: {this.props.dayforecast.main && this.props.dayforecast.main.temp} °C</p>                
            <img src={imgurl} ></img>                                                   
      </React.Fragment> );
    }
}