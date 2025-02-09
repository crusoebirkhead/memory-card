import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";

export default function CenteredElementGrid({ count, setCount, bestCount }) {
  return (
    <Box sx={{ flexGrow: 2, minWidth: '1280px' }}>
      <Grid container spacing={2} minHeight={160} minWidth={550}>
        <Grid
          display="flex"
          justifyContent="center"
          alignItems="center"
          size="grow"
        >
          <Avatar src="src/assets/Poke_Ball.webp" />
        </Grid>
        <Grid display="flex" justifyContent="center" alignItems="center">
          <h3>Current Score: {count}</h3>
        </Grid>
        <Grid
          display="flex"
          justifyContent="center"
          alignItems="center"
          size="grow"
        >
          <h3>Best Score: {bestCount}</h3>
        </Grid>
      </Grid>
    </Box>
  );
}
