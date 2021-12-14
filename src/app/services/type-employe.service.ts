import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { TypeEmployeModel } from '../Models/type-employe';

@Injectable({
  providedIn: 'root'
})
export class TypeEmployeService {

  url = environment.baseUrl + '/type_employes/';
  constructor(private http: HttpClient) { }
  post(data: TypeEmployeModel) {
    return this.http.post<TypeEmployeModel>(`${this.url}`, data);
  }
  getAll() {
    return this.http.get<TypeEmployeModel[]>(this.url);
  }

  getById(id: string) {
    return this.http.get<TypeEmployeModel>(this.url + id);

  }

  update(data: TypeEmployeModel, id: number) {
    return this.http.put<TypeEmployeModel>(this.url + id, data);
  }
  delete(id: number) {
    return this.http.delete<TypeEmployeModel>(this.url + id);
  }
}
