package com.songweather.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.songweather.entity.Song;
import com.songweather.error.SongNotFoundException;
import com.songweather.repository.SongRepository;

@Service
public class SongServiceImpl implements SongService{

	@Autowired
    private SongRepository songRepository;
	
	@Override
    public Song saveSong(Song song) {
        return songRepository.save(song);
    }
	
	@Override
	public List<Song> fetchSongList(){
        return songRepository.findAll();
    }
	
	@Override
    public Song fetchSongById(Long Id) throws SongNotFoundException {
        Optional<Song> song = songRepository.findById(Id);

        if(!song.isPresent())
        {
            throw new SongNotFoundException("Song Not Available");
        }
        return song.get();
    }
	
	//@Override
//    public Song fetchSongByWeather(String weather) throws SongNotFoundException {
//		//Song song =songRepository.findByWeather(weather);
//
////       if(!song.isEmpty()) 	
////        {
////            throw new SongNotFoundException("Weather Not Available");
////        }
//        return songRepository.findByWeather(weather);
//    }
//
}



