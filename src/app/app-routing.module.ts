import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OneboardComponent } from './oneboard/oneboard.component';
import { TwoboardComponent } from './twoboard/twoboard.component';
import { ThreeboardComponent } from './threeboard/threeboard.component';
import { BoardComponent } from './board/board.component';

const routes: Routes = [{path: 'oneboard', component: OneboardComponent}, {path: 'twoboard', component: TwoboardComponent}, {path: 'threeboard', component: ThreeboardComponent}, {path: 'board', component: BoardComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
