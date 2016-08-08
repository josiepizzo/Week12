//INITIALIZES THE NPM PACKAGES USED//
var mysql=require('mysql');
var inquirer=require('inquirer');

//INITIALIZES THE CONNECTION VARIABLE TO SYNC WITH A MYSQL DATABASE//
var connection=mysql.createConnection({
  host:"localhost",
  port: 3306,
  user:"root", //Your username//
  password:" ", //Your password//
  database:"Bamazon"})

//CREATES THE CONNECTION WITH THE SERVER AND MAKES THE TABLE UPON SUCCESSFUL CONNECTION//
connection.connect(function(err){
  if(err){
    console.error("error connecting: "+err.stack);}
  makeTable();})
//Get the products from the database and print the results to the console.
var makeTable=function(){
  //Selects the data from the mysql products table.
  connection.query('SELECT * From products', function(err,res){
    if (err)throw err;
    // prints the table
    var table="/t";
    console.log("ItemID\tProduct Name\tDepartment Name\tPrice\t# In Stock");

  })





}