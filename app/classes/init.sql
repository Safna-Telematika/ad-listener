create role smart with PASSWORD 'B1sm1ll4h@24';
alter role smart with LOGIN superuser;
create database smart_db with owner smart;