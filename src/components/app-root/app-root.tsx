import { Component, h, Method, State } from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: true,
})
export class AppRoot {

  @State() todos: Array<any>;
  @State() showForm: number = 0;
  url = "http://localhost:10000/todos"
  @State() reminder: string ="";
  @State() completed: boolean =  false;
  @State() _id: string = "";
  @State() action: string = "create";

  @Method()
  toggleForm(){
    console.log(this.showForm)
    this.showForm = this.showForm === 1 ? 0 : 1
  }

  async getTodos(){
    const response  = await fetch(this.url)
    const data = await response.json()
    this.todos = data
  }

  resetState(){
    this.getTodos()
    this.action ="create"
    this.reminder = ""
    this._id = ""
    this.completed = false
    this.showForm = 0
  }

  async handleCreate(data){
    await fetch(this.url, {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
    this.resetState()
  }

  async handleUpdate(data){
    await fetch(this.url+`/${data._id}`, {
      method: "put",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
    this.resetState()
  }

  async handleDelete(data){
    await fetch(this.url+`/${data._id}`, {
      method: "delete"
    })
    this.resetState()
  }

  connectedCallback(){
    this.getTodos()
  }

  selectTodo(todo){
    console.log(todo)
    this.reminder = todo.reminder
    this.completed = todo.completed
    this._id = todo._id
    this.action = "update"
    this.showForm = 1
  }



  render() {

    console.log(this.showForm)

    const form = this.showForm ? (<todo-form
      reminder={this.reminder}
      completed={this.completed}
      _id={this._id}
      action={this.action}
      handleCreate={(d) => this.handleCreate(d)}
      handleUpdate={(d) => this.handleUpdate(d)}
      ></todo-form>) : null

    return (
      <div>
        <header>
          <h1>Stencil App Starter</h1>
        </header>

        <main>
          <button onClick={() => this.toggleForm()} >Create</button>
            <display-todos
            todos={this.todos}
            select={(d) => this.selectTodo(d)}
            handleDelete={(d) => this.handleDelete(d)}
            ></display-todos>
            {form}
        </main>
      </div>
    );
  }
}
