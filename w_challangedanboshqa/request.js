// const sendMessage = () => {

//     const token = "7940057045:AAHRFPvgUCo_7pqpXD6uq4li7-_DYx2J96g"; // Use environment variable
//     const chatId = 6134458285;
//     const url = `https://api.telegram.org/bot${token}/sendMessage`;

//     const info_user = `Ism: Davron, Phone number: 8888888`;
    
//     axios
//       .post(url, {
//         chat_id: chatId,
//         text: info_user,
//       })
//       .then(() => {
//         alert("Muvaffaqiyatli yuborildi!!!");
//       })
//       .catch((error) => {
//         console.error("Yuborishda xatolik:", error);
//       });
//   };

//   sendMessage();
let son = 10;
function ozgartir(x) {
  x = x + 5;
  console.log("Ichkarida:", x);
}


ozgartir(son);
console.log("Tashqarida:", son);

