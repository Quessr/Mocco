package com.team_60.Mocco.exception.businessLogic;

import lombok.Getter;

public enum ExceptionCode {

    FAIL_SEND_EMAIL(300, "이메일 주소가 잘못되었거나 서버에서 메일을 보내지 못했습니다."),
    MEMBER_NOT_FOUND(404, "멤버를 찾을 수 없습니다."),
    EMAIL_ALREADY_EXIST(400, "해당 메일을 이용하는 사용자가 이미 존재합니다."),
    EMAIL_NOT_EXIST(400, "해당 메일을 이용하는 사용자가 없습니다."),
    NICKNAME_ALREADY_EXIST(400, "해당 닉네임을 이용하는 사용자가 이미 존재합니다."),
    GITHUB_REPOSITORY_DUPLICATION(400, "중복된 github repository를 입력했습니다."),
    NOT_GITHUB_REPOSITORY(400, "잘못된 github repository 입니다."),
    STUDY_NOT_FOUND(404, "스터디를 찾을 수 없습니다."),
    COMMENT_NOT_FOUND(404, "코멘트를 찾을 수 없습니다."),
    COMMENT_DELETED(400, "삭제된 코멘트입니다.");


    @Getter
    private int status;

    @Getter
    private String message;

    ExceptionCode(int status, String message){
        this.status = status;
        this.message = message;
    }
}
