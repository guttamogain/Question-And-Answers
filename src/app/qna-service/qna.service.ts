import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";

@Injectable()
export class QnaService {

    constructor(private http: Http) { }

    private authServiceUrl = "http://localhost:8089/api/v1/userservice/";
    private qnaServiceUrl = "http://localhost:8080/api/v1/qnaservice/";

    private headers = new Headers({
        "Content-Type": "application/json", "Accept": "application/json"
    });

    registerUser(request) {
        const url = this.authServiceUrl + "register/";
        return this.http.post(url, request, { headers: this.headers });
    }

    loginUser(request): any {
        const url = this.authServiceUrl + "login/";
        return this.http.post(url, request, { headers: this.headers });
    }

    getQuestions(request): any {
        const url = this.qnaServiceUrl + 'qna/getquestions';
        return this.http.post(url, request, { headers: this.headers });
    }

    getComments(request): any {
        const url = this.qnaServiceUrl + 'qna/getcomments';
        return this.http.post(url, request, { headers: this.headers });
    }

    postQuestion(request): any {
        const url = this.qnaServiceUrl + 'qna/question';
        return this.http.post(url, request, { headers: this.headers });
    }

    postTopic(request): any {
        const url = this.qnaServiceUrl + 'qna/topic';
        return this.http.post(url, request, { headers: this.headers });
    }

    postComment(request): any {
        const url = this.qnaServiceUrl + 'qna/comment';
        return this.http.post(url, request, { headers: this.headers });
    }

    deleteComment(id): any {
        const url = this.qnaServiceUrl + 'qna/deletecomment';
        return this.http.post(url, id, { headers: this.headers });
    }

    deleteQuestion(id): any {
        const url = this.qnaServiceUrl + 'qna/deletequestion';
        return this.http.post(url, id, { headers: this.headers });
    }
}