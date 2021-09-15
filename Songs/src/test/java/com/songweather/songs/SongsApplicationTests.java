package com.songweather.songs;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import java.util.List;

import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestMethodOrder;
import org.junit.jupiter.api.MethodOrderer.OrderAnnotation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.songweather.entity.Song;
import com.songweather.repository.SongRepository;


@SpringBootTest
@TestMethodOrder(OrderAnnotation.class)
class SongsApplicationTests {

	@Autowired
	SongRepository sRepo;
	
	@Test
	@Order(1)
	public void testCreate () {
		Song w = new Song();
		w.setId(15L);
		w.setArtist("Tame Impala");
		w.setSong("The Less I Know The Better");
		w.setWeather("Rainy");
		assertNotNull(sRepo.findById(15L).get());
	}
		
	@Test
	@Order(2)
	public void testReadAll () {
		List list = sRepo.findAll();
		assertThat(list).size().isGreaterThan(0);
	}
		
	@Test
	@Order(3)
	public void testRead () {
		Song Song = sRepo.findById(15L).get();
		assertEquals("Moonsoon", Song.getWeather());
	}
		
	@Test
	@Order(4)
	public void testUpdate () {
		Song w = sRepo.findById(15L).get();
		w.setSong("Borderline");
		sRepo.save(w);
		assertNotEquals("The Less I Know The Better", sRepo.findById(15L).get().getSong());
	}
		
	@Test
	@Order(5)
	public void testDelete () {
		sRepo.deleteById(15L);
		assertThat(sRepo.existsById(15L)).isFalse();
	}


}