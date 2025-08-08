import { colors } from '../../../theme';
import { DateTimeFormatOptions as DFO } from './datetimeformat';

export type DateTimeFormatOptions = DFO;
export type GraphType = 'line' | 'bar' | 'area';
export type ChartColors = keyof typeof colors.chart;
export type ChartOptions = Partial<{
  axis: boolean;
  bulletLegend: boolean;
  formatters?: DateTimeFormatOptions;
}>;

export interface MainChartProps<T> {
  serie: Serie<T>[];
  options?: ChartOptions;
}
export interface Serie<T> {
  data: T[];
  label: string;
  color: ChartColors;
  type: GraphType;
  getYValue: (d: T) => any;
  getXValue: (d: T) => any;
}
export type ChartProps<T> = Omit<
  MainChartProps<T> & Serie<T>,
  'data' | 'serie' | 'options' | 'type'
>;
