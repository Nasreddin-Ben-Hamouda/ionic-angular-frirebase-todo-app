import {Component, OnInit} from '@angular/core';
import {Todo, TodoService} from '../services/todo.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
    todos: Todo[];

    constructor(private todoService: TodoService, private route: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.todoService
            .getTodos()
            .subscribe(res => {
                this.todos = res.filter(c => c.done === this.route.snapshot.data.done);
            });
    }

    remove(item: Todo): void {
        this.todoService
            .removeTodo(item.id);
    }

}
