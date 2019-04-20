CREATE USER 'khoahuynh'@'localhost' IDENTIFIED  BY 'socialhub';
CREATE USER 'manhhung'@'localhost' IDENTIFIED  BY 'socialhub';
CREATE USER 'hongha'@'localhost' IDENTIFIED  BY 'socialhub';
CREATE USER 'phamduy'@'localhost' IDENTIFIED  BY 'socialhub';
CREATE USER 'xuanphu'@'localhost' IDENTIFIED  BY 'socialhub';

GRANT ALL PRIVILEGES ON SocialHub.* TO 'khoahuynh'@'localhost';
GRANT ALL PRIVILEGES ON SocialHub.* TO 'manhhung'@'localhost';
GRANT ALL PRIVILEGES ON SocialHub.* TO 'hongha'@'localhost';
GRANT ALL PRIVILEGES ON SocialHub.* TO 'phamduy'@'localhost';
GRANT ALL PRIVILEGES ON SocialHub.* TO 'xuanphu'@'localhost';

flush PRIVILEGES;
