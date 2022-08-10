import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
    // data_arr = [];

    constructor(private dataService: DataService) {}

    ngOnInit(): void {
        this.dataService.getData().subscribe((data: Data) => {});
    }
}
