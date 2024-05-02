import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { HoverCardPortal } from '@radix-ui/react-hover-card'
import { useTrendingCollections } from '@reservoir0x/reservoir-kit-ui'
import { Box, Flex, FormatCryptoCurrency, Text } from 'components/primitives'
import Img from 'components/primitives/Img'
import { useMarketplaceChain } from 'hooks'
import Link from 'next/link'

type TrendingCollections = ReturnType<typeof useTrendingCollections>['data']

type FeaturedCardsProps = {
  collections: TrendingCollections
  loading?: boolean
}
export default function HeroSection(){
  return (
    <>
  
<div style={{backgroundColor:"#FFD166"}} className="grid max-w-screen-xl px-4 py-4 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
    <div className="mr-auto place-self-center lg:col-span-7">
        <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight text-black leading-none md:text-5xl xl:text-6xl ">Building Digital products, Arts, NFTs & brands.</h1>
{/**         <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">From checkout to global sales tax compliance, companies around the world use Flowbite to simplify their payment stack.</p> */}
        <a href="#" style={{borderRadius:0}} className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-black">
           Explore Collections
            
        </a>
        <a href="#" style={{borderRadius:0, border:"2px solid black"}} className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-black border border-black rounded-lg">
            List NFT
        </a> 
    </div>
    <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
        <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mobile-app.svg" alt="mockup"/>
    </div>                
</div>

    </>
  )
}
export const FeaturedCards: React.FC<FeaturedCardsProps> = ({
  collections,
  loading,
}) => {
  const marketplaceChain = useMarketplaceChain()

  if (!collections) return null



  return (
    <div>
    
    
       <HeroSection/>
       {!loading && collections.length === 0 ? (
       <>
      <HeroSection/>
        <Flex
          direction="column"
          align="center"
          css={{ py: '$6', gap: '$4', width: '100%' }}
        >
          <Text css={{ color: '$gray11' }}>
            <FontAwesomeIcon icon={faMagnifyingGlass} size="2xl" />
          </Text>
          <Text css={{ color: '$gray11' }}>No collections found</Text>
        </Flex>
       </>

      ) : 
      (
       
        <Flex
          direction="row"
          align="center"
          css={{
            width: '100%',
            overflowY: 'scroll',
            padding: '10px 5px',
            gap: '12px',
          }}
        >
          
          {collections.map((collection) => {
            const bannerImage =
              collection?.banner ||
              collection?.image ||
              collection.sampleImages?.[0]

            const collectionImage =
              collection?.image ||
              collection?.banner ||
              collection.sampleImages?.[0]

            return (
         
        
              <Link
                key={collection.id}
                href={`/${marketplaceChain.routePrefix}/collection/${collection.id}`}
              >
                

                <Flex
                  direction="column"
                  css={{
                    flex: 1,
                    width: '100%',
                    height: '380px',
                    borderRadius: 0,
                    cursor: 'pointer',
                    background: '$neutralBgSubtle',
                    $$shadowColor: '$colors$panelShadow',
                    border: '2px solid black',
                   
                  }}
                >
                  <Flex
                    css={{
                      mb: '24px',
                      width: '100%',
                      height: '100%',
                      position: 'relative',
                    }}
                  >
                    <Flex
                      css={{
                        height: '150px',
                        width: '300px',
                        
                      }}
                    >
                      <Img
                        src={bannerImage as string}
                        alt={collection.name as string}
                        height={150}
                        width={300}
                        style={{
                          objectFit: 'cover',
                          borderRadius: 0,
                          width: "100%",
                          height:210

                          
                        }}
                      />
                    </Flex>
                    <Img
                      src={collectionImage as string}
                      alt={collection.name as string}
                      height={100}
                      width={50}
                      style={{borderRadius:0}}
                      css={{
                        height: '50px',
                        width: '50px',
                        position: 'absolute',
                        inset: '95px 0px 5px 5px',
                        border: '2px solid black',
                        borderRadius: 50,
                      }}
                    />
                  </Flex>
                  <Flex
                    direction="column"
                    css={{
                      width: '100%',
                      height: '100%',
                    }}
                  >
                    <Box
                      css={{
                        maxWidth: 720,
                        lineHeight: 1.5,
                        fontSize: 16,
                        flex: 1,
                        fontWeight: 400,
                        display: '-webkit-box',
                        color: '$gray12',
                        fontFamily: '$body',
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: 'vertical',
                        gap: 16,
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        '& a': {
                          fontWeight: 500,
                          cursor: 'pointer',
                          textDecoration: 'underline',
                        },
                      }}
                    >
                      <Flex
                        align="center"
                        css={{
                          width: 'fit-content',
                          mb: 16,
                          gap: '$2',
                          marginTop: 5,
                          fontFamily: "Poppins, Sans-serif",
                        }}
                      >
                       <div style={{padding:10,}}>
                       <Text style="h6" as="h6" >
                         <p style={{fontSize:16, marginTop:20,  fontFamily: "Poppins, Sans-serif",}}>{collection?.name}</p>
                        </Text>
                       </div>
                      </Flex>
                      <Flex>
                        <Box css={{ mr: '$5' }}>
                          <Text
                            
                           
                            as="p"
                            css={{ mb: 2, padding:10, margin:0, color:'black'}}
                          >
                           <p style={{fontSize:14,  fontFamily: "Poppins, Sans-serif",}}>Floor Price</p>
                           <FormatCryptoCurrency
                           css={{fontSize:14, fontWeight:'bold'}}
                            
                            logoHeight={8}
                            amount={
                              collection?.floorAsk?.price?.amount?.native ?? 0
                            }
                            
                           
                            address={
                              collection?.floorAsk?.price?.currency?.contract
                            }
                          />
                          </Text>
                      
                        </Box>

                        <Box css={{ mr: '$4', padding:10 }}>
                          <Text style="subtitle2"  as="p">
                          <p style={{fontSize:14,  fontFamily: "Poppins, Sans-serif", color:"black"}}>6h Sales</p>
                          </Text>
                          <Text css={{ mt: 2 }}>
                           <p style={{fontSize:14, fontWeight:'bold', fontFamily: "Poppins, Sans-serif"}}> {collection.count?.toLocaleString()}</p>

                          </Text>
                        </Box>
                      </Flex>
                    </Box>
                  </Flex>
                </Flex>
              </Link>
            )
          })}
        </Flex>
       
      )}
    </div>
  )
}
