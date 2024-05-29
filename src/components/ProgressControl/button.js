import rightArrow from "/Users/linpeiyi/alpha-shop-i/src/icons/rightArrow.svg";

export default function Button() {
  return (
    <>
      <section className="progress-control-container col col-lg-6 col-sm-12">
        <section className="button-group col col-12" data-phase="address">
          <button className="next">
            下一步
            <img src={rightArrow} alt="right-arrow.svg" />
          </button>
        </section>
      </section>
    </>
  );
}
