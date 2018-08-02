import { NgModule} from '@angular/core';
import { MatToolbarModule, MatCardModule, MatSidenavModule, MatIconModule, MatListModule} from '@angular/material';

@NgModule({
    exports:[ MatToolbarModule, MatCardModule, MatSidenavModule, MatIconModule, MatListModule ]
})

export class MatModule { }