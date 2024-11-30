const express = require('express');
const mysql = require('mysql2/promise');
const port = 3000;


const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '1812',  
    database: 'school_management'
  });
  
 
//   db.connect((err) => {
//     if (err) {
//       console.error('Error connecting to the database:', err);
//       return;
//     }
//     console.log('Connected to MySQL database');
//   });


module.exports = db;  