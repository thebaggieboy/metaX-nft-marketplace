import { Box } from 'components/primitives'
import { FC, ReactNode } from 'react'
import Navbar from './navbar'
import UnsupportedChainBanner from './UnsupportedChainBanner'

type Props = {
  children: ReactNode
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <Box
        css={{
          background: 'white',
          height: '100%',
          minHeight: '100vh',
          pt: 80,
        }}
      >
        <Box css={{ maxWidth: "100%", mx: 'auto' }}>
          <Navbar />
          <UnsupportedChainBanner />
          <main>{children}</main>
        </Box>
      </Box>
    </>
  )
}

export default Layout
