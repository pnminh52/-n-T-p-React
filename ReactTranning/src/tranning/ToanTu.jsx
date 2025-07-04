import React from 'react'

const ToanTu = () => {
  const array1 = ["apple", "banana", "cherry"];
  const array2 = ["orange", "grape", "kiwi"];
const fruits=[...array1, ...array2];
const [firstFruits, secondFruits,...remainingFruits]=fruits;
  const a = [1, 2, 3];
  const b = [4, 5, 6];
  const c = [...a, ...b];
  

  const user = {
    name: "Phạm Nhật Minh",
    age: 22,
    address: {
      city: "Hà Nội",
      country: "Việt Nam",
    },
  };
  const users = [
    { name: "Minh", age: 22, gender: "male" },
    { name: "Linh", age: 19, gender: "female" },
    { name: "An", age: 25, gender: "male" },
    { name: "Trang", age: 30, gender: "female" },
    { name: "Nam", age: 28, gender: "male" },
    { name: "Mai", age: 21, gender: "female" },
    { name: "Dũng", age: 24, gender: "male" },
    { name: "Hà", age: 26, gender: "female" },
    { name: "Tuấn", age: 20, gender: "male" },
    { name: "Ngọc", age: 23, gender: "female" },
  ];

  const { name, age, address: { city, country } } = user;

  return (
    <div>
      <p>Mảng gộp c: {c.join(', ')}</p>
      <p>Tên tôi là {name}, {age} tuổi, sống tại {city}, {country}</p>
     <div>
        <p>Quả đầu tiên là: {firstFruits}</p>
        <p>Quả thứ hai là: {secondFruits}</p>
        <p>Các quả còn lại là: {remainingFruits.join(", ")}</p>
        <p>Danh sách tất cả các quả: {fruits.join(", ")}</p>
     </div>
     <div>
        <h1> Danh sách Users có Gender = Female, Age Từ 19 đến 30</h1>
        <ul>
            {
                users.filter(user=>user.gender==="female" && user.age >=19 && user.age <=30).map((user, index)=>{
                  return(
                    <li key={index}>
                   Name: {user.name} - Age: {user.age}
                </li>
                  )
                })
            }
        </ul>
     </div>
    </div>
  )
}

export default ToanTu
