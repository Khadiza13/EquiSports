import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    // <div className="bg-gradient-to-r from-[#0047ab] to-[#1ca9c9]">
    <div className="bg-[url('https://i.ibb.co.com/3FSnwYy/c-HJpdm-F0-ZS9sci9pb-WFn-ZXMvd2-Vic2l0-ZS8y-MDI0-LTAy-L3-Jhd3-Bpe-GVs-X29m-Zmlj-ZV8y-OV9ncm-Fpbnlf-Z.jpg')] bg-cover bg-center">
      <Outlet></Outlet>
    </div>
  );
};

export default AuthLayout;
