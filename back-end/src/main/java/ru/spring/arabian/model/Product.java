package ru.spring.arabian.model;

import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.util.Date;

@Entity(name = "product")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "name")
    private String Name;

    @Column(name = "price")
    private int price;

    @CreationTimestamp
    @Column(name = "created-date")
    private Date dataCreated;
}
