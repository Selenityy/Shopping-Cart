import cart from "../../../assets/shopping-bag.png";

const Icons = () => {
    

  return (
    <div>
      <div id="item-count" className="shopping-cart-icons"></div>
      <img
        src={cart}
        alt="shopping-cart-image"
        id="cart-icon"
        className="shopping-cart-icons toggle-off"
      ></img>
    </div>
  );
};

export default Icons;
