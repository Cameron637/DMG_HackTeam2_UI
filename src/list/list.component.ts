import { Component, Input } from '@angular/core';

@Component({
  selector: '.list-component',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input() list;

  item1 = "sup sup";
  item2 = [
      {
        "title": "Broloff & The 7 Dwarves",
        "time": "kinda long",
        "rating": "G"
      },
      {
        "title": "I Punched a Cow",
        "time": "5min",
        "rating": "PG-13"
      },
      {
        "title": "Ponies in Rainbowland",
        "time": "forever",
        "rating": "XXX"
      }
  ];

  parse(array){
      return array.map(function(items){
        return {title: items.title, time: items.time, rating: items.rating};
      });
  }

  test(thing){
      return thing;
  }
}
