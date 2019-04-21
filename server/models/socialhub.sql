CREATE DATABASE IF NOT EXISTS SocialHub;

USE SocialHub;

CREATE TABLE IF NOT EXISTS USERTYPE(
	UT_ID tinyint unsigned PRIMARY KEY auto_increment,
    ROLENAME varchar(50) NOT NULL
);
CREATE TABLE IF NOT EXISTS FACULTY(
	F_ID tinyint unsigned PRIMARY KEY auto_increment,
    FNAME varchar(50) NOT NULL
);

CREATE TABLE IF NOT EXISTS MAJOR(
	M_ID tinyint unsigned PRIMARY KEY auto_increment,
    MNAME varchar(100) NOT NULL
);

CREATE TABLE IF NOT EXISTS CLASS(
	C_ID smallint unsigned PRIMARY KEY auto_increment,
    CNAME char(10) NOT NULL
);

CREATE TABLE IF NOT EXISTS STUDENT(
	ID char(10) NOT NULL PRIMARY KEY,
    UT_ID tinyint unsigned NOT NULL,
    F_ID tinyint unsigned NOT NULL,
    M_ID tinyint unsigned NOT NULL,
    C_ID smallint unsigned NOT NULL,
    FULLNAME varchar(100) NOT NULL,
    BIRTHDATE date NOT NULL,
    GENDER bool NOT NULL,
    ADDRESS varchar(200),
    PHONE varchar(12),
    EMAIL varchar(100),
    ACADEMIC_YEAR char(9),
    HASHPASSWORD varchar(60),
    FOREIGN KEY (UT_ID) REFERENCES USERTYPE(UT_ID),
    FOREIGN KEY (F_ID) REFERENCES FACULTY(F_ID),
    FOREIGN KEY (M_ID) REFERENCES MAJOR(M_ID),
    FOREIGN KEY (C_ID) REFERENCES CLASS(C_ID)
);

CREATE TABLE IF NOT EXISTS STUDENT_COMMUNITY(
	SC_ID int unsigned auto_increment PRIMARY KEY,
    ID char(10) not null,
    JOIN_YC_DATE date,
    JOIN_CP_DATE date,
    TITLE varchar(50),
    STATE enum('Pending','Accepted','Rejected') NOT NULL,
    FOREIGN KEY (ID) REFERENCES STUDENT(ID)
);

CREATE TABLE IF NOT EXISTS JOIN_YC(
	JYC_ID int unsigned auto_increment PRIMARY KEY,
    ID char(10) NOT NULL,
    SIGNED_DATE DATE NOT NULL,
    SIGNED_APPROVAL varchar(50) NOT NULL,
    STATE enum('Pending','Accepted','Rejected') NOT NULL,
    FOREIGN KEY (ID) REFERENCES STUDENT(ID)
);

CREATE TABLE IF NOT EXISTS YC_FEE(
	ID int unsigned auto_increment PRIMARY KEY,
    JYC_ID int unsigned,
    AMOUNT int,
    T_DATE date,
    FOREIGN KEY (JYC_ID) REFERENCES JOIN_YC(JYC_ID)
);

CREATE TABLE IF NOT EXISTS ADMINISTRATOR(
    USERNAME varchar(100) NOT NULL PRIMARY KEY,
    HASHPASSWORD varchar(60) NOT NULL,
    FULLNAME varchar(100) NOT NULL,
    EMAIL varchar(100),
    PHONE varchar(12)
);

CREATE TABLE IF NOT EXISTS ACTIVITY_TYPE(
    AT_ID tinyint unsigned auto_increment PRIMARY KEY,
    AT_NAME varchar(100) NOT NULL,
    AC_POINT float
);

CREATE TABLE IF NOT EXISTS ACTIVITY(
    A_ID int unsigned auto_increment PRIMARY KEY,
    ADMIN_ID varchar(100),
    AT_ID tinyint unsigned,
    A_NAME varchar(100) NOT NULL,
    STARTDATE date NOT NULL,
    ENDDATE date,
    FEE float,
    FOREIGN KEY (AT_ID) REFERENCES ACTIVITY_TYPE(AT_ID),
    FOREIGN KEY (ADMIN_ID) REFERENCES ADMINISTRATOR(USERNAME)
);

CREATE TABLE IF NOT EXISTS STUDENT_ACTIVITY(
    ST_UT_ID int unsigned auto_increment PRIMARY KEY,
    A_ID int unsigned NOT NULL,
    ID char(10) NOT NULL,
    STATE enum('Registered', 'Checked-in', 'Not-going'),
    FOREIGN KEY (ID) REFERENCES STUDENT(ID),
    FOREIGN KEY (A_ID) REFERENCES ACTIVITY(A_ID)
);

CREATE TABLE IF NOT EXISTS NOTI_MESSAGE(
    NM_ID int unsigned auto_increment PRIMARY KEY,
    NM_NAME varchar(100) NOT NULL,
    CONTENT varchar(255),
    A_ID int unsigned,
    ADMIN_ID varchar(100) NOT NULL,
    SENDER varchar(100),
    FOREIGN KEY (A_ID) REFERENCES ACTIVITY(A_ID),
    FOREIGN KEY (ADMIN_ID) REFERENCES ADMINISTRATOR(USERNAME)

);

CREATE TABLE IF NOT EXISTS STUDENT_NOTI(
    ST_NT_ID int unsigned PRIMARY KEY,
    NM_ID int unsigned NOT NULL,
    ID char(10),
    STATE enum('Sent','Received', 'Read'),
    FOREIGN KEY (NM_ID) REFERENCES NOTI_MESSAGE(NM_ID),
    FOREIGN KEY (ID) REFERENCES STUDENT(ID)
);

CREATE TABLE IF NOT EXISTS PARAMETER(
    P_ID int unsigned auto_increment PRIMARY KEY,
    P_NAME varchar(100) NOT NULL,
    P_VALUE float NOT NULL
);

-- INSERT SEED DATA
INSERT into ADMINISTRATOR(USERNAME, HASHPASSWORD, FULLNAME) values ("root", "root","default admin")