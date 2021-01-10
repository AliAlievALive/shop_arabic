package ru.spring.arabian.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;
import ru.spring.arabian.service.ClientService;
import ru.spring.arabian.service.ProductService;


@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class ProductController {
    private final ProductService productService;

    @Autowired
    public ProductController(ProductService productService) {
        this.productService = productService;
    }
}
