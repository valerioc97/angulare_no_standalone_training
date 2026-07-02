import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'testoCustom',
  standalone: false,
})
export class TestoCustomPipe implements PipeTransform {
  transform(value: string, suffix: string): string {
    return value.concat(suffix);
  }
}
