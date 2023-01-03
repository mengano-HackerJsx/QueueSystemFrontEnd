import { Component, OnInit, Inject } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialog, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { PersonService } from "app/core/services/persons.service";
import { SweetAlertService } from "app/core/services/sweetalert.service";
import { Person } from "app/shared/models/person";

@Component({
  templateUrl: "./create-person.component.html",
  styleUrls: ["./create-person.component.css"],
})
export class CreatePersonComponent implements OnInit {
  personForm!: FormGroup;

  constructor(
    private _fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _personService: PersonService,
    private _dialog: MatDialog,
    private _sweetAlertService: SweetAlertService
  ) {}

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.personForm = this._fb.group({
      dni: ['', Validators.required],
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      age: ['', Validators.required],
      sex: ['', Validators.required],
      height: ['', Validators.required],
      weight: ['', Validators.required]
    });
  }

  createPerson() {
    const { dni, name,lastname,sex, height, weight, age } = this.personForm.value;

    const request: Person = {
        dni,
        name,
        lastname,
        sex: sex,
        height: Number(height),
        weight: Number(weight),
        age: Number(age)
    }

    this._personService.insert('persons', request).subscribe(data => {
        this._sweetAlertService.success();
        this._dialog.closeAll();
    }, err => {
      if(err.status === 400) {
       return this._sweetAlertService.customMessage(err.error.errors.Name[0] ?? 'Ocurrio un error, consulte con soporte');
      }
        this._sweetAlertService.error();
    })
  }
}
