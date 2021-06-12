import TodoCount from "./components/TodoCount.js";
import TodoInput from "./components/TodoInput.js";
import TodoList from "./components/TodoList.js";
import TodoItem from "./components/TodoItem.js";

/* �θ� ������Ʈ */
export default function TodoApp() {
  this.todoItems = []; //�� �������� todoItems �����͸� �����Ѵ�.

  this.todoList = new TodoList();

  this.setState = (updatedItems) => {
    this.todoItems = updatedItems;
    this.todoList.setState(this.todoItems);
  };

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
//�̷� ������ �ϸ� ������Ʈ�� �������� render�� �� ������?
