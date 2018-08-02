import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

@NgModule({
    imports: [
        CommonModule,
        SharedModule
    ],
    declarations: [DashboardComponent, NotFoundComponent]
})

export  class CoreModule {}
