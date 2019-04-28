select * from SocialHub.Faculty;

select * from SocialHub.Major;

SELECT * from SocialHub.Class;

select * from SocialHub.USERTYPE;

select * from SocialHub.ACTIVITY_TYPE;

select * from SocialHub.ADMINISTRATOR;

SELECT * FROM SocialHub.STUDENT;

SELECT * FROM SocialHub.STUDENT where id like "16DH110%" ORder by ID;

use SocialHub;
SELECT * FROM STUDENT s inner join MAJOR m on s.M_ID = m.M_ID;

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'khoa0319';
flush privileges;