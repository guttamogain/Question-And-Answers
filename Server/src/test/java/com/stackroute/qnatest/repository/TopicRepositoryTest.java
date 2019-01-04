package com.stackroute.qnatest.repository;

import static org.junit.Assert.assertNotNull;

import java.util.List;

import org.junit.Before;
import org.junit.Ignore;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase.Replace;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringRunner;

import com.stackroute.qna.controller.QnaController;
import com.stackroute.qna.model.TopicModel;
import com.stackroute.qna.repository.TopicRepository;

@Ignore
@RunWith(SpringRunner.class)
@ContextConfiguration(classes = { QnaController.class })
@DataJpaTest
@AutoConfigureTestDatabase(replace = Replace.NONE)
public class TopicRepositoryTest {
	
	private TopicModel topic;
	
	@Autowired
	private TopicRepository topicRepository;
	
	@Before
	public void setUp() {
		MockitoAnnotations.initMocks(this);
		topic = new TopicModel(1,"Science",1,1);
	}
	
	@Test
	public void testQuestionRepoSuccess() {
		topicRepository.save(topic);
		List<TopicModel> object = topicRepository.findAll();
		assertNotNull(object);
	}
}
