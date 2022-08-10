import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Data } from '../../data/data';

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
    // data_arr = [];
    data: Data[] = [];

    constructor(private dataService: DataService) {}

    ngOnInit(): void {
        this.dataService.getData().subscribe((data) => {
            this.data = data;
            console.log(data);
            console.log(this.data);
        });
        console.log('table data', this.data);
    }
}
