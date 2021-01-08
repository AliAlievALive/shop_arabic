package ru.spring.arabian.model;

import ru.spring.arabian.model.enums.Gender;

import javax.xml.crypto.Data;

public class Client {
    private int id;
    private String fullName;
    private Gender gender;
    private String phone;
    private String age;
    private String address;
    private Data dataCreated;
    private Data lastIn;

}
