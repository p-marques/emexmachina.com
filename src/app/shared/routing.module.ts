import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { GamesComponent } from "../games/games.component";
import { AboutComponent } from "../about/about.component";
import { NotFoundComponent } from "../not-found/not-found.component";
import { ProjectRunnerGameComponent } from "../games/project-runner/project-runner.component";

const ROUTES: Routes = [
    { path: 'games', component: GamesComponent },
    { path: 'games/runner', component: ProjectRunnerGameComponent},
    { path: 'about', component: AboutComponent },
    { path: '', redirectTo: '/games', pathMatch: 'full' },
    { path: '**', component: NotFoundComponent }
]

@NgModule({
    imports: [RouterModule.forRoot(ROUTES)],
    exports: [RouterModule]
})
export class RoutingModule {}