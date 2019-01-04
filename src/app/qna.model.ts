export interface TopicDetails {
    userId?: number;
    topicId?: number;
    topic?: string;
    topicNumber?: number;
    questions?: QuestionDetails[];
}

export interface QuestionDetails extends TopicDetails {
    questionId?: number;
    question?: string;
    comments?: Comments[];
}

export interface Comments extends QuestionDetails {
    commentId?: number;
    comment?: string;
}

export interface MessageModel {
    showMessage?: boolean;
    type?: string;
    text?: string;
}

export interface User {
    userId?: number;
    email?: string;
    firstName?: string;
    lastName?: string;
    password?: string;
}
