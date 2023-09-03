import * as React from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";

export default function CatHoverPop() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <div className="">
      <div>
        <Typography
          aria-owns={open ? "mouse-over-popover" : undefined}
          aria-haspopup="true"
          onMouseEnter={handlePopoverOpen}
          onMouseLeave={handlePopoverClose}
        >
          <Button> Catagories</Button>
        </Typography>
        <Popover
          id="mouse-over-popover"
          sx={{
            pointerEvents: "none",
          }}
          open={open}
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          onClose={handlePopoverClose}
          disableRestoreFocus
        >
          <Typography sx={{ p: 1 }}>I use Popover.</Typography>
          <Typography sx={{ p: 1 }}>I use Popover.</Typography>
          <Typography sx={{ p: 1 }}>I use Popover.</Typography>
          <Typography sx={{ p: 1 }}>I use Popover.</Typography>
          <Typography sx={{ p: 1 }}>I use Popover.</Typography>
          <Typography sx={{ p: 1 }}>I use Popover.</Typography>
        </Popover>
      </div>
    </div>
  );
}
