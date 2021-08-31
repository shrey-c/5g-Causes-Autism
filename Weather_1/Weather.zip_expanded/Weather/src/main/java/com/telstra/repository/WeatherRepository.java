package com.telstra.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.telstra.entity.Weather;

// mechanism for encapsulation of resources collection of objects
@Repository
public interface WeatherRepository extends JpaRepository<Weather,Long>{
	

}
