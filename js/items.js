function createItems(items) {
  var $items = $('<div class="items"></div>');

  items.forEach(function (item) {
    $items.append(createSingleItem(item));
  });

  return $items;
}
