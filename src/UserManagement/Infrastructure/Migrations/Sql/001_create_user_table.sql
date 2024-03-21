CREATE TABLE IF NOT EXISTS Users (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    username VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    password VARCHAR(300) NOT NULL,
    birthday DATE NOT NULL,
    createDate DATE NOT NULL,
    PRIMARY KEY (id),
    UNIQUE KEY id_UNIQUE (id),
    UNIQUE KEY email_UNIQUE (email),
    UNIQUE KEY username_UNIQUE (username)
);
