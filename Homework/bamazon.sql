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
-- Creates new rows containing data in all named columns --
INSERT INTO products (ProductName,DepartmentName,Price,StockQuantity)
VALUES ("Blue Dress","Womens","10.00",100);

INSERT INTO products (ProductName,DepartmentName,Price,StockQuantity)
VALUES ("Red Dress","Womens","20.00",100);

INSERT INTO products (ProductName,DepartmentName,Price,StockQuantity)
VALUES ("Yellow Dress","Womens","15.00",100);

INSERT INTO products (ProductName,DepartmentName,Price,StockQuantity)
VALUES ("Purple Dress","Womens","10.00",100);

INSERT INTO products (ProductName,DepartmentName,Price,StockQuantity)
VALUES ("Green Dress","Womens","20.00",100);

INSERT INTO products (ProductName,DepartmentName,Price,StockQuantity)
VALUES ("Blue Shirt","Mens","10.00",100);

INSERT INTO products (ProductName,DepartmentName,Price,StockQuantity)
VALUES ("Red Shirt","Mens","20.00",100);

INSERT INTO products (ProductName,DepartmentName,Price,StockQuantity)
VALUES ("Yellow Shirt","Mens","15.00",100);

INSERT INTO products (ProductName,DepartmentName,Price,StockQuantity)
VALUES ("Purple Shirt","Mens","10.00",100);

INSERT INTO products (ProductName,DepartmentName,Price,StockQuantity)
VALUES ("Green Shirt","Mens","20.00",100);



-- Updates the row where the column name is Blue Dress --
UPDATE products
SET ProductName="Blue Dress", DepartmentName="Womens", Price=15.00
WHERE ItemID=1;

SELECT * FROM products;