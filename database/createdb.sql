CREATE TABLE Users (
    userID SERIAL NOT NULL UNIQUE,
    username VARCHAR(16) NOT NULL UNIQUE,
    firstname VARCHAR(15),
    lastname VARCHAR(15),
    orgname VARCHAR(31),
    password VARCHAR(255) NOT NULL,
    PRIMARY KEY (userID)
);

CREATE TABLE Attend (
    userID BIGINT UNSIGNED NOT NULL UNIQUE,
    eventID BIGINT UNSIGNED NOT NULL,
    FOREIGN KEY (eventID) REFERENCES Events(eventID)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
    FOREIGN KEY (userID) REFERENCES Users(userID)
    ON DELETE CASCADE
    ON UPDATE CASCADE
);

CREATE TABLE Events (
    eventID SERIAL NOT NULL UNIQUE,
    hostID INT NOT NULL,
    eventName VARCHAR(31),
    locationID TEXT,
    locationName VARCHAR(63),
    locationAddress VARCHAR(255),
    longitude DOUBLE,
    latitude DOUBLE,
    startDate BIGINT NOT NULL,
    endDate BIGINT NOT NULL
);