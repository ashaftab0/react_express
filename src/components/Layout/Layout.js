import React, {Component} from 'react';

import Aux from '../../hoc/Aux';
import FormElement from './FormElement/FormElement';
import TableList from './TableList/TableList';
import axios from 'axios';

const luhn = require("luhn");

class Layout extends Component {
    state = {
        allCreditCardInfo: [],
        show: false,
        erroMsg: false
    }

    addCreditCardHandler = (e) => {
        const addCreditCardInfo = [...this.state.allCreditCardInfo],
             currentInput = {
                name: document.querySelector('#name').value,
                cardNumber: document.querySelector('#cardNumber').value,
                limit: document.querySelector('#limit').value
            },
            isValid = this.validate(currentInput);
            
        if (isValid) {
            /// Adding Data [POST]
            axios.post('/add', currentInput)
                .then(response => {
                    addCreditCardInfo.push(response.data);
                    this.setLocalStorage(response.data);
                    this.setState({allCreditCardInfo: addCreditCardInfo, show: true});
                })
                .catch(error => {
                    console.log(error)
                })

            this.clearForm();
        }

        e.preventDefault();
    }

    clearForm = () => {
        document.querySelector('#name').value = '';
        document.querySelector('#limit').value = '';
        document.querySelector('#cardNumber').value = '';
    }

    validate = (currentData) => {
        const cardNumber = String(currentData.cardNumber);

        if (currentData.name === '' || currentData.cardNumber === '' || currentData.limit === '') {
            this.errorMsg = 'No field should be empty';
        } else if (cardNumber.length !== 16) {
            this.errorMsg = 'Card Number must be of 10 characters';
        } else if (!luhn.validate(cardNumber)) {
            this.errorMsg = 'Card Number must satisfy luhn algorithm';
        } else if (currentData.limit < 0) {
            this.errorMsg = 'Limit field can not be less than `0`';
        } else {
            this.setState({erroMsg: false});
            return true;
        }

        this.setState({erroMsg: true})
    }

    setLocalStorage = (data) => {
        this.addNewDataToLocalStorage(data.name, data.cardNumber, data.limit);
    }

    addNewDataToLocalStorage = (name, cardNumber, limit) => {
        let cardDetailList = [],
            cardDetail = {
                name: name,
                cardNumber: cardNumber,
                limit: limit
            };

        cardDetailList.push(cardDetail);
        cardDetailList = cardDetailList.concat(JSON.parse(localStorage.getItem('allCreditCardInfo')||'[]'));

        localStorage.setItem("allCreditCardInfo", JSON.stringify(cardDetailList));
    }

    componentDidMount() {
        const cardDetailList = JSON.parse(localStorage.getItem('allCreditCardInfo')||'[]');

        cardDetailList.reverse();

       if (cardDetailList.length > 0) {
           this.setState({allCreditCardInfo: cardDetailList, show: true});
       }

       /// Fetching Data [GET]
       axios.get('getAll')
        .then(response => {
            console.log('`getAll` request result ', response.data);
            //this.setState({allCreditCardInfo: res.data, show: true})
        })
        .catch(error => {
            console.log(error)
        })
    }

    componentWillMount() {
        const addCreditCardInfo = [...this.state.allCreditCardInfo];

        if (addCreditCardInfo.length === 1) {
            this.setState({ show: false })
        }
    }

    render() {
        return (
            <Aux>
                <main className="Content">
                    <FormElement
                        add={this.addCreditCardHandler}
                        change={(event) => this.handleChange(event)}
                        errorMessage={this.errorMsg}
                        erroMsg={this.state.erroMsg}>
                    </FormElement>
                    <TableList
                        allCreditCardInfo={this.state.allCreditCardInfo}
                        show={this.state.show}>
                    </TableList>
                </main>
            </Aux>
        )
    }
}

export default Layout