package com.example.restapidemo.service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.example.restapidemo.model.Schedule;
import com.example.restapidemo.repository.ScheduleRepository;

@Service
public class ScheduleService {

    private ScheduleRepository scheduleRepository;

    public Schedule createSchedule(Schedule schedule) {
        return scheduleRepository.save(schedule);
    }

    public List<Schedule> getAllSchedules() {
        return scheduleRepository.findAll();
    }

    public Optional<Schedule> getScheduleById(Long id) {
        return scheduleRepository.findById(id);
    }

    public Schedule updateSchedule(Long id, Schedule scheduleDetails) {
        Schedule existingSchedule = scheduleRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Schedule not found with id: " + id));
        
        existingSchedule.setEventName(scheduleDetails.getEventName());
        existingSchedule.setDescription(scheduleDetails.getDescription());
        existingSchedule.setStartTime(scheduleDetails.getStartTime());
        existingSchedule.setEndTime(scheduleDetails.getEndTime());
        existingSchedule.setIsCompleted(scheduleDetails.getIsCompleted());
        
        return scheduleRepository.save(existingSchedule);
    }

    public void deleteSchedule(Long id) {
        Schedule schedule = scheduleRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Schedule not found with id: " + id));
        scheduleRepository.delete(schedule);
    }

    public List<Schedule> getUpcomingSchedules() {
        return scheduleRepository.findByStartTimeAfter(LocalDateTime.now());
    }

    public List<Schedule> getIncompleteSchedules() {
        return scheduleRepository.findByIsCompletedFalse();
    }
}