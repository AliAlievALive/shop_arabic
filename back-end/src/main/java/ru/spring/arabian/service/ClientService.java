package ru.spring.arabian.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ru.spring.arabian.dao.ClientRepository;
import ru.spring.arabian.model.Client;

import java.util.List;
import java.util.Optional;

@Service
public class ClientService {
    private final ClientRepository clientRepository;

    @Autowired
    public ClientService(ClientRepository clientRepository) {
        this.clientRepository = clientRepository;
    }

    public List<Client> getClients() {
        return clientRepository.findAll();
    }

    public Client getClient(Long id) {
        return clientRepository.findById(id).get();
    }

    public Client save(Client client) {
        return clientRepository.save(client);
    }
}
