import { ReactComponent as Minus } from "/Users/linpeiyi/alpha-shop-i/src/icons/minus.svg";
import { ReactComponent as Plus } from "/Users/linpeiyi/alpha-shop-i/src/icons/plus.svg";

function Product(props) {
  return (
    <div
      className="product-container col col-12"
      data-count={props.id}
      data-price={props.price}
    >
      <img className="img-container" src={props.img} alt="container" />
      <div className="product-info">
        <div className="product-name">{props.name}</div>
        <div className="product-control-container">
          <div className="product-control">
            <Minus
              className="minus"
              onClick={() => {
                props.handleMinusClick(props.id);
              }}
            />
            <span className="product-count">{props.quantity}</span>
            <Plus
              className="plus"
              onClick={() => {
                props.handlePlusClick(props.id);
              }}
            />
          </div>
        </div>
        <div className="price">${props.price}</div>
      </div>
    </div>
  );
}

export default function CartItem({
  itemList,
  onMinusClick,
  onPlusClick,
  totalPrice,
}) {
  return (
    <section className="cart-container col col-lg-5 col-sm-12">
      <h3 className="cart-title">購物籃</h3>

      <section className="product-list col col-12" data-total-price="0">
        {itemList.map((item) => (
          <Product
            key={item.id}
            {...item}
            handleMinusClick={onMinusClick}
            handlePlusClick={onPlusClick}
          />
        ))}
      </section>

      <section className="cart-info shipping col col-12">
        <div className="text">運費</div>
        <div className="price">免運</div>
      </section>

      <section className="cart-info total col col-12">
        <div className="text">小計</div>
        <div className="price">${totalPrice}</div>
      </section>
    </section>
  );
}
