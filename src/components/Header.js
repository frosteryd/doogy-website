import styled from 'styled-components'
import Icon from '../assets/logo.svg'
import { ContactButton, device } from '../components/Assets'

const Logo = styled.img`
  max-width: 140px;
  max-height: 140px;
  margin-bottom: 2em;
  @media ${device.tablet} {
    max-width: 80px;
    max-height: 80px;
    margin-left: 2em;
  }
`
const Header = styled.header`
  padding-top: 20px;
  display: flex;
  justify-content: center;
  @media ${device.tablet} {
    justify-content: left;
  }
`
const Right = styled.div`
  position: fixed;
  right: 50px;
  top: ${props => props.alert ? '75px' : '25px'};
  z-index: 99;
  @media ${device.tablet} {
      right: 10px;
    }
  @media ${device.mobileL} {
    top: 40px;
  }
`
const Contact = styled.div`
  cursor: pointer;
  animation: wiggle 5s ease infinite;
  @keyframes wiggle {
      0% {transform: rotateZ(2deg);}
      2% {transform: rotateZ(-2deg);}
      4% {transform: rotateZ(2deg);}
      6% {transform: rotateZ(2deg);}
      8% {transform: rotateZ(-2deg);}
      10% {transform: rotateZ(2deg);}
      12% {transform: rotateZ(0deg);}
  }
`
const Center = styled.div`
`

const HeaderComponent = ({ alert }) => {
  const onClick = () => {
    console.log('scroll')
    window.scrollTo({
      top: document.body.clientHeight,
      left: 0,
      behavior: 'smooth'
    })
  }

  console.log(document.scrollingElement)
  console.log()

  return (
    <Header>
      <Center>
        <Logo src={Icon} />
      </Center>
      <Right alert={alert}>
        <Contact onClick={() => onClick()}>
          <ContactButton />
        </Contact>
      </Right>
    </Header>
  )
}

export default HeaderComponent
