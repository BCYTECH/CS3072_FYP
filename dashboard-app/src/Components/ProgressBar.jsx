import {Box, useTheme} from "@mui/material";
import {tokens} from "../theme";

const ProgressBar = ({progress = "0.75", size = "40"}) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const meter = progress * 100;

    return (
        <Box
            sx={{
                background:`radial-gradient(${colors.primary[400]} 33%, transparent 34%),
                conic-gradient(transparent 0 ${meter}, ${colors.blueAccent[500]} ${meter} 100),
                ${colors.greenAccent[500]}`,
                borderRadius: "50%",
                width: `${size}px`,
                height: `${size}px`,
            }}
            >

        </Box>
    );
}