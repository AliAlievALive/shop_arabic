package ru.spring.arabian.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ru.spring.arabian.dao.ClientRepository;

@Service
public class ProductService {
    private final ClientRepository clientRepository;

    @Autowired
    public ProductService(ClientRepository clientRepository) {
        this.clientRepository = clientRepository;
    }
}
