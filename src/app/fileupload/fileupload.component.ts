import { Component, OnInit } from '@angular/core';
import { HttpService } from '../service/http.service';

@Component({
  selector: 'app-fileupload',
  templateUrl: './fileupload.component.html',
  styleUrls: ['./fileupload.component.css']
})
export class FileuploadComponent implements OnInit {
  selectedFile: File = null;

  constructor(private httpService: HttpService) { }

  ngOnInit() {
  }

  uploadFile(event){
    this.selectedFile = <File>event.target.file[0];
    const fd = new FormData();
    fd.append('image',this.selectedFile,this.selectedFile.name);
    this.httpService.uploadfile(fd).subscribe(data =>{
      console.log("data",data);
      
    });
  }

}
