package com.telstra.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.telstra.entity.ServiceEntity;
import com.telstra.error.RegisteredEndpointsNotFoundException;
import com.telstra.service.service_1;
import com.telstra.repository.*;

@RestController
@RequestMapping("ser")
public class ServiceController {
	
	@Autowired
    private service_1 ser;
	
	@Autowired
	ServiceRepository serepo;
	
	// save api will got to this url
    @PostMapping("/serviceendpoints")
    public ServiceEntity saveservice(@RequestBody ServiceEntity service){
        
        return ser.saveservice(service);
    }
    
    @GetMapping("/serviceendpoints/{Id}")
    public ServiceEntity fetchRegisteredEndpointsById(@PathVariable("Id") String serviceEndpointsId) throws RegisteredEndpointsNotFoundException {
        return ser.fetchRegisteredEndpointsById(serviceEndpointsId);
    }
    
 // list of registered services we are returning
    @GetMapping("/serviceendpoints")
    public List<ServiceEntity> fetchregisteredservicesList(){
        return ser.fetchregisteredservicesList();
    }
    
    // getting optimal service end point
//    @GetMapping("serviceendpoints/{region}")
//    public ServiceEntity fetchoptimalserviceendpoint(@PathVariable("region") String region){
//        return ser.fetchoptimalserviceendpoint(region);
//    }
    	@GetMapping("/serviceendpoint/{direction}")
    	public List<ServiceEntity> getSongByWeather(@PathVariable("direction") String direction) throws RegisteredEndpointsNotFoundException{
    	List<ServiceEntity> song= serepo.findByDirection(direction);
    	if (song.isEmpty())
   	{
    		throw new RegisteredEndpointsNotFoundException("Song Not Available");
   	}
    	
    	return song;
        //return songService.fetchSongByWeather(Weather);
    }

}
