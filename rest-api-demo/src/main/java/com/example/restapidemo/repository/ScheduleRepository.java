package com.example.restapidemo.repository;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.restapidemo.model.Schedule;
public interface ScheduleRepository extends JpaRepository<Schedule, Long> {
    List<Schedule> findByStartTimeAfter(LocalDateTime date);
    List<Schedule> findByIsCompletedFalse();
}