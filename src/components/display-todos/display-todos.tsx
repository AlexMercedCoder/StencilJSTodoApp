import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'display-todos',
  shadow: true,
})
export class DisplayTodos {

  @Prop() todos: Array<any>
  @Prop() select: Function
  @Prop() handleDelete: Function

  render() {
    return (
      <Host>
        {this.todos ? this.todos.map((todo) => {
          return <div key={todo._id}>
            <h3 onClick={() => this.select(todo)}>{todo.reminder} - {todo.completed ? "O" : "X"}</h3>
            <button onClick={() => this.handleDelete(todo)}>Delete</button>
          </div>
        }) : <h1>No Todos</h1>}
      </Host>
    );
  }

}
