import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import { Avatar } from "@material-ui/core";
import { useState, useEffect } from "react";
import AccountMenu from "./AccountMenu";
import { useGlobalContext } from "./context";

function HeaderTwo() {
  const searchValue = React.useRef("");
  const { search, HandleSearchSubmit, HandleSearchInput } = useGlobalContext();
  const [menu, setMenu] = useState(false);
  // console.log(search);

  return (
    <header className="new-header">
      <navbar className="new-header__wrapper">
        <div className="new-header__column new-header__column-left">
          <div className="new-header__logo">
            {/* <span className="logo__symbol">s</span> */}
            <span className="logo__name">
              <a href="/">swoop</a>
            </span>
          </div>

          <div className="search-wrapper">
            <input
              id="name"
              className="search-wrapper__input"
              type="text"
              placeholder="Start your search"
              value={search.query}
              onChange={HandleSearchInput}
              autoComplete="off"
            ></input>
            <figure className="search-wrapper__icon-wrapper">
              <SearchIcon
                className="search-wrapper__icon"
                type="submit"
                onClick={HandleSearchSubmit}
              ></SearchIcon>
            </figure>
          </div>
          <div className="new-header__column-right">
            <div className="new-header__column-right-listing">
              <a href="/listing-form">Share products</a>
            </div>
            <figure className="new-header__column-right-figure">
              <Avatar onClick={() => setMenu(!menu)} />
              {menu && <AccountMenu />}
            </figure>
          </div>
        </div>
      </navbar>
      <div></div>
    </header>
  );
}

export default HeaderTwo;
