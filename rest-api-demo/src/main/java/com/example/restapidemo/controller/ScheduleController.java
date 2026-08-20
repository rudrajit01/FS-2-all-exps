package com.example.restapidemo.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.restapidemo.dto.ApiResponse;
import com.example.restapidemo.model.Schedule;
import com.example.restapidemo.service.ScheduleService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/schedules")
@CrossOrigin(origins = "*")
public class ScheduleController {

    private final ScheduleService scheduleService;

    public ScheduleController(ScheduleService scheduleService) {
        this.scheduleService = scheduleService;
    }

    @GetMapping
    public ResponseEntity<ApiResponse<List<Schedule>>> getAllSchedules() {
        List<Schedule> schedules = scheduleService.getAllSchedules();

        return ResponseEntity.ok(
                ApiResponse.success("Schedules retrieved", schedules)
        );
    }

    @GetMapping("/{id}")
    public ResponseEntity<ApiResponse<Schedule>> getScheduleById(
            @PathVariable Long id) {

        Schedule schedule = scheduleService.getScheduleById(id);

        return ResponseEntity.ok(
                ApiResponse.success("Schedule found", schedule)
        );
    }

    @PostMapping
    public ResponseEntity<ApiResponse<Schedule>> createSchedule(
            @Valid @RequestBody Schedule schedule) {

        Schedule created = scheduleService.createSchedule(schedule);

        return ResponseEntity.status(HttpStatus.CREATED)
                .body(ApiResponse.success("Schedule created", created));
    }

    @PutMapping("/{id}")
    public ResponseEntity<ApiResponse<Schedule>> updateSchedule(
            @PathVariable Long id,
            @Valid @RequestBody Schedule schedule) {

        Schedule updated = scheduleService.updateSchedule(id, schedule);

        return ResponseEntity.ok(
                ApiResponse.success("Schedule updated", updated)
        );
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<ApiResponse<Void>> deleteSchedule(
            @PathVariable Long id) {

        scheduleService.deleteSchedule(id);

        return ResponseEntity.ok(
                ApiResponse.success("Schedule deleted", null)
        );
    }

    @GetMapping("/upcoming")
    public ResponseEntity<ApiResponse<List<Schedule>>> getUpcomingSchedules() {
        List<Schedule> schedules = scheduleService.getUpcomingSchedules();

        return ResponseEntity.ok(
                ApiResponse.success("Upcoming schedules retrieved", schedules)
        );
    }

    @GetMapping("/incomplete")
    public ResponseEntity<ApiResponse<List<Schedule>>> getIncompleteSchedules() {
        List<Schedule> schedules = scheduleService.getIncompleteSchedules();

        return ResponseEntity.ok(
                ApiResponse.success("Incomplete schedules retrieved", schedules)
        );
    }

    @PatchMapping("/{id}/complete")
    public ResponseEntity<ApiResponse<Schedule>> markAsCompleted(
            @PathVariable Long id) {

        Schedule schedule = scheduleService.markAsCompleted(id);

        return ResponseEntity.ok(
                ApiResponse.success("Schedule marked as completed", schedule)
        );
    }
}