import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-counter-op',
  templateUrl: './counter-op.component.html',
  styleUrls: ['./counter-op.component.css']
})
export class CounterOpComponent implements OnInit{
  counter!: number;
  constructor(private store:Store<{counter:{counter:number}}>){}

  ngOnInit(): void {
    this.store.select('counter').subscribe(data=>{
      this.counter=data.counter;
    })
  }
}
