import React from "react";
import NavMenu from "./NavMenu";

const Aside = () => {
  return (
    <aside>
      <div className="aside__lnb">
        <NavMenu />
      </div>

      <div className="side__customer">
        <img
          src={process.env.PUBLIC_URL + "/assets/images/slogan.png"}
          alt=""
        />
      </div>
    </aside>
  );
};

export default Aside;
