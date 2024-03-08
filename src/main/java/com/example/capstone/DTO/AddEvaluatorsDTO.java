package com.example.capstone.DTO;

import java.util.List;

public class AddEvaluatorsDTO {
private int hackathonId;
List<EvaluatorDTO> evaluators;
public int getHackathonId() {
	return hackathonId;
}
public void setHackathonId(int hackathonId) {
	this.hackathonId = hackathonId;
}
public List<EvaluatorDTO> getEvaluators() {
	return evaluators;
}
public void setEvaluators(List<EvaluatorDTO> evaluators) {
	this.evaluators = evaluators;
}

}
