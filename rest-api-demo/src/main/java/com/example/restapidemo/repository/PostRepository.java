package com.example.restapidemo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.restapidemo.model.Post;

public interface PostRepository extends JpaRepository<Post, Long> {

    List<Post> findByAuthor(String author);

    List<Post> findByIsActiveTrue();
}