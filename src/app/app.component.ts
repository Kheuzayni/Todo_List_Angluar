import { Component } from '@angular/core';
import { Todo } from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'atos-angular';
  todos : Todo[] = [];
  newTodo: string;

  enregistrerTache (){

    if (this.newTodo){
      let todo = new Todo();
      todo.name = this.newTodo;
      todo.isCompleted = true;
      this.todos.push(todo);
      this.newTodo = '';

    } else{
      alert ("Merci d'entrer une tache")
    }
  }

  done(id: number){
    this.todos[id].isCompleted =! this.todos[id].isCompleted
  }

  supprimerTache(id:number){
    this.todos = this.todos.filter((v,i) => i !== id);
  }

}
