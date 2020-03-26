import React, {Component} from 'react';
import Forecast from './Forecast';

export default class DisplayDetails extends React.Component{

  render()
  {  
    let dailyForecast = (this.props.fivedayforecast && this.props.fivedayforecast.list && this.props.fivedayforecast.list.map(data => {
      return(<Forecast dayforecast = {data} />)
    }));

    return(<React.Fragment>
        {dailyForecast}      
    </React.Fragment>);    
  }  
}