import { Injectable } from '@angular/core';

import htmlToImage from 'html-to-image';


@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor() { }

  public captureScreen(htmlNode) {
    htmlToImage.toPng(htmlNode)
      .then(function (dataUrl) {
        var link = document.createElement('a');
        link.download = 'resume.png';
        link.href = dataUrl;
        link.click();
      });
  }
}
