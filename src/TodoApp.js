import { ALL, ACTIVE, COMPLETED } from "./constants/state.js";
import TodoCount from "./components/TodoCount.js";
import TodoInput from "./components/TodoInput.js";
import TodoList from "./components/TodoList.js";

/* �θ� ������Ʈ */
export default class TodoApp {
  constructor() {
    this.todoItems = []; //�� �������� todoItems �����͸� �����Ѵ�.
  }

  render = () => {};
}

const todoApp = new TodoApp();
todoApp.render();
