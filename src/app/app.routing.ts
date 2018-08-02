import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './core/pages/dashboard/dashboard.component';
import { NotFoundComponent } from './core/pages/not-found/not-found.component';
import { productRoutes } from './products/movies.routing';

const routes: Routes = [
    {path: '', component: DashboardComponent, children: [
        ...productRoutes
    ]},
    {path: '**', component:NotFoundComponent}
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRouting {}