package ru.spring.arabian.model;

import org.hibernate.annotations.CreationTimestamp;
import ru.spring.arabian.model.enums.Gender;

import javax.persistence.*;
import java.util.Date;

@Entity(name = "client")
public class Client {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "fullname")
    private String fullName;

    @Column(name = "gender")
    private Gender gender;

    @Column(name = "phone-number")
    private String phone;

    @Column(name = "age")
    private String age;

    @Column(name = "address")
    private String address;

    @CreationTimestamp
    @Column(name = "created_date")
    private Date dateCreated;

    @Column(name = "visit_date")
    private Date dateLastVisit;

}
