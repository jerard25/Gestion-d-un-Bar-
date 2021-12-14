import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { FournisseurModel } from '../Models/fournisseur';

@Injectable({
  providedIn: 'root'
})
export class FournisseurService {
    url = environment.baseUrl + '/fournisseurs/';
    constructor(private http: HttpClient) { }
    post(data: FournisseurModel) {
      return this.http.post<FournisseurModel>(`${this.url}`, data);
    }
    getAll() {
      return this.http.get<FournisseurModel[]>(this.url);
    }
  
    getById(id: string) {
      return this.http.get<FournisseurModel>(this.url + id);
  
    }
  
    update(data: FournisseurModel, id: number) {
      return this.http.put<FournisseurModel>(this.url + id, data);
    }
    delete(id: number) {
      return this.http.delete<FournisseurModel>(this.url + id);
    }
}
