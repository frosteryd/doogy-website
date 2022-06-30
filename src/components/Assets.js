import { Spring, animated } from 'react-spring'
import { ReactSVG } from 'react-svg'
import Apple from '../assets/appstore.svg'
import Android from '../assets/playstore.svg'
import AndroidSoon from '../assets/playstore-soon.svg'
import Dogo from '../assets/dog.png'
import Star from '../assets/star.svg'
import ArrowDraw from '../assets/arrow.svg'
import ArrowDrawStraight from '../assets/arrowStraight.svg'
import PhoneImg from '../assets/phone.svg'
import AppImg from '../assets/phoneapp.png'
import Typewriter from 'typewriter-effect'
import CrossfadeImage from 'react-crossfade-image'
import styled from 'styled-components'
import worksText from '../assets/worksText.png'

const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px'
}

export const device = {
  mobileS: `(max-width: ${size.mobileS})`,
  mobileM: `(max-width: ${size.mobileM})`,
  mobileL: `(max-width: ${size.mobileL})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptop})`,
  laptopL: `(max-width: ${size.laptopL})`,
  desktop: `(max-width: ${size.desktop})`,
  desktopL: `(max-width: ${size.desktop})`
}

export const deviceMin = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`
}

export const theme = {
  global: {
    font: {
      family: 'Montserrat, sans-serif',
      size: '16px',
      height: '20px'
    },
    hand: {
      family: 'Caveat Brush, cursive'
    }
  },
  colors: {
    background: 'linear-gradient(#FFFAFE, #E0E2FC, #AEBBF8)',
    yellow: '#FFCA50',
    orange: '#FF9600',
    beige: '#AEBBF8',
    dark: '#444444',
    linear: '#C5CCF4',
    linearBG: '#C5CCF4',
    title: '#8C3993',
    primary: '#AEBBF8'
  }
}

const Store = styled(ReactSVG)`
  margin: 0.5em;
  max-width: ${props => props.size || '200px'};
  & svg {
    max-width: 100%;
  }
  @media ${device.tablet} {
    max-width: ${props => props.size || '140px'};
  }
`

const AppWrap = styled.div`
  margin-top: ${props => props.marginTop};
  display: flex;
  flex-direction: row;
  justify-content: center;
  @media ${device.tablet} {

  }
`

export const Appstore = ({ marginTop = '0px', size }) => {
  return (
    <AppWrap marginTop={marginTop}>
      <a target='_blank' href='https://www.apple.com/se/app-store/1629126938' rel='noreferrer'><Store size={size} src={Apple} /></a>
      {/* <a target='_blank' href='https://www.apple.com/se/app-store/' rel='noreferrer'><Store size={size} src={Android} /></a> */}
      <a><Store size={size} src={AndroidSoon} /></a>

    </AppWrap>
  )
}

const ContactWrap = styled.div`
  min-width: 140px;
  box-shadow: 0px 2px 35px 5px rgba(0, 0, 0, 0.15);
  background: ${theme.colors.beige};
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-around;
  padding: 0.25rem ;
  z-index: 9999;
`

const TextWrap = styled.div`
  flex: 1;
  text-align: center;
`

const ContactText = styled.span`
  color: ${theme.colors.title};
  font-weight: 600;
`

const ContactImg = styled.img`
  max-height: 45px;
  border-radius: 100%;
`

export const ContactButton = () => {
  return (
    <ContactWrap>
      <TextWrap>
        <ContactText>Kontakt</ContactText>
      </TextWrap>
      <ContactImg src={Dogo} />
    </ContactWrap>
  )
}

const StarsWrap = styled.img`
  max-width: 95%;
`

export const Stars = () => {
  return (
    <Spring
      loop
      config={{ duration: 1000 }}
      from={{ opacity: 0 }}
      to={[
        { opacity: 1 },
        { opacity: 0 }
      ]}
    >
      {styles => (
        <animated.div style={styles}><StarsWrap src={Star} /></animated.div>
      )}
    </Spring>

  )
}

const Arrow = styled.div`
  transform: ${props => `rotate(${props.rotate}deg)`};
  display: flex;
  justify-content: center;
  svg {
    width: 100px;
    height: 100px;
    margin: 0 auto;
    @media ${device.tablet} {
      width: 75px;
      height: 75px;
    }
    .draw-arrow {
      animation-delay: ${props => `${props.delay}s`};
      stroke-width: 5;
      fill: none;
      stroke-dasharray: 400;
      stroke-dashoffset: 400;
      animation-duration: ${props => `${props.duration}s`};;
      animation-fill-mode: forwards;
      animation-name: draw;
      &.tail-1 {
        animation-delay: ${props => `${props.delay + 0.5}s`};
      }
      &.tail-2 {
        animation-delay: ${props => `${props.delay + 0.7}s`};
      }
    }
  }
  @keyframes draw {
  to {
      stroke-dashoffset: 0;
    }
  }
  @media ${device.tablet}{
    transform: ${props => props.straight ? 'rotate(0deg)' : `rotate(${props.rotate + 30}deg)`};
    justify-content: flex-start;
  }
