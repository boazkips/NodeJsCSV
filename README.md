## NodejsCSV
A comma separated value CLI app<br>
![NodeJs](https://github.com/Kay-raph/NodejsCSV/blob/master/66-667065_js-club-new-balance-png-logo-node-js.png)
### <u>How to install<u><br>
### Clone the repo
### Open 'terminal/cmd'
### cd into the repo while on the 'terminal/cmd'
### run node app.js

### LICENSE
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

  
  
  
  The goal is to get you to build a very small self-contained "real world" application to show off your skills at production quality code! You can write it in any language (though we'd prefer NodeJS, more details below) and it should only take an hour or two.

The Scenario
The client periodically generates a large CSV file containing a list of monetary debts, which they manually summarize and turn into a second CSV.

The input CSV should look like this:

Alex,Beatrice,101.32
Beatrice,Alex,1.20
Carl,Alex,45
Carl,Beatrice,12.50
Alex,Beatrice,19.22
Beatrice,Carl,67.90
Carl,Beatrice,12.80
Carl,Alex,15.88
Beatrice,Carl,71.42
Beatrice,Alex,4.54
Beatrice,Carl,28.76
The first line states that Alex owes Beatrice $101.32.

Currently, an intern is manually summarizing this data. If they used the above example, their result would look like this:

Alex,Beatrice,120.54
Beatrice,Alex,5.74
Beatrice,Carl,168.08
Carl,Alex,60.88
Carl,Beatrice,25.30
The client would like to automate this process, especially since these CSVs can get quite large!

Your job is to create a unix-friendly command line application that performs this summarizing efficiently and correctly.
