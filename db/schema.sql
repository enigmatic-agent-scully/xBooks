use tad4ddcz4ajrk6xe;

CREATE TABLE library (
id int auto_increment not null,
title varchar(200),
author varchar(200),
genres varchar(100),
isbn int(9),
coverimg varchar(300),
pubdate datetime,
createdAt TIMESTAMP NOT NULL,
primary key(id)
);