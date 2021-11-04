import Box from "@mui/material/Box";

function Section({ title, sub, children, ...props }) {
  return (
    <Box
      sx={{
        margin: "7rem 0",
      }}
      {...props}
    >
      <Box
        sx={{
          maxWidth: "1100px",
          height: "100%",
          margin: "auto",
        }}
      >
        {children}
      </Box>
    </Box>
  );
}

export default Section;
