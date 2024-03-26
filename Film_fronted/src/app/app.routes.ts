import { Routes } from '@angular/router';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { FirmOperationsComponent } from './firm-operations/firm-operations.component';

export const routes: Routes = [
    {path:'',component:DashBoardComponent},
    {path:'firms-crud-oparations',component:FirmOperationsComponent}
];
