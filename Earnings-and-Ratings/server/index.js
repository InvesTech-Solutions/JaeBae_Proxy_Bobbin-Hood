const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('../database/db');
const faker = require('faker');

let port = 3036;
let app = express();

app.use(express.static(__dirname + '/../client/dist/'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use((req, res, next) => {
 res.header('Access-Control-Allow-Origin', '*');
 res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
 next();
});

app.get('/createExample', (req, res) => {
  // some constants

  let output;
  const quarters = ['Q4 2016', 'Q1 2017', 'Q2 2017', 'Q3 2017', 'Q4 2017', 'Q1 2018', 'Q2 2018'];
  const ratingState = ['Buy', 'Hold', 'Sell'];
  const callbackQuery = (err, results) => {
    if (err) {
      console.log ('error');
    }
  };
  // if database empty, create data
  db.query('SELECT * from company', (err, data) => {
    if (err) {
      console.log(err);
    } else {
      if (data.length === 0) {
        // populate rater table
        for (let i = 0; i < 100; i++) {
          let param = [];
          param.push(`${faker.name.firstName()} ${faker.name.lastName()}`);
          let query = 'INSERT INTO rater (name) VALUES (?)';
          db.query(query, param, callbackQuery);
        }
        // populate company table
        // need company name, estimated price, actual price, best summary, worst summary
        for (let i = 0; i < 100; i ++) {
          let param = [];
          let val;
          let quartersEst = [];
          let quartersAct = [];
          param.push(faker.company.companyName());
          // estimated estimated array to be stored as [date, amount, ...] and turned JSON
          quarters.forEach((element) => {   
            if (val === undefined) {
              val = faker.finance.amount(.70, 2.00, 2, '$');
            } else {
              val = faker.finance.amount(Number(val.substring(1)) * 0.85, Number(val.substring(1)) * 1.15, 2, '$');
            }
            quartersEst.push(element);
            quartersEst.push(val);
          });
          param.push(JSON.stringify(quartersEst));

          // likewise for actual array
          quarters.forEach((element, index) => {
            val = faker.finance.amount(Number(quartersEst[index * 2 + 1].substring(1)) * 0.85, Number(quartersEst[index * 2 + 1].substring(1)) * 1.15, 2, '$');
            quartersAct.push(element);
            quartersAct.push(val);
          });
          param.push(JSON.stringify(quartersAct));
          param.push(faker.lorem.paragraphs(3));
          param.push(faker.lorem.paragraphs(3));
          // console.log(param);
          let query = 'INSERT INTO company (name, estimated, actual, best_summary, sell_summary) VALUES (?, ?, ?, ?, ?)';
          db.query(query, param, callbackQuery);
        };
        // get list of all companies in the database
        // and upon acquring, create rating table within the callback
        let companyList;
        let companyLength;
        let raterList;
        let raterLength;
        let selectedCompany;
        let selectedCompIndex;
        let selectedRater;
        let selectedRaterIndex;
        const companyQuery = 'SELECT name from company';
        const raterQuery = 'SELECT name from rater';

        // nested db.queries to get list of companies and raters, which will be used to create ratings table
        db.query(companyQuery, (err, data) => {
          if (err) {
            console.log(err);
          } else {
            companyList = data.map((element) => {
              return element.name;
            });
            companyLength = companyList.length - 1;

            db.query(raterQuery, (err, data) => {
              if (err) {
                console.log(err);
              } else {
                raterList = data.map((element) => {
                  return element.name;
                });
                raterLength = raterList.length - 1;

                // populate rating table
                // need raterId from rater, companyId from company, and rating
                for (let i = 0; i < 7000; i ++) {
                  let param = [];
                  let rating = ratingState[Math.floor(2.99 * Math.random())];
                  let query = 'INSERT INTO rating (raterId, companyId, rating) VALUE ((SELECT id FROM rater WHERE name = ? limit 1), (SELECT id FROM company WHERE name = ? limit 1), ?)';
                  selectedCompIndex = Math.round(companyLength * Math.random());
                  selectedCompany = companyList[selectedCompIndex];
                  selectedRaterIndex = Math.round(raterLength * Math.random());
                  selectedRater = raterList[selectedRaterIndex];
                  param = [selectedRater, selectedCompany, rating];
                  db.query(query, param, callbackQuery);
                }
              };
            });
          };
        });
        res.json('');
      } else {
        res.json('');
      }
    }
  });
});

app.get('/getExample', (req, res) => {
  // now organize data from database and send it back to the client;
  // need to provide
  let object = {};
  let companyList;
  let selected;
  let index;

  db.query('SELECT * from company', (err, data) => {
    if (err) {
      console.log(err);
    } else {
      index = Math.round(data.length * Math.random() - 1);
      selected = data[index];
      object.id = selected.id;
      object.name = selected.name;
      object.esimated = selected.estimated;
      object.actual = selected.actual;
      object.bestsummary = selected.best_summary;
      object.sellsummary = selected.sell_summary;

      // now get raters array [rating state, rating state]
      db.query('select rating from rating where companyId = ?', [object.id], (err, data) => {
        if (err) {
          console.log(err);
        } else {
          object.raters = data.map((element) => {
            return element.rating;
          });
          res.json(object);
        }
      });
    }
  });
});

app.listen(port, function() {
	console.log(`listening on port ${port}`);
});