import React, { Suspense, lazy } from 'react'
import styled from 'styled-components'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'

import Web3ReactManager from '../components/Web3ReactManager'
import Header from '../components/Header'
import Footer from '../components/Footer'
import NavigationTabs from '../components/NavigationTabs'

import { isAddress } from '../utils'

const Swap = lazy(() => import('./Swap'))

const AppWrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  height: 100vh;
`

const HeaderWrapper = styled.div`
  ${({ theme }) => theme.flexRowNoWrap}
  width: 100%;
  justify-content: space-between;
`
const FooterWrapper = styled.div`
  width: 100%;
  min-height: 30px;
  align-self: flex-end;
`

const BodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  flex: 1;
  overflow: inherit;
`

const Body = styled.div`
  max-width: 29rem;
  width: 90%;
  /* margin: 0 1.25rem 1.25rem 1.25rem; */
`

export default function App() {
  return (
    <>
      <Suspense fallback={null}>
        <AppWrapper>
          <HeaderWrapper>
            <Header />
          </HeaderWrapper>
          <BodyWrapper>
            <Body>
              <Web3ReactManager>
                <BrowserRouter>
                  {/* this Suspense is for route code-splitting */}
                  <NavigationTabs />
                  <Suspense fallback={null}>
                    <Switch>
                      {/* <Route exact strict path="/order" component={Swap} /> */}
                      <Route exact strict path="/" component={Swap} />
                      <Route
                        exact
                        strict
                        path="/order/:tokenAddress?"
                        render={({ match }) => {
                          if (isAddress(match.params.tokenAddress)) {
                            return <Swap initialCurrency={isAddress(match.params.tokenAddress)} />
                          } else {
                            return <Redirect to={{ pathname: '/order' }} />
                          }
                        }}
                      />
                      {/* <Redirect to="/order" /> */}
                      <Redirect to="/" />
                    </Switch>
                  </Suspense>
                </BrowserRouter>
              </Web3ReactManager>
            </Body>
          </BodyWrapper>
          <FooterWrapper>
            <Footer />
          </FooterWrapper>
        </AppWrapper>
      </Suspense>
    </>
  )
}
