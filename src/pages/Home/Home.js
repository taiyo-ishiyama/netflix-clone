import React from 'react'
import styled from 'styled-components'
import NavBar from '../../components/NavBar/NavBar'
import TitleCards from '../../components/TitleCards/TitleCards'
import Footer from '../../components/Footer/Footer'

function Home() {
  return (
    <Container>
      <NavBar/>
      <Hero>
        <HeroImg src="/assets/hero_banner.jpg" alt="" />
        <HeroCaption>
          <CaptionImg src="/assets/hero_title.png" alt=""/>
            <p> Discovering his ties to a secret ancient order, a young man living in modern Istanbul embarks on aquest to save the city from an immortal enemy</p>
          <HeroButtons>
            <PlayButton><img src="/assets/play_icon.png" alt=""/>Play</PlayButton>
            <InfoButton><img src="/assets/info_icon.png" alt=""/>More Info</InfoButton>
          </HeroButtons>
          <TitleCardsWrapper>
            <TitleCards/>
          </TitleCardsWrapper>
        </HeroCaption>
      </Hero>
      <MoreCards>
        <TitleCards title={"Blockbuster Movies"} category={"top_rated"}/>
        <TitleCards title={"Only on Netflix"} category={"popular"}/>
        <TitleCards title={"Upcoming"} category={"upcoming"}/>
        <TitleCards title={"Top Pics for you"} category={"now_playing"}/>
      </MoreCards>
      <Footer/>
    </Container>
  )
}

export default Home

const Container = styled.div`

`

const Hero = styled.div`
  position: relative;
  /* img {
    width: 100%;
    mask-image: linear-gradient(to right, transparent, black 75%);
    -weblit-mask-image: linear-gradient(to right, transparent, black 75%);
  } */
`
const HeroImg = styled.img`
  width: 100%;
  mask-image: linear-gradient(to right, transparent, black 75%);
  -weblit-mask-image: linear-gradient(to right, transparent, black 75%);
`

const HeroCaption = styled.div`
  position: absolute;
  width: 100%;
  padding-left: 6%;
  bottom: 0;

  p {
    max-width: 700px;
    font-size: 17px;
    margin-bottom: 20px;

    @media (max-width: 800px) {
    font-size: 12px;
    margin-bottom: 10px;
  }
  }

  @media (max-width: 800px) {
    padding-left: 4%;
  }

`

const TitleCardsWrapper = styled.div`
  @media (max-width: 1024px) {
    display: none;
  }
`

const CaptionImg = styled.img`
  width: 90%;
  max-width: 420px;
  margin-bottom: 30px;

  @media (max-width: 800px) {
    margin-bottom: 10px;
    width: 40%;
  }
  @media (max-width: 500px) {
    display: none;
  }
`


const HeroButtons = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 50px;

  @media (max-width: 1024px) {
    margin-bottom: 30px;
  }
`

const PlayButton = styled.div`
  border: 0;
  outline: 0;
  padding: 8px 20px;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-size: 15px;
  font-weight: 600;
  background: white;
  border-radius: 4px;
  cursor: pointer;
  color: black;
  img {
    width: 25px;

    @media (max-width: 800px) {
    width: 20px;
  }

    @media (max-width: 500px) {
    width: 15px;
  }
  }
  &:hover {
    background: #ffffffbf;
  }
  @media (max-width: 500px) {
    padding: 4px 10px;
    gap: 5px;
    font-size: 10px;
  }
`

const InfoButton = styled(PlayButton)`
  color: #fff;
  background: #6d6d6eb3;
  &:hover {
    background: #6d6d6e66;
  }
`
const MoreCards = styled.div`
  padding-left: 6%;

  @media (max-width: 800px) {
    padding-left: 4%;
  }
`