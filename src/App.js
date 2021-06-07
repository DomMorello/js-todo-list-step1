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

    this.loadTodo();
  }

  //�Ű����� todo�� � ���·� ������ �� ������ � ���ΰ�?
  todoTemplate = (todo) => {
    return `<li id=${todo.id} class=${
      todo.completed /*todo.completed�� ��� ������?*/ && "completed"
    }>
			<div class="view">
				<input class="toggle" type="checkbox" id=${todo.id} ${
      todo.completed && "checked"
    }/>
				<lable class="label">${todo.title}</label>
				<button class="destroy" id=${todo.id}></button>
			</div>
			<input class="edit" value=${todo.title}/>				
		</li>`;
  };

  viewAll = () => {
    //todos�� ����ü �����ϱ�?
    this.todos.map((todo) => {
      this.$todoList.insertAdjacentHTML("beforeend", this.todoTemplate(todo));
    });
  };

  loadTodo = (option = ALL) => {
    //localStorage �ϴ� ����
    switch (option) {
      case ALL:
        this.viewAll();
        break;
      // case ACTIVE:
      //   this.viewActive();
      //   break;
      // case COMPLETED:
      //   this.viewCompleted();
      //   break;
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
