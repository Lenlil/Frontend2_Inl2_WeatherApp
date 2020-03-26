import React, {Component} from 'react';

export default class DisplayError extends React.Component{   

    render ()
    {              
        return (<React.Fragment>                            
                <p>Någonting gick fel, försök igen.</p>                             
                <img src="../Images/sadcloud.png" ></img>                                                   
          </React.Fragment> );
    }
}    
