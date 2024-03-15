package com.example.capstone.Exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import jakarta.servlet.http.HttpServletRequest;

@ControllerAdvice
public class HandleException {
	@ResponseBody
	@ResponseStatus(value = HttpStatus.NOT_FOUND)
	@ExceptionHandler(value = { ResourceNotFoundException.class })
	public ResponseEntity<ErrorMapper> handleError(ResourceNotFoundException e, HttpServletRequest request) {
		ErrorMapper error=new ErrorMapper(HttpStatus.NOT_FOUND.value(), request.getRequestURI().toString(), e.getMessage());
		return ResponseEntity.status(HttpStatus.NOT_FOUND).body(error);
	}

	@ResponseBody
	@ResponseStatus(value = HttpStatus.CONFLICT)
	@ExceptionHandler(value = { ConflictException.class })
	public ResponseEntity<ErrorMapper> handleConflictError(ConflictException e, HttpServletRequest request) {
		ErrorMapper error=new ErrorMapper(HttpStatus.CONFLICT.value(), request.getRequestURI().toString(), e.getMessage());
		return ResponseEntity.status(HttpStatus.CONFLICT).body(error);
	}

	@ResponseBody
	@ResponseStatus(value = HttpStatus.INTERNAL_SERVER_ERROR)
	@ExceptionHandler(value = { Exception.class })
	public ResponseEntity<ErrorMapper> handleInternalServerError(Exception e, HttpServletRequest request) {
		ErrorMapper error=new ErrorMapper(HttpStatus.CONFLICT.value(), request.getRequestURI().toString(), e.getMessage());
		return ResponseEntity.status(HttpStatus.CONFLICT).body(error);
	}

	@ResponseBody
	@ResponseStatus(value = HttpStatus.BAD_REQUEST)
	@ExceptionHandler(value = { BadRequestException.class })
	public ResponseEntity<ErrorMapper> handleInternalServerError(BadRequestException e, HttpServletRequest request) {
		ErrorMapper error=new ErrorMapper(HttpStatus.BAD_REQUEST.value(), request.getRequestURI().toString(), e.getMessage());
		return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(error);
	}

	@ResponseBody
	@ResponseStatus(value = HttpStatus.UNAUTHORIZED)
	@ExceptionHandler(value = { UnauthorizedException.class })
	public ResponseEntity<ErrorMapper> handleInternalServerError(UnauthorizedException e, HttpServletRequest request) {
		ErrorMapper error=new ErrorMapper(HttpStatus.UNAUTHORIZED.value(), request.getRequestURI().toString(), e.getMessage());
		return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(error);
	}
}
