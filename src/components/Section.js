import React from 'react'
import styled from 'styled-components'

import Fade from 'react-reveal/Fade'

function Section({
    title,
    description,
    leftBtnText,
    righBtnText,
    backgroundImg
}) {
    return (
        <Wrap bgImage={backgroundImg}>
            <Fade bottom>
                <ItemText>
                    <h1>{title}</h1>
                    <p>{description}</p>
                </ItemText>
            </Fade>

            <Buttons>
                <Fade bottom>
                    <ButtonGroup>
                        <LeftButton>
                            {leftBtnText}
                        </LeftButton>
                        {righBtnText &&
                            <RightButton>
                                {righBtnText}
                            </RightButton>
                        }

                    </ButtonGroup>
                </Fade>
                <DownArrow src='./assets/images/down-arrow.svg' />
            </Buttons>
        </Wrap>
    )
}

export default Section

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background:orange;
    background-size:cover;
    background-image:${props => `url("./assets/images/${props.bgImage}")`};
    background-position:center;
    background-repeat:no-repeat;
    display:flex;
    flex-direction:column;
    justify-content:space-between; 
    align-items:center;
`

const ItemText = styled.div`
padding-top:15vh;
text-align:center;
`

const ButtonGroup = styled.div`
display:flex;
margin-bottom:100px;
@media (max-width: 768px){
    flex-direction:column;
}
`

const LeftButton = styled.div`
background-color:rgba(23,26,32,0.8);
height:40px;
width:256px;
color:white;
display:flex;
justify-content:center;
align-items:center;
border-radius:100px;
opacity:0.8;
text-transform:uppercase;
cursor:pointer;
margin:8px;
`

const RightButton = styled(LeftButton)`
background:white;
color:black;
opaacity:0.65;
`

const DownArrow = styled.img`
margin-top:20px;
height:40px;
animation: animateDown 1s infinite;
overflow-x:hidden
`

const Buttons = styled.div`

`