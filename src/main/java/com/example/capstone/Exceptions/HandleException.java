package com.example.capstone.Exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import jakarta.servlet.http.HttpServletRequest;
@ControllerAdvice
public class HandleException {
	@ResponseBody
	@ResponseStatus(value = HttpStatus.NOT_FOUND)
	@ExceptionHandler(value = {Exception.class})
    public ErrorMapper handleError(Exception e,HttpServletRequest request) 
	{
	     return new ErrorMapper(HttpStatus.NOT_FOUND.value(),request.getRequestURI().toString(), e.getMessage());
	}
}
