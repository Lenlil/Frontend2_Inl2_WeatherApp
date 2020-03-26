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
            forecastinfo: {},                        
            todayweatherinfo: {}
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
            
            // let {weather, main, name} = data;
            this.setState({todayweatherinfo: data})   
                
        });     
        
        const urlfivedays = "https://api.openweathermap.org/data/2.5/forecast?q=" + searchvalue + "&units=metric&appid=" + apiKey;

        fetch(url)
        .then(response => response.json())
        .then(data => {  
            // data.list.filter(info => info.dt_txt.includes("12:00:00"));  
            //let {weather, main, name} = data.list;                  
            this.setState({forecastinfo: data.list})          
        });     
        
    }
    

    render = () => {

        return(<React.Fragment>

            <SearchCity search = {this.search}/>
            <DisplayWeather todaysweather = {this.state.todayweatherinfo}/>            
            <DisplayDetails fivedayforecast = {this.state.forecastinfo}/> 

        </React.Fragment>)

    }    

}

