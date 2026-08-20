package com.example.restapidemo.service;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.stereotype.Service;

import com.example.restapidemo.model.Post;
import com.example.restapidemo.repository.PostRepository;

@Service
public class PostService {

    private final PostRepository postRepository;

    // Constructor Injection
    public PostService(PostRepository postRepository) {
        this.postRepository = postRepository;
    }

    // Get all active posts
    public List<Post> getAllPosts() {
        return postRepository.findByIsActiveTrue();
    }

    // Get post by ID
    public Post getPostById(Long id) {
        return postRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Post not found"));
    }

    // Create new post
    public Post createPost(Post post) {
        post.setPublishedDate(LocalDateTime.now());

        if (post.getIsActive() == null) {
            post.setIsActive(true);
        }

        return postRepository.save(post);
    }

    // Update post
    public Post updatePost(Long id, Post details) {
        Post existing = getPostById(id);

        existing.setTitle(details.getTitle());
        existing.setContent(details.getContent());
        existing.setAuthor(details.getAuthor());

        // Keep existing active status unless a new value is provided
        if (details.getIsActive() != null) {
            existing.setIsActive(details.getIsActive());
        }

        existing.setPublishedDate(LocalDateTime.now());

        return postRepository.save(existing);
    }

    // Delete post
    public void deletePost(Long id) {
        postRepository.delete(getPostById(id));
    }

    // Get posts by author
    public List<Post> getPostsByAuthor(String author) {
        return postRepository.findByAuthor(author);
    }

    // Get active posts
    public List<Post> getActivePosts() {
        return postRepository.findByIsActiveTrue();
    }
}