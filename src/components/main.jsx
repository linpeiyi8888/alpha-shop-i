import { useState } from "react";
import { Items } from "./Cart/cartContent";

import "/Users/linpeiyi/alpha-shop-i/src/App.css";

import Register from "/Users/linpeiyi/alpha-shop-i/src/components/Register/register.jsx";
import ProgressControl from "/Users/linpeiyi/alpha-shop-i/src/components/ProgressControl/progressControl.jsx";
import CartItem from "/Users/linpeiyi/alpha-shop-i/src/components/Cart/cart.jsx";

export default function Main() {
  const [itemList, setItemList] = useState(Items);
  const [currentStep, setCurrentStep] = useState(1);

  // 購物車小計
  const totalPrice = itemList
    .map((item) => item.price * item.quantity)
    .reduce((acc, cur) => acc + cur);

  // 購物車增加功能
  function onMinusClick(propId) {
    setItemList(
      itemList.map((item) => {
        if (item.id === propId) {
          return {
            ...item,
            quantity: item.quantity === 0 ? 0 : item.quantity - 1,
          };
        } else {
          return item;
        }
      })
    );
  }

  // 購物車減少功能
  function onPlusClick(propId) {
    setItemList(
      itemList.map((item) => {
        if (item.id === propId) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        } else {
          return item;
        }
      })
    );
  }

  // 表單控制按鈕
  function onHandleClick(e) {
    if (e.target.classList.contains("next") && currentStep !== 3) {
      setCurrentStep((n) => n + 1);
    } else if (e.target.classList.contains("prev")) {
      setCurrentStep((n) => n - 1);
    } else if (currentStep === 3) {
      setCurrentStep(1);
    }
  }

  return (
    <>
      <main className="site-main">
        <div className="main-container">
          <Register currentStep={currentStep} totalPrice={totalPrice} />
          <ProgressControl onHandleClick={onHandleClick} />
          <CartItem
            itemList={itemList}
            onMinusClick={onMinusClick}
            onPlusClick={onPlusClick}
            totalPrice={totalPrice}
          />
        </div>
      </main>
    </>
  );
}
