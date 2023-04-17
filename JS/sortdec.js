let users = [
  {
    firstName: "user1",
    lastName: "user11",
    age: 22,
    gender: "M",
    lastOrderDate: 22_2,
    totalOrders: 78,
  },
  {
    firstName: "user2",
    lastName: "user22",
    age: 22,
    gender: "M",
    lastOrderDate: 19_2,
    totalOrders: 25,
  },
  {
    firstName: "user3",
    lastName: "user33",
    age: 22,
    gender: "M",
    lastOrderDate: 18_2,
    totalOrders: 26,
  },
  {
    firstName: "user4",
    lastName: "user44",
    age: 22,
    gender: "M",
    lastOrderDate: 17_2,
    totalOrders: 28,
  },
  {
    firstName: "user5",
    lastName: "user55",
    age: 22,
    gender: "M",
    lastOrderDate: 16_2,
    totalOrders: 63,
  },
  {
    firstName: "user6",
    lastName: "user66",
    age: 22,
    gender: "M",
    lastOrderDate: 15_2,
    totalOrders: 62,
  },
  {
    firstName: "user7",
    lastName: "user77",
    age: 22,
    gender: "M",
    lastOrderDate: 14_2,
    totalOrders: 56,
  },
  {
    firstName: "user8",
    lastName: "user88",
    age: 22,
    gender: "M",
    lastOrderDate: 13_2,
    totalOrders: 34,
  },
  {
    firstName: "user9",
    lastName: "user99",
    age: 22,
    gender: "M",
    lastOrderDate: 12_2,
    totalOrders: 45,
  },
  {
    firstName: "user10",
    lastName: "user100",
    age: 22,
    gender: "M",
    lastOrderDate: 11_2,
    totalOrders: 20,
  },
];

let question6 = (arr) => {
  let totalOrder = (items) => {
    return items.totalOrders - items.totalOrders * 2;
  };

  let sort = arr.sort(totalOrder);
  return sort;
};
let ascending = question6(users);
console.log(ascending);
