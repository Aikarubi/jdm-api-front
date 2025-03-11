import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { HomeComponent } from './views/home/home.component';
import { DocsLayoutComponent } from './layouts/docs-layout/docs-layout.component';
import { DocsComponent } from './views/docs/docs.component';

export const routes: Routes = [

    {
        path: '',
        component: MainLayoutComponent,
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
        ]
    },
    {
        path: 'dcos',
        component: DocsLayoutComponent,
        children: [
            { path: '', component: DocsComponent },
        ]
    }
];
