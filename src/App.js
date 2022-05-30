import React, { useState, useEffect } from 'react'
import { Box, Grommet, Main } from 'grommet'
import styled from 'styled-components'
import Footer from '../src/components/Footer'
import Header from '../src/components/Header'
import { Page1, Page2, Page3, VerifyComponent } from '../src/components/Content'
import { theme } from './components/Assets'

import { Routes, Route, useParams } from 'react-router-dom'

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
  display: flex;
  flex-direction: column;
  text-align: center;
  overflow: hidden;
`

const LandingPage = (message) => {
  return (
    <Main>
      <Header alert={message} />
      <Page>
        <Page1 />
      </Page>
      <Page>
        <Page2 />
      </Page>
      <Page3 />
    </Main>
  )
}

const VerifyPage = (message) => {
  const { verifyToken } = useParams()
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)

  console.log('verifyToken', verifyToken)
  useEffect(() => {
    setLoading(true)
    if (verifyToken) {
      const requestOptions = {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ token: verifyToken })
      }
      // NOTE: needs to be updated to correct endpoint
      fetch('http://localhost:1337/user/verify-email/token', requestOptions)
        .then(res => {
          const { status } = res
          if (status === 200) {
            setSuccess(true)
            setError(false)
          } else {
            setSuccess(false)
            setError(true)
          }
          setLoading(false)
        }).catch(() => {
          setLoading(false)
          setSuccess(false)
          setError(true)
        })
    }
  }, [verifyToken])
  return (
    <Main>
      <Header alert={message} />
      <VerifyComponent loading={loading} error={error} success={success} />
    </Main>
  )
}

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
      <Routes>
        <Route path='/' element={<LandingPage message={MESSAGE} />} />
        <Route path='/app/verify/:verifyToken' element={<VerifyPage />} />
      </Routes>
      <Footer />
    </GrommetWrap>
  )
}

export default App
