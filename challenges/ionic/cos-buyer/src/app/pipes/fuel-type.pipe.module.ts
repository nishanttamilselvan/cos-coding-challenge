import { NgModule } from "@angular/core";
import { IonicModule } from "@ionic/angular";
import { FuelTypePipe } from "./fuel-type.pipe";

@NgModule({
    declarations: [FuelTypePipe],
    imports: [IonicModule],
    exports: [FuelTypePipe]
})
export class FuelTypeModule {}