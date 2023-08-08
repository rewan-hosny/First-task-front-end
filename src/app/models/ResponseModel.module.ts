export class DataCsv {
    headers: string[] = [];
    rows: string[][] = [];
}

export class ResponseModel {
    dataFile: DataCsv = new DataCsv();
    excelDownloadLink: string = '';
}
