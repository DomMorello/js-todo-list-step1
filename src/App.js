import { ALL, ACTIVE, COMPLETED } from "./constants/state.js";
import AddTodo from "./components/AddTodo.js";

//���⼭ export�� �� �־�߸� �Ǵ°ǰ�?
//�� ������ html���� �� ������ ���� ����Ű�� �����ϱ� export�� ��� �� �� ������
//�׷��� �ٽ� �����غ��ϱ� �ٸ� ���Ͽ��� ���� ������ ����Ѵٸ� �ʿ��ϴ�.
export default class App {
  constructor() {
    this.$todoList = document.querySelector("#todo-list");
    this.$newTodoTitle = document.querySelector("#new-todo-title");

    this.addTodo = new AddTodo(this.$newTodoTitle, this.loadTodo);
    //�̰� ���ؼ� todos �� �Ѿ���� ���̴�.
    this.loadTodo();
  }

  //�Ű����� todo�� � ���·� ������ �� ������ � ���ΰ�?
  todoTemplate = (todo) => {
    return `<li id=${todo.id} class=${todo.completed && "completed"} >
							<div class="view">
								<input class="toggle" type="checkbox" 
									id=${todo.id} ${todo.completed && "checked"} />
								<label class="label">${todo.title}</label>
								<button class="destroy" id=${todo.id}></button>
							</div>
							<input class="edit" value="${todo.title}" />
						</li>`;
  };

  viewAll = () => {
    this.todos.map((todo) => {
      /* ���⼭ todos ���� ���涧���� map �ݺ��� ��� �ϴµ� 
				�ٸ� ����� �̿��ϸ� ������ ���� ���� �� ���� ������?
			*/
      this.$todoList.insertAdjacentHTML("beforeend", this.todoTemplate(todo));
      //beforeend �� �״�� ������ ���� : �� �����±� �ٷ� �տ� �ڽ����� �±׸� �ִ´�.
    });
  };

  viewActive = () => {
    const uncompletedTodos = this.todos.filter((todo) => !todo.completed);

    uncompletedTodos.map((todo) =>
      this.$todoList.insertAdjacentHTML("beforeend", this.todoTemplate(todo))
    );
  };

  viewCompleted = () => {
    const completedTodos = this.todos.filter((todo) => todo.completed);

    completedTodos.map((todo) =>
      this.$todoList.insertAdjacentHTML("beforeend", this.todoTemplate(todo))
    );
  };

  loadTodo = (option = ALL) => {
    //���⼭ �迭�� ������ش�. �ٵ� �̰� App Ŭ���� �ȿ������� �迭�� ���̴�.
    //ó���� laod�Ǹ� �ٷ� loadTodo() �� ���ؼ� localStorage�� �ִ� ������ �����´�.
    this.todos = JSON.parse(localStorage.getItem("todos")) ?? [];
    this.$todoList.innerHTML = "";

    switch (option) {
      case ALL:
        this.viewAll();
        break;
      case ACTIVE:
        this.viewActive();
        break;
      case COMPLETED:
        this.viewCompleted();
        break;
    }
    //updateTodoCount ����
  };
}

window.onload = () => {
  new App();
  //�� Ŭ������ �����ڸ� �̿��ؼ� �� ��� �Լ����� ����������?
  //�� ������ �ٰŴ� �����ϱ ���ؼ� �����غ��� �Ѵ�.
  //onload �� �Լ��� �����ϸ� �Ǵ°� �ƴѰ�?
  //Ŭ������ syntatic sugar��� �߸��� ���� �ִµ� �� ��쿡�� �׷��ǰ�
};
