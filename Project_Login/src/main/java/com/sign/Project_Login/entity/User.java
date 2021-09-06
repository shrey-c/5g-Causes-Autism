package com.sign.Project_Login.entity;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.Email;
//@NoArgsConstructor
@Entity
@Table(name = "users1", uniqueConstraints ={@UniqueConstraint(columnNames = "emailId")})
public @Data class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    public User() {
		super();
		// TODO Auto-generated constructor stub
	}

	public User(long id, String firstname, String lastname, @Email String emailid, String password, Provider provider) {
		super();
		this.id = id;
		this.firstname = firstname;
		this.lastname = lastname;
		this.emailid = emailid;
		this.password = password;
		this.provider = provider;
	}

	@Override
	public String toString() {
		return "User [id=" + id + ", firstname=" + firstname + ", lastname=" + lastname + ", emailid=" + emailid
				+ ", password=" + password + ", provider=" + provider + "]";
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getFirstname() {
		return firstname;
	}

	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}

	public String getLastname() {
		return lastname;
	}

	public void setLastname(String lastname) {
		this.lastname = lastname;
	}

	public String getEmailid() {
		return emailid;
	}

	public void setEmailid(String emailid) {
		this.emailid = emailid;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public Provider getProvider() {
		return provider;
	}

	public void setProvider(Provider provider) {
		this.provider = provider;
	}

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
