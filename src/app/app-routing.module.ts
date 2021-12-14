import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { ProduitComponent } from './pages/produit/produit.component';
import { EmployeComponent } from './pages/employe/employe.component';
import { FournisseurComponent } from './pages/fournisseur/fournisseur.component';
import { TypeEmployeComponent } from './pages/type-employe/type-employe.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';


const routes:  Routes= [
  {path: 'produits', component: ProduitComponent},
  {path: 'employes', component: EmployeComponent},
  {path: 'fournisseurs', component: FournisseurComponent},
  {path: 'type_employes', component: TypeEmployeComponent},
  {path: '', component: WelcomeComponent},



]
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ProduitComponent,FournisseurComponent,EmployeComponent,TypeEmployeComponent, WelcomeComponent]