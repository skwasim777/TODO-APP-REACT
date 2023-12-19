function ToDoItem1() {
  let todoName = "Buy Vegatables";
  let date = "4/10/2023";
  return (
    <div class="container text-center">
      <div class="row kg-row">
        <div class="col-6  item-container">{todoName}</div>
        <div class="col-4  item-container">{date}</div>
        <div class="col-2">
          <button type="button" class="btn btn-danger kg-button ">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
export default ToDoItem1;
