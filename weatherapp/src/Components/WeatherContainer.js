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
            dayforecastinfo: [],                     
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

                this.setState({todayweatherinfo: data})   
                    
            })
            .catch(error => alert("Something went wrong."))                  
        
               
            const urlfivedays = "https://api.openweathermap.org/data/2.5/forecast?q=" + searchvalue + "&units=metric&appid=" + apiKey;
    
            fetch(urlfivedays)
            .then(response => response.json())
            .then(data => {
    
                const filteredarray = (data.list.filter(info => info.dt_txt.includes("12:00:00")));            
                        
                this.setState({dayforecastinfo: filteredarray})                               
                         
            })  
            .catch(error => alert("No city matches your search, try again."))  
         
    }
    

    render = () => {       

        return(<React.Fragment>

            <SearchCity search = {this.search}/>
            <DisplayWeather todaysweather = {this.state.todayweatherinfo}/>            
            <DisplayDetails fivedayforecast = {this.state.dayforecastinfo}/> 
           
        </React.Fragment>)

    }    

}

