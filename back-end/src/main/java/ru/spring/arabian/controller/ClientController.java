package ru.spring.arabian.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import ru.spring.arabian.model.Client;
import ru.spring.arabian.service.ClientService;

import java.util.List;


@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("system")
public class ClientController {
    private final ClientService clientService;

    @Autowired
    public ClientController(ClientService clientService) {
        this.clientService = clientService;
    }

    @GetMapping("clients")
    public List<Client> getClients() {
        return clientService.getClients();
    }

    @GetMapping("client")
    public Client getClient(@RequestParam Long id) {
        return clientService.getClient(id);
    }

    @PostMapping("clients")
    public Client save(@RequestBody Client client) {
        return clientService.save(client);
    }
}
