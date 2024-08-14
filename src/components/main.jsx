import { useState, useContext } from "react";
import { CartContext } from "./Cart/cartContent";

import "/Users/linpeiyi/alpha-shop-i/src/App.css";

import Register from "/Users/linpeiyi/alpha-shop-i/src/components/Register/register.jsx";
import ProgressControl from "/Users/linpeiyi/alpha-shop-i/src/components/ProgressControl/progressControl.jsx";
import CartItem from "/Users/linpeiyi/alpha-shop-i/src/components/Cart/cart.jsx";
import { FormContext } from "./Register/Step/formContext";

export default function Main() {
  const [currentStep, setCurrentStep] = useState(1);

  const itemContext = useContext(CartContext);
  const [itemList, setItemList] = useState(itemContext);
  const formData = useContext(FormContext);
  const [formValue, setFormValue] = useState(formData);

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

  //表單送出
  function handleSubmit() {
    formValue.map((data) => {
      return console.log(`${data.label}: ${data.dataValue}`);
    });
    console.log(`購物車總金額：${totalPrice}`);
  }

  // 表單控制按鈕
  function onHandleClick(e) {
    if (e.target.classList.contains("next") && currentStep !== 3) {
      setCurrentStep((n) => n + 1);
    } else if (e.target.classList.contains("prev")) {
      setCurrentStep((n) => n - 1);
    } else if (currentStep === 3) {
      setCurrentStep(1);
      handleSubmit();
      setFormValue(formData);
    }
  }

  // 信用卡資訊更動
  function handleChange({ name, value }) {
    setFormValue(
      formValue.map((data) => {
        if (data.name === name) {
          return {
            ...data,
            dataValue: value,
          };
        } else {
          return data;
        }
      })
    );
  }

  return (
    <>
      <main className="site-main">
        <div className="main-container">
          <FormContext.Provider value={formValue}>
            <CartContext.Provider value={itemList}>
              <Register
                currentStep={currentStep}
                totalPrice={totalPrice}
                onChange={handleChange}
              />
              <ProgressControl onHandleClick={onHandleClick} />
              <CartItem
                onMinusClick={onMinusClick}
                onPlusClick={onPlusClick}
                totalPrice={totalPrice}
              />
            </CartContext.Provider>
          </FormContext.Provider>
        </div>
      </main>
    </>
  );
}
