package com.telstra.service;


import java.util.List;
import java.util.Objects;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.telstra.error.RegisteredEndpointsNotFoundException;
import com.telstra.entity.ServiceEntity;

import com.telstra.repository.ServiceRepository;

@Service
public class ServiceImpl implements service_1{

	@Autowired
    private ServiceRepository serviceRepository;

	@Override
	public ServiceEntity saveservice(ServiceEntity service) {
		// TODO Auto-generated method stub
		return serviceRepository.save(service);
	}

	@Override
	public ServiceEntity fetchRegisteredEndpointsById(String serviceEndpointsId) throws RegisteredEndpointsNotFoundException{
		// TODO Auto-generated method stub
		Optional<ServiceEntity> service = serviceRepository.findById(serviceEndpointsId);

        if(!service.isPresent())
        {
            throw new RegisteredEndpointsNotFoundException("Sorry service not found");
        }
        return service.get();
		
	}

	@Override
	public List<ServiceEntity> fetchregisteredservicesList() {
		// TODO Auto-generated method stub
		return serviceRepository.findAll();
	}
	
	@Override
	public ServiceEntity updateService(String serviceId, ServiceEntity serviceentity) {
		// TODO Auto-generated method stub
		ServiceEntity serDB = serviceRepository.findById(serviceId).get();

		if (Objects.nonNull(serviceentity.getName_of_api()) && !"".equalsIgnoreCase((serviceentity.getName_of_api()))) {
			serDB.setName_of_api(serviceentity.getName_of_api());
		}
		
		if (Objects.nonNull(serviceentity.getName_of_service()) && !"".equalsIgnoreCase((serviceentity.getName_of_service()))) {
			serDB.setName_of_service(serviceentity.getName_of_service());
		}
		
		if (Objects.nonNull(serviceentity.getDescription()) && !"".equalsIgnoreCase((serviceentity.getDescription()))) {
			serDB.setDescription(serviceentity.getDescription());
		}
		
		if (Objects.nonNull(serviceentity.getRegion()) && !"".equalsIgnoreCase((serviceentity.getRegion()))) {
			serDB.setRegion(serviceentity.getRegion());
		}
		
		if (Objects.nonNull(serviceentity.getDirection()) && !"".equalsIgnoreCase((serviceentity.getDirection()))) {
			
			serDB.setDirection(serviceentity.getDirection());
		}
		
		if (Objects.nonNull(serviceentity.getHostname()) && !"".equalsIgnoreCase((serviceentity.getHostname()))) {
			serDB.setHostname(serviceentity.getHostname());
		}
		
		if (Objects.nonNull(serviceentity.getUri()) && !"".equalsIgnoreCase((serviceentity.getUri()))) {
			serDB.setUri(serviceentity.getUri());
		}
		
		if (Objects.nonNull(serviceentity.getMicroservice_name()) && !"".equalsIgnoreCase((serviceentity.getMicroservice_name()))) {
			serDB.setMicroservice_name(serviceentity.getMicroservice_name());
		}

		if (Objects.nonNull(serviceentity.getPort())) {
			serDB.setPort(serviceentity.getPort());
		}

		return serviceRepository.save(serDB);
	}

	@Override
	public void deleteServiceById(String serviceId) {
		// TODO Auto-generated method stub
		serviceRepository.deleteById(serviceId);
	}


	
	

}
