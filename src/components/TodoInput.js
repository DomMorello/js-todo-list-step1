/* �Է¹޴� ������Ʈ */
export default function TodoInput({ onAdd }) {
  const $todoInput = document.querySelector("#new-todo-title");

  $todoInput.addEventListener("keyup", this.addTodoItem);

  this.addTodoItem = ({ target, key }) => {
    console.log("hi");
    //�������θ� �̷���� ���ڿ��� todoItem���� ��ȿ���� ����
    // if (key === "Enter" && target.value.trim()) {
    //   console.log("Enter! valid!");
    //   onAdd(target.value);
    //   target.value = "";
    // } else if (key === "Escape") {
    //   console.log("ESC! cancel!");
    // }
  };
}
