import styled from "styled-components"


export default function TagBox(Props) {


  function handleClick() {



    if (Props.tagList.includes(Props.tagName)) {

      return;
    }

    else {
      Props.onClick([...Props.tagList, Props.tagName])
    }
  }

  return (
    <TagContainer onClick={handleClick}>
      {Props.tagName}
    </TagContainer>
  )
}

const TagContainer = styled.h1`

  padding: 0.5em;
  background-color:hsla(180, 8%, 52%, 0.1);

  color: hsl(180, 29%, 50%);

  font-weight: 700;
  border-radius: 0.5em;

  transition: 0.1s ease-in-out;

  &:active, :hover{
    color: hsl(180, 52%, 96%);
    background-color:hsl(180, 29%, 50%);
    transition: 0.2s ease-in-out;
    cursor: pointer;

  }

`