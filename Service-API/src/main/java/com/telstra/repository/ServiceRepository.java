package com.telstra.repository;

import org.springframework.stereotype.Repository;

//import com.songweather.entity.Song;
import com.telstra.entity.ServiceEntity;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

@Repository
public interface ServiceRepository extends JpaRepository<ServiceEntity,String>{


	//public ServiceEntity fetchoptimalserviceendpoint(String region);
	List<ServiceEntity> findByDirection(String direction);
}
