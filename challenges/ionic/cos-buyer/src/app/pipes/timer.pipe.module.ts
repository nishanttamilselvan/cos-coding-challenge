import { NgModule } from "@angular/core";
import { IonicModule } from "@ionic/angular";
import { TimerPipe } from "./timer.pipe";

@NgModule({
    declarations: [TimerPipe],
    imports: [IonicModule],
    exports: [TimerPipe]
})
export class TimerPipeModule {}