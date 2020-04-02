import React, {Component} from 'react';
import M from 'materialize-css';

let today = new Date();

export default class DisplayWeather extends React.Component{   

    render ()
    {      
        //Jag behöver ha nedan för värdet för todaysweather.weather är undefined när appen startas, och den ska bara gå in i den om värdet finns. 
         let imgurl = "https://openweathermap.org/img/wn/" + (this.props.todaysweather.weather && this.props.todaysweather.weather.map(a => a.icon))  + "@2x.png";

        return (<React.Fragment>     
            <div class="container">
                <div class="section">
                    <div class="row">                  
                        <div class="col s12 m12 12">
                            <div class="icon-block"> 
                                <h3 class="center">{this.props.todaysweather.name}</h3>
                                <h2 class="center"><img src={imgurl}></img> </h2>
                                <p class="center">Date: {today.toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric'})}</p>
                                <p class="center">Time: {today.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})}</p>
                                <p class="center">Temperature: {this.props.todaysweather.main && this.props.todaysweather.main.temp} °C</p>                        
                            </div>
                        </div>                     
                    </div>
                </div>
            </div>                                                                    
          </React.Fragment> );
    }
}    
