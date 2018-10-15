import { Injectable } from '@angular/core';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
import { Binary } from '@angular/compiler';

const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';
@Injectable({
  providedIn: 'root'
})
export class ExcelService {

  constructor() { }
  public exportAsExcelFile(json: any, excelFileName: string): void {
    console.log(json);
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(json);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    // if (!wb.Props) { wb.Props = {}; }
    // wb.Props.Title = 'Insert Title Here';
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    /* save to file */
    XLSX.writeFile(wb, 'SheetJS.xlsx');
  }
}
