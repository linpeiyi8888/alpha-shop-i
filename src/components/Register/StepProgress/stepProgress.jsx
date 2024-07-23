import { ReactComponent as FinishIcon } from "/Users/linpeiyi/alpha-shop-i/src/icons/pageFinish.svg";

function Progress({ phase, number, step, currentStep }) {
  return (
    <>
      <span className="progress-group" data-phase={phase}>
        <span className="progress-icon">
          <span className="text">
            {currentStep > number ? <FinishIcon className="finish" /> : number}
          </span>
        </span>
        <span className="progress-label">{step}</span>
      </span>
    </>
  );
}

export default function StepProgress({ currentStep }) {
  return (
    <>
      <h2 className="register-title col col-12">結帳</h2>
      <section className="progress-container col col-12">
        <Progress
          number={1}
          phase="address"
          step="寄送地址"
          currentStep={currentStep}
        />

        <span className="progress-bar" data-order="1"></span>

        <Progress
          number={2}
          phase="shipping"
          step="運送方式"
          currentStep={currentStep}
        />

        <span className="progress-bar" data-order="2"></span>

        <Progress
          number={3}
          phase="credit-card"
          step="付款資訊"
          currentStep={currentStep}
        />
      </section>
    </>
  );
}
