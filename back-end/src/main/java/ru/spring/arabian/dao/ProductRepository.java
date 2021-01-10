package ru.spring.arabian.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import ru.spring.arabian.model.Product;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {
}
