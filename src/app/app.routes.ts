import { Routes } from '@angular/router';
import { LoginComponent } from './pages/comonents/login/login.component';
import { MoviesListComponent } from './pages/comonents/movies-list/movies-list.component';

export const routes: Routes = [
    {
        path: '',
        component: MoviesListComponent

    }
    , {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'movies',
        component: MoviesListComponent

    }

];
