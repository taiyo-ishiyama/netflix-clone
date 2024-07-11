import React from 'react'
import styled from 'styled-components'

function Footer() {
  return (
    <Container>
      <FooterIcon>
        <img src="/assets/facebook_icon.png" alt=""/>
        <img src="/assets/instagram_icon.png" alt=""/>
        <img src="/assets/twitter_icon.png" alt=""/>
        <img src="/assets/youtube_icon.png" alt=""/>
      </FooterIcon>
      <ul>
        <li>Audio Description</li>
        <li>Help Centre</li>
        <li>Gift Cards</li>
        <li>Media Centre</li>
        <li>Investor Relations</li>
        <li>Jobs</li>
        <li>Terms of Use</li>
        <li>Privacy</li>
        <li>Legal Notices</li>
        <li>Cookie Preferences</li>
        <li>Corporate Information</li>
        <li>Contact Us</li>
      </ul>
      <p>©︎ 1997-2023 Netflix, Inc.</p>
    </Container>
  )
}

export default Footer

const Container = styled.div`
  padding: 30px 4%;
  max-width: 1000px;
  margin: 0 auto;

  ul {
    display: grid;
    grid-template-columns: auto auto auto auto;
    gap: 15px;
    margin-bottom: 30px;
    list-style: none;

    @media (max-width: 800px) {
      grid-template-columns: auto auto;
      gap: 8px;
      font-size: 14px;
    }
  }
  p {
    color: gray;
    font-size: 14px;
  }
`

const FooterIcon = styled.div`
  display: flex;
  gap: 20px;
  margin: 40px 0;

  img {
    width: 30px;
    cursor: pointer;
    @media (max-width: 800px) {
      width: 25px;
    }
  }
`