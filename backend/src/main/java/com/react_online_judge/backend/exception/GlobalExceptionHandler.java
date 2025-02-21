package com.react_online_judge.backend.exception;

import com.react_online_judge.backend.dto.response.APIResponse;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@Slf4j
@ControllerAdvice
public class GlobalExceptionHandler  {
    @ExceptionHandler(value = Exception.class)
    public ResponseEntity<APIResponse> ExceptionHandler(final Exception e) {
        APIResponse response = new APIResponse();
        ErrorCode error = ErrorCode.UNCATEGORIZED;
        response.setMessage(error.getMessage());
        response.setCode(error.getCode());
        return ResponseEntity.status(error.getHttpStatus()).body(response);
    }

    @ExceptionHandler(value = AppException.class)
    public ResponseEntity<APIResponse> AppExceptionHandler(final AppException e) {
        APIResponse response = new APIResponse();
        response.setMessage(e.getErrorCode().getMessage());
        response.setCode(e.getErrorCode().getCode());
        return ResponseEntity.status(e.getErrorCode().getHttpStatus()).body(response);
    }
}
