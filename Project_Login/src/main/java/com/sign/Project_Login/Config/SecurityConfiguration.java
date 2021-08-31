package com.sign.Project_Login.Config;

import com.sign.Project_Login.LoginServices.CustomOAuth2Service;
import com.sign.Project_Login.LoginServices.CustomOath2User;
import com.sign.Project_Login.LoginServices.OauthService;
import com.sign.Project_Login.LoginServices.myUserDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.crypto.password.NoOpPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.AuthenticationFailureHandler;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Configuration
@EnableWebSecurity
public class SecurityConfiguration extends WebSecurityConfigurerAdapter {


    @Autowired
    private myUserDetailsService myuds;

    @Override
    @Bean
    public AuthenticationManager authenticationManagerBean() throws Exception {
        return super.authenticationManagerBean();
    }

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(myuds);
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.csrf().disable();
        http.antMatcher("/**")
                .authorizeRequests()
                .antMatchers("/use")
                .authenticated()
                .antMatchers("/", "/register", "/process_register", "/process_login")
                .permitAll().anyRequest().authenticated()
                .and()
                .formLogin()
                .loginPage("/login").permitAll()
                .and().logout().logoutSuccessUrl("/").permitAll()
                .and()
                .oauth2Login()
                .loginPage("/login")
                .userInfoEndpoint()
                .userService(oauth2UserService)
                .and()
                .successHandler(new AuthenticationSuccessHandler() {
                    @Override
                    public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response,
                                                        Authentication authentication) throws IOException, ServletException {

                        CustomOath2User oauthUser = (CustomOath2User) authentication.getPrincipal();
                        System.out.println(authentication.getAuthorities());

                        try {
                            oauthService.processOAuthPostLogin(oauthUser);
                        } catch (Exception e) {
                            e.printStackTrace();
                        }
                        response.sendRedirect("/use");
                    }
                })
                .failureHandler(new AuthenticationFailureHandler() {
                    @Override
                    public void onAuthenticationFailure(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, AuthenticationException e) throws IOException, ServletException {
                        throw new IOException("");
                    }
                })
        ;



    }
    @Autowired
    private CustomOAuth2Service oauth2UserService;

    @Autowired
    OauthService oauthService;

    @Bean
    public PasswordEncoder setupPassEncoder(){
        return NoOpPasswordEncoder.getInstance();
    }
}
