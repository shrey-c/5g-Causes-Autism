package com.telstra.entity;
// entity represents a table in relational database
// each entity instance represents a row in the database

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
public class Weather {
	
	@Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Long Id;
	
	public Weather() {
		super();
		// TODO Auto-generated constructor stub
	}
	@Override
	public String toString() {
		return "Weather [Id=" + Id + ", City=" + City + ", Weather=" + Weather + "]";
	}
	public Weather(Long id, String city, Integer weather) {
		super();
		Id = id;
		City = city;
		Weather = weather;
	}
	public Long getId() {
		return Id;
	}
	public void setId(Long id) {
		Id = id;
	}
	public String getCity() {
		return City;
	}
	public void setCity(String city) {
		City = city;
	}
	public Integer getWeather() {
		return Weather;
	}
	public void setWeather(Integer weather) {
		Weather = weather;
	}
	private String City;
    private Integer Weather;
	
}
