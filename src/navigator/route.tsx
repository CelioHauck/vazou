import { SvgIconTypeMap } from '@material-ui/core';
import { OverridableComponent } from '@material-ui/core/OverridableComponent';
import TimelineIcon from '@material-ui/icons/Timeline';
import HomeIcon from '@material-ui/icons/Home';
import Home from '../pages/Home';
import Meter from '../pages/Meter';
import { METER, ROOT } from './CONSTANTS';
interface Routes {
  id: number;
  name: string;
  path: string;
  component: React.FC;
  icon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>>;
}

const routes: Routes[] = [
  {
    id: 1,
    name: 'Home',
    path: ROOT,
    component: Home,
    icon: HomeIcon,
  },
  {
    id: 2,
    name: 'Medidor',
    path: METER,
    component: Meter,
    icon: TimelineIcon,
  },
];

export default routes;
