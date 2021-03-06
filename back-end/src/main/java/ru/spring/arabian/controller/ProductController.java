package ru.spring.arabian.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import ru.spring.arabian.model.Product;
import ru.spring.arabian.service.ProductService;

import java.util.List;
import java.util.UUID;


@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("products")
public class ProductController {
    private final ProductService productService;

    @Autowired
    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @GetMapping
    public List<Product> getProducts() {
        return productService.getProducts();
    }

    @GetMapping("{id}")
    public Product getProduct(@PathVariable UUID id) {
        return productService.getProduct(id);
    }

    @PostMapping
    public Product save(@RequestBody Product product) {
        return productService.save(product);
    }

    @PutMapping
    public Product update(@RequestBody Product product, @RequestParam UUID id) {
        product.setId(id);
        return productService.save(product);
    }

    @DeleteMapping
    public void delete(@RequestParam UUID id) {
        productService.delete(id);
    }
}
