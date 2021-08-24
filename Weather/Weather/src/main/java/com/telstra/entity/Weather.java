package com.telstra.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
@Data
@AllArgsConstructor
@Builder
public class Weather {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    //@Column(name = "id", nullable = false)
    private Long Id;

    private String City;
    private String Weather;
}
