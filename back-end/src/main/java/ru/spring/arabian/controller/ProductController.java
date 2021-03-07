package ru.spring.arabian.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.ui.Model;
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
    public List<Product> viewProducts(
            @RequestParam(required = false) String filter,
            Model model,
            @PageableDefault(sort = {"id"}, direction = Sort.Direction.DESC) Pageable pageable
    ) {
        Page<Product> page;

        if (filter != null && !filter.isEmpty()) {
            page = productService.findAllByNameContaining(filter, pageable);
        } else {
            page = productService.findAll(pageable);
        }
        model.addAttribute("page", page);
        model.addAttribute("url", "/products");
        model.addAttribute("filter", filter);

        return page.getContent();
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
