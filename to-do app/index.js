'use strict';

let add = document.querySelector('.add-btn');
let addInput = document.querySelector('.add-input');

add.addEventListener('click', function () {
  let ul = document.createElement('ul');
  ul.classList.add('list-display');

  let li = document.createElement('li');
  let item = document.createTextNode(addInput.value);

  li.appendChild(item);
  ul.appendChild(li);
  document.body.appendChild(ul);

  // this clears the input field automatically after typing & ensures the focus return to the input field, waiting for the user to type something else
  addInput.value = ' ';
  addInput.focus();

  //   create delete btn, add a classname to the delete btn, appended the delete btn to the list Items
  let deleteBtn = document.createElement('button');
  deleteBtn.classList.add('delete');
  deleteBtn.appendChild(document.createTextNode('Remove Item'));
  li.appendChild(deleteBtn);

  // *** Removing an Item
  //   const deleteItem = document.querySelector('.delete');
  deleteBtn.addEventListener('click', removeItem);

  function removeItem(e) {
    if (e.target.classList.contains('delete')) {
      if (confirm('Are you sure you want to delete?')) {
        li.remove();
      }
    }
  }
});
