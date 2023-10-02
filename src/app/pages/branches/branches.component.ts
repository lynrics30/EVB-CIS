import { Component } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-branches',
  templateUrl: './branches.component.html',
  styleUrls: ['./branches.component.scss'],
})
export class BranchesComponent {
  allUsers: any[];
  data: any[];
  dtOptions: any = {};

  constructor(private api: DataService) {}

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
        {
          extend: 'spacer',
        },
        {
          text: 'Edit',
          action: (e, dt, node, config) => {
            const selectedRowData = dt.rows({ selected: true }).data()[0];
            if (selectedRowData) {
            }
          }
        },
        {
          text: 'Delete',
          action: function () {},
        },
      ],
      ajax: (dataTablesParameters: any, callback: any) => {
        this.api.getAll().subscribe((res) => {
          (dataTablesParameters = {}),
            callback({
              data: res,
            });
          return this.data;
        });
      },
      columns: [
        { data: 'id' },
        { data: 'branch' },
        { data: 'department' },
        { data: 'fullname' },
        { data: 'role' },
      ],
    };
  }
}
