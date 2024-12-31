import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path : '',
    loadComponent : ()=>
      import('./exhibitions/exhibitions.component').then(
        (m) =>m.ExhibitionsComponent,
      ),
      data :{
        breadcrumb : 'Exhibition Component'
      }
  },
  {
    path : 'new-ex',
    loadComponent : ()=>
      import('./new-exhibition/new-exhibition.component').then(
        (m) =>m.NewExhibitionComponent,
      ),
  },
  {
    path : 'preview-ex',
    loadComponent : ()=>
      import('./new-exhibition/preview-exhibition/preview-exhibition.component').then(
        (m) =>m.PreviewExhibitionComponent,
      ),
  },
  {
    path : 'view-ex',
    loadComponent : ()=>
      import('./view-exhibition/view-exhibition.component').then(
        (m) =>m.ViewExhibitionComponent,
      ),
  },
];
