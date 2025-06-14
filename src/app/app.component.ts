import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

// NG ZORRO imports
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
     RouterModule, 
    NzLayoutModule,
    NzSpinModule,
    NzFormModule,
    NzButtonModule,
    NzInputModule,
    
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'car_rental_angular';
}


