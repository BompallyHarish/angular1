import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
// import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS, provideHttpClient, withFetch } from '@angular/common/http';
import { EmployeeService } from './employee.service';
import { TestComponent } from './test/test.component';
import { AppRoutingModule, routingComponents } from './app-routing.module';

@NgModule({
    declarations: [
        AppComponent,
        TestComponent,
        routingComponents
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        AppRoutingModule
    ],
    providers: [
        // provideAnimationsAsync('noop'),
        EmployeeService,
        
    provideHttpClient(),
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
