import React from 'react';
import TodoListContainer from '../todos/todo_list_container';

class TodoListItem extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <li>
        {this.props.todo.title}: {this.props.todo.body}
      </li>
    );
  }
}

export default TodoListItem;
