import React, {Component} from 'react';

export default class Forecast extends React.Component{

    render()
    { 
        let imgurl = "https://openweathermap.org/img/wn/" + (this.props.dayforecast.weather && this.props.dayforecast.weather.map(a => a.icon))  + "@2x.png";
        const date = new Date(this.props.dayforecast.dt_txt);

        return (<React.Fragment>                       
                <h2>{date.toLocaleDateString('en-GB', { weekday: 'long'})}</h2>   
                <p>Datum: {date.toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric'})}</p>   
                <p>Tid: {date.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})}</p>             
                <p>Mintemp: {this.props.dayforecast.main && this.props.dayforecast.main.temp_min} °C</p>       
                <p>Maxtemp: {this.props.dayforecast.main && this.props.dayforecast.main.temp_max} °C</p>         
                <img src={imgurl} ></img>                                                   
            </React.Fragment> );
        }
}