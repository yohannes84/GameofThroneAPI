import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app/app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MemecreatorComponent } from './memecreator/memecreator.component';
import { HttpClientModule} from '@angular/common/http'
import { MemeService } from './services/meme.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MemecreatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    
  ],
  providers: [MemeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
