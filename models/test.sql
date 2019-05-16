select * from SocialHub.Faculty;

select * from SocialHub.Major;

SELECT * from SocialHub.Class;

select * from SocialHub.USERTYPE;

select * from SocialHub.ACTIVITY_TYPE;
select * from SocialHub.ACTIVITY;

select * from SocialHub.NOTI_MESSAGE;

select * from SocialHub.ADMINISTRATOR;

SELECT * FROM SocialHub.STUDENT;

SELECT * FROM SocialHub.STUDENT where id like "16DH110%" ORder by ID;

use SocialHub;
SELECT * FROM STUDENT s inner join MAJOR m on s.M_ID = m.M_ID;

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'khoa0319';
flush privileges;
USE SOCIALHUB;

select * from student where id = "16DH110050";
-- update info không cần mã sinh viên vẫn success
delete from ACTIVITY;
insert into ACTIVITY (ADMIN_ID, AT_ID, A_NAME, CREATE_DATE, STARTDATE, ENDDATE, FEE) values ('root', 1, 'Zoomcast', '2019/02/07', '2018/11/04', '2019/07/27', 6920);
insert into ACTIVITY(ADMIN_ID, AT_ID,A_NAME,CREATE_DATE,STARTDATE,ENDDATE,FEE) value ('root',1,'test ac1', now(), null, null, 0);