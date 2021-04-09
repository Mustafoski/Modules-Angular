import {
  Component,
  OnInit,
  ElementRef,
  OutputDecorator,
  EventEmitter,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
  @Output() close = new EventEmitter();
  constructor(private el: ElementRef) {}

  ngOnInit() {
    document.body.appendChild(this.el.nativeElement);
  }
  ngOnDestroy() {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.el.nativeElement.remove();
  }
  onCloseClick() {
    this.close.emit();
  }
}
