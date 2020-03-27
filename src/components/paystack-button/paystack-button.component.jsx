import React from "react";
import PaystackButton from "react-paystack";

const PaystackCheckoutButton = ({ price }) => {
  const priceForPaystack = price * 100;
  const paystackPublicKey = "pk_live_2efd66bb5b51654afb22a54aa2ec2a54121954bb";
  const email = "collinsceleb@gmail.com";

  const callback = response => {
    console.log(response); // card charged successfully, get reference here
  };

  const close = () => {
    console.log("Payment closed");
  };

  const getReference = () => {
    //you can put any unique reference implementation code here
    let text = "";
    let possible =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-.=";

    for (let i = 0; i < 15; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
  };

  return (
    <div>
      <p>
        <PaystackButton
          text="Make Payment"
          className="payButton"
          callback={callback}
          close={close}
          disabled={false}
          embed={false}
          reference={getReference()}
          email={email}
          amount={priceForPaystack}
          paystackkey={paystackPublicKey}
          tag="button"
        />
      </p>
    </div>
  );
};

export default PaystackCheckoutButton;