`

export const DrawArrow = ({ style, delay = 2, duration = 2, rotate = 0, straight = false }) => {
  return (
    <Arrow straight={straight} style={style} duration={duration} delay={delay} rotate={rotate}>
      <ReactSVG src={straight ? ArrowDrawStraight : ArrowDraw} />
    </Arrow>
  )
}

const ScrollText = styled.span`
  display: inline-block;
  text-align: center;
  font-weight: 600;
  font-size: 20px;
  font-family: ${theme.global.hand.family};
  padding-bottom: 12px;
  @media ${device.tablet}{
    font-size: 20px;
  }
`

const ArrowContainer = styled.div`
  position: absolute;
    top: 325px;
    left: 25px;
  @media ${device.tablet}{
    right: 5px;
    bottom: 5px;
  }
`

export const ArrowWrap = () => {
  return (
    <ArrowContainer>
      <Spring
        delay={2500}
        from={{ opacity: 0 }}
        to={[
          { opacity: 1 }
        ]}
      >
        {styles => (
          <animated.div style={styles}>
            <ScrollText>
              Scrolla ner <br />
              Läs mer
            </ScrollText>
          </animated.div>
        )}
      </Spring>
      <DrawArrow straight delay={3} />
    </ArrowContainer>
  )
}

const ButtonWrap = styled.button`
  padding: 1em;
  border-radius: 2em;
  border: ${props => props.selected ? `2px solid ${theme.colors.primary}` : '2px solid black'};
  min-width: 150px;
  margin: 0.5em;
  background: ${props => props.selected ? theme.colors.linear : 'none'};
  color: ${props => props.selected ? 'white' : 'black'};
  background-size: 400% 400%;
  animation: gradient 5s ease infinite;
  @keyframes gradient {
      0% {
          background-position: 0% 50%;
      }
      50% {
          background-position: 100% 50%;
      }
      100% {
          background-position: 0% 50%;
      }
  }
`

export const Button = ({ onSelect, selected, children }) => {
  return (
    <ButtonWrap selected={selected} onClick={(e) => onSelect(e)}>
      {children}
    </ButtonWrap>
  )
}

const CardWrap = styled.div`
  padding: 2rem;
  margin: 0.75em;
  max-width: 300px;
  border: ${props => props.selected ? `2px solid ${theme.colors.primary}` : `2px solid ${theme.colors.background}`};
  border-radius: 2em;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  min-width: 100px;
  display: flex;
  flex-direction: column;
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }
`
const Title = styled.h2`
`
const Body = styled.span`
`

const Center = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
`

export const Card = ({ icon, title, body, selected, onSelect }) => {
  return (
    <CardWrap onClick={(e) => onSelect(e)} selected={selected}>
      <Center>
        {icon}
      </Center>
      <Center>
        <Title>{title}</Title>
        <Body>{body}</Body>
      </Center>
    </CardWrap>
  )
}

const PhoneWrap = styled.div`
  position: relative;
  display: inline-block; /* <= shrinks container to image size */
  transition: transform 150ms ease-in-out;
  max-width: ${props => props.size || '300px'};
  @media ${device.tablet} {
    max-width: ${props => props.size || '240px'};
  }
  @media ${device.mobileM} {
    max-width: ${props => props.size || '200px'};
  }
  & img { /* <= optional, for responsiveness */
   display: block;
   max-width: 100%;
   max-height: 100%;
  }

  & svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  }


  & .image {
    overflow: hidden;
}



`

const PhoneSvg = styled(ReactSVG)`
  & svg {
    max-width: 100%;
    height: 100%;
    z-index: 9999;
  }
  @media ${device.laptopL}{
    max-width: 275px;
  }
  @media ${device.laptop}{
    max-width: 225px;
  }
  @media ${device.tablet} {
    max-width: 225px;
  }
`

const Background = styled.div`
  margin: 0.75em;
`

const BackgroundImage = styled.img`
 width: 100%;
`

export const Phone = ({ size, img }) => {
  return (
    <PhoneWrap size={size}>
      <PhoneSvg className='image' src={PhoneImg} />
      <Background>
        {img
          ? <BackgroundImage style={{ borderRadius: '40px' }} src={img} />
          : <BackgroundImage style={{ borderRadius: '40px' }} src={worksText} />}

      </Background>
    </PhoneWrap>
  )
}

const SearchBar = styled.div`
  background-color: #fff;
  margin: 0.5em;
  padding: 0.1em 1em;
  border: solid 1px #e6e6e6;
  border-radius: 2.8em;
  box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
`

export const TypeWrite = ({ words }) => {
  return (
    <SearchBar>
      <Typewriter
        options={{
          strings: words,
          autoStart: true,
          loop: true
        }}
      />
    </SearchBar>
  )
}
