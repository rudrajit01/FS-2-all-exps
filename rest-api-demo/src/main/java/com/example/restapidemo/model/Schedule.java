package com.example.restapidemo.model;

import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.FutureOrPresent;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "schedules")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Schedule {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "Event name cannot be blank")
    @Column(nullable = false, length = 100)
    private String eventName;

    @NotBlank(message = "Description cannot be blank")
    @Column(nullable = false, columnDefinition = "TEXT")
    private String description;

    @NotNull(message = "Start time cannot be null")
    @FutureOrPresent(message = "Start time must be in present or future")
    @Column(name = "start_time", nullable = false)
    private LocalDateTime startTime;

    @NotNull(message = "End time cannot be null")
    @FutureOrPresent(message = "End time must be in present or future")
    @Column(name = "end_time", nullable = false)
    private LocalDateTime endTime;

    @Column(name = "is_completed")
    private Boolean isCompleted = false;
}