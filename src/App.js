import "./App.css";

// import component
import Payment from "./components/StepProgress/pay/payment";
import Address from "./components/Steps/Step1/address";
import Shipping from "./components/Steps/Step2/shipping";
import CreditCard from "./components/Steps/Step3/creditcard";
import Button from "./components/ProgressControl/button";
import Cart from "./components/Cart/cart";

function App() {
  return (
    <>
      <main className="site-main">
        <div className="main-container">
          <section
            className="register-container col col-lg-6 col-sm-12"
            data-phase="1"
            data-total-price="0"
          >
            <Payment />
            <Address />
          </section>
          <Button />
          <Cart />
        </div>
      </main>
    </>
  );
}

export default App;
