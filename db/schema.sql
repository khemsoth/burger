create database burgers_db;

use burgers_db;

create table burger (
  id int not null auto_increment,
  burger_name varchar(40) not null,
  devoured boolean not null default 0,
  primary key(id)
)