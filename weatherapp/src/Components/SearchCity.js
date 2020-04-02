import React, {Component} from 'react';
import M from 'materialize-css';

export default class SearchCity extends React.Component{

    render()
    {
        return(<React.Fragment>
            <div class="container">
                <div class="section">
                    <div class="row">                  
                        <div class="col s12 m12 12">
                            <div class="icon-block"> 
                                <input class="center" type="text" ref = {val => this.searchtext = val} placeholder="Select city"/>
                                <div class="center-align">
                                    <button class="center" onClick = {() => this.props.search(this.searchtext.value)}>Search city</button>  
                                </div>                                                     
                            </div>
                        </div>                     
                    </div>
                </div>
            </div>                         
        </React.Fragment>);
    }


}