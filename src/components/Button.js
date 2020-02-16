import React from 'react';

let Button = props =>{
    return(
        <div className="columns is-mobile">
            <div className="column is-4 is-offset-4">
                <button className={props.className}>{props.text}</button>
            </div>
        </div>
    );
}

let ButtonDisabled = props =>{
    return(
        <div className="columns is-mobile">
            <div className="column is-4 is-offset-4">
                <button className="button is-link has-text-centered is-medium" disabled>{props.text}</button>
            </div>
        </div>
    );
}

export { Button, ButtonDisabled };