/* todoList�� �����ִ� ������Ʈ */
export default function TodoList() {
  this.todoItems = [];

  this.setState = (updatedItems) => {
    this.todoItems = updatedItems;
    this.render(this.todoItems);
  };

  this.render = (items) => {
    // const template = items.map(this.todoItemTemplate);
    // this.$todoList.innerHTML = template.join("");
    console.log("list ", this.todoItems);
  };

  this.todoItemTemplate = (items) => {
    /* ���⼭ html �߰����ִ� ������ ���� �Ѵ� */
    return `<li>
    					<div class="view">
      					<input class="toggle" type="checkbox"/>
      					<label class="label">���ο� Ÿ��Ʋ</label>
      					<button class="destroy"></button>
    					</div>
    					<input class="edit" value="���ο� Ÿ��Ʋ" />
  					</li>`;
  };
}
