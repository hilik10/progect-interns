export class FileUpload {
    key?: string;
  name: string;
  url: string;
  file: File;
_id?:string;
supervisor_id?:string
intern_id:string;
urlfile?:string;
  constructor(file: File) {
    this.file = file;
  }
}
