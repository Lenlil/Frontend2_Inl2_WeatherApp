import React, {Component} from 'react';
import Forecast from './Forecast';

export default class DisplayDetails extends React.Component{

  render()
  {   
    const dailyForecast = (this.props.fivedayforecast.map(data => {
      return(<Forecast dayforecast = {data} />)
    }));

    return(<React.Fragment>
      <div className = "forecast">             
        {dailyForecast}              
      </div>           
    </React.Fragment>);    
  }  
}