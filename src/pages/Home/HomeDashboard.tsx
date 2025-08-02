import React from 'react';
import PageLayout from '../../components/layouts/PageLayout';
import { Box } from "@mui/material";
import { baseContainerStyle } from './styles';

const HomeDashboard: React.FC = () => {
    return (
        <PageLayout>
            <Box sx={baseContainerStyle}>
                <h1>Welcome to Iespa Church</h1>
            </Box>
        </PageLayout>
    );
};

export default HomeDashboard;