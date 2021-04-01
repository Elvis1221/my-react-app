// const data = [
//   {
//     id: 1,
//     title: "title",
//     items: ["el", "ig", "kir"]
//   },
//   {
//     id: 2,
//     title: { data: "adadada", fromData: "issdddg", dataTo: "kddddir" },
//     items: "title"
//   },
//   {
//     id: 3,
//     title: "title",
//     items: ["adadada", "issdddg", "kddddir"]
//   }
// ];
// const newData = data.map(({ id, title, items }, index) => {
//   if (items && Array.isArray(items)) {
//     const newItems = items.reduce((acc, item) => {
//       acc[item] = item;
//       return acc
//     }, {});
//     return { id, title, items: newItems }
//   }
//   if (typeof title === "object") {
//     const newTitle = Object.keys(title).reduce((acc, title, index) => {
//       acc[index] = title;
//       return acc
//     }, []);
//     return { id, title: newTitle, items }
//   }
//   return { id, title, items }
// });
//
// console.log(newData);
//
// const arr = [1, 5, 3, -2, 5, 213, 4, -9, 12, 87, 41, -1]
// console.log(Math.max.apply(null, arr));
// //
// //
// // const test = (arr) => {
// //   return arr.reduce((acc, number) => number > 0 && number % 3 ? acc + number : acc, 0)
// // };
// //
// // const test2 = (arr) => Math.max.apply(null, arr);
// //
// // console.log(test2(arr));
// // console.log(test(arr));
// // const str = arr.join("");
// // str