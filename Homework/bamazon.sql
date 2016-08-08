CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products(
  ItemID INT AUTO_INCREMENT NOT NULL,
    ProductName VARCHAR(45) NOT NULL,
    DepartmentName VARCHAR(45) NOT NULL,
    Price DECIMAL(10,2) NOT NULL,
    StockQuantity INT(10) NOT NULL,
    primary key(ItemID)
);

select * from products;
-- Creates new rows containing data in all named columns --
INSERT INTO products (ProductName,DepartmentName,Price,StockQuantity)
VALUES  ("Blue Dress","Womens",10.00,100);
        ("Red Dress","Womens",20.00,100);
        ("Yellow Dress","Womens",15.00,100);
        ("Purple Dress","Womens",10.00,100);
        ("Green Dress","Womens",20.00,100);
        ("Blue Shirt","Mens",10.00,100);
        ("Red Shirt","Mens",20.00,100);
        ("Yellow Shirt","Mens",15.00,100);
        ("Purple Shirt","Mens",10.00,100);
        ("Green Shirt","Mens",20.00,100);