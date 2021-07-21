var list_img = document.getElementsByTagName("img");
var randomNumber1 = (Math.round(((Math.random()) * 5))) + 1;
var randomNumber2 = (Math.round(((Math.random()) * 5))) + 1;
list_img[0].setAttribute("src", src_img_link(randomNumber1));
list_img[1].setAttribute("src", src_img_link(randomNumber2));

function src_img_link(num) {
  var link = "images/dice" + num + ".png";
  return link;
}

var num_list = [];
num_list.push(randomNumber1);
num_list.push(randomNumber2);

getID = document.getElementsByTagName("h1")[0];
if (num_list[0] < num_list[1]) {
  var result = "Player 2 win 🏁";
  getID.innerHTML = result;}
else if (num_list[0] === num_list[1]) {
  var result = "Draw";
  getID.innerHTML = result;}
else {
  var result = "🏁 Player 1 win";
  getID.innerHTML = result;
}





//
// var num_list = [];
// function src_img_link(randomNumber1) {
//   var link = "images/dice" + randomNumber1 + ".png";
//   return link;
// }
//
// function randomImg() {
//   var randomNumber1 = (Math.round(((Math.random()) * 5))) + 1;
//   var randomNumber2 = (Math.round(((Math.random()) * 5)) + 1;
//
//   else {
//     console.log(randomNumber1);
//     var list_img = document.getElementsByTagName("img");
//     list_img[0].setAttribute("src", src_img_link(randomNumber1));
//     list_img[1].setAttribute("src", src_img_link(randomNumber2));
//     num_list.push(randomNumber1);
//     num_list.push(randomNumber2);
//     }
//   }
//
// function check() {
//   console.log(num_list);
//   getID = document.getElementsByTagName("h1");
//   if (num_list[0] < num_list[1]) {
//     var result = "Player" num_list[1] "win";
//     getID.innerHTML(result);}
//   else {
//     var result = "Player" num_list[0] "win";
//     getID.innerHTML(result);
//   }}
