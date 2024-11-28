package com.ems.repo;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.ems.Model.Department;

@Repository
public interface DepartmentRepo extends CrudRepository<Department, Integer> {
}
