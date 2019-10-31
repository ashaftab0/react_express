import React from 'react';

import './TableList.css';

const tableList = (props) => {
    return (
        props.show ?  (
            <div>
                <div className="Tablelist_header">Existing Cards</div>
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Card Number</th>
                                <th>Balance</th>
                                <th>Limit</th>
                            </tr>
                        </thead>
                        <tbody>
                            {props.allCreditCardInfo.map((eachCreditCardInfooo, index) => {
                                return(
                                    <tr key={index}>
                                        <td>{eachCreditCardInfooo.name}</td>
                                        <td>{eachCreditCardInfooo.cardNumber}</td>
                                        <td>0</td>
                                        <td>{eachCreditCardInfooo.limit}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>    
            </div> 
        ) : null
    )
}

export default tableList