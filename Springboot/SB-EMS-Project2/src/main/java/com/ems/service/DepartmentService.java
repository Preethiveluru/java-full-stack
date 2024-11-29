package com.ems.service;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
@Service
@FeignClient(url="http://localhost:1313" , name="SB-DMS-PROJECT")
public interface DepartmentService {

	@GetMapping("/get-dept")
	public String getDepartment();
	
	@GetMapping("/get-dept-details/{dno}")
	public String getDeptDetails(@PathVariable("dno") int dno);
}
