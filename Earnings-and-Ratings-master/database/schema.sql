DROP DATABASE IF EXISTS invesTechSol_JB;

CREATE DATABASE invesTechSol_JB;

USE invesTechSol_JB;

DROP TABLE IF EXISTS rater;
DROP TABLE IF EXISTS rating;
DROP TABLE IF EXISTS company;

CREATE TABLE rater (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE rating (
  id INT NOT NULL AUTO_INCREMENT,
  raterId INT NOT NULL,
  companyId INT NOT NULL,
  rating VARCHAR(255) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE company (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  estimated VARCHAR(1000) NOT NULL,
  actual VARCHAR(1000) NOT NULL,
  best_summary VARCHAR(5000) NOT NULL,
  sell_summary VARCHAR(5000) NOT NULL,
  PRIMARY KEY (id)
);

