import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  name: string = '';
  age: number = 0;
  email: string = '';
  address: Address = { street: '', city: '' };
  hobbies: string[] = [];

  constructor() {}

  ngOnInit(): void {
    this.name = 'Nipun Eranda';
    this.age = 23;
    this.email = "lol@gmail.com"
    this.address = {
      street: 'dewata rd',
      city: 'ambalangoda',
    };
    this.hobbies = ['gaming', 'programming'];
  }

  onClick(){
    this.name = "Neo";
    this.hobbies.push('lol');
  }

  addHobby(hobby:string){
    console.log(hobby);
    this.hobbies.unshift(hobby);
    return false;
  }

  deleteHobby(hobby:string){
    for(let i = 0; i < this.hobbies.length; i++){
      this.hobbies[i] == hobby ? this.hobbies.splice(i, 1) : "";
    }
  }
}

interface Address {
  street: string,
  city: string
}
