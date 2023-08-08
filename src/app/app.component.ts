import { Component } from '@angular/core';
import { DataService } from './services/data.service';
import { ResponseModel } from './models/ResponseModel.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first-task';
  file: File | undefined;
  isDownloadable: boolean = false; 

  errorMessage: string | null = null; // Add this property

  responseModel: ResponseModel = new ResponseModel();
  constructor(private dataService: DataService) { }
  ngOnInit(): void {
    this.UploadFileCsv();
  }

  onFileSelected(event: any) {
    this.file = event.target.files[0]; 
    this.UploadFileCsv();
  }

  UploadFileCsv(): void {
    if (this.file) {
      this.dataService.uploadCsv(this.file).subscribe(
        (response) => {
          this.responseModel = response;
          this.errorMessage = "";
          console.log('API Response:', response);
          this.isDownloadable = true;
  
        },
        (error) => {
          console.error('API Error:', error);
          this.errorMessage = error.error.error;
      
        }
      );
    } 
  }
}
