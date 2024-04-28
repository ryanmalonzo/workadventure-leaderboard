import { Box, createTheme, ThemeProvider, Typography } from '@mui/material';
import Countdown from 'react-countdown';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

const theme = createTheme({
  spacing: 1,
});

const cardSx = {
  display: 'flex',
  alignSelf: 'stretch',
  alignItems: 'center',
  backgroundColor: '#1b1b29',
  boxShadow: 4,
  borderRadius: '5px',
  py: 10,
  px: 20,
  gap: 30,
  justifyContent: 'space-between',
};

function PlayerCard({ name, points, rank }) {
  return (
    <Box sx={cardSx}>
      <Box sx={{ display: 'flex', gap: 10 }}>
        <Typography variant="h6" color="gray">
          #{rank}
        </Typography>
        <Typography variant="h6">{name}</Typography>
      </Box>
      <Typography variant="h6">{points} points</Typography>
    </Box>
  );
}

function App() {
  let endOfMonth = new Date();
  endOfMonth.setMonth(endOfMonth.getMonth() + 1, 0);
  endOfMonth.setHours(23, 59, 59, 999);

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          backgroundColor: '#262C44',
          display: 'flex',
          width: '100vw',
          minHeight: '100svh',
          flexDirection: 'column',
          alignItems: 'center',
          color: 'white',
          p: 20,
          gap: 50,
        }}
      >
        {/* Item of the month */}
        <Box sx={cardSx}>
          <Box
            sx={{
              padding: 10,
              border: 1,
              borderRadius: '5px',
              borderColor: 'white',
            }}
          >
            <img
              src="https://ryanmalonzo.github.io/workadventure-inventory-icons/burger.svg"
              alt="Burger Icon"
              width={24}
              height={24}
            />
          </Box>

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              flex: 1,
            }}
          >
            <Typography variant="h6">Objet du mois</Typography>
            <Typography>Titre-restaurant de 50€</Typography>
          </Box>
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 5,
          }}
        >
          <Box sx={{ display: 'flex', gap: 5 }}>
            <EmojiEventsIcon sx={{ fontSize: 36 }} />
            <Typography variant="h4">Classement des points</Typography>
          </Box>
          <Typography variant="h5">
            <Countdown date={endOfMonth} />
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 10,
            alignSelf: 'stretch',
          }}
        >
          <PlayerCard name="matteo51" points={42} rank={1} />
          <PlayerCard name="gabriella" points={37} rank={2} />
          <PlayerCard name="lea" points={24} rank={3} />
          <PlayerCard name="fred-59" points={11} rank={4} />
          <PlayerCard name="ren" points={5} rank={5} />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
