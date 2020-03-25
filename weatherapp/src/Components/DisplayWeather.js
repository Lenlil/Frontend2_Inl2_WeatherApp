import React, {Component} from 'react';

export default class DisplayWeather extends React.Component{

    render ()
    {         
        return (<React.Fragment>            
                <h2>{this.props.todaysweather.name}</h2>    
                <p>{this.props.todaysweather.main.temp}</p>                   
          </React.Fragment> );
    }
}    
