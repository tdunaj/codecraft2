import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'clean'
})
export class CleanPipe implements PipeTransform {
  transform(value: string, args?: string): string {
    let badWords = args.split(',');
    //badWords.forEach(x => console.log(x));
    //badWords.forEach(x => value = value.replace(x, '$%@!'), console.log(value));
    badWords.forEach(x => value = value.replace(x, '$%@!'));
    return value;
  }
}
