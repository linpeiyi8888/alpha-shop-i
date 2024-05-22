export default function Payment() {
  return (
    <>
        <span className="progress-group" data-phase="address">
          <span className="progress-icon">
            <span className="text">1</span>
          </span>
          <span className="progress-label">寄送地址</span>
        </span>
        <span className="progress-bar" data-order="1"></span>
        <span className="progress-group" data-phase="shipping">
          <span className="progress-icon">
            <span className="text">2</span>
          </span>
          <span className="progress-label">運送方式</span>
        </span>
        <span className="progress-bar" data-order="2"></span>
        <span className="progress-group" data-phase="credit-card">
          <span className="progress-icon">
            <span className="text">3</span>
          </span>
          <span className="progress-label">付款資訊</span>
        </span>
    </>
  );
}
