export default function ChangeTodos(setState) {
  this.setState = setState;
  this.$todoList = document.querySelector("#todo-list");
  this.todoItems = [];

  this.changeStatus = ({ target }) => {
    console.log("hi");
    // this.todoItems = JSON.parse(localStorage.getItem("todoItems"));
    // this.setState(this.todoItems);
    /* ���� ���⼭ Ŭ������ �������༭ completed�� �ǵ��� ����� �Ѵ�. */
  };

  this.$todoList.addEventListener("click", this.changeStatus);
}
