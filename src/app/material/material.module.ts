import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule } from '@angular/material/card';

const MaterialComponents = [MatButtonModule, MatSliderModule, MatCardModule];

@NgModule({
    imports: [MaterialComponents],
    exports: [MaterialComponents],
})
export class MaterialModule {}
