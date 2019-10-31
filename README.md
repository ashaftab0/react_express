### `npm install`
Go to the 'card_provider', project directory and run the command


### `node server.js`
Run the server and it will be start running on port:5000 [http://localhost:5000] <br />
Open [http://localhost:5000/getAll] to view JSON data in the browser.
OR can be view in the console too.<br />
But need to refresh the page after every addition of entity.<br />

The data will be retained until, manually restart the server


### `npm start`
Start the project: [ Open in the different terminal ]<br />
Open [http://localhost:3000] to view it in the browser.<br />

The page will reload if you make edits.<br />



### Validation: Guideline
1. Cheking all three input fields (name, cardNumber and limit) should not be empty.
2. Checking if cardNumber is also having more than 10 charcaters.
3. Checking if cardNumber satisfy Luhn validation example=`4111111111111111`
3. Checking Limit is non-negative.