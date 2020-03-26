import React, {Component} from 'react';
import SearchCity from './SearchCity';
import DisplayWeather from './DisplayWeather';
import DisplayDetails from './DisplayDetails';
import DisplayError from './DisplayError';

const apiKey ="3836d64ecc391e20540496330ccded06";
const error = false;

export default class WeatherContainer extends React.Component{

    constructor(props)
    {
        super(props);

        this.state = {                                    
            dayforecastinfo: [],                     
            todayweatherinfo: {}
        };
    }

    componentDidMount = () => {

        this.search("Stockholm");

    }
 
    search = (searchvalue) => {  

        try {
            const url = "https://api.openweathermap.org/data/2.5/weather?q=" + searchvalue + "&units=metric&appid=" + apiKey;

            fetch(url)
            .then(response => response.json())
            .then(data => {            
            
                this.setState({todayweatherinfo: data})   
                    
            });            
               
            const urlfivedays = "https://api.openweathermap.org/data/2.5/forecast?q=" + searchvalue + "&units=metric&appid=" + apiKey;
    
            fetch(urlfivedays)
            .then(response => response.json())
            .then(data => {
    
                const filteredarray = (data.list.filter(info => info.dt_txt.includes("12:00:00")));            
                        
                this.setState({dayforecastinfo: filteredarray})                               
                         
            });     
        }
        catch {
            error = true;        
        }        
        
    }
    

    render = () => {
        if(error)
        {
            return(<React.Fragment>
                <DisplayError />
            </React.Fragment>)
        }

        return(<React.Fragment>

            <SearchCity search = {this.search}/>
            <DisplayWeather todaysweather = {this.state.todayweatherinfo}/>            
            <DisplayDetails fivedayforecast = {this.state.dayforecastinfo}/> 
           
        </React.Fragment>)

    }    

}

