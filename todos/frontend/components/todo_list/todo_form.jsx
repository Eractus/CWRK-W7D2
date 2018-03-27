import React from 'react';
import uniqueId from '../../util/idGenerator';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: ""
    };
    this.handleBodyChange = this.handleBodyChange.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleTitleChange(e) {
    e.preventDefault();
    this.setState({title: e.target.value});
  }

  handleBodyChange(e) {
    e.preventDefault();
    this.setState({body: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    const todo = Object.assign({}, this.state, { id: uniqueId() });
    this.props.receiveTodo(todo);
    this.setState({
      title: "",
      body: ""
    });
  }

  render() {
    return (
      <form className='todo-form' onSubmit={this.handleSubmit}>
        <label>Title
          <input onChange={this.handleTitleChange} value={this.state.title}></input>
        </label>
        <br />
        <label>Body
          <input onChange={this.handleBodyChange} value={this.state.body}></input>
        </label>

        <button>Submit Todo</button>
      </form>
    );
  }
}

export default TodoForm;
