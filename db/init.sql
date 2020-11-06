CREATE TABLE products ( id SERIAL PRIMARY KEY, name VARCHAR(25), price INTEGER, img TEXT) 

INSERT INTO products(name, price, img) VALUES 
('product 1', 100, 'image1'),
('product 2', 200, 'image2'),
('product 3', 300, 'image3');