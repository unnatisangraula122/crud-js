function render() {
  var $app = $("#app");
  $app.empty();
  $app.append(createItems(items));
}

$(document).ready(function () {
  render();
});

function editCompleted(itemId) {
  items = items.map(function (item) {
    if (item.id === itemId) {
      return { ...item, completed: !item.completed };
    }
    return item;
  });
  render();
}

function deleteItem(itemId) {
  items = items.filter(function (item) {
    return item.id !== itemId;
  });
  render();
}

function editItem(itemId) {
  var newName = prompt("Edit item name:");
  if (!newName) return;

  items = items.map(function (item) {
    if (item.id === itemId) {
      return { ...item, name: newName };
    }
    return item;
  });
  render();
}
