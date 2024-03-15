package com.example.capstone.DTO;

public class TeamDetailsToJudgeDTO {
	public TeamDetailsToJudgeDTO(Integer teamId, String ideaRepo, String ideaFiles) {
		super();
		this.teamId = teamId;
		this.ideaRepo = ideaRepo;
		this.ideaFiles = ideaFiles;
	}
	private Integer teamId;
    private String ideaRepo;
    private String ideaFiles;
	public Integer getTeamId() {
		return teamId;
	}
	public void setTeamId(Integer teamId) {
		this.teamId = teamId;
	}
	public String getIdeaRepo() {
		return ideaRepo;
	}
	public void setIdeaRepo(String ideaRepo) {
		this.ideaRepo = ideaRepo;
	}
	public String getIdeaFiles() {
		return ideaFiles;
	}
	public void setIdeaFiles(String ideaFiles) {
		this.ideaFiles = ideaFiles;
	}

}
