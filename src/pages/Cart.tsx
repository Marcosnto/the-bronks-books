import Button from "../components/Button";
import CartItem from "../components/CartItem";
import GoBackButton from "../components/GoBackButton";
import useStore from "../store";

export default function Cart() {
  const cart = useStore().cart;

  return (
    <>
      <GoBackButton to="/" />
      <div
        className="
        w-full
        min-h-screen
        flex 
        flex-col
        gap-3
        p-3 
        items-center
        bg-slate-100
        "
      >
        {cart.length > 0
          ? cart.map(({ id, imageLink, title, price, quantity }) => (
              <CartItem
                key={id}
                imageLink={imageLink}
                title={title}
                price={price}
                quantity={quantity}
              />
            ))
          : null}
        <div className="flex flex-col gap-1 w-8/12">
          <span className="font-extrabold text-2xl mb-4 mt-4">
            Total: R$ 10.00
          </span>
          <Button
            label="Finalizar Compra"
            onClick={() => console.log("finalizar compra")}
          />
        </div>
      </div>
    </>
  );
}
