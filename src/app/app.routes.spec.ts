import { routes } from './app.routes';
import { HomeComponent } from './home/home.component';
import { TodosComponent } from './2-todos/todos.component';
import { UsersComponent } from './users/users.component';
import { UserDetailsComponent } from './3-user-details/user-details.component';

describe('routes', () => {
    it('sould contain a route for /users/:id', () => {
        expect(routes).toContain({ path: 'users/:id', component: UserDetailsComponent });
    });

    it('sould contain a route for /users', () => {
        expect(routes).toContain({ path: 'users', component: UsersComponent });
    });

    it('sould contain a route for /todos', () => {
        expect(routes).toContain({ path: 'todos', component: TodosComponent });
    });

    it('sould contain a route for / (home component)', () => {
        expect(routes).toContain({ path: '', component: HomeComponent });
    });
});
