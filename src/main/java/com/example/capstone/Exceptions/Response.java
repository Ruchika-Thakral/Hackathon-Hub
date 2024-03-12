package com.example.capstone.Exceptions;

import org.springframework.http.HttpStatus;

public class Response {
	private int statusCode;
	private HttpStatus status;
	private String body;

	public Response(int statusCode, HttpStatus status, String body) {
		super();
		this.statusCode = statusCode;
		this.status = status;
		this.body = body;
	}

	public int getStatusCode() {
		return statusCode;
	}

	public void setStatusCode(int statusCode) {
		this.statusCode = statusCode;
	}

	public HttpStatus getStatus() {
		return status;
	}

	public void setStatus(HttpStatus status) {
		this.status = status;
	}

	public String getBody() {
		return body;
	}

	public void setBody(String body) {
		this.body = body;
	}

}
