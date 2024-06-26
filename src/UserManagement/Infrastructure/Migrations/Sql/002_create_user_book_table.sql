CREATE TABLE IF NOT EXISTS UserBook (
    id INT NOT NULL AUTO_INCREMENT,
    idBook VARCHAR(500) NOT NULL,
    idUser INT NOT NULL,
    state INT NOT NULL,
    bookName VARCHAR(500) NOT NULL,
    authorName VARCHAR(500) NOT NULL,
    imageUrl VARCHAR(500) NOT NULL,
    initialDate DATE,
    finishDate DATE,
    notes TEXT,
    reaction VARCHAR(500),
    PRIMARY KEY (id),
    UNIQUE KEY id_UNIQUE (id),
    KEY id_idx (idUser),
    CONSTRAINT id FOREIGN KEY (idUser) REFERENCES Users (id) ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT unique_book_user UNIQUE (idBook, idUser)
);