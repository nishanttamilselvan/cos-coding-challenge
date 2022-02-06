import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transmission'
})
export class TransmissionPipe implements PipeTransform {

  transform(value: number): string {
    switch (value) {
      case 0:
        return 'Manual';
      case 1:
        return 'Automatic';
      default:
        return 'Unknown';
    }

  }

}
