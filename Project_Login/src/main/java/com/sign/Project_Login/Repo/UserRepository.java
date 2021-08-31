package com.sign.Project_Login.Repo;

import com.sign.Project_Login.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

     ArrayList<User> findByEmailid(String s);

     @Query(value = "Select * from users1 where provider ='local' and emailid=:n", nativeQuery = true)
     Optional<User> findByLocalEmailid(@Param("n") String s);


}
