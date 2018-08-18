import {Component, Input, OnInit} from '@angular/core';
import { Http, Headers ,ResponseContentType } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { saveAs } from 'file-saver/FileSaver';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private http: HttpClient) {

  }

  ngOnInit() {
  }

  downloadFile() {
    const headers1 = new HttpHeaders().set("Content-Type", "application/blob");
    console.log("#######################################333333");
    return this.http
     // .get<Blob>('http://localhost:4200/assets/sample.pdf'
      .get('http://localhost:4200/assets/sample.pdf',{headers: headers1,responseType : 'blob'}
        //, {
       // responseType: ResponseContentType.Blob,
        //search: // query string if have
     // }
      )
      .map(res => {
        return {
          filename: 'sample.pdf',
          data: res
        };
      })
      .subscribe(res => {
        console.log('start download:', res);
        var url = window.URL.createObjectURL(res.data);
        var a = document.createElement('a');
        document.body.appendChild(a);
        a.setAttribute('style', 'display: none');
        a.href = url;
        a.download = res.filename;
        a.click();
        window.URL.revokeObjectURL(url);
        a.remove(); // remove the element
      }, error => {
        console.log('download error:', JSON.stringify(error));
      }, () => {
        console.log('Completed file download.')
      });

  }
}
