import React, {Component} from 'react';

export default class CitySearchResult extends React.Component{

    render()
    {
        let list = this.props.result.map(person => {

            return(<li>{person.name}</li>);

        });

        return(<ul>{list}</ul>);
    }
}