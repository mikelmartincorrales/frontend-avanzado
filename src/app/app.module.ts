import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { SharedModule } from "./shared/shared.module";
import { CoreModule } from "./shared/core.module";
import { RouterModule } from "@angular/router";
import { rootRouterConfig } from "./app-routing";
import { ReactiveFormsModule } from "@angular/forms";
import { InMemoryWebApiModule } from "angular-in-memory-web-api";
import { InMemoryDataService } from "./shared/inmemory-db/inmemory-db.service";

@NgModule({
  imports: [
    SharedModule,
    CoreModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: false }),
    ReactiveFormsModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
