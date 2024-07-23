import StepProgress from "./StepProgress/stepProgress.jsx";

import Step1 from "./Step/step1";
import Step2 from "./Step/step2";
import Step3 from "./Step/step3";

export default function Register({ currentStep, totalPrice }) {
  return (
    <section
      className="register-container col col-lg-6 col-sm-12"
      data-phase={currentStep}
      data-total-price={totalPrice}
    >
      <StepProgress currentStep={currentStep} />
      <section className="form-container col col-12">
        <Step1 />
        <Step2 />
        <Step3 />
      </section>
    </section>
  );
}
