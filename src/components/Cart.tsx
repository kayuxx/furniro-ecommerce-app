import { Cart as CartSVG } from "@/icons";

export default function Cart() {
  return (
    <button>
      <CartSVG size={28} className="scale-80 md:scale-70 lg:scale-100" />
    </button>
  );
}
