import styled from "styled-components"
import TagBox from "./tagBox"


export default function JobItem(Props) {

  let jobData = Props.data

  return (
    <ContentBox>
      <article >
        <div className="info">
          <div className="hover-style"></div>
          <div className="company-logo">
            <img src={jobData.logo} alt="" />
          </div>
          <div className="company-info">
            <div className="job-header">
              <h1 className="company-name">{jobData.company}</h1>
              {jobData.new === true ? <h1 className="new">NEW!</h1> : ""}
              {jobData.featured === true ? <h1 className="featured">FEATURED</h1> : ""}
            </div>

            <h1 className="job-position">{jobData.position}</h1>
            <div className="job-footer">
              <h1>{jobData.postedAt}</h1> • <h1>{jobData.contract}</h1>  • <h1>{jobData.location}</h1 >
            </div>
          </div>
        </div>
        <div className="tag-lis">
          <TagBox onClick={Props.onClick} tagList={Props.tagList} tagName={jobData.role} />
          <TagBox onClick={Props.onClick} tagList={Props.tagList} tagName={jobData.level} />
          {jobData.languages.map((e, id) => <TagBox onClick={Props.onClick} tagList={Props.tagList} key={`${id}_${jobData.id}_languages`} tagName={e} />)}
          {jobData.tools.map((e, id) => <TagBox onClick={Props.onClick} tagList={Props.tagList} key={`${id}_${jobData.id}_tools`} tagName={e} />)}
        </div>

      </article>
    </ContentBox >
  )


}


const ContentBox = styled.div`
width: 100%;
height: 156px;

padding: 0px 156px;
position: relative;

&:hover .hover-style{
  width: 5px;
  height: 100%;
  background-color: hsl(180, 29%, 50%);
  
  position: absolute;
  left:156px;

  transition: 0.2s ease-in-out;
}

article{
  width: 100%;
  height: 100%;
  background-color: hsl(180, 52%, 96%);
  border-radius: 6px;
  box-shadow: 5px 5px 20px 5px hsla(180, 29%, 50%, 0.3);
  display:flex;
  align-items:center;
  justify-content: space-between;
}

.info{
  padding-left: 35px;
  height: 100%;
  display: flex;
  align-items:center;

}

.company-info{
  height: 88px;
  padding: 0px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.job-header, .job-footer{
  display:flex;
  align-items: center;
  gap: 1em;
}

.job-header{
  color: hsl(180, 29%, 50%);
  font-weight: 700;
  font-size: 1em;
}
.job-footer{
  color:hsl(180, 8%, 52%);
  gap: 1.2em;
}

.job-position{
  font-weight: 700;
  font-size: 1.3em;

  color: hsl(180, 29%, 50%);

  &:hover{
    cursor: pointer;
  }
}

.new, .featured{
  color: hsl(180, 52%, 96%);

  padding: 0.3em 0.5em 0.1em 0.5em;
  border-radius: 1em;
}

.new{
  background-color: hsl(180, 29%, 50%);
}

.featured{
  background-color: hsl(180, 14%, 20%);
}

.tag-lis{
  display: flex;
  flex-wrap: wrap;
  padding-right: 40px;
  gap: 1em;

}

`
