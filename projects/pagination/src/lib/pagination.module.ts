import { NgModule } from '@angular/core';
import { PaginationComponent } from './pagination.component';
import { PaginationService } from './pagination.service';
import { PaginationDirective } from './pagination.directive';
import { PaginationPipe } from './pagination.pipe';
export { PaginationInstance } from './pagination-instance';

export {PaginationService} from './pagination.service';
export {PaginationComponent} from './pagination.component';
export {PaginationDirective} from './pagination.directive';
export {PaginationPipe} from './pagination.pipe';

@NgModule({
  declarations: [
  PaginationComponent,
  PaginationPipe,
  PaginationDirective],
  imports: [
  ],
  providers: [PaginationService],
  exports: [  PaginationComponent,
  PaginationPipe,
  PaginationDirective]
})
export class PaginationModule { }
