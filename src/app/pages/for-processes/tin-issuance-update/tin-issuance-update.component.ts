import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddtinComponent } from 'src/app/modal/addtin/addtin.component';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-tin-issuance-update',
  templateUrl: './tin-issuance-update.component.html',
  styleUrls: ['./tin-issuance-update.component.scss']
})
export class TinIssuanceUpdateComponent {
  allUsers: any[];
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
  users: any[];
  dtOptions: any = {};

  constructor(public dialog: MatDialog, private api: DataService) {}

  openDialog(
    enterAnimationDuration: string,
    exitAnimationDuration: string
  ): void {
    const dialogRef = this.dialog.open(AddtinComponent, {
      width: '100%',
      enterAnimationDuration,
      exitAnimationDuration,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
  
  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'simple_numbers',
      pageLength: 10,
      // serverSide: true,
      processing: true,
      autoWidth: false,
      scrollX: true,
      select: true,
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

        {
          extend: 'excelHtml5',
          text: '<i class="bi bi-file-earmark-excel"></i>',
          titleAttr: 'Export to Excel',
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
          titleAttr: 'Export to PDF',
          exportOptions: {
            columns: ':visible',
            rows: ':visible',
          },
        },
        // {
        //   extend: 'spacer',
        // },
        // {
        //   extend: 'collection',
        //   text: 'Overall',
        //   buttons: [
        //     {
        //       text: 'Non-Individual',
        //       action: function () {},
        //     },
        //     {
        //       text: 'Individual',
        //       action: function () {},
        //     },
        //   ],
        // },
        // {
        //   text: 'Edit',
        //   action: function () {},
        // },
        // {
        //   text: 'Delete',
        //   action: function () {},
        // },
      ],
      ajax: (dataTablesParameters: any, callback: any) => {
        this.api.getdummydata().subscribe((res: any) => {
          (dataTablesParameters = {}),
            callback({
              recordsTotal: res.recordsTotal,
              recordsFiltered: res.recordsFiltered,
              data: res.users,
            });
          return this.users;
        });
      },
      columns: [
        { data: 'id' },
        { data: null, defaultContent: "Paid" },
        { data: null, defaultContent: "Paid" },
        { data: null, defaultContent: "Paid" },
        { data: null, defaultContent: "-" },
        { data: null, defaultContent: "-" },
        { data: 'email' },
        { data: 'phone' },
        { data: null, defaultContent: "-" },
        // {
        //   defaultContent: '<button type="button" class="btn btn-dark"> <i class="bi bi-pencil"></i></button>',
        //   action: function () {}
        // },
        // {
        //   defaultContent: '<button type="button" class="btn btn-primary"><i class="bi bi-eye"></i></button>',
        //   action: function () {}
        // },
        // {
        //   defaultContent: '<button type="button" class="btn btn-danger"><i class="bi bi-trash"></i></button>',
        //   action: function () {}
        // },
      ],
    };
  }
}
