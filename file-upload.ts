import { Http, Headers, RequestOptions } from '@angular/http';

changeInputText($event) {
  const name = $event.target.value;
  this.fileName = name.substring(name.lastIndexOf('\\') + 1);
  const files = $event.target.files || $event.srcElement.files;
  this.file = files[0];
  this.typeFile = this.file;
  this.uploadFile();
}

uploadFile() {
  const formData = new FormData();
  formData.append('carga', this.file);

  const headers = new Headers({});
  headers.append('Authorization', 'Bearer ' +  this.tokenTEMM);
  const options = new RequestOptions({ headers });
  const url = this.urlTEMM + ('employees/upload');

  this.http.post(url, formData, options).subscribe(
    data => {
      console.log(data);
  },
    err => {
      console.log(err);
  });

}
