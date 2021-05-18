import React from "react";
import { Avatar } from "@material-ui/core";
import styled from "styled-components";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import SearchIcon from "@material-ui/icons/Search";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";

function Header() {
  return (
    <HeaderContainer>
      <HeaderLeft>
        <HeaderAvatar />
        <AccessTimeIcon />
      </HeaderLeft>

      <HeaderSearch>
        <SearchIcon />
        <input type="text" placeholder="Search SJ" />
      </HeaderSearch>

      <HeaderRight>
        <HelpOutlineIcon />
      </HeaderRight>
    </HeaderContainer>
  );
}

export default Header;

const HeaderRight = styled.div`
  align-items: center;
  display: flex;
  flex: 0.3;
  justify-content: flex-end;

  > .MuiSvgIcon-root {
    color: white;
    margin-right: 20px;
  }
`;

const HeaderSearch = styled.div`
  display: flex;
  flex: 0.4;
  opacity: 1;
  align-items: center;
  border: 1px solid gray;
  border-radius: 6px;
  text-align: center;
  background-color: #421f44;

  > input {
    border: none;
    outline: none;
    background-color: transparent;
    padding: 5px;
    text-align: center;
    min-width: 30vw;
  }

  > .MuiSvgIcon-root {
    margin: 3px 8px;
    color: white;
  }
`;

const HeaderContainer = styled.div`
  background-color: var(--slack-color);
  padding: 10px 0;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

const HeaderLeft = styled.div`
  display: flex;
  flex: 0.3;
  align-items: center;
  margin-left: 20px;

  > .MuiSvgIcon-root {
    margin-left: auto;
    color: white;
    margin-right: 5px;
  }
`;

const HeaderAvatar = styled(Avatar)`
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
`;
