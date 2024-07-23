import { ReactComponent as RightArrow } from "/Users/linpeiyi/alpha-shop-i/src/icons/rightArrow.svg";
import { ReactComponent as LeftArrow } from "/Users/linpeiyi/alpha-shop-i/src/icons/leftArrow.svg";

function ButtonGroup({ phase, children }) {
  return (
    <section className="button-group col col-12" data-phase={phase} key={phase}>
      {children}
    </section>
  );
}

function Button({ className, onClick, text }) {
  if (className === "prev") {
    return (
      <button className={className} key={className} onClick={onClick}>
        <LeftArrow className={className} />
        {text}
      </button>
    );
  } else {
    return (
      <button className={className} key={className} onClick={onClick}>
        {text}
        <RightArrow className={className} key={className} onClick={onClick} />
      </button>
    );
  }
}

export default function ProgressControl({ onHandleClick }) {
  return (
    <>
      <section className="progress-control-container col col-lg-6 col-sm-12">
        <ButtonGroup phase="address">
          <Button className="next" text="下一步" onClick={onHandleClick} />
        </ButtonGroup>
        <ButtonGroup phase="shipping">
          <Button className="prev" text="上一步" onClick={onHandleClick} />
          <Button className="next" text="下一步" onClick={onHandleClick} />
        </ButtonGroup>
        <ButtonGroup phase="credit-card">
          <Button className="prev" text="上一步" onClick={onHandleClick} />
          <Button className="next" text="確認下單" onClick={onHandleClick} />
        </ButtonGroup>
      </section>
    </>
  );
}
