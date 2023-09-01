import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddrecordComponent } from 'src/app/modal/addrecord/addrecord.component';
import { HttpClient, HttpResponse } from '@angular/common/http';

class DataTablesResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}

@Component({
  selector: 'app-c1601',
  templateUrl: './c1601.component.html',
  styleUrls: ['./c1601.component.scss'],
})
export class C1601Component implements OnInit {
  
  constructor(public dialog: MatDialog, private http: HttpClient) {}

  openDialog(
    enterAnimationDuration: string,
    exitAnimationDuration: string
  ): void {
    const dialogRef = this.dialog.open(AddrecordComponent, {
      width: '100%',
      enterAnimationDuration,
      exitAnimationDuration,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  allUsers: any[];
  dtOptions: any = {};

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'simple_numbers',
      pageLength: 10,
      serverSide: true,
      processing: true,
      autoWidth: false,
      lengthMenu: [
        [10, 15, 20, -1],
        ['10 rows', '15 rows', '20 rows', 'Show all'],
      ],
      language: {
        buttons: {
          pageLength: {
            // _: "Show %d rows",
            '10': '10 rows',
            '15': '15 rows',
            '20': '20 rows',
            '-1': 'All rows',
          },
        },
      },
      dom: 'Bfrtip',
      buttons: [
        {
          extend: 'pageLength',
          titleAttr: 'Filter Rows',
        },
        // {
        //   extend: 'spacer',
        // },
        {
          extend: 'excelHtml5',
          text: '<i class="bi bi-file-earmark-excel"></i>',
          titleAttr: 'Excel',
          autoFilter: true,
        },
        {
          extend: 'print',
          text: '<i class="bi bi-printer"></i>',
          titleAttr: 'Print',
        },
        {
          extend: 'pdfHtml5',
          text: '<i class="bi bi-file-earmark-pdf"></i>',
          titleAttr: 'PDF',
        },
      ],
      ajax: (dataTablesParameters: any, callback: ({}) => void) => {
        this.http
          .post<DataTablesResponse>(
            'https://xtlncifojk.eu07.qoddiapp.com/',
            dataTablesParameters,
            {}
          )
          .subscribe((res) => {
            this.allUsers = res.data;

            callback({
              recordsTotal: res.recordsTotal,
              recordsFiltered: res.recordsFiltered,
              data: [],
            });
            return true;
          });
      },
      columns: [
        { data: 'id' },
        { data: 'firstName' },
        { data: 'lastName' },
        { data: 'contact' },
        { data: 'business' },
        { data: 'date' },
      ],
      select: true,
    };
  }
}
