import React, {Component} from 'react';
import Forecast from './Forecast';
import M from 'materialize-css';

export default class DisplayDetails extends React.Component{

  render()
  {   
    const dailyForecast = (this.props.fivedayforecast.map(data => {
      return(<Forecast dayforecast = {data} />)
    }));

    return(<React.Fragment>         
          <div class="container">
            <div class="section">
                <div class="row">     
                  <div class="col s1 m1 l"></div>             
                      {dailyForecast}    
                  <div class="col s1 m1 l"></div>                  
                </div>
            </div>
          </div>         
    </React.Fragment>);    
  }  
}