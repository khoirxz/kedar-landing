import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import { HiOutlineMenuAlt3 } from "react-icons/hi";

const menuItem = ["Home", "Layanan", "Tentang"];

const Navbar = ({ handleBtn }) => {
  return (
    <Box
      component="nav"
      sx={{ color: "white", flexGrow: 1, width: "100%", position: "absolute" }}
    >
      <AppBar
        position="static"
        color="transparent"
        sx={{
          padding: "1.3rem 2rem",
          boxShadow: 0,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h1"
          component="div"
          sx={{
            color: "#fff",
            fontFamily: "Poppins",
            fontWeight: 800,
            fontSize: { xs: "28px", lg: "45px" },
            letterSpacing: "1.8px",
            cursor: "pointer",
          }}
        >
          Kedar
        </Typography>
        <Box
          component="ul"
          sx={{
            listStyle: "none",
            margin: 0,
            padding: 0,
            display: { xs: "none", md: "none", lg: "flex" },
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {menuItem.map((item, i) => (
            <Box component="li" key={i}>
              <Typography
                variant="p"
                sx={{
                  margin: "0 0.8em",
                }}
              >
                {item}
              </Typography>
            </Box>
          ))}
        </Box>

        <Box
          component="ul"
          sx={{
            listStyle: "none",
            margin: 0,
            padding: 0,
            display: { xs: "none", md: "none", lg: "flex" },
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box component="li">
            <Typography
              variant="p"
              sx={{
                margin: "0 0.8em",
              }}
            >
              Masuk
            </Typography>
          </Box>
          <Box component="li">
            <Button
              variant="contained"
              sx={{
                backgroundColor: "white",
                color: "#6F00FF",
                borderRadius: "15px",
                ":active": { backgroundColor: "white" },
                ":hover": { backgroundColor: "white" },
              }}
            >
              Daftar
            </Button>
          </Box>
        </Box>

        <Box
          component="ul"
          sx={{
            listStyle: "none",
            margin: 0,
            padding: 0,
            display: { xs: "flex", md: "flex", lg: "none" },
            justifyContent: "space-between",
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          <Box component="li">
            <HiOutlineMenuAlt3 size={32} onClick={handleBtn} />
          </Box>
        </Box>
      </AppBar>
    </Box>
  );
};

export default Navbar;
