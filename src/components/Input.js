import React from 'react';

let Input = props =>{
    return(
        <div className="field">
            <div className="control">
                <input className={props.className} type={props.type} placeholder={props.placeholder} value={props.value} onChange={props.onChange} disabled={props.disabled} />
            </div>
        </div>
    );
}

export default Input;