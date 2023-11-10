import { AfterViewInit, Component, ViewChild, Inject } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { CreateDataDialog } from '../create-data-dialog/create-data-dialog.component';
import { UpdateDataDialog } from '../update-data-dialog/update-data-dialog.component';
import { DeleteDataDialogComponent } from '../delete-data-dialog/delete-data-dialog.component';


export interface ProductData {
    id: string,
    name: string,
    price: string,
    dueDate: Date,
    quantity: number,
    perishable: boolean,
    actions: string[],
}

const PRODUCT: string[] = [
    'Playstation 5',
    '900.00',
    '2023-11-13',
    '20',
    'false',
];

@Component({
    selector: 'app-data-table-component',
    templateUrl: './data-table.component.html',
    styleUrls: ['./data-table.component.css'],
    standalone: true,
    imports: [
        MatFormFieldModule,
        MatInputModule,
        MatTableModule,
        MatSortModule,
        MatPaginatorModule,
        MatDividerModule,
        MatIconModule,
        MatButtonModule,
        MatDialogModule,
        CreateDataDialog,
        DeleteDataDialogComponent
    ]
})


export class DataTableComponent implements AfterViewInit {
    displayedColumns: string[] = ['id', 'name', 'price', 'dueDate', 'quantity', 'perishable', 'actions'];
    dataSource: MatTableDataSource<ProductData>;

    @ViewChild(MatPaginator) paginator!: MatPaginator;
    @ViewChild(MatSort) sort!: MatSort;

    constructor(public dialog: MatDialog, private http: HttpClient) {
        const product = Array.from({ length: 100 }, (_, k) => createNewProduct(k + 1));

        this.dataSource = new MatTableDataSource(product);



    }
    ngOnInit() {
        this.fetchData();
    }
    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }

    applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filter = filterValue.trim().toLowerCase();

        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }
    fetchData() {
        const url = 'http://localhost:8000/api/getProducts';

        this.http.get(url).subscribe((data: any) => {
            // Processar os dados recebidos
            //console.log(data);
            this.dataSource.data = data;
        });
    }
    newProductDialog() {
        const dialogRef = this.dialog.open(CreateDataDialog, {
            data: {
                name: ''
            },
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('resultado do diálogo', result);
        });
    }
    updateProductDialog(
        id: string,
        name: string,
        price: string,
        dueDate: Date,
        quantity: number,
        perishable: boolean
    ) {
        const dialogRef = this.dialog.open(UpdateDataDialog, {
            data: {
                id: id,
                name: name,
                price: price,
                dueDate: dueDate,
                quantity: quantity,
                perishable: perishable,
            }
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log('resultado do dialogo', result);
        });
    }
    deleteProductDialog(id: string) {
        const dialogRef = this.dialog.open(DeleteDataDialogComponent, {
            data: {
                id: id,
            }
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log('resultado do dialogo', result);
        });
    }

}



function createNewProduct(id: number): ProductData {
   

    return {
        id: id.toString(),
        name: 'name',
        price: '20.00',
        dueDate: new Date('2023-12-05'),
        quantity: 10,
        perishable: true,
        actions: ['Edit', 'Remove'],
    }
}

