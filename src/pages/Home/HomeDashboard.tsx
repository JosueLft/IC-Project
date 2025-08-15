import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Typography, TextField, Button } from '@mui/material';
import { FaCalendarAlt, FaFacebook, FaInstagram, FaLocationArrow, FaYoutube } from 'react-icons/fa';
import PageLayout from '../../components/layouts/PageLayout';
import EventCard from '../../components/EventCard';
import { generateDailyEvents } from '../../mocks/eventMock';
import {
  homePageStyle,
  socialSectionStyle,
  socialMediaContainerStyle,
  socialIconStyle,
  socialTextStyle,
  sloganStyle,
  todayEventSectionStyle,
  todayEventPanelStyle,
  todayEventContentStyle,
  todayEventTextStyle,
  todayEventTitleStyle,
  todayEventDateStyle,
  todayEventDetailsStyle,
  learnMoreButtonStyle,
  eventsWeekSectionStyle,
  eventsTitleStyle,
  eventsContainerStyle,
  newsletterSectionStyle,
  newsletterContainerStyle,
  newsletterTitleStyle,
  newsletterSubtitleStyle,
  newsletterFormStyle,
  newsletterInputStyle,
  newsletterButtonStyle,
  mapSectionStyle,
  mapTitleStyle,
  mapContainerStyle,
} from './styles';

const HomeDashboard: React.FC = () => {
  const { t } = useTranslation();
  const dailyEvents = generateDailyEvents();
  const [newsletterForm, setNewsletterForm] = useState({
    name: '',
    email: '',
    whatsapp: '',
  });

  const todayEvent = dailyEvents[0];
  const todayDate = new Date().toLocaleDateString('pt-BR', { 
    weekday: 'short', 
    day: 'numeric', 
    month: 'short' 
  });

  const handleNewsletterChange = (field: string, value: string) => {
    setNewsletterForm(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleNewsletterSubmit = () => {
    console.log('Newsletter form:', newsletterForm);
    alert('Obrigado por se inscrever na nossa newsletter!');
    setNewsletterForm({ name: '', email: '', whatsapp: '' });
  };

  const socialMediaLinks = [
    { icon: <FaFacebook />, url: 'https://www.facebook.com/iespachurch' },
    { icon: <FaInstagram />, url: 'https://www.instagram.com/iespachurch/' },
    { icon: <FaYoutube />, url: 'https://www.youtube.com/@IESPACHURCH' },
  ];

  return (
    <PageLayout>
      <Box sx={homePageStyle}>
        <Box sx={socialSectionStyle}>
          <Box sx={socialMediaContainerStyle}>
            <Typography sx={socialTextStyle}>
              {t('pages.home.socialMedia.followUs')}
            </Typography>
            {socialMediaLinks.map((social, index) => (
              <Box
                key={index}
                sx={socialIconStyle}
                component="a"
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {social.icon}
              </Box>
            ))}
          </Box>
          <Typography sx={sloganStyle}>
            {t('pages.home.slogan')}
          </Typography>
        </Box>

        {todayEvent && (
          <Box sx={todayEventSectionStyle}>
            <Box sx={todayEventPanelStyle}>
              <Box sx={todayEventContentStyle}>
                <FaCalendarAlt style={{ fontSize: '2rem' }} />
                <Box sx={todayEventTextStyle}>
                  <Typography sx={todayEventTitleStyle}>
                    {t('pages.home.todayEvent.title')}
                  </Typography>
                  <Typography sx={todayEventDateStyle}>
                    {todayDate}
                  </Typography>
                  <Typography sx={todayEventDetailsStyle}>
                    {todayEvent.title} / Às {todayEvent.time} na IESPA.
                  </Typography>
                </Box>
              </Box>
              <Button
                sx={learnMoreButtonStyle}
                onClick={() => {
                  alert(t('pages.events.actions.eventProcessed', { title: todayEvent.title }));
                }}
              >
                {t('pages.home.todayEvent.learnMore')}
              </Button>
            </Box>
          </Box>
        )}

        {/* Seção 3: Eventos da Semana (fundo escuro) */}
        <Box sx={eventsWeekSectionStyle}>
          <Typography sx={eventsTitleStyle}>
            {t('pages.home.eventsTitle')}
          </Typography>
          <Box sx={eventsContainerStyle}>
            {dailyEvents.map((event, index) => (
              <EventCard
                key={`event-${index}`}
                event={event}
                width={200}
                onSuccess={() => {
                  alert(t('pages.events.actions.eventProcessed', { title: event.title }));
                }}
              />
            ))}
          </Box>
        </Box>

        {/* Seção 4: Newsletter (fundo branco) */}
        <Box sx={newsletterSectionStyle}>
          <Box sx={newsletterContainerStyle}>
            <Typography sx={newsletterTitleStyle}>
              {t('pages.home.newsletter.title')}
            </Typography>
            <Typography sx={newsletterSubtitleStyle}>
              {t('pages.home.newsletter.subtitle')}
            </Typography>
            <Box sx={newsletterFormStyle}>
              <TextField
                label={t('pages.home.newsletter.fields.name')}
                variant="outlined"
                value={newsletterForm.name}
                onChange={(e) => handleNewsletterChange('name', e.target.value)}
                sx={newsletterInputStyle}
              />
              <TextField
                label={t('pages.home.newsletter.fields.email')}
                variant="outlined"
                type="email"
                value={newsletterForm.email}
                onChange={(e) => handleNewsletterChange('email', e.target.value)}
                sx={newsletterInputStyle}
              />
              <TextField
                label={t('pages.home.newsletter.fields.whatsapp')}
                variant="outlined"
                type="tel"
                value={newsletterForm.whatsapp}
                onChange={(e) => handleNewsletterChange('whatsapp', e.target.value)}
                sx={newsletterInputStyle}
              />
              <Button
                sx={newsletterButtonStyle}
                onClick={handleNewsletterSubmit}
              >
                {t('pages.home.newsletter.button')}
              </Button>
            </Box>
          </Box>
        </Box>

        {/* Seção 5: Mapa (fundo escuro) */}
        <Box sx={mapSectionStyle}>
          <Typography sx={mapTitleStyle}>
            <FaLocationArrow style={{ fontSize: '2rem' }} /> {t('pages.home.location.title')}
          </Typography>
          <Box sx={mapContainerStyle}>
            <Typography>
              {t('pages.home.location.address')}
              <br />
              (Google Maps será implementado aqui)
            </Typography>
          </Box>
        </Box>
      </Box>
    </PageLayout>
  );
};

export default HomeDashboard;