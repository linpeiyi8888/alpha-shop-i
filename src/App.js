import "./App.css";

// import component
import Payment from "./components/StepProgress/pay/payment";
import Address from "./components/Steps/Step1/address";
import Shipping from "./components/Steps/Step2/shipping";
import CreditCard from "./components/Steps/Step3/creditcard";
import Button from "./components/ProgressControl/button";

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
            <h2 className="register-title col col-12">結帳</h2>

            <section className="progress-container col col-12">
              <Payment></Payment>
            </section>

            <section className="form-container col col-12">
              <Address></Address>
            </section>
          </section>

          <section className="progress-control-container col col-lg-6 col-sm-12">
            <Button></Button>
          </section>
        </div>
      </main>
    </>
  );
}

export default App;
