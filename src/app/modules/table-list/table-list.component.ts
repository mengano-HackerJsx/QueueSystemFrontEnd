import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { PersonService } from 'app/core/services/persons.service';
import { SweetAlertService } from 'app/core/services/sweetalert.service';
import { CreatePersonComponent } from 'app/shared/components/create-person/create-person.component';
import { Person } from 'app/shared/models/person';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {

  persons!: Person[];
  displayedColumns: string[] = ['ID', 'Cedula', 'Nombres', 'Apellidos', 'Edad', 'Sexo', 'Estatura', 'Peso', 'Acciones'];
  dataSource!: any;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  
  constructor(private _personService: PersonService,
    private _dialog: MatDialog,
    private _sweetAlertService: SweetAlertService) {}

  ngOnInit() {
    this.loadAllPersons();
  }

  loadAllPersons() {
    this.persons = [];
    this.dataSource = [];
    this._personService.getAll('persons').subscribe(data => {
      this.persons = data;
      this.dataSource = new MatTableDataSource<Person>(this.persons);
      this.ngAfterViewInit();
    })
  }

  openCreatePersonModal() {
    this._dialog.open(CreatePersonComponent, {
      width: '500px',
      height: '500px'
    })
  }

  delete(person: Person) {
    this._personService.delete('persons', person.id).subscribe(data => {
      this._sweetAlertService.success()
    })
  }
}