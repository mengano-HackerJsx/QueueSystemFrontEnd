import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BaseService<T,W> {

  base_url: string = '/api';

  public constructor(
    protected _http: HttpClient
  ) { }

  public getAll(_controlName: string): Observable<T[]> {
    return this._http.get<T[]>(`${this.base_url}/${_controlName}`);
  }

  public getByQuery(_controlName: string,query: string): Observable<any> {
    return this._http.get<any>(`${this.base_url}/${_controlName}/Query?${query}`);
  }

  public findbyId(_controlName: string,id: number): Observable<T> {
    return this._http.get<T>(`${this.base_url}/${_controlName}/${id}`);
  }

  public customFindbyId(_controlName: string,id: number, _otherControl: string): Observable<T> {
    return this._http.get<T>(`${this.base_url}/${_controlName}/${id} ${_otherControl}`);
  }

  public insert(_controlName: string,item: W): Observable<T> {
    return this._http.post<T>(`${this.base_url}/${_controlName}`, item);
  }

  public update(_controlName: string,id: number,item: W): Observable<T> {
    return this._http.put<T>(`${this.base_url}/${_controlName}/${id}`, item);
  }

  public delete(_controlName: string,id: number): Observable<T> {
    return this._http.delete<T>(`${this.base_url}/${_controlName}/${id}`);
  }
}