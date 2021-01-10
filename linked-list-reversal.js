function reverseList(list) {
  let pointer1, pointer2, temp;

  pointer1 = null;
  pointer2 = list;

  while(pointer2) {
    temp = pointer2.next;
    pointer2.next = pointer1;
    pointer1 = pointer2;
    pointer2 = temp
  }
  return pointer1;
}


function createNode(val) {
  this.val = val;
  this.next = null;
}


function insertInList(val, list) {
  let node = new createNode(val);
  if (list === null) {
    list = node;
    return list;
  }
  console.log(node);
  let pointer = list;
  while(pointer.next != null) {
    pointer = pointer.next;
  }
  pointer.next = node;
  return list;
}

let list = null;

for (let i = 0; i < 5; i++) {
  list = insertInList(i+1, list);
}

console.log(list)

list = reverseList(list);

console.log(list);



