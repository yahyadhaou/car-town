import React from "react";
import { CDBFooter, CDBBtn, CDBIcon, CDBBox } from "cdbreact";

 const Footer = () => {
  return (
    <CDBFooter className="shadow">
      <CDBBox
        display="flex"
        justifyContent="between"
        alignItems="center"
        className="mx-auto py-4 flex-wrap"
        style={{ width: "80%" }}
      >
        <CDBBox display="flex" alignItems="center">
          <a href="/" className="d-flex align-items-center p-0 text-dark">
            <img
              alt="logo"
              src="https://scontent.xx.fbcdn.net/v/t1.15752-9/318188190_584284990200398_3120553344828726772_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=aee45a&_nc_ohc=r1o70u4eQHAAX-zx-M7&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdQfCgbEXLQM8ZuPZt2Xtj_pRJSMtZskQPuvc71sbWowAg&oe=63BA8B2E"
              width="100px"
            />
          </a>
        </CDBBox>
        <CDBBox>
          <small className="ml-2">
            &copy; صوّر بيع
•
لوّج إشري
          </small>
        </CDBBox>
        <CDBBox display="flex">
          <CDBBtn flat color="dark" className="p-2">
            <CDBIcon fab icon="facebook-f" />
          </CDBBtn>
          <CDBBtn flat color="dark" className="mx-3 p-2">
            <CDBIcon fab icon="twitter" />
          </CDBBtn>
          <CDBBtn flat color="dark" className="p-2">
            <CDBIcon fab icon="instagram" />
          </CDBBtn>
        </CDBBox>
      </CDBBox>
    </CDBFooter>
  );
};

export default Footer;