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
@Table(name="questions")
public class QuestionModel {		

		@Id
		@Column(name="question_id")
		@GeneratedValue(strategy=GenerationType.AUTO)
		private int questionId;
		
		@Column(name="question")
		private String question;
		
		@Column(name="topic_id")
		private int topicId;
		
		@OneToMany(fetch = FetchType.EAGER,cascade=CascadeType.ALL)
		@JoinColumn(name="question_id")
		private List<CommentsModel> comments;
		
		public QuestionModel() {
			
		}
		
		public QuestionModel(int questionId,String question,int topicId) {
			super();
			this.questionId = questionId;
			this.question = question;
			this.topicId = topicId;
		}

		public List<CommentsModel> getComments() {
			return comments;
		}

		public void setComments(List<CommentsModel> comments) {
			this.comments = comments;
		}

		public int getQuestionId() {
			return questionId;
		}

		public void setQuestionId(int questionId) {
			this.questionId = questionId;
		}

		public String getQuestion() {
			return question;
		}

		public void setQuestion(String question) {
			this.question = question;
		}

		public int getTopicId() {
			return topicId;
		}

		public void setTopicId(int topicId) {
			this.topicId = topicId;
		}
		
		
}

