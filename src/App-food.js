//import React from "react";
//import PropTypes from "prop-types";

function Food({name , rating}){
    return (
      <div>
        <h2>{name} 먹고싶다</h2>
        <h3> {rating}/5.0 </h3>
      </div>
    )
}

Food.prototype = {

  name : PropTypes.string.isRequired,
  rating : PropTypes.number.isRequired
};

const list = [
  { key : 1,
    name: "치킨",
    rating: "5.0" },
  { key : 2,
    name: "피자",
    rating: 4.9 },
  { key : 3,
    name: "곱창",
    rating: 4.8 },
  { key : 4,
    name: "떡볶이",
    rating: 4.7 },
];

function App() {
  return (
    <div>
        {list.map(food => {
          return <Food key={food.key} name={food.name} rating={food.rating} />
        })}
    </div>
  );
}

//export default App;
