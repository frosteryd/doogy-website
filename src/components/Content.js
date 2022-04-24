import { useState, useCallback, useLayoutEffect } from 'react'
import styled from 'styled-components'
import { Stars, DrawArrow, Appstore, device, deviceMin, Phone, TypeWrite, ArrowWrap } from '../components/Assets'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaw, faComments, faLifeRing, faCalendarCheck } from '@fortawesome/free-solid-svg-icons'
import Sticky from 'react-stickynode'
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
  transition: "all .5s ease";
  text-align: left;
  @media ${device.mobileM}{
    font-size: 15px;
  }
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
  @media ${device.mobileL}{
    font-size: 26px;
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
      <div style={{ paddingBottom: '1em' }} />
    </Wrap>
  )
}

const Wrap2 = styled.div`
  height: 2500px;
  width: 90%;
  margin: 0 auto;
  align-items: flex-start;
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
  max-width: 100%;
  @media ${device.tablet}{
    flex-direction: column;
    margin: 0;
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

const Desktop = styled.div`
   @media ${device.tablet}{
    display: none;
  }
`

const Mobile = styled.div`
   @media ${deviceMin.tablet}{
    display: none;
  }
`

const SpacerLarge = styled.div`
  margin-top: 5em;
  margin-bottom: 5em;
