package com.example.restapidemo.model;

import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "posts")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Post {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "Title cannot be blank")
    @Size(max = 100, message = "Title must be less than 100 characters")
    @Column(nullable = false, length = 100)
    private String title;

    @NotBlank(message = "Content cannot be blank")
    @Column(nullable = false, columnDefinition = "TEXT")
    private String content;

    @NotBlank(message = "Author cannot be blank")
    @Size(max = 50, message = "Author name must be less than 50 characters")
    @Column(nullable = false, length = 50)
    private String author;

    // ❗ @NotNull সরিয়ে ফেলা হয়েছে – সার্ভার নিজেই এটি সেট করে
    @Column(name = "published_date", nullable = false)
    private LocalDateTime publishedDate;

    @Column(name = "is_active")
    private Boolean isActive = true;
}