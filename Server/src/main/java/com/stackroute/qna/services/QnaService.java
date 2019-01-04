package com.stackroute.qna.services;

import java.util.List;

import com.stackroute.exception.QnaException;
import com.stackroute.qna.model.CommentsModel;
import com.stackroute.qna.model.QuestionModel;
import com.stackroute.qna.model.TopicModel;

public interface QnaService {

	List<TopicModel> saveTopicDetails(TopicModel user);
	
	boolean saveQuestions(TopicModel user) throws QnaException;
	
	List<TopicModel> saveComments(TopicModel user) throws QnaException;
	
	List<QuestionModel> getQuestions(TopicModel user) throws QnaException;
	
	List<CommentsModel> getComments(TopicModel user) throws QnaException;
	
	boolean deleteComment(int id) throws QnaException;
	
	boolean deleteQuestion(int id) throws QnaException;
}
