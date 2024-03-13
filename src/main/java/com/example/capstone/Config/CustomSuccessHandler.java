package com.example.capstone.Config;
import java.io.IOException;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
//import org.springframework.security.oauth2.core.user.DefaultOAuth2User;
import org.springframework.security.web.DefaultRedirectStrategy;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.stereotype.Component;
 
import com.example.capstone.DTO.UserDTO;
import com.example.capstone.Repository.UserRepository ;
import com.example.capstone.Service.UserService;
 
 
@Component
public class CustomSuccessHandler implements AuthenticationSuccessHandler {
 
    @Autowired
    UserRepository userRepository;
 
    @Autowired
    UserService userService;
 
    @Override
    public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response,
                                        Authentication authentication) throws IOException, ServletException {
 
        // Create session cookie
        Cookie sessionCookie = new Cookie("Hackathon", request.getSession().getId());
        sessionCookie.setMaxAge(24 * 60 * 60); // Set max age to 24 hours
        sessionCookie.setHttpOnly(true); // Make cookie accessible only through HTTP to enhance security
        sessionCookie.setPath("/"); // Cookie available for entire application
        response.addCookie(sessionCookie); // Add cookie to response
 
    }
}