import { Component, OnInit } from '@angular/core';
import { EmployeeService } from "../../services/employee.service";
import { Employee } from "../../models/employee";
import { Router } from '@angular/router';

@Component({
  selector: 'app-consultas',
  templateUrl: './consultas.component.html',
  styleUrls: ['./consultas.component.css'],
  providers: [EmployeeService],
})
export class ConsultasComponent implements OnInit {

  filterpost: string = '';

  constructor(private employeeService: EmployeeService, private router: Router) { }

  ngOnInit() {
    this.getEmployees();
  }

  // getEmployees() {
  //   this.employeeService.getEmployeesFilter(this.filterpost).subscribe((res) => {
  //         this.employeeService.employees = res;
  //   });
  // }

  getEmployees() {
    this.employeeService.getEmployees().subscribe((res) => {
      this.employeeService.employees = res;
      console.log(this.employeeService.employees)
    });
  }

  irMapa(employee: Employee){
    localStorage.setItem("employee", JSON.stringify(employee))
    this.router.navigate(['/mapa']);
  }

  irMapaGrupo(){
    // Para almacenar un objeto o array (que es objeto) hay que pasarlo a json
    localStorage.setItem("employeesfilter", JSON.stringify(this.employeeService.employees))
    this.router.navigate(['/mapagrupo']);
  }

  onSubmit() {
    this.getEmployees();
  }

}

