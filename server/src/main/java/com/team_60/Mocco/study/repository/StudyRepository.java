package com.team_60.Mocco.study.repository;

import com.team_60.Mocco.study.entity.Study;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface StudyRepository extends JpaRepository<Study, Long> {
    Optional<Study> findByStudyId(long studyId);
    Page<Study> findByStudyStatus(Study.StudyStatus status, Pageable pageable);

    Page<Study> findBySummaryContaining(String summary, Pageable pageable);
}
