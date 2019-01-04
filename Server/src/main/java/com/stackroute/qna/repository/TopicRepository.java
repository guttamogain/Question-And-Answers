package com.stackroute.qna.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.stackroute.qna.model.TopicModel;

public interface TopicRepository extends JpaRepository<TopicModel, Integer> {

	List<TopicModel> findByUserId(int userId);
}
