package ru.spring.arabian.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import ru.spring.arabian.model.Product;

@RepositoryRestResource
public interface ProductRepository extends JpaRepository<Product, Long> {
}
