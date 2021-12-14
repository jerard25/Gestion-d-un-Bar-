import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ProduitModel } from '../Models/produit';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  url = environment.baseUrl + '/produits/';
  constructor(private http: HttpClient) { }
  post(data: ProduitModel) {
    return this.http.post<ProduitModel>(`${this.url}`, data); 
  }
  getAll() {
    return this.http.get<ProduitModel[]>(this.url);
  }

  getById(id: string) {
    return this.http.get<ProduitModel>(this.url + id);

  }

  update(data: ProduitModel, id: number) {
    return this.http.put<ProduitModel>(this.url + id, data);
  }
  delete(id: number) {
    return this.http.delete<ProduitModel>(this.url + id);
  }
}
