import { t } from '../i18n';
import HomeDashboard from '../pages/Home';
import Paths from './paths';
import Route from './@type';

export const routes: Route[] = [
    {
        path: Paths.HOME,
        component: HomeDashboard,
        name: t('pages.home.title'),
        isVisibleInNavBar: true,
    },
];