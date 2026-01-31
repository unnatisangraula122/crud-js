function createSingleItem(item) {
  var $div = $('<div class="single-item"></div>');

  var $checkbox = $('<input type="checkbox" />')
    .prop("checked", item.completed)
    .on("change", function () {
      editCompleted(item.id);
    });

  var $text = $("<p></p>")
    .text(item.name)
    .css("text-decoration", item.completed ? "line-through" : "none");

  var $editBtn = $(`
    <button class="btn icon-btn edit-btn">
      <i class="fa-regular fa-pen-to-square"></i>
    </button>
  `).on("click", function () {
    editItem(item.id);
  });

  var $deleteBtn = $(`
    <button class="btn icon-btn remove-btn">
      <i class="fa-regular fa-trash-can"></i>
    </button>
  `).on("click", function () {
    deleteItem(item.id);
  });

  $div.append($checkbox, $text, $editBtn, $deleteBtn);
  return $div;
}
