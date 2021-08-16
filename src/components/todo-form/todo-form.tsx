import { Component, Host, h, Prop, State } from '@stencil/core';

@Component({
  tag: 'todo-form',
  shadow: true,
})
export class TodoForm {

  @Prop() reminder: string;
  @Prop() completed: boolean;
  @Prop() _id: string;
  @Prop() action: string
  @Prop() handleCreate: Function;
  @Prop() handleUpdate: Function;

  @State() formData: any = {
    reminder: "",
    completed: false
  }

  handleInput(event){
    const target = event.path[0]
    if(target.name === "completed"){
      this.formData.completed = target.checked
    } else {
      this.formData.reminder = target.value
    }
  }

  handleSubmit(event){
    event.preventDefault()
    console.log(this.action, this.reminder, this._id)
    if(this.action === "create"){
      this.handleCreate(this.formData)
    }

    if (this.action === "update"){
      this.handleUpdate(this.formData)
    }
  }

  connectedCallback(){
    if (this.action === "update"){
      this.formData.reminder = this.reminder
      this.formData.completed = this.completed
      this.formData._id = this._id
    }
  }

  render() {
    return (
      <Host>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <input type="text" value={this.formData.reminder} name="reminder" onInput={(e) => this.handleInput(e)}></input>
          <input type="checkbox" name="completed" checked={this.formData.reminder} onInput={(e) => this.handleInput(e)}></input>
          <input type="submit" value="submit"></input>
        </form>
      </Host>
    );
  }

}
