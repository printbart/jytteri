CREATE TABLE Users (
    userID SERIAL NOT NULL,
    username VARCHAR(16) NOT NULL UNIQUE,
    PRIMARY KEY (userID)
);

CREATE TABLE Attend (
    userID INT NOT NULL,
    eventID INT NOT NULL
);

CREATE TABLE Events (
    eventID SERIAL NOT NULL UNIQUE,
    hostID INT NOT NULL UNIQUE,
    eventName VARCHAR(31),
    locationID TEXT,
    locationName VARCHAR(31),
    locationAddress VARCHAR(255),
    longitude DOUBLE,
    latitude DOUBLE
);