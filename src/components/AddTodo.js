export default class AddTodo {
  constructor($newTodoTitle, loadTodo) {
    this.loadTodo = loadTodo;
    $newTodoTitle.addEventListener("keyup", this.addTodo);
    //keydown���� ���� ��� ������ ������ ��� �ڵ尡 �۵��� ��ȿ��.
  }

  //���������Ҵ��� �̿��ؼ� event��ü�� target ���� key ���� �޾ƿ��� ���̴�.
  addTodo = ({ target, key }) => {
    //space�θ� �̷���������� �� �ǵ��� �ϰ� �ʹ�.
    if (key === "Enter" && target.value) {
      this.todos = JSON.parse(localStorage.getItem("todos")) ?? [];
      //todos �迭�� ��� �־��ָ鼭 ����� �ø� �Ŀ� localStorage�� �ֽ�ȭ �����ִ� �ű��� ���� �̸�����
      this.todos.push({
        id: String(Date.now()),
        title: target.value,
        completed: false,
      });
      target.value = "";
      localStorage.setItem("todos", JSON.stringify(this.todos));
      this.loadTodo();
    }
  };
}
