import TodoCount from "./components/TodoCount.js";
import TodoInput from "./components/TodoInput.js";
import TodoList from "./components/TodoList.js";
import TodoItem from "./components/TodoItem.js";
import ChangeTodos from "./components/ChangeTodos.js";

/* �θ� ������Ʈ */
export default function TodoApp() {
  //�� �������� todoItems �����͸� �����Ѵ�.
  this.todoItems = JSON.parse(localStorage.getItem("todoItems")) ?? [];
  this.todoList = new TodoList();
  this.todoCount = new TodoCount();

  this.setState = (updatedItems) => {
    localStorage.setItem("todoItems", JSON.stringify(updatedItems));
    this.todoItems = JSON.parse(localStorage.getItem("todoItems"));
    this.todoList.setState();
    this.todoCount.setCount(this.todoItems);
  };

  //troubleShooting: �� ������ setState �Լ� ���� ���� ������ undefined�� �Ѿ��.
  new ChangeTodos(this.setState);

  new TodoInput({
    onAdd: (contents) => {
      const newTodoItem = new TodoItem(contents);
      this.todoItems.push(newTodoItem);
      this.setState(this.todoItems);
    },
  });
}

const todoApp = new TodoApp();
todoApp.setState(todoApp.todoItems);
