
import * as data from "./data.json"
import HeaderBG from "./HeaderBG";
import styled from "styled-components";
import JobItem from "./JobItem";
import { useState } from "react";
import FilteredTagBox from "./FilteredTagsBox";


const listingData = data.default;

export default function App() {

  const [tagList, setTagList] = useState([])


  function filterTag(e) {

    if (tagList.length === 0) {
      return true
    }

    else {

      let jobTags = [e.role, e.level, ...e.languages, ...e.tools]

      return tagList.every(tag => jobTags.includes(tag))
    }

  }

  return (
    <AppStyled>
      <HeaderBG></HeaderBG>
      <div className="job-list">
        <FilteredTagBox onClick={setTagList} tagList={tagList}></FilteredTagBox>
        {listingData.filter(e => filterTag(e)).map((e, id) => <JobItem onClick={setTagList} tagList={tagList} key={id} data={e} />)}

      </div>
      <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" >Frontend Mentor</a>.
        Coded by <a href="https://github.com/Alan-A-Andrade">Alan de Andrade</a>.
      </div>
    </AppStyled>
  )
}

const AppStyled = styled.div`

background-color:hsl(180, 52%, 96%);

width: 100vw;
display:flex;
flex-direction:column;
align-items:center;

.job-list{
  padding: 50px 0px;
  width:100%;
  display:flex;
  flex-direction: column;
  gap: 25px;

}

`