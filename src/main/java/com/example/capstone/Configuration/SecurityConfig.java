package com.example.capstone.Configuration;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfiguration;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.access.AccessDeniedHandler;
import org.springframework.security.web.access.ExceptionTranslationFilter;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.servlet.HandlerExceptionResolver;
import org.springframework.web.servlet.mvc.support.DefaultHandlerExceptionResolver;

import com.example.capstone.Service.TokenService;
import com.example.capstone.filter.JwtAuthFilter;

@Configuration
@EnableWebSecurity
@EnableMethodSecurity(securedEnabled = true, prePostEnabled = true)
public class SecurityConfig {
//	@Autowired
//	@Qualifier("HandlerExceptionResolver")
//	private HandlerExceptionResolver handleExceptionResolver;
	@Bean
	public HandlerExceptionResolver handlerExceptionResolver() {
		return new DefaultHandlerExceptionResolver();
	}

	@Autowired
	private TokenService tokenService;

	@Bean
	// authentication
	public UserDetailsService userDetailsService() {
		return new UserInfoUserDetailsService();
	}

	@Bean
	public PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}

	@Bean
	public JwtAuthFilter jwtAuthFilter() {
		return new JwtAuthFilter(handlerExceptionResolver());
	}

	@Bean
	public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
		return http.csrf().disable().authorizeHttpRequests()
				.requestMatchers(
						"/User/login", 
						"/User/register", 
						"/User/verifyOtp",
						"/User/forgotPassword",
						"/User/changePassword",
						"/User/logout")
				.permitAll()
				.requestMatchers("/Admin/**").hasAuthority("ROLE_admin")
				.requestMatchers("Judge/review/{teamid}", "Judge/selectedTeams/{hackathonId}")
				.hasAuthority("ROLE_judge")
				.requestMatchers("panelist/{hackathonId}/{userId}", "Team/rejected/{teamId}", "Team/selected/{teamId}")
				.hasAuthority("ROLE_panelist")
				.requestMatchers("Team/{hackathonId}/{userId}", "Team/idea/{hackathonId}/{userId}",
						"Team/ideaFiles/{hackathonId}/{userId}", "User/Teams/{userId}")
				.hasAuthority("ROLE_participant").anyRequest().authenticated().and().sessionManagement()
				.sessionCreationPolicy(SessionCreationPolicy.STATELESS).and()
				.authenticationProvider(authenticationProvider())
				.addFilterBefore(jwtAuthFilter(), UsernamePasswordAuthenticationFilter.class).exceptionHandling()
//				.authenticationEntryPoint(authenticationEntryPoint())
				.accessDeniedHandler(accessDeniedHandler()).and().logout().logoutUrl("/User/logout")
				.logoutSuccessHandler((request, response, authentication) -> {
					String authHeader = request.getHeader("Authorization");
					String token = null;
					String username = null;
					if (authHeader != null && authHeader.startsWith("Bearer ")) {
						token = authHeader.substring(7);
					}
					tokenService.blackListToken(token);
					response.setStatus(HttpStatus.OK.value());
					response.getWriter().write("Logout successful");
				}).and().build();
	}

	@Bean
	public AuthenticationProvider authenticationProvider() {
		DaoAuthenticationProvider authenticationProvider = new DaoAuthenticationProvider();
		authenticationProvider.setUserDetailsService(userDetailsService());
		authenticationProvider.setPasswordEncoder(passwordEncoder());
		return authenticationProvider;
	}

	@Bean
	public AuthenticationManager authenticationManager(AuthenticationConfiguration config) throws Exception {
		return config.getAuthenticationManager();
	}

	@Bean
	public AccessDeniedHandler accessDeniedHandler() {
		return new CustomAccessDeniedHandler();
	}

//	@Bean
//	public AuthenticationEntryPoint authenticationEntryPoint() {
//		return new CustomAuthenticationEntryPoint();
//	}

}
