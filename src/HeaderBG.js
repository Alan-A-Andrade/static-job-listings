import styled from "styled-components";
import FilteredTagBox from "./FilteredTagsBox";

export default function HeaderBG(Props) {

  return (
    <div>
      <HeaderDesktop>
      </HeaderDesktop>
      <div className="wrapper-Filter-Box">
        <FilteredTagBox onClick={Props.onClick} tagList={Props.tagList} />
      </div>
    </div>
  )


}

const HeaderDesktop = styled.div`

width: 100vw;
height: 156px;
background-color: hsl(180, 29%, 50%);
background-image: url("images/bg-header-desktop.svg");

display:flex;
flex-direction: column;
flex-wrap: wrap;
position: relative;

`