function evnify(num) {
  if (num % 2 == 0) {
    console.log(num, "odd numer");
  } else {
    console.log(num * 2, "Event numebr");
  }
}

function evnify_all(nums) {
  for (var i = 0; i < nums.length; i++) {
    const num = nums[i];
    evnify(num);
  }
}
const nums = [5, 6, 4, 3, 23, 7, 8, 9, 6];
evnify_all(nums);
