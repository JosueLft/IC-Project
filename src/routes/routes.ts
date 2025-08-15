import { t } from '../i18n';
import HomeDashboard from '../pages/Home';
import { About } from '../pages/About';
import Paths from './paths';
import Route from './@type';

export const routes: Route[] = [
    {
        path: Paths.HOME,
        component: HomeDashboard,
        name: t('pages.home.title'),
        isVisibleInNavBar: true,
    },
    {
        path: Paths.ABOUT,
        component: About,
        name: t('pages.about.title'),
        isVisibleInNavBar: true,
    },
];