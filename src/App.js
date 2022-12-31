import React, { useState, useEffect } from "react";
import "./index.css";
import { AiOutlinePlus, AiFillCheckCircle, AiOutlineShoppingCart, AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";

const App = () => {
  const [items, setItems] = useState([{ itemName: "", quantity: 0, isSelected: false }]);

  const totalQuantity = items.reduce((total, item) => total + item.quantity, 0);

  const [inputValue, setInputValue] = useState("");

  const handleAddButton = () => {
    const newItem = {
      itemName: inputValue,
      quantity: 1,
      isSelected: false,
    };

    const newItems = [...items, newItem];
    setItems(newItems);
    setInputValue("");
  };

  const handleClickIncrease = (index) => {
    const newItems = [...items];

    newItems[index].quantity++;
    setItems(newItems);
  };
  const handleClickDecrease = (index) => {
    const newItems = [...items];

    newItems[index].quantity--;
    setItems(newItems);
  };

  const togglecompleted = (index) => {
    const newItems = [...items];

    newItems[index].isSelected = !newItems[index].isSelected;
    setItems(newItems);
  };

  return (
    <div className="app-background">
      <div className="main-container">
        <div className="add-item-box">
          <input value={inputValue} onChange={(event) => setInputValue(event.target.value)} className="add-item-input" placeholder="Add an item..." />
          <AiOutlinePlus onClick={() => handleAddButton()} />
        </div>
        <div className="item-list">
          {items.map((item, index) => (
            <div className="item-container">
              <div className="item-name">
                {item.isSelected ? (
                  <>
                    <AiFillCheckCircle />
                    <span className="completed">{item.itemName}</span>
                  </>
                ) : (
                  <>
                    <AiOutlineShoppingCart onClick={() => togglecompleted(index)} />
                    <span>{item.itemName}</span>
                  </>
                )}
              </div>
              <div className="quantity">
                <button>
                  <AiFillCaretLeft onClick={() => handleClickDecrease(index)} />
                </button>
                <span> {item.quantity} </span>
                <button>
                  <AiFillCaretRight onClick={() => handleClickIncrease(index)} />
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="total">Total :{totalQuantity}</div>
      </div>
    </div>
  );
};

export default App;
