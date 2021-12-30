
import * as data from "./data.json"
import HeaderBG from "./HeaderBG";
import styled from "styled-components";
import JobItem from "./JobItem";
import { useState } from "react";


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
      <HeaderBG onClick={setTagList} tagList={tagList} />

      <div className="job-list">

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

width: 100%;
display:flex;
flex-direction:column;
flex-wrap: wrap;
align-items:center;

.job-list{
  padding: 60px 0px 60px 0px;
  width:100%;
  display:flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 30px;
}

.attribution{
  padding: 15px;
}

`