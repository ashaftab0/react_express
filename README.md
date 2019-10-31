Go to the 'credit_card_provider', project directory and run the command
### npm install


Run the backend server
### node server.js
and server will be start running on port:5000 [http://localhost:5000] 
Open [http://localhost:5000/getAll] to view JSON data in the browser.
OR can be views in the console too.
But need to refresh the page after every addition of entity.

The data will be retained until, manually restart the server


### `npm start`
Start the project: [ Open different terminal ]
Open [http://localhost:3000] to view it in the browser.

The page will reload if you make edits.<br />


### `npm test`
Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.


### Validation: Guideline
1. Cheking all three input fields (name, cardNumber and limit) should not be empty.
2. Checking if cardNumber is also having more than 10 charcaters.
3. Checking if cardNumber satisfy Luhn validation example=`4111111111111111`
3. Checking Limit is non-negative.