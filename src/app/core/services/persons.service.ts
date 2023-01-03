import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Person } from "app/shared/models/person";
import { BaseService } from "../base.service";

@Injectable({
    providedIn: 'root'
  })
export class PersonService extends BaseService<Person,Person> {

    constructor(
        _http: HttpClient
    ) {
        super(_http)
    }

}