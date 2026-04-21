function add(a, b) {
  return a + b;
}

function sub(a, b) {
  if (!(a > b)) {
    throw new Error("a must be greater than b");
  }
  return a - b;
}

function mul(a, b) {
  return a * b;
}

add(2, 3);
add(5, 7);
add(10, 15);
add(20, 25);

sub(40, 35);

mul(4, 5);
mul(6, 7);
mul(8, 9);
mul(10, 11);
