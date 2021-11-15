import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { AlertService } from 'src/app/helpers/alert.service';
import { ConfirmModalComponent } from 'src/app/helpers/confirmation-modal/confirmation-modal.component';
import { PersonalEnergyActivity } from 'src/app/models/data/energy-activity.model';
import { HttpEntityRepositoryService } from 'src/app/services/http-entity-repository.service';
import { AddActivity } from './add-activity/add-activity.component';
import { EditActivity } from './edit-activity.component';

export interface Transfer {
  activityType: string;
  activityPeriod: number;
  activityEffortSpent: number;
  activityeffortUnit: number;
  activityStartDate: Date;
  activityEndDate: Date;
}

@Component({
  selector: 'app-activity-table',
  templateUrl: './activity-table.component.html',
  styleUrls: ['./activity-table.component.css'],
})
export class ActivityTableComponent implements AfterViewInit {
  activities: PersonalEnergyActivity[] = [];
  sortedData = this.activities; 
  isNull: boolean = true;

  constructor(private modal: MatDialog, private translate: TranslateService, private entityService: HttpEntityRepositoryService<PersonalEnergyActivity>, private alertService: AlertService) {
    entityService.getAll("/PersonalEnergyActivity/GetAll").subscribe(data => {
      var Data: any = data;
      if (!Data.success) {
        this.alertService.openSnackBar(Data.success, Data.message);
        return;
      }

      this.activities = Data.data;
      this.dataSource = new MatTableDataSource(Data.data);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
   }
  
  displayedColumns: string[] = [
    'activityType',
    'activityPeriod',
    'activityEffortSpent',
    'activityeffortUnit',
    'activityStartDate',
    'activityEndDate',
    'actions',
  ];
  dataSource = new MatTableDataSource(this.activities);

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;


  delete(id: number ,name : string) { 
    const confirmModal = this.modal.open(ConfirmModalComponent, {
      data: {
        title: 'Confirm Remove Activity',
        message: 'Are you sure, you want to remove a activity: ' + name
      }
    }).afterClosed().subscribe(result => {
      if (result === true) {
        this.activities = this.activities.filter(act => act.personalEnergyActivityId != id);
        this.entityService.delete("/Activity?id=", id).subscribe(data => {
          this.alertService.openSnackBar(true, "success");
        }, err =>{
          this.alertService.openSnackBar(false, "unsuccess");
        })
      } 
    });
  }

  openEdit(activityType: string, activityPeriod: number, activityEffortSpent: number, activityeffortUnit: number, activityStartDate: Date, activityEndDate: Date) {
    this.modal.open(EditActivity, {
      data: {
        activityType: activityType,
        activityPeriod: activityPeriod,
        activityEffortSpent: activityEffortSpent,
        activityeffortUnit: activityeffortUnit,
        activityStartDate: activityStartDate,
        activityEndDate: activityEndDate,
      }
    });
  }

  addActivity() {
    this.modal.open(AddActivity);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.filteredData.length == 0) {
      this.isNull = false;
    }
    else {
      this.isNull = true;
    }
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.changeLang();

    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.changeLang();
    });
  }

  changeLang() {
    this.translate.get('paginator.item').subscribe((data: any) => {
      this.paginator._intl.itemsPerPageLabel = data;
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
    this.translate.get('paginator.next').subscribe((data: any) => {
      this.paginator._intl.nextPageLabel = data;
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
    this.translate.get('paginator.previous').subscribe((data: any) => {
      this.paginator._intl.previousPageLabel = data;
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
    this.translate.get('paginator.last').subscribe((data: any) => {
      this.paginator._intl.lastPageLabel = data;
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
    this.translate.get('paginator.first').subscribe((data: any) => {
      this.paginator._intl.firstPageLabel = data;
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
    this.translate.get('paginator.range').subscribe((data: any) => {
      var range = (page: number, pageSize: number, length: number) => {
        if (length == 0 || pageSize == 0) { return `0 ${data} ${length}`; }

        length = Math.max(length, 0);

        const startIndex = page * pageSize;
        const endIndex = startIndex < length ?
          Math.min(startIndex + pageSize, length) :
          startIndex + pageSize;
        if (data == "de") { return `${length} ${data}  ${startIndex + 1} - ${endIndex}`; }
        else { return `${startIndex + 1} - ${endIndex} ${data} ${length}`; }
      };
      this.paginator._intl.getRangeLabel = range;
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }
}
