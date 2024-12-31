import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {IData} from '../interface/app.model';



@Component({
  selector: 'app-exhibitions',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './exhibitions.component.html',
  styleUrl: './exhibitions.component.css'
})
export class ExhibitionsComponent {
  data : any
  constructor(private router: Router) {
    this.data = JSON.parse(localStorage.getItem('exhibitionData') || '{}');
    console.log(this.data);
  }



  onCreate() {
    this.router.navigate(['/new-ex']);
  }
  OnClickView(){
    this.router.navigate(['/view-ex']);
  }
  onClickEdit(){
    this.router.navigate(['/preview-ex']);
  }




// getDataFromLocalStorage<T>(key: string): T | null {
//   const data = localStorage.getItem(key);
//   return data ? JSON.parse(data) as T : null;
// }


// ngOnInit() {
//   const Data = this.getDataFromLocalStorage<IData>('exhibitionData');
//   if (Data) {
//       console.log(Data.id, Data.title, Data.description);
//   } else {
//       console.log('No data found for the given key.');
//   }
// }
}
