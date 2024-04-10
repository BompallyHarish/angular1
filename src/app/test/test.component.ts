import { Component, Input, Output, EventEmitter } from '@angular/core';
// import { EventEmitter } from 'stream';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent {
  @Input('parentData') public name2: any
  @Output() public childEvent = new EventEmitter<any>();
  fireEvent() {
    console.log('Test click workss')
    this.childEvent.emit('Hey Component Interaction.')
  }

}
