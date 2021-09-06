package com.songweather.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.songweather.entity.Song;

import java.util.*;
// mechanism for encapsulation of resources collection of objects
@Repository
public interface SongRepository extends JpaRepository<Song,Long>{
	
	//@Query("SELECT t FROM song t where t.weather = :weather")
	List<Song> findByWeather(String Weather);
	

}

