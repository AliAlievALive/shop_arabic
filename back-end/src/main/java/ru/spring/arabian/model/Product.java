package ru.spring.arabian.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.util.Date;
import java.util.UUID;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity(name = "product")
public class Product {
    @Id
    @Column(name = "id")
    @GeneratedValue(generator = "UUID")
    @GenericGenerator(
            name = "UUID",
            strategy = "org.hibernate.id.UUIDGenerator",
            parameters = {
                    @org.hibernate.annotations.Parameter(
                            name = "uuid_gen_strategy_class",
                            value = "org.hibernate.id.uuid.CustomVersionOneStrategy"
                    )
            }
    )
    private UUID id;

    @Column(name = "name")
    private String name;

    private double price;

    private int article;

    private int in_stock;

    @CreationTimestamp
    @Column(name = "created_date")
    private Date dateCreated;

    public Product(UUID id, String name, double price, int article, int in_stock) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.article = article;
        this.in_stock = in_stock;
        this.dateCreated = new Date();
    }
}
