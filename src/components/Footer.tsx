import { CiPaperplane } from "react-icons/ci";
const Footer = () => {
  return (
    <div className="w-[100%] h-[240px] flex  bg-black text-white gap-11 justify-center">
      <div className=" flex-col  items-center mt-20 mr-7">
        <div>
          <h2>Exclusive</h2>
        </div>
        <div>Subscribe</div>
        <div>Get 10% off your first order</div>
        <div className="flex items-center mt-4">
          <input type="text" placeholder="Enter your email " />
          <CiPaperplane />
        </div>
      </div>
      {/*  */}
      <div className="flex-col  items-center mt-20">
        <div>
          <h3>Support</h3>
        </div>
        <div>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</div>
        <div>exclusive@gmail.com</div>
        <div>+88015-88888-9999</div>
      </div>

      {/*  */}
      <div className="flex-col items-center mt-20  ">
        <div>
          <h3>Account</h3>
        </div>
        <div>My Account</div>
        <div>Login / Register</div>
        <div>Cart</div>
        <div>Wishlist</div>
        <div>Shop</div>
      </div>

      {/*  */}
      <div className="flex-col  items-center mt-20">
        <div>
          <h3>Quick Link</h3>
        </div>
        <div>Privacy Policy</div>
        <div>Terms Of Use</div>
        <div>FAQ</div>
        <div>Contact</div>
      </div>

      {/*  */}
    </div>
  );
};

export default Footer;
