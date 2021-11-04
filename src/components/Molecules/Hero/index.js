import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import "./style.scss";

const Hero = () => {
  return (
    <Box component="div" className="hero">
      <Box className="hero-landing">
        <Box className="hero-section">
          <Typography
            component="h1"
            sx={{
              fontSize: "50px",
              margin: "5px 0",
              fontWeight: "bold",
            }}
          >
            BELAJAR LEBIH MUDAH DENGAN KEDAR
          </Typography>
          <Typography
            component="h2"
            sx={{
              fontSize: "19px",
              margin: "5px 0",
              fontWeight: "normal",
              letterSpacing: "1.7px",
            }}
          >
            platform yang cocok untuk pembelajaran di indonesia
          </Typography>
          <Button
            variant="contained"
            sx={{
              marginTop: "3rem",
              fontSize: "24px",
              fontWeight: "bold",
              backgroundColor: "white",
              color: "#6F00FF",
              borderRadius: "25px",
              ":active": { backgroundColor: "white" },
              ":hover": { backgroundColor: "white" },
            }}
          >
            JOIN NOW
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
