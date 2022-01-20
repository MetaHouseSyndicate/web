import { Discord, Facebook, Instagram, Twitter } from '@icons-pack/react-simple-icons';
import { Box, Link, Stack } from '@mui/material';
import Countdown from './Countdown';
import moment from 'moment';
import { ReactComponent as OpenSeaSVG } from './icons/OpenSea-Transparent-White.svg';
import './Home.css';

const OpenSea = (props) => {
    return (
      <div style={{
        margin: 0,
        padding: 0
      }}>
        <OpenSeaSVG 
          className={props.className}
          width={props.size} 
          height={props.size}
          />
      </div>
    )
  }

const Home = () => {

    const iconSize = 48;

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}>

            <div style={{
                width: '100',
                maxWidth: '800px',
            }}>

                <Box
                    paddingX={5}
                    marginBottom={{ xs: 4, sm: 4 }}
                >

                    <Countdown
                        endDate={moment('21/01/2022', 'DD/MM/YYYY').tz('America/Toronto')}
                        fontFamily='Lato'
                        fontSize={{ xs: '2.9em', sm: '6em' }}
                        fontWeight='300'
                        marginBottom={2}
                    />


                    <Box fontFamily='Lato' fontWeight='300' fontSize={{ xs: '1.5em', sm: '1.9em' }} textAlign='center' marginBottom='20'>
                        Tokens of Honor Collection drops on January 21 2022.
                    </Box>

                </Box>

                <Box paddingX={5} marginBottom={{ xs: 4, sm: 4 }} fontSize={{ xs: '3.5em', sm: '5em' }}>
                    <h1 style={{
                        textAlign: 'center',
                        fontFamily: 'Another Danger Slanted',
                        fontSize: 'inherit',
                    }}>
                        Meta House Syndicate
                    </h1>
                </Box>




                <Stack marginBottom={4} spacing={{ xs: 2, sm: 4 }} direction='row' justifyContent='center'>
                    <Link href='https://opensea.io/MetaHouseSyndicate' color='inherit'><OpenSea className='icon' size={iconSize} /></Link>
                    <Link href='https://facebook.com/metahousesyndicate/' color='inherit'><Facebook className='icon' size={iconSize} /></Link>
                    <Link href='https://instagram.com/metahousesyndicate' color='inherit'><Instagram className='icon' size={iconSize} /></Link>
                    <Link href='https://twitter.com/MHSyndicate' color='inherit'><Twitter className='icon' size={iconSize} /></Link>
                    <Link href='https://discord.gg/JGrxxGB8aK' color='inherit'><Discord className='icon' size={iconSize} /></Link>
                </Stack>

                <Box
                    paddingX={5}
                >
                    <p style={{ fontFamily: 'Lato', fontWeight: '900', textAlign: 'center', marginBottom: 10 }}>
                        We are Meta House Syndicate.
                    </p>

                    <p style={{ fontFamily: 'Lato', fontWeight: '300', textAlign: 'center', marginBottom: 5 }}>
                        The house was built by likeminded individuals as a haven to those who believe in freedom.
                    </p>

                    <p style={{ fontFamily: 'Lato', fontWeight: '300', textAlign: 'center', marginBottom: 10 }}>
                        Brick over brick, walls risen by passion, strong moral ideals and courage, the Syndicate aims to achieve power through creativity and diligence. Welcome to the Syndicate.
                    </p>
                </Box>



            </div>

        </div>

    );
}

export default Home;