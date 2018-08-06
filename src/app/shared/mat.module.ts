import { NgModule} from '@angular/core';
import { MatButtonModule, MatToolbarModule, MatCardModule, MatSidenavModule, MatIconModule, MatListModule} from '@angular/material';

@NgModule({
    imports: [MatButtonModule, MatToolbarModule, MatCardModule, MatSidenavModule, MatIconModule, MatListModule ],
    exports: [MatButtonModule, MatToolbarModule, MatCardModule, MatSidenavModule, MatIconModule, MatListModule ]
})

export class MatModule {}