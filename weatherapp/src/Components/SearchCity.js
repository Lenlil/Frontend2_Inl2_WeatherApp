import React, {Component} from 'react';

export default class SearchCity extends React.Component{

    render()
    {
        return(<React.Fragment>
            <h3>Mata in en stad</h3>
            <input type="text" ref = {val => this.searchtext = val}/>
            <button onClick = {() => this.props.search(this.searchtext.value)}>Sök></button>
        </React.Fragment>);
    }


}