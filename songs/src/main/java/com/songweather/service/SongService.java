package com.songweather.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.songweather.entity.Song;
import com.songweather.error.SongNotFoundException;

@Service
public interface SongService {

	public Song saveSong(Song Song);

	public List<Song> fetchSongList();

	public Song fetchSongById(Long id) throws SongNotFoundException;
	
	//public Song fetchSongByWeather(String weather) throws SongNotFoundException;


	
	


}

