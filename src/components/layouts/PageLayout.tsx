import { PropsWithChildren } from "react";
import { Box } from "@mui/material";
import NavBar from "../NavBar/NavBar";
import { baseContainerStyle, pageLayoutStyle } from "./styles";
import { Footer } from "../Footer";

const PageLayout: React.FC<PropsWithChildren> = ({ children }) => {
    return (
        <Box sx={pageLayoutStyle}>
            <NavBar />
            <Box sx={baseContainerStyle}>
                {children}
            </Box>
            <Footer />
        </Box>
    );
};

export default PageLayout;