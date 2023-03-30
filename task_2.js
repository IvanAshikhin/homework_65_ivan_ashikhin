const list1 = [1, 5, 12, 4, 3];
const list2 = [2, 3, 4, 5, 6, 7, 8, 9, 10];
const list3 = [3, 10, 17];


function average(list) {
    let sum = 0;
    for (let i = 0; i < list.length; i++) {
      sum += list[i];
    }
    return sum / list.length;
  }


  console.log(average(list1)); 
  console.log(average(list2));
  console.log(average(list3));