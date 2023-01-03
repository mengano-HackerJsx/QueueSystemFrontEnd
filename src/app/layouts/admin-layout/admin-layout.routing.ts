import { Routes } from '@angular/router';

import { DashboardComponent } from '../../modules/dashboard/dashboard.component';
import { TableListComponent } from '../../modules/table-list/table-list.component';
import { IconsComponent } from '../../shared/icons/icons.component';
import { NotificationsComponent } from '../../shared/notifications/notifications.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'queueus',      component: DashboardComponent },
    { path: 'persons',     component: TableListComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'notifications',  component: NotificationsComponent }
];
