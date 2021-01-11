package ru.spring.arabian.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;
import org.springframework.http.HttpMethod;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import ru.spring.arabian.model.Client;
import ru.spring.arabian.model.Product;

import javax.persistence.EntityManager;
import javax.persistence.metamodel.EntityType;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;

@Configuration
public class ConfigureRepositoryRestConfiguration implements RepositoryRestConfigurer {

    private EntityManager entityManager;

    @Autowired
    public ConfigureRepositoryRestConfiguration(EntityManager entityManager) {
        this.entityManager = entityManager;
    }

    @Override
    public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config) {
        HttpMethod[] unsupported = {HttpMethod.GET, HttpMethod.DELETE, HttpMethod.POST, HttpMethod.PUT};
        disableHttpMethod(Client.class, config, unsupported);
        disableHttpMethod(Product.class, config, unsupported);
        exposeIds(config);
    }

    public void disableHttpMethod(Class thisClass, RepositoryRestConfiguration config, HttpMethod[] unsupportedMethod) {
        config.getExposureConfiguration()
                .forDomainType(thisClass)
                .withItemExposure(((metdata, httpMethods) -> httpMethods.disable(unsupportedMethod)))
                .withCollectionExposure(((metdata, httpMethods) -> httpMethods.disable(unsupportedMethod)));
    }

    public void exposeIds(RepositoryRestConfiguration config) {
        // - get a list of all entity from the entity manager
        Set<EntityType<?>> entities = entityManager.getMetamodel().getEntities();

        // - create an array of the entity types
        List<Class> entityClasses = new ArrayList<>();

        // - get the entity types for the entities
        for (EntityType tempEntityType : entities) {
            entityClasses.add(tempEntityType.getJavaType());
        }

        // - expose the entity ids for the array of entity/domain types
        Class[] domainTypes = entityClasses.toArray(new Class[0]);
        config.exposeIdsFor(domainTypes);
    }
}
