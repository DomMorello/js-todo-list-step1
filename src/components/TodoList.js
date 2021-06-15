/* todoList�� �����ִ� ������Ʈ */
export default function TodoList() {
  this.todoItems = [];
  this.$todoList = document.querySelector("#todo-list");

  this.setState = () => {
    this.todoItems = JSON.parse(localStorage.getItem("todoItems")) ?? [];
    this.render(this.todoItems);
  };

  this.render = (items) => {
    this.$todoList.innerHTML = ""; //���� �־��� html�� ���� ���� �Ŀ� �ٽ� �����Ѵ�
    items.map((todo) => {
      this.$todoList.insertAdjacentHTML(
        "beforeend",
        this.todoItemTemplate(todo)
      );
    });
    // const template = items.map(this.todoItemTemplate);
    // this.$todoList.insertAdjacentHTML("beforeend", template);
    // troubleShooting: �� �� �ٰ� ���� �ڵ��� ���� ���� item ���̿� ',' �� ���ԵǴ� ������ �־���.
  };

  this.todoItemTemplate = (item) => {
    return `<li id="${item.id}" class="${item.completed && "completed"}">
    					<div class="view">
      					<input class="toggle" type="checkbox" ${
                  item.completed === true ? "checked" : ""
                }/>
      					<label class="label">${item.content}</label>
      					<button class="destroy"></button>
    					</div>
    					<input class="edit" value=""/>
  					</li>`;
  };
}
