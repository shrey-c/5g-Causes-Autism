package com.telstra;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import java.util.List;

import org.junit.jupiter.api.MethodOrderer.OrderAnnotation;
import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestMethodOrder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.telstra.entity.Weather;
import com.telstra.repository.WeatherRepository;

@SpringBootTest
@TestMethodOrder(OrderAnnotation.class)
class WeatherApplicationTests {

	@Autowired
	WeatherRepository wRepo;
	
	@Test
	@Order(1)
	public void testCreate () {
		Weather w = new Weather();
		w.setId(15L);
		w.setCity("Delhi");	
		w.setWeather(32);
		wRepo.save(w);
		assertNotNull(wRepo.findById(15L).get());
	}
		
	@Test
	@Order(2)
	public void testReadAll () {
		List list = wRepo.findAll();
		assertThat(list).size().isGreaterThan(0);
	}
		
	@Test
	@Order(3)
	public void testRead () {
		Weather Weather = wRepo.findById(15L).get();
		assertEquals("Delhi", Weather.getCity());
	}
		
	@Test
	@Order(4)
	public void testUpdate () {
		Weather w = wRepo.findById(15L).get();
		w.setCity("Bangalore");
		wRepo.save(w);
		assertNotEquals("Delhi", wRepo.findById(15L).get().getCity());
	}
		
	@Test
	@Order(5)
	public void testDelete () {
		wRepo.deleteById(15L);
		assertThat(wRepo.existsById(15L)).isFalse();
	}

}