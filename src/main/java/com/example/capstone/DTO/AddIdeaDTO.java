
package com.example.capstone.DTO;

public class AddIdeaDTO {
	private String name;
	private String ideaTitle;
	private String ideaBody;
	private String ideaDomain;

	public AddIdeaDTO() {

	}

	public AddIdeaDTO(String updatedName, String updatedIdeaTitle, String updatedIdeaBody, String updatedIdeaDomain) {
		this.name = updatedName;
		this.ideaTitle = updatedIdeaTitle;
		this.ideaBody = updatedIdeaBody;
		this.ideaDomain = updatedIdeaDomain;
	}

	public String getUpdatedName() {
		return name;
	}

	public void setUpdatedName(String updatedName) {
		this.name = updatedName;
	}

	public String getUpdatedIdeaTitle() {
		return ideaTitle;
	}

	public void setUpdatedIdeaTitle(String updatedIdeaTitle) {
		this.ideaTitle = updatedIdeaTitle;
	}

	public String getUpdatedIdeaBody() {
		return ideaBody;
	}

	public void setUpdatedIdeaBody(String updatedIdeaBody) {
		this.ideaBody = updatedIdeaBody;
	}

	public String getUpdatedIdeaDomain() {
		return ideaDomain;
	}

	public void setUpdatedIdeaDomain(String updatedIdeaDomain) {
		this.ideaDomain = updatedIdeaDomain;
	}
}
