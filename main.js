const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("collapsible--expanded");
    console.log("Clicked");
  })
);


var itemData = [
  { category: 'fruit',  itemName: 'apple', onSale: false },
  { category: 'canned', itemName: 'beans', onSale: false },
  { category: 'canned', itemName: 'corn',  onSale: true  },
  { category: 'frozen', itemName: 'pizza', onSale: false },
  { category: 'fruit',  itemName: 'melon', onSale: true  },
  { category: 'canned', itemName: 'soup',  onSale: false },
];

function organizeItems(items) {
  let result = {};

  for (let i = 0; i < itemData.length; i++) {
    let type = itemData[i].category;
    let name = itemData[i].itemName;

    if (itemData[i].onSale) {
      name += "($)";
    }

    if (type in result) {
      result[type].push(name);
    } else {
      result[type] = [name];
    }

  }
 console.log(result)
  return result; 
}

organizeItems(itemData);
