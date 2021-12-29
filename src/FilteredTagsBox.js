import styled from "styled-components"
import cancelIcon from "./images/icon-remove.svg"

export default function FilteredTagBox(Props) {

  function handleClick(tagNameTarget) {

    Props.onClick(Props.tagList.filter((tag) => tag !== tagNameTarget))
  }


  if (Props.tagList.length === 0) {
    return ""
  }

  else {

    return (
      <TagContentBox>

        <nav>
          <div className="selected-tag-list">
            {Props.tagList.map(e => <SelectedTagBox><h1>{e}</h1><div className="iconBox" onClick={() => handleClick(e)}><img src={cancelIcon} alt="" /></div></SelectedTagBox>)}
          </div>
          <h1 className="cancel-button" onClick={() => Props.onClick([])}>Clear</h1>
        </nav>
      </TagContentBox>
    )
  }
}


const TagContentBox = styled.div`
width: 100%;
height: 60px;

padding: 0px 156px;

position:relative;

.selected-tag-list{
  display: flex;
  gap: 15px;
}

.cancel-button{
  color:hsl(180, 8%, 52%);
  font-weight: 700;
  
  &:active, :hover{
    color: hsl(180, 29%, 50%);
    transition: 0.2s ease-in-out;
    text-decoration: underline;

  }
}

nav{
  width: 100%;
  height: 100%;
  background-color: hsl(180, 52%, 96%);
  border-radius: 6px;
  box-shadow: 5px 5px 20px 5px hsla(180, 29%, 50%, 0.3);
  display:flex;
  align-items:center;
  justify-content: space-between;
  gap: 15px;
  padding: 0px 20px;
}
`

const SelectedTagBox = styled.div`
  height: 1.5em;
  background-color:hsla(180, 8%, 52%, 0.1);

  color: hsl(180, 29%, 50%);

  font-weight: 700;
  border-radius: 0.2em;

  transition: 0.1s ease-in-out;

  display: flex;
  gap: 0.5em;
  align-items:center;

  h1{
    padding-left:0.5em;
  }


  .iconBox{
    height: 100%;
    width: 1.5em;
    background-color: hsl(180, 29%, 50%);
    display: flex;
  align-items:center;
  justify-content:center;
  border-radius: 0.2em;
  border-bottom-left-radius:0px;
  border-top-left-radius:0px;


  &:active, :hover{
    color: hsl(180, 52%, 96%);
    background-color:hsl(180, 14%, 20%);
    transition: 0.2s ease-in-out;

  }
  }

`