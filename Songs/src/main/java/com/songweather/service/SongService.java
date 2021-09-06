package com.songweather.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.songweather.entity.Song;
import com.songweather.error.SongNotFoundException;

@Service
public interface SongService {

	public List<Song> saveSong(List<Song> Song);

	public List<Song> fetchSongList();

	public Song fetchSongById(Long id) throws SongNotFoundException;
	
	//public Song fetchSongByWeather(String weather) throws SongNotFoundException;

	public Song updateSong(Long songId, Song song);

	public void deleteSongById(Long songId);


}

