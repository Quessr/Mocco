package com.team_60.Mocco.task.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;
@Getter
@Setter
@NoArgsConstructor
public class TaskDto {

        private String content;
        @JsonFormat(pattern = "yyyy-MM-dd")
        private LocalDate deadline;
        private long taskId;
    }

