import { Discord, Facebook, Instagram, Twitter } from '@icons-pack/react-simple-icons';
import NewReleasesTwoToneIcon from '@mui/icons-material/NewReleasesTwoTone';
import { NFTCalendar, OpenSea } from './CustomIcons';
import { Box, Button, Link, Stack, Typography } from '@mui/material';
import Countdown from './Countdown';
import moment from 'moment';
import './Home.css';

const iconSize = 48;

const socials = [
    { name: 'OpenSea', url: 'https://opensea.io/MetaHouseSyndicate', html: <OpenSea className='icon' width={iconSize} height={iconSize} /> },
    { name: 'Facebook', url: 'https://facebook.com/metahousesyndicate', html: <Facebook className='icon' size={iconSize} /> },
    { name: 'Instagram', url: 'https://instagram.com/metahousesyndicate', html: <Instagram className='icon' size={iconSize} /> },
    { name: 'Twitter', url: 'https://twitter.com/MHSyndicate', html: <Twitter className='icon' size={iconSize} /> },
    { name: 'Discord', url: 'https://discord.gg/JGrxxGB8aK', html: <Discord className='icon' size={iconSize} /> }
];

const Home = () => {

    const TokensOfHonorReleaseDate = moment('28/01/2022 12:00:00 pm', 'DD/MM/YYYY h:mm:ss a').tz('America/Toronto');

    const HeaderCountdown = () => {
        return (
            <Link href='https://opensea.io/collection/tokensofhonor' sx={{ color: 'inherit', textDecoration: 'none' }}>
                <Countdown
                    endDate={TokensOfHonorReleaseDate}
                    fontFamily='Lato'
                    fontSize={{ xs: '2.9em', sm: '6em' }}
                    fontWeight='300'
                    marginBottom={2}
                />

                <Stack direction='horizontal' justifyContent='center' alignItems='center' sx={{ mb: 4 }}>
                    <Button
                        disableRipple
                        disableElevation
                        sx={{ p: 0, ":hover": { background: 'transparent' } }}
                    >
                        <NFTCalendar color='black' width={40} height={40} />
                    </Button>
                    <Typography sx={{
                        fontFamily: 'Lato',
                        fontWeight: '300',
                        fontSize: { xs: '1.2em', sm: '1.7em' },
                        textAlign: 'center'
                    }}>
                        Tokens of Honor Collection drops today at 1:30PM EST.
                    </Typography>
                </Stack>
            </Link>
        );
    }

    const HeaderRelease = () => {
        return (
            <Link href='https://opensea.io/collection/tokensofhonor' sx={{ color: 'inherit', textDecoration: 'none' }}>
                <Stack 
                    direction='horizontal' 
                    justifyContent='center' 
                    alignItems='center' 
                    sx={{ 
                        fontSize: { xs: '1.2em', sm: '1.7em' }, 
                        mb: 4,
                        pt: 0.5,
                        ':hover': {
                            textDecoration: 'underline'
                        }
                    }}
                >
                    <Button
                        disableRipple
                        disableElevation
                        sx={{ p: 0, ":hover": { background: 'transparent' } }}
                    >
                        <NewReleasesTwoToneIcon sx={{ m: 0, p: 0, color: 'black', fontSize: { xs: 30, sm: 40 } }} />
                    </Button>
                    <Typography sx={{
                        fontFamily: 'Lato',
                        fontWeight: '300',
                        fontSize: 'inherit',
                        textAlign: 'center', 
                    }}>
                        Tokens of Honor Collection <b textDecoration='inherit'>available now</b> on OpenSea.
                    </Typography>
                </Stack>
            </Link>
        )
    }

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh',
        }}>

            <div style={{
                width: '100',
                maxWidth: '800px',
            }}>

                <Box
                    paddingX={5}
                    marginBottom={{ xs: 4, sm: 4 }}
                >

                    {
                        TokensOfHonorReleaseDate.diff(moment()) > 0
                            ? <HeaderCountdown />
                            : <HeaderRelease />
                    }

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
                    {socials.map((social) => (
                        <Link key={social.name + '-link'} href={social.url}>{social.html}</Link>
                    ))}
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