package com.dms.repo;

import java.util.List;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.dms.Model.Department;

@Repository
public interface DepartmentRepo extends CrudRepository<Department, Integer>{
	

	
	
	

	
}