`

const Card = (params) => {
  const { selected, selectedCard, setselectedCard, onSelect, id, title, body } = params
  const active = (selectedCard === undefined || selected)

  return (
    <CardWrap
      active={active}
      onClick={onSelect}
      // onMouseEnter={onSelect}
      // onMouseLeave={() => setselectedCard(undefined)}
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
  const [selectedCard, setselectedCard] = useState(0)
  const [dimensions, setDimensions] = useState(null)

  const callBackRef = useCallback(domNode => {
    if (domNode) {
      const dimensions = domNode.getBoundingClientRect()
      const top = dimensions.top + window.scrollY
      const bottom = dimensions.bottom + window.scrollY
      const height = dimensions.height
      setDimensions({ top, bottom, height })
    }
  }, [])

  const onScroll = () => {
    if (dimensions) {
      const sectionSize = (dimensions.height / 4)
      const scrollPosition = window.scrollY - sectionSize
      if (dimensions.top < scrollPosition && scrollPosition < dimensions.bottom) {
        const diff = scrollPosition - dimensions.top
        const section = Math.floor(diff / sectionSize)
        setselectedCard(section)
      }
    }
  }

  const privatperson = [
    { id: 1, title: 'Utvecklas', body: 'Doogy hjälper dig att dokumentera händelser i hundens vardag så du överblick över aktiviteter, större möjlighet att följa upp förändringar och detaljer kring hundens hälsa och utveckling.', icon: faPaw, img: Develop },
    { id: 2, title: 'Umgås', body: 'Vårt community hjälper dig med att svara på frågor och du kan enkelt få rådgivning av personer med liknande erfarenhet, bidra med din kompetens eller bara diskutera allt som har med din bästa vän att göra.', icon: faComments, img: Communicate },
    { id: 3, title: 'Kom ihåg​', body: 'Missa inget viktigt, Doogy kan hjälpa dig att lägga in påminnelser inför vaccinationer, avmaskningar, veterinärbesök eller andra viktiga händelser.', icon: faLifeRing, img: Reminder },
    { id: 4, title: 'Förberedd​', body: 'Om det värsta skulle hända och din bästa vän skulle råka ut för en olycka, skada eller sjukdom kan du snabbt dela rätt underlag med veterinär och försäkringsbolag. Du blir förberedd när det betyder som mest.', icon: faCalendarCheck, img: Prepare }
  ]

  // const foretag = [
  //   { id: 1, title: 'hello företag', body: 'You can easily pay in the app after getting help.', icon: faPaw, img: AppPhoto },
  //   { id: 2, title: 'hello företag', body: 'You can easily pay in the app after getting help.', icon: faPaw, img: AppPhoto },
  //   { id: 3, title: 'hello företag', body: 'You can easily pay in the app after getting help.', icon: faPaw, img: AppPhoto },
  //   { id: 4, title: 'hello företag', body: 'You can easily pay in the app after getting help.', icon: faPaw, img: AppPhoto }
  // ]

  // const text = (selectedButton === 0 ? privatperson : foretag)
  const text = (selectedButton === 0 && privatperson)

  useLayoutEffect(() => {
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [dimensions])

  return (
    <SpacerLarge>
      <Wrap2 ref={callBackRef}>
        {/* <ButtonWrap>
        <Button selected={selectedButton === 0} onSelect={() => setSelectedButton(0)}><ButtonText>Privatperson</ButtonText></Button>
        <Button selected={selectedButton === 1} onSelect={() => setSelectedButton(1)}><ButtonText>Företag</ButtonText></Button>
      </ButtonWrap> */}
        <Desktop>
          <Sticky style={{ width: '100%' }} enabled top={0} bottomBoundary={3800}>
            <HowWrap>
              <Column>
                <Card id={text[0].id} selectedCard={selectedCard} selected={selectedCard === 0} icon={<FontAwesomeIcon style={{ fontSize: '2em' }} icon={text[0].icon} />} title={text[0].title} body={text[0].body} />
                <Card id={text[1].id} selectedCard={selectedCard} selected={selectedCard === 1} icon={<FontAwesomeIcon style={{ fontSize: '2em' }} icon={text[1].icon} />} title={text[1].title} body={text[1].body} />
              </Column>
              <Column style={{ margin: '1em' }}>
                <PhoneWrap2>
                  <Phone img={selectedCard !== undefined ? text[selectedCard].img : Base} />
                </PhoneWrap2>
                <PhoneWrap3>
                  <Phone img={selectedCard !== undefined ? text[selectedCard].img : Base} />
                </PhoneWrap3>
              </Column>
              <Column>
                <Card id={text[2].id} selectedCard={selectedCard} selected={selectedCard === 2} icon={<FontAwesomeIcon style={{ fontSize: '2em' }} icon={text[2].icon} />} title={text[2].title} body={text[2].body} />
                <Card id={text[3].id} selectedCard={selectedCard} selected={selectedCard === 3} icon={<FontAwesomeIcon style={{ fontSize: '2em' }} icon={text[3].icon} />} title={text[3].title} body={text[3].body} />
              </Column>
            </HowWrap>
          </Sticky>
        </Desktop>
        <Mobile>
          <Sticky style={{ width: '100%' }} enabled top={50} bottomBoundary={3700}>
            <HowWrap style={{ paddingTop: '1.5em', paddingBottom: '1.5em' }}>
              <Column>
                {selectedCard === 0 && <Card id={text[0].id} selectedCard={selectedCard} selected={selectedCard === 0} icon={<FontAwesomeIcon style={{ fontSize: '2em' }} icon={text[0].icon} />} title={text[0].title} body={text[0].body} />}
                {selectedCard === 1 && <Card id={text[1].id} selectedCard={selectedCard} selected={selectedCard === 1} icon={<FontAwesomeIcon style={{ fontSize: '2em' }} icon={text[1].icon} />} title={text[1].title} body={text[1].body} />}
                {selectedCard === 2 && <Card id={text[2].id} selectedCard={selectedCard} selected={selectedCard === 2} icon={<FontAwesomeIcon style={{ fontSize: '2em' }} icon={text[2].icon} />} title={text[2].title} body={text[2].body} />}
                {selectedCard === 3 && <Card id={text[3].id} selectedCard={selectedCard} selected={selectedCard === 3} icon={<FontAwesomeIcon style={{ fontSize: '2em' }} icon={text[3].icon} />} title={text[3].title} body={text[3].body} />}
              </Column>
              <PhoneWrap3>
                <Phone img={selectedCard !== undefined ? text[selectedCard].img : Base} />
              </PhoneWrap3>
            </HowWrap>
          </Sticky>
        </Mobile>
      </Wrap2>
    </SpacerLarge>
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
