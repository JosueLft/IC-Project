import React from 'react';
import { useTranslation } from 'react-i18next';
import PageLayout from '../../components/layouts/PageLayout';
import EventCard from '../../components/EventCard';
import { Box, Typography } from "@mui/material";
import { baseContainerStyle, baseContainerVerticalStyle, eventContainersStyle } from './styles';
import { generateDailyEvents } from '../../mocks/eventMock';
import { colors } from '../../theme';

const HomeDashboard: React.FC = () => {
    const { t } = useTranslation();
    const dailyEvents = generateDailyEvents();

    return (
        <PageLayout>
            <Box sx={baseContainerStyle}>
                <Typography variant="h3" sx={{ color: colors.gray.dark }}>
                    {t('pages.home.welcomeMessage')}
                </Typography>
            </Box>
            <Box sx={baseContainerVerticalStyle}>
                <Typography variant="h5" sx={{ color: colors.gray.dark, marginBottom: '22px', marginLeft: '10px' }}>
                    {t('pages.home.eventsTitle')}
                </Typography>
                <Box sx={eventContainersStyle}>
                    {dailyEvents.map((event, index) => (
                        <EventCard
                            key={`event-${index}`}
                            event={event}
                            width={200}
                            onSuccess={() => {
                                alert(t('events.actions.eventProcessed', { title: event.title }));
                            }}
                        />
                    ))}
                </Box>
            </Box>
        </PageLayout>
    );
};

export default HomeDashboard;