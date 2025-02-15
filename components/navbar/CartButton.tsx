import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useConnectModal } from '@rainbow-me/rainbowkit'
import { CartPopover, useCart } from '@reservoir0x/reservoir-kit-ui'
import { Flex, Button, Text } from 'components/primitives'

const CartButton = () => {
  const { data: cartItems } = useCart((cart) => cart.items)
  const { openConnectModal } = useConnectModal()

  return (
    <CartPopover
      onConnectWallet={() => {
        openConnectModal?.()
      }}
      trigger={
        <Button
          css={{
            justifyContent: 'center',
            width: '44px',
            height: '44px',
            position: 'relative',
            backgroundColor:'black'
          }}
          size="small"
        
        >
          <FontAwesomeIcon icon={faShoppingCart} width="16" height="16" />
          {cartItems.length > 0 && (
            <Flex
              align="center"
              justify="center"
              css={{
                borderRadius: '0',
                width: 20,
                height: 20,
                backgroundColor: 'black',
                position: 'absolute',
                top: -8,
                right: -6,
                color: "white",

              }}
            >
              <Text style="subtitle3" css={{ color: 'white' }}>
                {cartItems.length}
              </Text>
            </Flex>
          )}
        </Button>
      }
    />
  )
}

export default CartButton
