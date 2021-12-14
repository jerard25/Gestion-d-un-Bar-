import { Component, OnInit } from '@angular/core';
import { FournisseurModel} from 'src/app/Models/fournisseur';
import { FormBuilder,FormGroup } from '@angular/forms';
import { FournisseurService } from 'src/app/services/fournisseur.service';


@Component({
  selector: 'app-fournisseur',
  templateUrl: './fournisseur.component.html',
  styleUrls: ['./fournisseur.component.css']
})
export class FournisseurComponent implements OnInit {

  formValue !: FormGroup;
  fournisseurModelObject: FournisseurModel = new FournisseurModel();
  fournisseurData !: any;
  showAdd!: boolean;
  showUpdate!: boolean;

  //row
  rowFournisseur: FournisseurModel = new FournisseurModel();

  constructor(private formbuilder: FormBuilder,
     private fournisseurService: FournisseurService) { }

  ngOnInit(): void {

    this.formValue = this.formbuilder.group({
      nom: [''],
      prenom: [''],
      date: [''],
      address: [''],
  
    })
    this.getAllFournisseurs();
  }

  clickAddFournisseur() {
    this.formValue.reset();
    this.showAdd = true;
    this.showUpdate = false;

  }
  postFournisseurDetails() {
    this.fournisseurModelObject = this.formValue.value;


    this.fournisseurService.post(this.fournisseurModelObject)
      .subscribe((res: any) => {
        console.log(res);
        alert("supplier Added successfully")
        let ref = document.getElementById('cancel')
        ref?.click();

        this.formValue.reset();
        this.getAllFournisseurs();
      },
        (err: any) => {
          alert("something went wrong")
        })
  }
  getAllFournisseurs() {

    this.fournisseurService.getAll()

      .subscribe(res => {
        console.log(res);

        this.fournisseurData = res;
      })
  }



  deleteFournisseur(row: any) {
    this.fournisseurService.delete(row.id)
      .subscribe(res => {
        alert("supplier Deleted")
        this.getAllFournisseurs();
      })
  }
  onEdit(row: any) {
    this.showAdd = false;
    this.showUpdate = true;
    this.fournisseurModelObject.id = row.id;
    this.formValue.controls['nom'].setValue(row.nom);
    this.formValue.controls['prenom'].setValue(row.prenom);
    this.formValue.controls['date'].setValue(row.date);
    this.formValue.controls['address'].setValue(row.address);


  }
  updateFournisseurDetails() {
    this.fournisseurModelObject.nom = this.formValue.value.nom;
    this.fournisseurModelObject.prenom = this.formValue.value.prenom;
    this.fournisseurModelObject.date = this.formValue.value.date;
    this.fournisseurModelObject.address = (this.formValue.value.address);


    this.fournisseurService.update(this.fournisseurModelObject, this.fournisseurModelObject.id)
      .subscribe((res: FournisseurModel) => {

        alert("Updated successfully");
        let ref = document.getElementById('cancel')
        ref?.click();

        this.formValue.reset();
        this.getAllFournisseurs();

      })
  }

 

  
  
}


