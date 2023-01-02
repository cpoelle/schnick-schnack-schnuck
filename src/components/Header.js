import React from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const Header = ({ score }) => {
  const style = {
    maxWidth: 700,
    bgcolor: "white",
    color: "#000",
    border: "2px solid #000",
    borderRadius: "5px",
    boxShadow: 24,
    p: 4,
    mx: "auto",
    my: 4,
  };

  return (
    <div>
      <Stack sx={style} justifyContent="center" direction="row" spacing={6}>
        <Stack sx={{ m: "auto" }} alignItems={"start"}>
          <span>Schere</span>
          <span>Stein</span>
          <span>Papier</span>
        </Stack>
        <div>
          <Typography
            sx={{ m: 4, fontWeight: "bold" }}
            variant="h1"
            component="h2"
          >
            Score: {score}
          </Typography>
        </div>
      </Stack>
    </div>
  );
};

export default Header;
