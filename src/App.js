import { Box, Grommet, Main } from 'grommet'
import styled from 'styled-components'
import Footer from '../src/components/Footer'
import Header from '../src/components/Header'
import { Page1, Page2, Page3 } from '../src/components/Content'
import { theme } from './components/Assets'

const MESSAGE = 'We are soon going live 🎉'

const TopBarText = styled.span`
  color: ${theme.colors.title};
  font-weight: 600;
`

const GrommetWrap = styled(Grommet)`
  background-image: ${theme.colors.background};
  min-height: 100vh;
`

const SizeWrap = styled.div`
  max-width: ${props => props.size};
  text-align: center;
`

const Page = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  text-align: center;
`

function App () {
  const AppBar = (props) => (
    <Box
      tag='header'
      direction='row'
      align='center'
      justify='center'
      background={theme.colors.linear}
      pad={{ left: 'small', right: 'small', vertical: '0.5em' }}
      elevation='small'
      style={{ zIndex: '1' }}
      {...props}
    />
  )

  return (
    <GrommetWrap themeMode='dark' theme={theme}>
      {MESSAGE && (
        <AppBar>
          <TopBarText>{MESSAGE}</TopBarText>
        </AppBar>
      )}
      <Main>
        <Header alert={MESSAGE} />
        <Page>
          <Page1 />
        </Page>
        <Page>
          <Page2 />

        </Page>
        <Page3 />
      </Main>
      <Footer />
    </GrommetWrap>
  )
}

export default App
