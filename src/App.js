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
  render() {
    return (
      <div className="App">
        <header className="header">Moji zadaci</header>
        <VisibilityToolbar></VisibilityToolbar>
        <AddTodoForm addTodo={this.handleAddTodo}></AddTodoForm>
        <TodoList></TodoList>
      </div>
    );
  }
}

export default App;
