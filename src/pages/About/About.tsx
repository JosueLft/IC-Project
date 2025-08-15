import React from 'react';
import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import PageLayout from '../../components/layouts/PageLayout';
import {
  aboutPageStyle,
  whiteSectionStyle,
  darkSectionStyle,
  sectionContentStyle,
  whiteSectionTitleStyle,
  darkSectionTitleStyle,
  whiteDescriptionTextStyle,
  whiteCallToActionStyle,
  sectionSubtitleStyle,
  descriptionTextStyle,
  leadershipSectionStyle,
  leadershipCardStyle,
  leadershipContentStyle,
  leadershipImageContainerStyle,
  leadershipImageStyle,
  leadershipTextContainerStyle,
  ministriesSectionStyle,
  ministryItemRightStyle,
  ministryItemLeftStyle,
  ministryImageContainerStyle,
  ministryImageStyle,
  ministryContentStyle,
  ministryTitleStyle,
  ministryLeaderStyle,
  ministryDescriptionStyle,
  detailedMinistriesSectionStyle,
  detailedMinistriesCardStyle,
  detailedMinistryItemStyle,
  detailedMinistryTitleStyle,
  detailedMinistryDescriptionStyle,
  whiteSectionStyle2,
} from './styles';

const About: React.FC = () => {
  const { t } = useTranslation();

  const ministries = [
    'diaconato',
    'intercessao',
    'louvor',
    'infantil',
    'teens',
    'ensino',
    'acaoSocial',
    'midia',
  ];

  return (
    <PageLayout>
      <Box sx={aboutPageStyle}>
        <Box sx={whiteSectionStyle}>
          <Box sx={sectionContentStyle}>
            <Typography sx={whiteSectionTitleStyle}>
              {t('pages.about.sections.description.title')}
            </Typography>
            <Typography sx={whiteDescriptionTextStyle}>
              {t('pages.about.sections.description.content')}
            </Typography>
            <Typography sx={whiteCallToActionStyle}>
              {t('pages.about.sections.description.callToAction')}
            </Typography>
          </Box>
        </Box>

        <Box sx={darkSectionStyle}>
          <Box sx={leadershipSectionStyle}>
            <Box sx={leadershipCardStyle}>
                <Typography sx={darkSectionTitleStyle}>
                    {t('pages.about.sections.leadership.title')}
                </Typography>
              <Box sx={leadershipContentStyle}>
                <Box sx={leadershipTextContainerStyle}>
                  <Typography sx={sectionSubtitleStyle}>
                    {t('pages.about.sections.leadership.subtitle')}
                  </Typography>
                  <Typography sx={descriptionTextStyle}>
                    {t('pages.about.sections.leadership.description')}
                  </Typography>
                  <Typography sx={descriptionTextStyle}>
                    {t('pages.about.sections.leadership.vision')}
                  </Typography>
                  <Typography sx={descriptionTextStyle}>
                    {t('pages.about.sections.leadership.result')}
                  </Typography>
                </Box>
                <Box sx={leadershipImageContainerStyle}>
                  <Box
                    component="div"
                    sx={{
                      ...leadershipImageStyle,
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'rgba(255, 255, 255, 0.6)',
                      fontSize: '1rem',
                    }}
                  >
                    Foto da Presidência (Grande)
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box sx={whiteSectionStyle2}>
          <Box sx={ministriesSectionStyle}>
            <Typography sx={whiteSectionTitleStyle}>
              {t('pages.about.sections.ministries.title')}
            </Typography>
            <Box>
              {ministries.map((ministry, index) => {
                const isLeft = index % 2 === 0;
                return (
                  <Box 
                    key={ministry} 
                    sx={isLeft ? ministryItemLeftStyle : ministryItemRightStyle}
                  >
                    <Box sx={ministryContentStyle} className="ministry-content">
                      <Typography sx={ministryTitleStyle}>
                        {t(`pages.about.sections.ministries.list.${ministry}.name`)}
                      </Typography>
                      <Typography sx={ministryLeaderStyle}>
                        {t(`pages.about.sections.ministries.list.${ministry}.leader`)}
                      </Typography>
                      <Typography sx={ministryDescriptionStyle}>
                        {t(`pages.about.sections.ministries.list.${ministry}.shortDescription`)}
                      </Typography>
                    </Box>
                    
                    <Box sx={ministryImageContainerStyle} className="ministry-image">
                      <Box sx={ministryImageStyle}>
                        Imagem do {t(`pages.about.sections.ministries.list.${ministry}.name`)}
                      </Box>
                    </Box>
                  </Box>
                );
              })}
            </Box>
          </Box>
        </Box>

        <Box sx={darkSectionStyle}>
          <Box sx={detailedMinistriesSectionStyle}>
            <Typography sx={darkSectionTitleStyle}>
                {t('pages.about.sections.ministries.details')}
            </Typography>
            <Box sx={detailedMinistriesCardStyle}>
              {ministries.map((ministry) => (
                <Box key={`detailed-${ministry}`} sx={detailedMinistryItemStyle}>
                  <Typography sx={detailedMinistryTitleStyle}>
                    {t(`pages.about.sections.ministries.list.${ministry}.name`)} - {' '}
                    {t(`pages.about.sections.ministries.list.${ministry}.leader`)}
                  </Typography>
                  <Typography sx={detailedMinistryDescriptionStyle}>
                    {t(`pages.about.sections.ministries.list.${ministry}.longDescription`)}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </PageLayout>
  );
};

export default About;
