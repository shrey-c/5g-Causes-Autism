package com.songweather.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.songweather.entity.Song;

// mechanism for encapsulation of resources collection of objects
@Repository
public interface SongRepository extends JpaRepository<Song,Long>{
	
//	Optional<Song> findByWeather(String weather);
	

}

