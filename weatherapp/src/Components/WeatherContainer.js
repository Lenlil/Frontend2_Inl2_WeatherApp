import React, {Component} from 'react';
import SearchCity from './SearchCity';
import DisplayWeather from './DisplayWeather';
import DisplayDetails from './DisplayDetails';

const apiKey ="3836d64ecc391e20540496330ccded06";

export default class WeatherContainer extends React.Component{

    constructor(props)
    {
        super(props);

        this.state = {                                           
            weatherinfo: {},
            forecastresult: {}
        };
    }

    componentDidMount = () => {

        this.search("Stockholm");

    }
 
    search = (searchvalue) => {

        const url = "https://api.openweathermap.org/data/2.5/weather?q=" + searchvalue + "&units=metric&appid=" + apiKey;

        fetch(url)
        .then(response => response.json())
        .then(data => {
            let {weather, main, name} = data;
            this.setState({weatherinfo: data})          
        });     
        
        const urlfivedays = "https://api.openweathermap.org/data/2.5/forecast?q=" + searchvalue + "&units=metric&appid=" + apiKey;

        fetch(url)
        .then(response => response.json())
        .then(data => {                      
            this.setState({forecastresult: data})          
        });     
        
    }

    render = () => {

        return(<React.Fragment>

            <SearchCity search = {this.search}/>
            <DisplayWeather todaysweather = {this.state.weatherinfo}/>
            
            <DisplayDetails fivedayforecast = {this.state.forecastresult}/> 
        </React.Fragment>)

    }    

}

