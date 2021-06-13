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
    const template = items.map(this.todoItemTemplate);
    this.$todoList.insertAdjacentHTML("beforeend", template);
  };

  //�� �� �� ���� �� ���̴�.
  this.todoItemTemplate = (item) => {
    return `<li id="${item.id}">
    					<div class="view">
      					<input class="toggle" type="checkbox" ${item.status}/>
      					<label class="label">${item.content}</label>
      					<button class="destroy"></button>
    					</div>
    					<input class="edit" value="���ο� Ÿ��Ʋ" />
  					</li>`;
  };
}
