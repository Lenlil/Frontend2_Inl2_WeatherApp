import React, {Component} from 'react';

export default class SearchCity extends React.Component{

    render()
    {
        return(<React.Fragment>            
            <input type="text" ref = {val => this.searchtext = val} placeholder="Välj stad"/>
            <button onClick = {() => this.props.search(this.searchtext.value)}>Sök stad</button>
        </React.Fragment>);
    }


}