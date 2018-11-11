CREATE DATABASE IF NOT EXISTS   burgers_db;
USE edkvx7sku7lu76iw;

CREATE TABLE burgers (
    id int NOT NULL AUTO_INCREMENT,
    burger_name varchar(255) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);
