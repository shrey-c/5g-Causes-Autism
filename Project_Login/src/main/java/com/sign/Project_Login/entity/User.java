package com.sign.Project_Login.entity;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.Email;
@NoArgsConstructor
@Entity
@Table(name = "users1", uniqueConstraints ={@UniqueConstraint(columnNames = "emailId")})
public @Data class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(nullable = false)
    private String firstname;
    //@Column(nullable = false)
    private String lastname;
    //@Email -> Validation
    @Email
    @Column(nullable = false)
    private String emailid;
    //@Column(nullable = false)
    private String password;

    @Enumerated(EnumType.STRING)
    private Provider provider;

}
