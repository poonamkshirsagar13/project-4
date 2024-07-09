import {AfterViewInit, Component, ViewChild} from '@angular/core';
import { AllServiceService } from 'src/app/service/all-service.service';
import {MatPaginator, MatPaginatorModule, PageEvent} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { Router } from '@angular/router';
import { elementAt } from 'rxjs';
import { MatSort, Sort} from '@angular/material/sort';

export interface PeriodicElement {
  productName: string;
  id: number;
  price: number;
  product: string;
  department:string;
}

@Component({
  selector: 'app-gold',
  templateUrl: './gold.component.html',
  styleUrls: ['./gold.component.css']
})
export class GoldComponent {
  displayedColumns: string[] = ['id', 'productName', 'price', 'product','department'];
  dataSource = new MatTableDataSource<any>([]);

  paginator!: MatPaginator;
  @ViewChild(MatPaginator, { static: false })
  set mtPaginator(value: MatPaginator) {
    this.paginator = value;
    this.setDataSourceAttributes();
  }
  @ViewChild(MatSort, { static: true }) sort = new MatSort();

  // @ViewChild(MatSort) set matSort(sort: MatSort) {
  //   this.setDataSourceAttributes();
  // }
  
  currentPage = 0;
  totalRows = 0;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25];

  constructor(private allServiceService:AllServiceService,private router: Router ){}
  ngOnInit(): void {
    this.loadData();
  }  

  setDataSourceAttributes() {
    this.dataSource.paginator = this.paginator;
  }

  loadData() {
    console.log('loadData');
    this.allServiceService.tableData(this.sort?.active ?? 'id', this.sort?.direction ?? 'asc', this.currentPage).subscribe((resp)=>{
      this.dataSource = new MatTableDataSource<PeriodicElement>(resp.data);
      this.paginator.pageIndex = resp.page;
      this.paginator.length = resp.totalRows;
      this.totalRows = resp.totalRows;
      console.log('loadData', resp)
    });
  }

  onSortChanged(event: Sort) {
    console.log('onSortChanged:', event.active, ":", event.direction)
    this.sort.active = event.active;
    this.sort.direction = event.direction;
    this.loadData();
  }

  onPageChanged(event: PageEvent) {
    console.log('onPageChanged', event)
    this.currentPage = event.pageIndex;
    this.loadData();
  }
  selectProduct(id:number){
    console.log("select",id)
    this.router.navigate(['/pro-detail'], { queryParams: {id}})

  }

}
