package com.songweather.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity  //class is entity and map to table
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder

public class Song {
	
	@Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Long Id;
	
	private String Song;
	private String Artist;
    private String weather;
    
    public Song() {
		super();
		// TODO Auto-generated constructor stub
	}
	@Override
	public String toString() {
		return "Song [Id=" + Id + ", Song=" + Song + ",Artist=" + Artist + ", Weather=" + weather + "]";
	}
	public Song(Long id, String song, String artist, String weathe) {
		super();
		Id = id;
		Song = song;
		Artist= artist;
		weather = weathe;
	}
	public Long getId() {
		return Id;
	}
	public void setId(Long id) {
		Id = id;
	}
	
	public String getSong() {
		return Song;
	}
	public void setSong(String song) {
		Song = song;
	}
	public String getArtist() {
		return Artist;
	}
	public void setArtist(String artist) {
		Artist = artist;
	}
	public String getWeather() {
		return weather;
	}
	public void setWeather(String weathe) {
		weather = weathe;
	}
	

}
