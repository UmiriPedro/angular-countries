import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: [
  ]
})
export class SearchBoxComponent implements OnInit, OnDestroy {

  private debouncer: Subject<string> = new Subject<string>();
  private debouncerSuscription?: Subscription;

  @Input()
  public placeholder: string = '';

  @Input()
  public initialValue: string = '';

  @Output()
  public onValue: EventEmitter<string> = new EventEmitter();

  @Output()
  public onDebounce: EventEmitter<string> = new EventEmitter();

  ngOnInit(): void {
    // El debouncer se comporta como un observable especial
    this.debouncerSuscription = this.debouncer
    .pipe(
      // Con debounceTime(300) le decimos que espere 300 milisegundo en emitir el valor
      // Si dentro del segundo, recibe otro valor, espera 300 milisegundo más
      debounceTime(300)
      )
      .subscribe( value => {
        this.onDebounce.emit( value );
      });
    }

  ngOnDestroy(): void {
    this.debouncerSuscription?.unsubscribe();
  }

  emitValue( value: string ): void {
    this.onValue.emit( value );
  }

  onKeyPress( searchTerm: string ) {
    this.debouncer.next( searchTerm );
  }
}
