import { LinkedinOption, Instagram, Twitter, Facebook } from 'grommet-icons'
import styled from 'styled-components'
import Icon from '../assets/logo.svg'
import { Appstore, device, theme } from './Assets'

const data = [
  // { title: 'Kontakt', subTitles: [{ title: 'woof@doogy.se', link: 'mailto:woof@doogy.se' }, { title: '+46 70-999 99 99', link: 'tel:+46709999999' }] },
  { title: 'Kontakt', subTitles: [{ title: 'woof@doogy.se', link: 'mailto:woof@doogy.se' }] },
  { title: 'Avtal', subTitles: [{ title: 'Allmänna villkor', link: 'https://shadow-freon-721.notion.site/Villkor-f-r-Doogy-app-908e9dc94fc4451bb1a75a62cb712ce9' }, { title: 'Biträdesavtal (GDPR)', link: 'https://shadow-freon-721.notion.site/Villkor-f-r-Doogy-app-908e9dc94fc4451bb1a75a62cb712ce9' }] },
  { title: 'Länkar', subTitles: [{ title: 'Blogg', link: 'https://shadow-freon-721.notion.site/Blogg-18d41237d2d04b138b2bbdb2a3d500a9' }, { title: 'Uppdateringar', link: 'https://shadow-freon-721.notion.site/Uppdateringar-8a0507368ca148178b072df5d79608f8' }, { title: 'API status', link: 'https://stats.uptimerobot.com/jNEk9IYwJn' }] }
]

// { title: 'Länkar', subTitles: [{ title: 'Blogg', link: 'notion.com' }, { title: 'Uppdateringare', link: 'notion.com' }, { title: 'Jobba hos oss', link: 'notion.com' }] }

const Footer = styled.footer`
  width: 100%;
  background: ${theme.colors.beige};
  display: flex;
  flex-direction: column;
  margin-top: -1em;
  @media ${device.mobileL} {
    margin-top: -1em;
  }
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
  @media ${device.laptop} {
    flex-direction: column;
  }
`

const Social = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;
`

const Column = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3em;
`

const Logo = styled.img`
  max-width: 140px;
  max-height: 140px;
  margin-bottom: 2em;
`

const Group = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-bottom: 2em;
`

const TitleFont = styled.span`
  font-size: 30px;
  font-weight: 600;
  line-height: 150%;
`

const LinkFont = styled.a`
  font-size: 25px;
  font-weight: 300;
  line-height: 150%;
  text-decoration: none;
  color: black;
`

const Line = styled.div`
  height: 3px;
  background: ${theme.colors.dark};
  border-radius: 3px;
  width: 90%;
`

const Spacer = styled.div`
  padding: 1rem 0.75rem;
`

const FooterComponent = () => (
  <Footer>
    <Row>
      <Column>
        <Logo src={Icon} />
        <Appstore size='140px' />
      </Column>
      <Column>
        {data && data.map((item, i) => {
          const { title, subTitles = [] } = item
          return (
            <Group key={i}>
              <TitleFont>{title}</TitleFont>
              {subTitles.map((item, i) => {
                const { link, title } = item
                return (
                  <LinkFont href={link} key={i}>
                    {title}
                  </LinkFont>
                )
              })}
            </Group>
          )
        })}
      </Column>
    </Row>
    <Row>
      <Column style={{ padding: '0', paddingBottom: '2em' }}>
        <Line />
        <Social>
          <Spacer><Instagram color='#444444' /></Spacer>
          <Spacer><LinkedinOption color='#444444' /></Spacer>
          <Spacer><Facebook color='#444444' /></Spacer>
          <Spacer><Twitter color='#444444' /></Spacer>
        </Social>
      </Column>
    </Row>
  </Footer>
)

export default FooterComponent
