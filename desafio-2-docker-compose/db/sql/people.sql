CREATE DATABASE IF NOT EXISTS desafio;

USE desafio;

CREATE TABLE IF NOT EXISTS people (
    id SERIAL,
    name VARCHAR(60) NOT NULL,

    PRIMARY KEY (id)
) ENGINE=INNODB;