module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  if (item.enhancement < 20) {
    item.enhancement += 1;
  }
  return { ...item };
}

function fail(item) {
  if (item.enhancement < 15) {
    item.durability -= 5;
  } else if (item.enhancement > 16) {
    item.enhancement -= 1;
    item.durability -= 10;
  } else {
    item.durability -= 10;
  }
  item.enhancement = Math.max(0, item.enhancement);
  item.durability = Math.max(0, item.durability);
  return { ...item };
}

function repair(item) {
  return { ...item, durability: 100 };
}

function get(item) {
  return { ...item };
}
