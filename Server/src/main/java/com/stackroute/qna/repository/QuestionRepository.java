package com.stackroute.qna.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.stackroute.qna.model.QuestionModel;

public interface QuestionRepository extends JpaRepository<QuestionModel, Integer> {

}
