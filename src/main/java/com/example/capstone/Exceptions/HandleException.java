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
	@ExceptionHandler(value = {ResourceNotFoundException.class})
    public ErrorMapper handleError(ResourceNotFoundException e,HttpServletRequest request) 
	{
	     return new ErrorMapper(HttpStatus.NOT_FOUND.value(),request.getRequestURI().toString(), e.getMessage());
	}
	
	@ResponseBody
	@ResponseStatus(value = HttpStatus.CONFLICT)
	@ExceptionHandler(value = {ConflictException.class})
    public ErrorMapper handleConflictError(ConflictException e,HttpServletRequest request) 
	{
	     return new ErrorMapper(HttpStatus.CONFLICT.value(),request.getRequestURI().toString(), e.getMessage());
	}
	@ResponseBody
	@ResponseStatus(value = HttpStatus.INTERNAL_SERVER_ERROR)
	@ExceptionHandler(value = {Exception.class})
    public ErrorMapper handleInternalServerError(Exception e,HttpServletRequest request) 
	{
	     return new ErrorMapper(HttpStatus.INTERNAL_SERVER_ERROR.value(),request.getRequestURI().toString(), e.getMessage());
	}
	
	@ResponseBody
	@ResponseStatus(value = HttpStatus.BAD_REQUEST)
	@ExceptionHandler(value = {BadRequestException.class})
    public ErrorMapper handleInternalServerError(BadRequestException e,HttpServletRequest request) 
	{
	     return new ErrorMapper(HttpStatus.BAD_REQUEST.value(),request.getRequestURI().toString(), e.getMessage());
	}
	@ResponseBody
	@ResponseStatus(value = HttpStatus.UNAUTHORIZED)
	@ExceptionHandler(value = {UnauthorizedException.class})
    public ErrorMapper handleInternalServerError( UnauthorizedException e,HttpServletRequest request) 
	{
	     return new ErrorMapper(HttpStatus.UNAUTHORIZED.value(),request.getRequestURI().toString(), e.getMessage());
	}
}
