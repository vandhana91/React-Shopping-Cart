import React, { useState, useEffect } from "react";

const Shop = () => {
  const [cart, setCart] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const items = [
    {
      id: 1,
      name: "Luxury Gold and Black Analog Girls Analog Watch",
      image:'https://rukminim1.flixcart.com/image/798/958/kirr24w0-0/watch/1/x/b/pack-of-2-queen-dial-magnetic-strap-luxury-casual-gold-and-black-original-imafyhnqahvfmncb.jpeg?q=50',
      price: 259,
    },
    {
      id: 2,
      name: "EP20005SL01 Analog Watch",
      image:"https://rukminim1.flixcart.com/image/798/958/krtjgcw0/watch/k/z/e/ep20005sl01-epic-original-imag5jahynyywhz6.jpeg?q=50",
      price: 417,
    },
    {
      id: 3,
      name: "EP20001WL01 Analog Watch",
      image:"https://rukminim1.flixcart.com/image/798/958/krtjgcw0/watch/2/3/s/ep20001wl01-epic-original-imag5jamr8trkzvv.jpeg?q=50",
      price: 500,
    },
  ];

  useEffect(() => {
    total();
  }, [cart]);

  const total = () => {
    let totalVal = 0;
    for (let i = 0; i < cart.length; i++) {
      totalVal += cart[i].price;
    }
    setCartTotal(totalVal);
  };

  const addToCart = (el) => {
      setCart([...cart, el]);
  };

  const removeFromCart = (el) => {
    let hardCopy = [...cart];
    hardCopy = hardCopy.filter((cartItem) => cartItem.id !== el.id);
    setCart(hardCopy);
  };

  const listItems = items.map((el) => (
    <div key={el.id}>
      <div className="watch-desc">
      {el.name}
      <br></br>
      {el.price} 
      </div>
      <div className='watch-image'>
      <img src={el.image}
      alt='watch' width="250" height="400"
      /></div>
      <input type="submit" value="Add To Cart" onClick={() => addToCart(el)} />
    </div>
  ));

  const cartItems = cart.map((el) => (
    <div key={el.id}>
      <div className="watch-desc">
      {el.name}
      <br></br>
      {el.price}
      </div>
      <div className='watch-image'>
      <img src={el.image}
      alt='watch' width="300" height="400"
      /></div>
      <input type="submit" value="remove" onClick={() => removeFromCart(el)} />
    </div>
  ));

  return (
    <div>
      <b>STORE</b>
      <b><div className="watch-desc" >{listItems}</div></b>
      <div>CART</div>
      <div className="watch-desc">{cartItems}</div>
      <div>Total: ${cartTotal}</div>
    </div>
  );
};

export default Shop;