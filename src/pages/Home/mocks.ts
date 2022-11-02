import { Data } from '../../components/Chart/PierChart';
import { LIST_HISTORY, SETTINGS } from '../../routes/CustomDrawer/icons';
import { getRandomColor } from '../../utils/helpers';

export const menu = [
  {
    id: 0,
    title: 'Histórico de Lançamentos',
    icon: 'th-list',
    page: LIST_HISTORY,
  },
  { id: 1, title: 'Preferencias', icon: 'gears', page: SETTINGS },
];

export const dataChart: Data[] = [
  {
    id: 0,
    value: 75231,
    description: 'Notas Emitidas (R$ 75.231,00)',
    color: '#E3062E',
  },
  {
    id: 4,
    value: 5769,
    description: 'Valor Disponível P/ Emissão (R$ 5.769,00)',
    color: '#1DE759',
  },
];
