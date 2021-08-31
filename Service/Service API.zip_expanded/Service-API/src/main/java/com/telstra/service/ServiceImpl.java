package com.telstra.service;


import java.util.List;
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

	
	

}
