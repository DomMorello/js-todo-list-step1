export default function ChangeTodos(setState) {
  this.setState = setState;
  this.$todoList = document.querySelector("#todo-list");
  this.todoItems = [];

  this.changeStatus = ({ target }) => {
    this.todoItems = JSON.parse(localStorage.getItem('todoItems'));

    if (target.classList.contains('toggle')) {
      this.toggleTodo(target);
    } else if (target.classList.contains('destroy')) {
      this.deleteTodo(target);
    }
  };

  this.toggleTodo = (target) => {
    this.todoItems.map((todo) => {
      //troubleShooting: todo.id�� �������̱� ������ === ��� ���� �� �ٸ��� ���´�. �׷��� String���� �ٲ��ִ� ���� ���ڴ�.
      if (target.closest('li').id === todo.id) {
        todo.completed = !todo.completed;
      }
    });
    this.setState(this.todoItems);
  };

  this.deleteTodo = (target) => {
    const filterdItems = this.todoItems.filter((todo) => {
      //troubleShooting: return�� ����� �Ѵ�. ���� ������ �ɷ� �ð��� ���� ���. ������ �� ���� �����ؾ� �Ѵ�.
      return todo.id !== target.closest('li').id
    });
    this.setState(filterdItems);
  }

  //autofocus ��� �����غ���?
  this.editTodo = ({ target }) => {
    if (target.classList.contains('label')) {
      const oldValue = target.innerText;

      target.closest('li').classList.add('editing');


    }
  }

  this.finishEdit = ({ target, key }) => {
    if (key === 'Enter') {

      target.closest('li').classList.remove('editing');
    } else if (key === 'Escape') {


      // target.value = oldValue;
      target.closest('li').classList.remove('editing');
      console.log('esc');
    }
  }

  this.$todoList.addEventListener("click", this.changeStatus);
  this.$todoList.addEventListener("dblclick", this.editTodo);
  this.$todoList.addEventListener("keyup", this.finishEdit);
}
