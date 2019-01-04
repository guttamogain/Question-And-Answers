package com.stackroute.qna.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.stackroute.qna.model.CommentsModel;

public interface CommentsRepository extends JpaRepository<CommentsModel, Integer> {

}
