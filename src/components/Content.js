import styled from 'styled-components'
import { Stars, DrawArrow, Appstore, device, Button, Phone, Card, TypeWrite, ArrowWrap, theme } from '../components/Assets'
import { Clock } from 'grommet-icons'
import { useState } from 'react'
import DogoHappy from '../assets/dogHappy.gif'
import DogoChatting from '../assets/dogChatting.png'
import AppPhoto from '../assets/phoneapp.png'

const Wrap = styled.div`
  max-width: 100%;
`

const WrapWidth = styled.div`
  max-width: 800px;
  margin: 0 auto;
`

const Space = styled.div`
  margin-top: 25px;
`

const Title = styled.h1`
  font-size: 75px;
  line-height: 100%;
  font-weight: 600;
  margin: 0 auto;
  max-width: ${props => props.width || 'none'};
  @media ${device.tablet}{
    font-size: 38px;
  }
`

const Title2 = styled.h2`
  font-size: 70px;
  line-height: 100%;
  font-weight: 600;
  margin: 0 auto;
  max-width: ${props => props.width || 'none'};
  @media ${device.laptopL}{
    font-size: 60px;
  }
  @media ${device.tablet}{
    font-size: 38px;
  }
`

const DogoChat = styled.img`
  max-width: 100%;
  @media ${device.laptop}{
    display: none;
  }
`

const ItemWrap = styled.div`
  display: flex;
  margin-top: -7em;
  justify-content: space-around;
`

const ChatWrap = styled.div`
  max-width: 600px;
  position: relative;
  @media ${device.tablet}{
    display: none;;
  }
`

const PhoneWrapFlex = styled.div`
  transform: rotate(-10deg);
  @media ${device.laptop}{
    transform: rotate(10deg);
    margin-top: 6em;
  }
  @media ${device.mobileL}{
    max-width: 275px;
  }
`

export const Page1 = () => {
  return (
    <Wrap>
      <WrapWidth>
        <Title>
          Framtidens <TypeWrite words={['hundapp', 'hundaffär', 'hundvakt']} />
        </Title>
        <Space />
        <Stars />
        <Appstore marginTop='-55px' />
      </WrapWidth>
      <ItemWrap>
        <ChatWrap>
          <DogoChat src={DogoChatting} />
          <ArrowWrap />
        </ChatWrap>
        <PhoneWrapFlex>
          <DrawArrow rotate={150} delay={0.5} />
          <Phone img={AppPhoto} size='350px' />
        </PhoneWrapFlex>
      </ItemWrap>
      {/* <PhoneWrap>
        <DrawArrow rotate={150} delay={0.5} />
        <Phone img={AppPhoto} size='350px' />
      </PhoneWrap>
      <PhoneWrap1>
        <DogoChat src={DogoChatting} />
      </PhoneWrap1> */}
    </Wrap>
  )
}

const Wrap2 = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  @media ${device.mobileL}{
    margin-top: 5em;
  }
`

const ButtonWrap = styled.div`
  padding: 1em;
`

const ButtonText = styled.div`
  font-weight: 600;
  font-size: 1.25em;
`

const HowWrap = styled.div`
  display: flex;
  margin: 1em;
  @media ${device.mobileL}{
    flex-direction: column;
  }
`

const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

`

const PhoneWrap2 = styled.div`
  @media ${device.tablet}{
    display: none;
  }
`

export const Page2 = () => {
  const [selectedButton, setSelectedButton] = useState(0)
  const [selectedCard, setselectedCard] = useState(0)

  const privatperson = [
    { title: 'hello', body: 'You can easily pay in the app after getting help.', img: AppPhoto },
    { title: 'hello', body: 'You can easily pay in the app after getting help.', img: AppPhoto },
    { title: 'hello', body: 'You can easily pay in the app after getting help.', img: AppPhoto },
    { title: 'hello', body: 'You can easily pay in the app after getting help.', img: AppPhoto }
  ]

  const foretag = [
    { title: 'hello företag', body: 'You can easily pay in the app after getting help.', img: AppPhoto },
    { title: 'hello företag', body: 'You can easily pay in the app after getting help.', img: AppPhoto },
    { title: 'hello företag', body: 'You can easily pay in the app after getting help.', img: AppPhoto },
    { title: 'hello företag', body: 'You can easily pay in the app after getting help.', img: AppPhoto }
  ]

  const text = (selectedButton === 0 ? privatperson : foretag)

  return (
    <Wrap2>
      <Title2 width='500px'>
        Hur Doogo fungerar
      </Title2>
      <ButtonWrap>
        <Button selected={selectedButton === 0} onSelect={() => setSelectedButton(0)}><ButtonText>Privatperson</ButtonText></Button>
        <Button selected={selectedButton === 1} onSelect={() => setSelectedButton(1)}><ButtonText>Företag</ButtonText></Button>
      </ButtonWrap>
      <HowWrap>
        <Column>
          <Card selected={selectedCard === 0} onSelect={() => setselectedCard(0)} icon={<Clock />} title={text[0].title} body={text[0].body} />
          <Card selected={selectedCard === 1} onSelect={() => setselectedCard(1)} icon={<Clock />} title={text[1].title} body={text[1].body} />
        </Column>
        <Column>
          <PhoneWrap2>
            <Phone img={text[selectedCard].img} />
          </PhoneWrap2>
        </Column>
        <Column>
          <Card selected={selectedCard === 2} onSelect={() => setselectedCard(2)} icon={<Clock />} title={text[2].title} body={text[2].body} />
          <Card selected={selectedCard === 3} onSelect={() => setselectedCard(3)} icon={<Clock />} title={text[3].title} body={text[3].body} />
        </Column>

      </HowWrap>
    </Wrap2>
  )
}

const Wrap3 = styled.div`
  display: flex;
  max-width: 900px;
  margin: 0 auto;
  justify-content: space-between;
  @media ${device.mobileL}{
    flex-direction: column;
  }
`

const TextWrap3 = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin: 2em;
  @media ${device.mobileL}{
    margin-bottom: 0;
  }
`

const ImgWrap = styled.div`
  max-width: 700px;
  overflow: hidden;
  border-radius: 200px;
  display: flex;
  background: rgba(174, 187, 248, 0.35);
  border-radius: 200px 200px 0px 0px;
  @media ${device.mobileL}{
    border-radius: 100px 100px 0px 0px;
  }
`

const Img = styled.img`
  object-fit: contain;
  width: 100%;
`

const Body = styled.p`
  font-size: 25px;
  line-height: 125%;
`

export const Page3 = () => {
  const [selectedButton, setSelectedButton] = useState(1)
  const [selectedCard, setselectedCard] = useState(1)
  return (
    <Wrap3>
      <TextWrap3>
        <Title2>
          En app för hundälskare
        </Title2>
        <Body>
          Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.
        </Body>
      </TextWrap3>
      <ImgWrap>
        <Img src={DogoHappy} />
      </ImgWrap>
    </Wrap3>
  )
}
