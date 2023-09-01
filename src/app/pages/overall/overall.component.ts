import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-overall',
  templateUrl: './overall.component.html',
  styleUrls: ['./overall.component.scss'],
})
export class OverallComponent implements OnInit {
  allUsers: any[];
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
  users: any[];
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
        this.api.getdata().subscribe((res: any) => {
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
        { data: 'ssn' },
        {
          data: { firstName: 'firstName', lastName: 'lastName' },
          mRender: function (data, type, full) {
            return data.firstName + ' ' + data.lastName;
          },
        },
        { data: 'phone' },
        {
          data: { address: 'address', city: 'city' },
          mRender: function (data, type, full) {
            return data.address.address + ', ' + data.address.city;
          },
        },
        { data: 'birthDate' },
        { data: 'company.name' },
        { data: 'company.department' },
        { data: 'height' },
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
