import { Component } from "react";
import "./App.css";
import VisibilityToolbar from "./components/VisibilityToolbar";
import AddTodoForm from "./components/AddTodoForm";

import { UniqueString } from "unique-string-generator"
import TodoList from "./components/TodoList";
class App extends Component {
  state = {
    visibility: "all",
    todos: JSON.parse(localStorage.getItem("todos")) || [],
  };

  handleVisibilityChange = (visibility) => {
    this.setState({ visibility });
  };

  handleAddTodo = (vrijednost) => {
    const {todos} = this.state;
    const newTodo = {
      id: UniqueString(),
      text: vrijednost,
      completed: false,
    };

    this.setState({todos: [...todos, newTodo]});

  };
// override componente i metoda se uvijek okida kad se komponenta osvježi (update)
  componentDidUpdate() {
    localStorage.setItem("todos", JSON.stringify(this.state.todos))
  }

  handleToggleTodo = (id) => {
    const {todos} = this.state;
    const todo = todos.find((todo) => todo.id === id);

    todo.completed = !todo.completed;
    this.setState(todos);

  };

  handleRemoveTodo = (id) => {
    const { todos } = this.state;
    const newTodos = todos.filter((item) => item.id !== id );

    this.setState({todos: newTodos});
  };

getVisibleTodos =() => {
  const {todos, visibility } = this.state;
  if (visibility === "all"){
    return todos;
  }
  if (visibility === "completed"){
    return todos.filter((todo) => !todo.completed);
  }
  if (visibility === "active"){
    return todos.filter((todo) => todo.completed);
  }
};

handleRemoveCompleted = () => {
  const {todos} = this.state;
  /* let todo = [
  {id =1, text ="prvi zadatak, completed=false"}
  {id =2, text ="drugi zadatak, completed=true"}
  ];
*/

// standardni dio javascript for petlja
// iteriramo po svakom objektu unutar array-a
//uzimamo samo one koji su completed = false

/*let newTodos = [];
for (let i =0; i < todos.length; i++) {
  if (todos[i].completed === false) {
    newTodos.push(todos[i]);
  }
} */
let newTodos = todos.filter((todo) => todo.completed);

// novu filtriranu listu vraćamo u state
this.setState({ todos: newTodos });
};

  render() {
    const {todos} = this.state;
    const visibleTodos = this.getVisibleTodos();

    const hasCompleted = todos.filter((todo) => todo.completed).length > 0;

    /* 
    let isCompleted = false;
    for (let i =0; i < todos.length; i++) {
    if (todos[i].completed === true) {
    hasCompleted = true;
    break;    
    }
  }
    */
   
  
    return (
      <div className="App">
        <header className="header">Moji zadaci</header>
        <VisibilityToolbar onVisibilityChange={this.hadleVisibilityChange}></VisibilityToolbar>
        <div className="todoContainer">
        <AddTodoForm addTodo={this.handleAddTodo}></AddTodoForm>
        <TodoList todos={visibleTodos} toggleTodo={this.handleToggleTodo} removeTodo={this.handleRemoveTodo}></TodoList>
      </div>
      
      {hasCompleted &&
      <span className="btn-clear-all" onClick={this.handleRemoveCompleted}>Obriši dovršene</span>}
      </div>
    );
  }
}

export default App;
