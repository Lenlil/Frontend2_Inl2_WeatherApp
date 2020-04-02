import React, {Component} from 'react';
import M from 'materialize-css';

export default class Forecast extends React.Component{

    render()
    { 
        let imgurl = "https://openweathermap.org/img/wn/" + (this.props.dayforecast.weather && this.props.dayforecast.weather.map(a => a.icon))  + "@2x.png";
        const date = new Date(this.props.dayforecast.dt_txt);

        return (<React.Fragment>    
            <div class="col s12 m2">
                <div class="icon-block"> 
                    <h5 class="center">{date.toLocaleDateString('en-GB', { weekday: 'long'})}</h5>
                    <h2 class="center"><img src={imgurl}></img> </h2>
                    <p class="center">Date: {date.toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric'})}</p>
                    <p class="center">Time: {date.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})}</p>
                    <p class="center">Mintemp: {this.props.dayforecast.main && this.props.dayforecast.main.temp_min} °C</p>
                    <p class="center">Maxtemp: {this.props.dayforecast.main && this.props.dayforecast.main.temp_max} °C</p>      
                </div>
            </div>                                                                                    
            </React.Fragment> );
        }
}

// <div class="container">
// <div class="section">
//   <div class="row">
//     <div class="col s12 m4">
//       <div class="icon-block">
//         <h2 class="center light-blue-text"><i class="material-icons">flash_on</i></h2>
//         <h5 class="center">Speeds up development</h5>

//         <p class="light">We did most of the heavy lifting for you to provide a default stylings that incorporate our custom components. Additionally, we refined animations and transitions to provide a smoother experience for developers.</p>
//       </div>
//     </div>   
//   </div>
// </div>
// </div>

