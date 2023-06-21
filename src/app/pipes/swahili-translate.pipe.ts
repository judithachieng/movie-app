import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'swahiliTranslate'
})
export class SwahiliTranslatePipe implements PipeTransform {

  transform(value: string): string {
    const keywords = ['Fast', 'Family', 'Rings'];
    const translations: { [key: string]: string } = {
      'Fast': 'Haraka',
      'Family': 'Familia',
      'Rings': 'Machozi'
    };

    const keywordFound = keywords.find(keyword => value.includes(keyword));

    if (keywordFound) {
      return value.replace(keywordFound, translations[keywordFound]);
    }

    return value;
  }
}

