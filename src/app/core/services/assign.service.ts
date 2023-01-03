import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AssignLines } from "app/shared/models/assign";
import { Queues } from "app/shared/models/queues";
import { BaseService } from "../base.service";

@Injectable({
    providedIn: 'root'
  })
export class AssignService extends BaseService<AssignLines,AssignLines> {

    constructor(
        _http: HttpClient
    ) {
        super(_http)
    }

}