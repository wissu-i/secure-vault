create database secureVault;
use secureVault;

CREATE TABLE user (
		id INT AUTO_INCREMENT PRIMARY KEY,
        username VARCHAR(20) NOT NULL,
        email VARCHAR(50) NOT NULL UNIQUE,
        password varchar(225) NOT NULL,
        role ENUM('admin', 'user') DEFAULT 'user',
        time_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE notes(
	id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    title varchar(50),
    data TEXT NOT NULL,
     time_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    time_updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE current_timestamp,
    
    FOREIGN KEY (user_id) REFERENCES user(id) ON DELETE CASCADE
);