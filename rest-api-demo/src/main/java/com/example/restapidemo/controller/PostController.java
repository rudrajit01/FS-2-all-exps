package com.example.restapidemo.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.restapidemo.dto.ApiResponse;
import com.example.restapidemo.model.Post;
import com.example.restapidemo.service.PostService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/posts")
@CrossOrigin(origins = "*")
public class PostController {

    private final PostService postService;

    public PostController(PostService postService) {
        this.postService = postService;
    }

    // Get all active posts
    @GetMapping
    public ResponseEntity<ApiResponse<List<Post>>> getAllPosts() {
        List<Post> posts = postService.getAllPosts();

        return ResponseEntity.ok(
                ApiResponse.success("Posts retrieved", posts)
        );
    }

    // Get post by ID
    @GetMapping("/{id}")
    public ResponseEntity<ApiResponse<Post>> getPostById(
            @PathVariable Long id) {

        Post post = postService.getPostById(id);

        return ResponseEntity.ok(
                ApiResponse.success("Post found", post)
        );
    }

    // Create post
    @PostMapping
    public ResponseEntity<ApiResponse<Post>> createPost(
            @Valid @RequestBody Post post) {

        Post created = postService.createPost(post);

        return ResponseEntity.status(HttpStatus.CREATED)
                .body(ApiResponse.success("Post created", created));
    }

    // Update post
    @PutMapping("/{id}")
    public ResponseEntity<ApiResponse<Post>> updatePost(
            @PathVariable Long id,
            @Valid @RequestBody Post post) {

        Post updated = postService.updatePost(id, post);

        return ResponseEntity.ok(
                ApiResponse.success("Post updated", updated)
        );
    }

    // Delete post
    @DeleteMapping("/{id}")
    public ResponseEntity<ApiResponse<Void>> deletePost(
            @PathVariable Long id) {

        postService.deletePost(id);

        return ResponseEntity.ok(
                ApiResponse.success("Post deleted", null)
        );
    }

    // Get posts by author
    @GetMapping("/author/{author}")
    public ResponseEntity<ApiResponse<List<Post>>> getPostsByAuthor(
            @PathVariable String author) {

        List<Post> posts = postService.getPostsByAuthor(author);

        return ResponseEntity.ok(
                ApiResponse.success("Posts by author retrieved", posts)
        );
    }

    // Get active posts
    @GetMapping("/active")
    public ResponseEntity<ApiResponse<List<Post>>> getActivePosts() {

        List<Post> posts = postService.getActivePosts();

        return ResponseEntity.ok(
                ApiResponse.success("Active posts retrieved", posts)
        );
    }
}