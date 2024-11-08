import { Routes } from '@angular/router';
import { PostsComponent } from './posts/posts.component';
import { PrestamosComponent } from './prestamos/prestamos.component';

export const routes: Routes = [
    {
        path: 'posts', 
        component: PostsComponent 
    },
    {
        path: 'prestamos', 
        component: PrestamosComponent
    }
];
