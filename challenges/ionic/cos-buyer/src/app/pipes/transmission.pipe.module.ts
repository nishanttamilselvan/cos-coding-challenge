import { NgModule } from "@angular/core";
import { IonicModule } from "@ionic/angular";
import { TransmissionPipe } from "./transmission.pipe";

@NgModule({
    declarations: [TransmissionPipe],
    imports: [IonicModule],
    exports: [TransmissionPipe]
})
export class TransmissionPipeModule {}