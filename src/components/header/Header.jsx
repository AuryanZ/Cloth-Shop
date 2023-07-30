import Cart from "../cart/Cart";

const Header = () => {
  return (
    <header className="bg-[#F6F6F7] mt-4 px-4 lg:px-32 flex justify-end items-center">
      <Cart />
    </header>
  );
};

export default Header;