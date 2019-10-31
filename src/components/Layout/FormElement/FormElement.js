import React from 'react';

import './FormElement.css';

const formElement = (props) => (
    <div>
        <div className="FormEle_header">Add</div>
        { props.erroMsg ?
            <div className="error">{props.errorMessage}</div>
            : null
        }
        <form id="credit-card-form" className="Form-group">
            <div className="row">
                <label htmlFor="name">Name</label>
                <div className="col-75">
                    <input type="text" id="name" name="name"></input>
                </div>
            </div>
            <div className="row">
                <label htmlFor="cardNumber">Card Number</label>
                <div className="col-75">
                    <input type="number" id="cardNumber" name="cardNumber"></input>
                </div>
            </div>
            <div className="row">
                <label htmlFor="limit">Limit</label>
                <div className="col-75">
                    <input type="number" min="0" id="limit" name="limit"></input>
                </div>
            </div>
            <div className="row">
                <button type="button" onClick={props.add} value="Add">Add</button>
            </div>
        </form>
    </div>
)

export default formElement