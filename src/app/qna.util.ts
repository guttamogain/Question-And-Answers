import { Injectable } from "@angular/core";
import { TopicDetails } from "./qna.model";
import * as jwt_decode from "jwt-decode";

@Injectable()
export class QnaUtil {

    readonly TOKEN_NAME: string = "jwt_token";
    userId: number = 0;

    getTopics(): TopicDetails[] {
        return [{
            topicNumber: 1,
            topic: 'Science'
        }, {
            topicNumber: 2,
            topic: 'Sports'
        }, {
            topicNumber: 3,
            topic: 'Politics'
        }, {
            topicNumber: 4,
            topic: 'Geography'
        }, {
            topicNumber: 5,
            topic: 'Technology'
        }];
    }

    getToken(): string {
        return localStorage.getItem(this.TOKEN_NAME);
    }

    setToken(token: string): void {
        localStorage.setItem(this.TOKEN_NAME, token);
    }

    setUserId(userId: number) {
        this.userId = userId;
    }

    getUserId() {
        return this.userId;
    }

    deleteToken(): void {
        localStorage.removeItem(this.TOKEN_NAME);
    }

    getTokenExpirationDate(token: string): Date {
        const decoded: any = jwt_decode(token);
        this.setUserId(decoded.userId);
        if (decoded.exp === undefined) return null;
        const date = new Date(0);
        date.setUTCSeconds(decoded.exp);
        return date;
    }

    isTokenExpired(token?: string): boolean {
        if (!token) token = this.getToken();
        if (!token) return true;
        const date = this.getTokenExpirationDate(token);
        if (date === undefined || date === null) return false;
        return !(date.valueOf() > new Date().valueOf());
    }
}