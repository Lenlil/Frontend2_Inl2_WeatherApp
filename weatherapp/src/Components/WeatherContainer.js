import React, {Component} from 'react';
import SearchCity from './SearchCity';
import CitySearchResult from './CitySearchResult';
import DisplayWeather from './DisplayWeather';

const apiKey ="3836d64ecc391e20540496330ccded06";
const today = new Date();

export default class WeatherContainer extends React.Component{

    constructor(props)
    {
        super(props);

        this.state = {
            result: []
        };
    }

    displayWeather = () => {

        this.search("Stockholm");

    }
 
    search = (searchvalue) => {

        const url = "https://api.openweathermap.org/data/2.5/weather?q=" + searchvalue + "&units=metric&appid=" + apiKey;

        fetch(url)
        .then(response => response.json())
        .then(data => {

            this.setState({result: data.results})          
        });      
    }

    render = () => {

        return(<React.Fragment>

            <SearchCity search = {this.search}/>
            <CitySearchResult result = {this.state.result}/>

        </React.Fragment>)

    }

}

