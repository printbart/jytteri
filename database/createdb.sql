CREATE TABLE Users (
    user_id SERIAL NOT NULL,
    username VARCHAR(16) NOT NULL UNIQUE,
    PRIMARY KEY (user_id)
);