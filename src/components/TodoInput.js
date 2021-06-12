/* �Է¹޴� ������Ʈ */
export default function TodoInput({ onAdd }) {
  const $todoInput = document.querySelector("#new-todo-title");

  const addTodoItem = ({ target, key }) => {
    //�������θ� �̷���� ���ڿ��� todoItem���� ��ȿ���� ����
    if (key === "Enter" && target.value.trim()) {
      onAdd(target.value);
      target.value = "";
    } else if (key === "Escape") {
      target.value = "";
    }
  };

  $todoInput.addEventListener("keyup", addTodoItem);
  // troubleshooting: ���� ���� �Լ��� ������ ���Ŀ� �Ʒ��� �̺�Ʈ�����ʸ� ��ġ��Ű�ϱ� �� �۵��Ѵ�.
}
