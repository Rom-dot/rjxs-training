import { Component, Input } from '@angular/core';
import { map, of } from 'rxjs';

@Component({
  selector: 'hello',
  template: `<h1>Hello {{name}}!</h1><button (click)=mapToNewObject()>See User</button>`,
  styles: [`h1 { font-family: Lato; }`],
})
export class HelloComponent {
  @Input() name: string;

  mapToNewObject() {
    var toto = new User(1, 'romain');
    var toto$ = of(toto);

    toto$.pipe(
      map((user: User) => ({ id: user.id, surname: user.surname, age: 18 }))
    );

    toto$.subscribe((x) => console.log(x));
  }
}

export class User {
  id: number;
  surname: string;

  constructor(id: number, surname: string) {
    id = id;
    surname = surname;
  }
}
