import React from "react";
import styled from "styled-components";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import CreateIcon from "@material-ui/icons/Create";
import SideBarOption from "./SideBarOption";
import InsertCommentIcon from "@material-ui/icons/InsertComment";
import InboxIcon from "@material-ui/icons/Inbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import AppsIcon from "@material-ui/icons/Apps";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddIcon from "@material-ui/icons/Add";
import { db } from "./firebase";
import { useCollection } from "react-firebase-hooks/firestore";
function SideBar() {
  const [channels, loading, error] = useCollection(db.collection("rooms"));
  {
    channels?.docs.map((doc) => {
      console.log(doc.data().name);
    });
  }

  return (
    <SidebarContainer>
      <SideBarHeader>
        <SideBarInfo>
          <h2>Universe_j</h2>
          <h3>
            <FiberManualRecordIcon />
            shirishti jain
          </h3>
        </SideBarInfo>
        <CreateIcon />
      </SideBarHeader>

      <SideBarOption Icon={InsertCommentIcon} title="Threads" />
      <SideBarOption Icon={InboxIcon} title="Mentions & reactions" />
      <SideBarOption Icon={DraftsIcon} title="Saved items" />
      <SideBarOption Icon={BookmarkBorderIcon} title="Channel browser" />
      <SideBarOption Icon={PeopleAltIcon} title="People & user groups" />
      <SideBarOption Icon={AppsIcon} title="Apps" />
      <SideBarOption Icon={FileCopyIcon} title="File browser" />
      <SideBarOption Icon={ExpandLessIcon} title="Show less" />

      <hr />

      <SideBarOption Icon={ExpandMoreIcon} title="Channels" />

      <hr />

      <SideBarOption Icon={AddIcon} AddChannelOption title="Add Channel" />

      {channels?.docs.map((doc) => {
        return (
          <SideBarOption title={doc.data().name} key={doc.id} id={doc.id} />
        );
      })}
    </SidebarContainer>
  );
}

export default SideBar;

const SidebarContainer = styled.div`
  height: 100vh;
  background-color: var(--slack-color);
  color: #fff;
  padding: 10px;
  flex: 0.3;
  border-top: 1px solid #49274b;
  max-width: 260px;
  > hr {
    border: 1px solid #49274b;
    margin: 10px 0;
  }
`;

const SideBarHeader = styled.div`
  display: flex;
  border-bottom: 1px solid #49274b;
  padding: 13px;
  align-items: center;
  justify-content: space-between;

  > .MuiSvgIcon-root {
    padding: 8px;
    color: #49274b;
    font-size: 18px;
    background-color: white;
    border-radius: 999px;
  }
`;

const SideBarInfo = styled.div`
  align-items: center;
  flex: 1;
  > h3 {
    font-size: 13px;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-weight: 400;
  }

  > h3 > .MuiSvgIcon-root {
    color: green;
    font-size: 15px;
  }

  > h2 {
    font-size: 15px;
    font-weight: 500;
    margin-bottom: 5px;
  }
`;
