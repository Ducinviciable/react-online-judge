package com.react_online_judge.backend.repository;

import com.react_online_judge.backend.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByUsername(String username);
    Optional<User> findByEmail(String email);
    @Query("SELECT u FROM User u JOIN u.participatedContests c WHERE c.id = :contestId")
    List<User> findByContestId(@Param("contestId") Long contestId);
    void deleteById(Long id);
}
