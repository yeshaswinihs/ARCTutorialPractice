import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'highlight'
})
export class HighlightPipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) { }

  transform(value: string, cityCode: string): any {
    // if (city === "New York") {
    //   return "Big Apple";
    // }
    // return 'city name : ' + city;

    if (cityCode === 'NY' || cityCode === 'NJ') {
      return this.sanitizer.bypassSecurityTrustHtml('<div style="background-color:#ffffcc">' + cityCode + '</div>');
    } else {
      return this.sanitizer.bypassSecurityTrustHtml('<div style="background-color:lightgreen">' + cityCode + '</div>');

    }


  }

}
