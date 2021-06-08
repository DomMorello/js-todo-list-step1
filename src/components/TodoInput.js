/* �Է¹޴� ������Ʈ */
export default class TodoInput {
  constructor() {
    const $newTodoTitle = document.querySelector("#new-todo-title");

    $newTodoTitle.addEventListener("keyup", this.addTodoItem);
  }

  addTodoItem = ({ target, key }) => {
    //�������θ� �̷���� ���ڿ��� todoItem���� ��ȿ���� ����
    if (key === "Enter" && target.value.trim()) {
      console.log("Enter! valid!");
    } else if (key === "Escape") {
      console.log("ESC! cancel!");
    }
  };
}
