package com.stackroute.qna.model;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name="topics")
public class TopicModel {
	
	@Id
	@Column(name="topic_id")
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int topicId;
	
	@Column(name="topic")
	private String topic;
	
	@Column(name="topicNumber")
	private int topicNumber;
	
	@Column(name="user_id")
	private int userId;
	
	@OneToMany(fetch = FetchType.EAGER,cascade=CascadeType.ALL)
	@JoinColumn(name="topic_id")
	private List<QuestionModel> questions;
	
	public TopicModel() {
		
	}
	
	public TopicModel(int topicId,String topic,int topicNumber,int userId) {
		super();
		this.userId = userId;
		this.topic = topic;
		this.topicId = topicId;
		this.topicNumber = topicNumber;
	}

	public int getTopicNumber() {
		return topicNumber;
	}

	public void setTopicNumber(int topicNumber) {
		this.topicNumber = topicNumber;
	}

	public List<QuestionModel> getQuestions() {
		return questions;
	}

	public void setQuestions(List<QuestionModel> questions) {
		this.questions = questions;
	}

	public int getTopicId() {
		return topicId;
	}

	public void setTopicId(int topicId) {
		this.topicId = topicId;
	}

	public String getTopic() {
		return topic;
	}

	public void setTopic(String topic) {
		this.topic = topic;
	}

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}
	
	

}
