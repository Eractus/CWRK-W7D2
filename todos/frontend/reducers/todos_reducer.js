import { RECEIVE_TODOS, RECEIVE_TODO } from '../actions/todo_actions';

const initialState = {
  1: {
    id: 1,
    title: 'wash car',
    body: 'with soap',
    done: false
  },
  2: {
    id: 2,
    title: 'wash dog',
    body: 'with shampoo',
    done: true
  }
};
const newTodos = [
  {
    id: 3,
    title: 'groceries',
    body: 'get milk and eggs',
    done: false
  },
  {
    id: 4,
    title: 'Homework',
    body: "Do W7D2 hw",
    done: false
  }
];



const todosReducer = (state = initialState, action) => {
  Object.freeze(state);
  const newState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_TODOS:
      return action.todos;

    case RECEIVE_TODO:
      let newObj = Object.assign({}, action.todo);
      newState[newObj.id] = newObj;
      return newState;

    default:
      return state;
  }
};

export default todosReducer;
