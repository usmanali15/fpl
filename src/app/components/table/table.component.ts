import { Component, OnInit, ViewChild, AfterViewInit, OnChanges, SimpleChanges } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Data } from '../../data/data';
import {MatTableDataSource} from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.scss'],
})
export class TableComponent {
    data: Data[] = [];
    columnsToDisplay: string[] = ['first_name', 'now_cost', 'ep_next', 'points_per_game', 'total_points'];
    dataSource = new MatTableDataSource(this.data);
    @ViewChild(MatPaginator) paginator!: MatPaginator;
    @ViewChild(MatSort, { static: false }) sort!: MatSort;

    public handleFilter = (event: KeyboardEvent) => {
        const filterValue = (event.target as HTMLInputElement).value
        this.dataSource.filter = filterValue.trim().toLocaleLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }

    constructor(private dataService: DataService) {
        this.dataService.getPlayersData().subscribe((data) => {
            this.data = data;
            this.dataSource = new MatTableDataSource(this.data);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort
        });
    }
}
