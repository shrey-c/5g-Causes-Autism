package com.songweather.controller;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.slf4j.LoggerFactory;

import java.util.*;

import org.slf4j.Logger;

import com.songweather.entity.Song;
import com.songweather.error.*;
import com.songweather.service.*;
import com.songweather.repository.*;


@RestController
public class SongController {
	
	
	@Autowired
    private SongService songService;
	
	@Autowired
    SongRepository songrepo;
	
	private final Logger LOGGER = LoggerFactory.getLogger(SongController.class);
	
	//Post weather
	@PostMapping("/song")
	public Song saveSong(@RequestBody Song song){
		return  songService.saveSong(song);
		
	}
	
	// list of weather we are returning from service
    @GetMapping("/songs")
    public List<Song> fetchWeatherList(){
        return songService.fetchSongList();
    }
    
    //get weather by id
    @GetMapping("/Song/{id}")
    public Song fetchSongById(@PathVariable("id") Long Id) throws SongNotFoundException{
        return songService.fetchSongById(Id);
    }
    
    @GetMapping("/song/{weather}")
    public List<Song> getSongByWeather(@PathVariable("weather") String weather) throws SongNotFoundException{
    	List<Song> song= songrepo.findByWeather(weather);
//    	if(!song.isPresent())
//    	{
//    		throw new SongNotFoundException("Song Not Available");
//    	}
    	
    	return song;
        //return songService.fetchSongByWeather(Weather);
    }

}
