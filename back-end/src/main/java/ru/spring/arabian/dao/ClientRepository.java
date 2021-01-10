package ru.spring.arabian.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import ru.spring.arabian.model.Client;

@Repository
public interface ClientRepository extends JpaRepository<Client, Long> {
}