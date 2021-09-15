package com.telstra;

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

import com.telstra.entity.ServiceEntity;
import com.telstra.repository.ServiceRepository;


@SpringBootTest
@TestMethodOrder(OrderAnnotation.class)
class ServiceApiApplicationTests {

	@Autowired
	ServiceRepository sRepo;
	
	@Test
	@Order(1)
	public void testCreate () {
		ServiceEntity w = new ServiceEntity();
		w.setServiceEndpointsId("ff5380f7-967a-40f5-b8b4-5c2f4052c32r");
		w.setDescription("gets the song by id");
		w.setDirection("South");
		w.setHostname("Eureka");
		w.setMicroservice_name("get song by id");
		w.setName_of_api("Song-api");
		w.setName_of_service("get song by id");
		w.setPort(8083);
		w.setRegion("Varkala");
		w.setUri("http://localhost:8083/song-api/song-id");
		sRepo.save(w);
		//assertNotNull(sRepo.findById("ff5380f7-967a-40f5-b8b4-5c2f4052c32r").get());
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
		ServiceEntity ser = sRepo.findById("faffebde-467f-429b-9ca3-7e8053b785b9").get();
		assertEquals(3000, ser.getPort());
	}
		
	@Test
	@Order(4)
	public void testUpdate () {
		ServiceEntity w = sRepo.findById("faffebde-467f-429b-9ca3-7e8053b785b9").get();
		w.setRegion("Bangalore");
		sRepo.save(w);
		assertNotEquals("Varkala", sRepo.findById("faffebde-467f-429b-9ca3-7e8053b785b9").get().getRegion());
	}
		
	@Test
	@Order(5)
	public void testDelete () {
		sRepo.deleteById("faffebde-467f-429b-9ca3-7e8053b785b9");
		assertThat(sRepo.existsById("faffebde-467f-429b-9ca3-7e8053b785b9")).isFalse();
	}

}
