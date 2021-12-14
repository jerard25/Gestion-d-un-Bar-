import { Component, OnInit } from '@angular/core';
import { TypeEmployeModel } from 'src/app/Models/type-employe';
import { TypeEmployeService } from 'src/app/services/type-employe.service';
import { FormBuilder,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-type-employe',
  templateUrl: './type-employe.component.html',
  styleUrls: ['./type-employe.component.css']
})
export class TypeEmployeComponent implements OnInit {
  formValue !: FormGroup;
  typeEmployeModelObject: TypeEmployeModel= new TypeEmployeModel();
  typeEmployeData !: any;
  showAdd!: boolean;
  showUpdate!: boolean;

  //row
  rowTypeEmploye: TypeEmployeModel = new TypeEmployeModel();

  constructor(private formbuilder: FormBuilder,
     private typeEmployeService: TypeEmployeService) { }

  ngOnInit(): void {

    this.formValue = this.formbuilder.group({
      nom: [''],
    
    })
    this.getAllTypeEmployes();
  }

  clickAddTypeEmploye() {
    this.formValue.reset();
    this.showAdd = true;
    this.showUpdate = false;

  }
  postTypeEmployeDetails() {
    this.typeEmployeModelObject = this.formValue.value;


    this.typeEmployeService.post(this.typeEmployeModelObject)
      .subscribe((res: any) => {
        console.log(res);
        alert("type employe Added successfully")
        let ref = document.getElementById('cancel')
        ref?.click();

        this.formValue.reset();
        this.getAllTypeEmployes();
      },
        (err: any) => {
          alert("something went wrong")
        })
  }
  getAllTypeEmployes() {

    this.typeEmployeService.getAll()

      .subscribe(res => {
        console.log(res);

        this.typeEmployeData = res;
      })
  }



  deleteTypeEmploye(row: any) {
    this.typeEmployeService.delete(row.id)
      .subscribe(res => {
        alert("type employe Deleted")
        this.getAllTypeEmployes();
      })
  }
  onEdit(row: any) {
    this.showAdd = false;
    this.showUpdate = true;
    this.typeEmployeModelObject.id = row.id;
    this.formValue.controls['nom'].setValue(row.nom);
    
  }
  updateTypeEmployeDetails() {
    this.typeEmployeModelObject.nom = this.formValue.value.nom;

    this.typeEmployeService.update(this.typeEmployeModelObject, this.typeEmployeModelObject.id)
      .subscribe((res: TypeEmployeModel) => {

        alert("Updated successfully");
        let ref = document.getElementById('cancel')
        ref?.click();

        this.formValue.reset();
        this.getAllTypeEmployes();

      })
  }

}
