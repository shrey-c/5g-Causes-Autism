package com.telstra.service;

import java.util.List;

import org.springframework.stereotype.Service;
import com.telstra.entity.ServiceEntity;
import com.telstra.error.RegisteredEndpointsNotFoundException;

@Service
public interface service_1 {

	public ServiceEntity saveservice(ServiceEntity service);

	public ServiceEntity fetchRegisteredEndpointsById(String serviceEndpointsId) throws RegisteredEndpointsNotFoundException;

	public List<ServiceEntity> fetchregisteredservicesList();

	//public ServiceEntity fetchoptimalserviceendpoint(String region);

}
