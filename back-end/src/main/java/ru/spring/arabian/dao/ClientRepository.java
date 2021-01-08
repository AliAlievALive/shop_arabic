package ru.spring.arabian.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import ru.spring.arabian.model.Client;

@RepositoryRestResource
public interface ClientRepository extends JpaRepository<Client, Long> {
}
