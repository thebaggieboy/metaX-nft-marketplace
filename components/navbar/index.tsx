import { useRef } from 'react'
import { Box, Flex, Card } from '../primitives'
import GlobalSearch from './GlobalSearch'
import { useRouter } from 'next/router'
import { useHotkeys } from 'react-hotkeys-hook'
import Link from 'next/link'
import Image from 'next/image'
import { ConnectWalletButton } from 'components/ConnectWalletButton'
import NavItem from './NavItem'
import ThemeSwitcher from './ThemeSwitcher'
import HamburgerMenu from './HamburgerMenu'
import MobileSearch from './MobileSearch'
import { useTheme } from 'next-themes'
import { useMediaQuery } from 'react-responsive'
import { useMarketplaceChain, useMounted } from '../../hooks'
import { useAccount } from 'wagmi'
import CartButton from './CartButton'
import { AccountSidebar } from 'components/navbar/AccountSidebar'

import * as HoverCard from '@radix-ui/react-hover-card'

export const NAVBAR_HEIGHT = 81
export const NAVBAR_HEIGHT_MOBILE = 77

const Navbar = () => {
  const { theme } = useTheme()
  const { isConnected } = useAccount()
  const isMobile = useMediaQuery({ query: '(max-width: 960px' })
  const isMounted = useMounted()
  const { routePrefix } = useMarketplaceChain()
  const { address } = useAccount()

  let searchRef = useRef<HTMLInputElement>(null)

  const router = useRouter()
  useHotkeys('meta+k', (e) => {
    e.preventDefault()
    if (searchRef?.current) {
      searchRef?.current?.focus()
    }
  })

  if (!isMounted) {
    return null
  }

  return isMobile ? (
    <Flex
      css={{
        height: NAVBAR_HEIGHT_MOBILE,
        px: '$4',
        width: '100%',
        borderBottom: '1px solid $gray4',
        zIndex: 999,
        background: 'white',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        fontFamily: "Poppins, Sans-serif",
      }}
      align="center"
      justify="between"
    >
      <Box css={{ flex: 1 }}>
        <Flex align="center">
          <Link href={`/${routePrefix}`}>
            <Box css={{ width: 52, cursor: 'pointer', fontWeight: "bold" }}>
             <NavItem>Meta.exchange</NavItem>
            </Box>
          </Link>
        </Flex>
      </Box>
      <Flex align="center" css={{ gap: '$3' }}>
        <MobileSearch key={`${router.asPath}-search`} />
        <CartButton />
        <HamburgerMenu key={`${router.asPath}-hamburger`} />
      </Flex>
    </Flex>
  ) : (
    <Flex
      css={{
        height: NAVBAR_HEIGHT,
        px: '$5',
        '@xl': {
          px: '$6',
        },
        width: '100%',
        // maxWidth: 1920,
        mx: 'auto',
        borderBottom: '1px solid $gray4',
        zIndex: 999,
        background: 'white',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        fontFamily: "Poppins, Sans-serif",
      }}
      align="center"
      justify="between"
    >
      <Box
        css={{
          flex: 'unset',
          '@bp1300': {
            flex: 1,
          },
          fontFamily: "Poppins, Sans-serif",
        }}
      >
        <Flex align="center">
          <Link href={`/${routePrefix}`}>
            <Box css={{ cursor: 'pointer', fontWeight: "bold" }}>
            <NavItem >Meta.exchange</NavItem>
            </Box>
          </Link>
          <Flex
            align="center"
            css={{
              gap: '$5',
              ml: '$5',
            }}
          >
            <Link style={{fontWeight: "bold"}} href={`/${routePrefix}`}>
              <NavItem>Explore</NavItem>
            </Link>

            <HoverCard.Root openDelay={200}>
              <HoverCard.Trigger>
                <NavItem css={{fontWeight:"bold"}}>Trending</NavItem>
              </HoverCard.Trigger>
              <HoverCard.Content sideOffset={24} align="start">
                <Card css={{ p: 24, width: 240, border: '1px solid $gray4' }}>
                  <Flex css={{ gap: '$4' }} direction="column">
                    <Link href={`/${routePrefix}/collections/trending`}>
                      <NavItem>Collections</NavItem>
                    </Link>
                    <Link href={`/${routePrefix}/mints/trending`}>
                      <NavItem>Mints</NavItem>
                    </Link>
                  </Flex>
                </Card>
              </HoverCard.Content>
            </HoverCard.Root>

            {false && (
              <Link href={`/${routePrefix}/collections/minting`}>
                <NavItem>Mints</NavItem>
              </Link>
            )}
            {false && (
              <Link href="/swap">
                <NavItem>Tokens</NavItem>
              </Link>
            )}
          </Flex>
        </Flex>
      </Box>
      <Box css={{ flex: 1, px: '$5' }}>
        <GlobalSearch
          ref={searchRef}
          placeholder="Search collections and addresses"
          containerCss={{ width: '100%' }}
          key={router.asPath}
        />
      </Box>

      <Flex
        css={{
          gap: '$3',
          flex: 'unset',
          '@bp1300': {
            flex: 1,
          },
        }}
        justify="end"
        align="center"
      >
        <Flex css={{ gap: '$5', mr: 12 }}>
       
          {isConnected && (
            <Link href={`/portfolio/${address || ''}?chain=${routePrefix}`}>
              <Box css={{ mr: '$2' }}>
                <NavItem>Portfolio</NavItem>
              </Box>
            </Link>
          )}
        </Flex>

        {isConnected ? (
          <AccountSidebar />
        ) : (
          <Box css={{ maxWidth: '185px', }}>
            <ConnectWalletButton />
          </Box>
        )}
        <CartButton />
      </Flex>
    </Flex>
  )
}

export default Navbar
