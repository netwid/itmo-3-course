package dev.netwid.blps.lab2.primary.repository;

import dev.netwid.blps.lab2.primary.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    User findByUsername(String username);
    boolean existsByUsername(String username);

//    Optional<User> findById(Integer id);

//    List<User> getAllUsers();
}