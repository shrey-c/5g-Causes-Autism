package com.telstra.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import org.hibernate.annotations.GenericGenerator;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Entity
@Data
//@AllArgsConstructor
@Builder
public class ServiceEntity {
	
	public ServiceEntity() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	@Id
    @GeneratedValue(generator = "UUID")
    @GenericGenerator(
        name = "UUID",
    strategy = "org.hibernate.id.UUIDGenerator"
    )
    @Column(name = "service_endpoints_id", columnDefinition = "varchar(255) default 'North'", nullable = false)
    private String serviceEndpointsId;
	
	public ServiceEntity(String serviceEndpointsId, String name_of_api, String name_of_service, String description,
			String region,String directio, String hostname, String uri, Integer port, String microservice_name) {
		super();
		this.serviceEndpointsId = serviceEndpointsId;
		this.name_of_api = name_of_api;
		this.name_of_service = name_of_service;
		this.Description = description;
		this.region = region;
		this.direction=directio;
		this.hostname = hostname;
		this.uri = uri;
		this.port = port;
		this.microservice_name = microservice_name;
	}
	@Override
	public String toString() {
		return "Service [serviceEndpointsId=" + serviceEndpointsId + ", name_of_api=" + name_of_api
				+ ", name_of_service=" + name_of_service + ", Description=" + Description + ", region=" + region
				+ ", hostname=" + hostname + ", uri=" + uri + ", port=" + port + ", microservice_name="
				+ microservice_name + "]";
	}
	private String name_of_api;
	public String getServiceEndpointsId() {
		return serviceEndpointsId;
	}
	public void setServiceEndpointsId(String serviceEndpointsId) {
		this.serviceEndpointsId = serviceEndpointsId;
	}
	public String getName_of_api() {
		return name_of_api;
	}
	public void setName_of_api(String name_of_api) {
		this.name_of_api = name_of_api;
	}
	public String getName_of_service() {
		return name_of_service;
	}
	public void setName_of_service(String name_of_service) {
		this.name_of_service = name_of_service;
	}
	public String getDescription() {
		return Description;
	}
	public void setDescription(String description) {
		Description = description;
	}
	public String getRegion() {
		return region;
	}
	public void setRegion(String region) {
		this.region = region;
	}
	public String getDirection() {
		return direction;
	}
	public void setDirection(String direction) {
		this.direction = direction;
	}
	public String getHostname() {
		return hostname;
	}
	public void setHostname(String hostname) {
		this.hostname = hostname;
	}
	public String getUri() {
		return uri;
	}
	public void setUri(String uri) {
		this.uri = uri;
	}
	public Integer getPort() {
		return port;
	}
	public void setPort(Integer port) {
		this.port = port;
	}
	public String getMicroservice_name() {
		return microservice_name;
	}
	public void setMicroservice_name(String microservice_name) {
		this.microservice_name = microservice_name;
	}
	private String name_of_service;
	private String Description; 
	private String region;
	private String direction;
	private String hostname; 
	private String uri;
	private Integer port;
	private String microservice_name;

}
