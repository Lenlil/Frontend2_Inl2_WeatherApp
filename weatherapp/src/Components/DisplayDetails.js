import React, {Component} from 'react';

export default class DisplayDetails extends React.Component{

  render()
  {  

      return(<React.Fragment>      
            <h1>{this.props.fivedayforecast.name}</h1>   
            <p></p>    
      
      </React.Fragment>);
  }

  
}