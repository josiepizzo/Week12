//INITIALIZES THE NPM PACKAGES USED//
var mysql=require('mysql');
var inquirer=require('inquirer');

//INITIALIZES THE CONNECTION VARIABLE TO SYNC WITH A MYSQL DATABASE//
var connection=mysql.createConnection({
  host:"localhost",
  port: 3306,
  user:"root", //Your username//
  password:" " , //Your password//
  database:"Bamazon"})

//CREATES THE CONNECTION WITH THE SERVER AND MAKES THE TABLE UPON SUCCESSFUL CONNECTION//
connection.connect(function(err){
  if(err){
    console.error("error connecting: "+err.stack);}
  makeTable();})
//Get the products from the database and print the results to the console.//
var makeTable=function(){
  //Selects the data from the mysql products table.//
  connection.query('SELECT * From products', function(err,res){
    if(err)throw err;
    // prints the table
    var tab="\t";
    console.log("ItemID\tProduct Name\tDepartment Name\tPrice\t# In Stock");
    console.log("----------------------------");

    //for loop that goes through the table and prints each row on a new line//
        for(var i=0;i<res.length;i++){
      console.log(res[i].ItemID+tab+res[i].ProductName+tab+res[i].DepartmentName+tab+res[i].Price+tab+res[i].StockQuantity);
    }
    console.log("----------------------------------");

    //RUNS THE CUSTOMER'S PROMPTS AFTER CREATING THE TABLE.//
    //Sends res so the  promptCustomer function is able to search through the data//
    promptCustomer(res);})}

  //FUNCTION CONTAINING ALL CUSTOMER PROMPTS//
var promptCustomer=function(res){
  //Prompts user - What they would like to buy//
  inquirer.prompt([
    {type:'input',
    name:'choice',
    message:'What would you like to purchase? [Quit with Q]'}]).then(function(val){
    //Set the VAR correct=false to make sure the user input is a valid product name.//
    var correct=false;
    //Loops through the table to check that the product they want exists//
    for(var i=0;i<res.length;i++){
      //IF THE PRODUCT EXISTS, SAVE THE DATA FOR SAID PRODUCT WITHIN THE product AND id VARIABLES//
      if(res[i].ProductName==val.choice){
        var correct=true;
        var product=val.choice;
        var id=i;
        //Prompts the user how many would they lik to buy?//
        inquirer.prompt([
          {type:'input',
          name:'quant',
          message:"How many would you like to buy?"}]).then(function(val){
          //CHECKS TO SEE IF THE AMOUNT REQUESTED IS LESS THAN THE AMOUNT THAT IS AVAILABLE//
          if((res[id].StockQuantity-val.quant)>0){
            //REMOVES THE AMOUNT REQUESTED FROM THE MYSQL TABLE//
            connection.query("UPDATE products SET StockQuantity='"+(res[id].StockQuantity-val.quant)+"' WHERE ProductName='"+product+"'", function(err, res2){
              if(err)throw err;
              //Tells the user the prouduct has been purchased.//
              console.log("PRODUCT BOUGHT!");
              //REWRITES THE TABLE AND STARTS AGAIN//
              makeTable();})}

          //IF THE AMOUNT REQUESTED WAS GREATER THAN THE AMOUNT AVAILABLE, RESTARTS PROMPTS//
          else{
            console.log("NOT A VALID SELECTION!");
            promptCustomer(res);}})}
      //IF THE USER INPUTTED Q, EXIT PROGRAM//
      if(val.choice=="Q"||val.choice=="q"){process.exit()}}
    //IF THE PRODUCT REQUESTED DOES NOT EXIST, RESTARTS PROMPTS//
    if(i==res.length&&correct==false){
      console.log("NOT A VALID SELECTION");
      promptCustomer(res);}
    })}