package com.sign.Project_Login.LoginServices;

import com.sign.Project_Login.Repo.UserRepository;
import com.sign.Project_Login.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class myUserDetailsService implements UserDetailsService {

    @Autowired
    UserRepository userRepository;


    @Override
    public UserDetails loadUserByUsername(String s) throws UsernameNotFoundException {
        System.out.println("I am loading the username" +s);
        Optional<User> myUser = userRepository.findByLocalEmailid(s);
        System.out.println(myUser.isEmpty() + "This is the user");
        myUser.orElseThrow(()-> new UsernameNotFoundException("Username Not found"));
        return myUser.map(myUserDetails::new).get();
    }
}
