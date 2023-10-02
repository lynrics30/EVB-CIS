import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddrecordComponent } from 'src/app/modal/addrecord/addrecord.component';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-q2551',
  templateUrl: './q2551.component.html',
  styleUrls: ['./q2551.component.scss'],
})
export class Q2551Component {
  constructor(public dialog: MatDialog, private api: DataService) {}

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

  dtOptions: any = {};
  results: any = [];

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'simple_numbers',
      pageLength: 10,
      processing: true,
      scrollX: true,
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
          exportOptions: {
            columns: ':visible',
            rows: ':visible',
          },
        },
        {
          extend: 'print',
          text: '<i class="bi bi-printer"></i>',
          titleAttr: 'Print',
          exportOptions: {
            columns: ':visible',
            rows: ':visible',
          },
        },
        {
          extend: 'pdfHtml5',
          text: '<i class="bi bi-file-earmark-pdf"></i>',
          titleAttr: 'PDF',
          exportOptions: {
            columns: ':visible',
            rows: ':visible',
          },
        },
      ],
      ajax: (dataTablesParameters: any, callback: ({}) => void) => {
        this.api.getdummyuser().subscribe((res: any) => {
          (dataTablesParameters = {}),
            callback({
              recordsTotal: res.recordsTotal,
              recordsFiltered: res.recordsFiltered,
              data: res.results,
            });
          return this;
        });
      },
      columns: [
        { data: 'registered.age' },
        { data: 'location.street.number' },
        {
          data: { first: 'first', last: 'last' },
          mRender: function (
            data: { name: { title: string; first: string; last: string } },
            type: any,
            full: any
          ) {
            return (
              data.name.title + '. ' + data.name.first + ' ' + data.name.last
            );
          },
        },
        { data: null, defaultContent: '-' },
        { data: 'location.postcode' },
        { data: 'location.street.number' },
        { data: 'location.coordinates.latitude' },
        { data: null, defaultContent: '-' },
      ],
      select: true,
    };
  }
}
