import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fuelType'
})
export class FuelTypePipe implements PipeTransform {

  transform(value: number): string {
    switch (value) {
      case -1:
        return "Unbekannt"
      case 0:
        return "Benzin";
      case 1:
        return "Diesel";
      case 2:
        return "Hybrid";
      case 3:
        return "Elektrisch";
      case 4:
        return "Autogas";
      case 5:
        return "Andere";
      case 6:
        return "Erdgas/CNG";
      case 7:
        return "Wasserstoff";
      default:
        return "Unbekannt";

    }
  }

}
