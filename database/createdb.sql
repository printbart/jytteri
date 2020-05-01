CREATE TABLE Users (
    user_id SERIAL NOT NULL,
    username VARCHAR(16) NOT NULL UNIQUE,
    PRIMARY KEY (user_id)
);

CREATE TABLE Events (
    eventID SERIAL NOT NULL,
    eventName VARCHAR(31),
    locationID TEXT,
    locationName VARCHAR(31),
    locationAddress VARCHAR(255),
    longitude DOUBLE,
    latitude DOUBLE
);