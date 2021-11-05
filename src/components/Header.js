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
`
const Contact = styled.div`
`
const Center = styled.div`
`

const HeaderComponent = ({ alert }) => (
  <Header>
    <Center>
      <Logo src={Icon} />
    </Center>
    <Right alert={alert}>
      <Contact>
        <ContactButton />
      </Contact>
    </Right>
  </Header>

)

export default HeaderComponent
