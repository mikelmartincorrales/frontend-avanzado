import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { SharedModule } from "./shared/shared.module";
import { CoreModule } from "./shared/core.module";
import { RouterModule } from "@angular/router";
import { rootRouterConfig } from "./app-routing";
import { HttpClientModule } from "@angular/common/http";
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { FakeBackendService } from "./shared/inmemory-db/fake-backend.service";
import { StoreModule } from "@ngrx/store";
import { StoreRouterConnectingModule } from "@ngrx/router-store";
import { appReducers } from "./shared/state/root.reducer";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { environment } from "../environments/environment";
import { EffectsModule } from "@ngrx/effects";
import { UserEffects } from "./shared/state/user/effects/user.effects";
import { OffersEffects } from "./shared/state/offers/effects/offers.effects";
import { SigninService } from "./views/signin/signin.service";

@NgModule({
  imports: [
    SharedModule,
    CoreModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: false }),
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(FakeBackendService, {
      dataEncapsulation: false
    }),
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([UserEffects, OffersEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreRouterConnectingModule.forRoot({ stateKey: "router" })
  ],
  declarations: [AppComponent],
  providers: [SigninService],
  bootstrap: [AppComponent]
})
export class AppModule {}
