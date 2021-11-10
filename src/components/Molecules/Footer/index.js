import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import "./style.scss";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "#0e0712",
        padding: "2rem",
        textAlign: "center",
      }}
    >
      <Typography
        component="p"
        sx={{
          color: "white",
        }}
      >
        Kedar &copy; 2021
      </Typography>
    </Box>
  );
};

export default Footer;
