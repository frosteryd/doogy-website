import styled from 'styled-components'
import { Stars, DrawArrow, Appstore, device, deviceMin, Button, Phone, TypeWrite, ArrowWrap, theme } from '../components/Assets'
import { Clock } from 'grommet-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaw, faComments, faLifeRing, faCalendarCheck } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import DogoHappy from '../assets/dogHappy.gif'
import DogoChatting from '../assets/dogChatting.png'
import AppPhoto from '../assets/phoneapp.png'
import Develop from '../assets/develop.png'
import Communicate from '../assets/communicate.png'
import Reminder from '../assets/reminder.png'
import Prepare from '../assets/prepare.png'
import Base from '../assets/worksText.png'

const Wrap = styled.div`
  max-width: 100%;
`

const Body = styled.p`
  font-size: 25px;
  line-height: 125%;
`

const Text = styled.p`
  font-size: 16px;
  line-height: 125%;
  transition: "all .5s ease",
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

const Title3 = styled.h2`
  font-size: 45px;
  line-height: 100%;
  font-weight: 600;
  margin: 0 auto;
  transition: "all .5s ease",
  max-width: ${props => props.width || 'none'};
  @media ${device.laptopL}{
    font-size: 35px;
  }
  @media ${device.tablet}{
    font-size: 30px;
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
  justify-content: space-evenly;
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
          <TypeWrite words={['Serviceboken', 'Hundvakten', 'Valpgrupper', 'Community', 'Events']} /> för din bästa vän
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
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 5em;

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
  @media ${device.tablet}{
    flex-direction: column;
  }
`

const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  flex: 1;

`

const PhoneWrap2 = styled.div`
  @media ${device.tablet}{
    display: none;
  }
`

const PhoneWrap3 = styled.div`
  @media ${deviceMin.tablet}{
    display: none;
  }
`

const Spacer = styled.div`
  padding: 2em;
`

const Line = styled.div`
  background-color: #000;
  padding: 2px;
  border-radius: 5px;
  width: 100%;
`

const CardWrap = styled.div`
  max-width: 400px;
  margin: 0 auto;
  opacity: ${props => props.active ? 1.0 : 0.3};
  transition: opacity 0.5s;
`

const CardHeader = styled.div`
  flex: 1;
  padding-left: 5px;
  padding-bottom: 5px;
  text-align: start;
`

const Card = (params) => {
  const { selected, selectedCard, setselectedCard, onSelect, id, title, body } = params
  const active = (selectedCard === undefined || selected)

  return (
    <CardWrap
      active={active}
      onClick={onSelect}
      onMouseEnter={onSelect}
      onMouseLeave={() => setselectedCard(undefined)}
    >
      <CardHeader>
        <Title3 active={active}>{`0${id} - ${title}`}</Title3>
      </CardHeader>
      <Line active={active} />
      <Text active={active} syle={{ textAlign: 'left' }}>{body}</Text>
    </CardWrap>
  )
}

export const Page2 = () => {
  const [selectedButton, setSelectedButton] = useState(0)
  const [selectedCard, setselectedCard] = useState(undefined)

  const privatperson = [
    { id: 1, title: 'Utvecklas', body: 'Genom att dokumentera hundens vardag får du överblick över aktiviteter och detaljer kring hunds hälsa och utveckling.', icon: faPaw, img: Develop },
    { id: 2, title: 'Umgås', body: 'Få möjlighet att få rådgivning från ett stort community med personer med liknande erfarenhet', icon: faComments, img: Communicate },
    { id: 3, title: 'Kom ihåg​', body: 'Lägg in påminnelser inför vaccinationer, avmaskningar, veterinärbesök och mycket annat, direkt i appen.', icon: faLifeRing, img: Reminder },
    { id: 4, title: 'Förberedd​', body: 'Vid olycka, skada eller sjukdom kan du snabbt skicka in rätt underlag till veterinär vilket minskar risken för missförstånd.', icon: faCalendarCheck, img: Prepare }
  ]

  // const foretag = [
  //   { id: 1, title: 'hello företag', body: 'You can easily pay in the app after getting help.', icon: faPaw, img: AppPhoto },
  //   { id: 2, title: 'hello företag', body: 'You can easily pay in the app after getting help.', icon: faPaw, img: AppPhoto },
  //   { id: 3, title: 'hello företag', body: 'You can easily pay in the app after getting help.', icon: faPaw, img: AppPhoto },
  //   { id: 4, title: 'hello företag', body: 'You can easily pay in the app after getting help.', icon: faPaw, img: AppPhoto }
  // ]

  // const text = (selectedButton === 0 ? privatperson : foretag)
  const text = (selectedButton === 0 && privatperson)

  return (
    <Wrap2>
      <Spacer />
      {/* <ButtonWrap>
        <Button selected={selectedButton === 0} onSelect={() => setSelectedButton(0)}><ButtonText>Privatperson</ButtonText></Button>
        <Button selected={selectedButton === 1} onSelect={() => setSelectedButton(1)}><ButtonText>Företag</ButtonText></Button>
      </ButtonWrap> */}
      <HowWrap>
        <Column>
          <Card id={text[0].id} selectedCard={selectedCard} selected={selectedCard === 0} setselectedCard={setselectedCard} onSelect={() => setselectedCard(0)} icon={<FontAwesomeIcon style={{ fontSize: '2em' }} icon={text[0].icon} />} title={text[0].title} body={text[0].body} />
          <Card id={text[1].id} selectedCard={selectedCard} selected={selectedCard === 1} setselectedCard={setselectedCard} onSelect={() => setselectedCard(1)} icon={<FontAwesomeIcon style={{ fontSize: '2em' }} icon={text[1].icon} />} title={text[1].title} body={text[1].body} />
        </Column>
        <Column style={{ margin: '1em' }}>
          <PhoneWrap2>
            <Phone img={selectedCard !== undefined ? text[selectedCard].img : Base} />
          </PhoneWrap2>
        </Column>
        <Column>
          <Card id={text[2].id} selectedCard={selectedCard} selected={selectedCard === 2} setselectedCard={setselectedCard} onSelect={() => setselectedCard(2)} icon={<FontAwesomeIcon style={{ fontSize: '2em' }} icon={text[2].icon} />} title={text[2].title} body={text[2].body} />
          <Card id={text[3].id} selectedCard={selectedCard} selected={selectedCard === 3} setselectedCard={setselectedCard} onSelect={() => setselectedCard(3)} icon={<FontAwesomeIcon style={{ fontSize: '2em' }} icon={text[3].icon} />} title={text[3].title} body={text[3].body} />
        </Column>
        <PhoneWrap3>
          <Phone img={selectedCard !== undefined ? text[selectedCard].img : Base} />
        </PhoneWrap3>
      </HowWrap>
      <Spacer />
      <Spacer />
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
          Doogy fungerar som serviceboken för din hund. Vi hjälper dig att utvecklas och ta hand om din bästa vän under hela ert liv tillsammans.
        </Body>
      </TextWrap3>
      <ImgWrap>
        <Img src={DogoHappy} />
      </ImgWrap>
    </Wrap3>
  )
}
