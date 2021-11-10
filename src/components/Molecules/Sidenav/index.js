import Drawer from "@mui/material/Drawer";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const Sidenav = ({ open, close, handleBtn }) => {
  return (
    <Drawer anchor="top" open={open} onClose={handleBtn}>
      <Box sx={{ padding: 3 }}>
        <Box
          component="ul"
          sx={{ display: "flex", margin: 0, padding: 0, alignItems: "center" }}
        >
          {["Home", "Tentang", "Layanan"].map((text, i) => (
            <Box
              key={i}
              component="li"
              sx={{ listStyle: "none", mx: 2, justifyContent: "center" }}
            >
              <Typography component="p">{text}</Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Drawer>
  );
};

export default Sidenav;
