import { MainChartProps } from '../../components/charts/types';
import { StatusKeys } from '../../types';

export type FeatureGraph<T> = { permissionGroup: string } & {
  chart: MainChartProps<T>;
};
export interface Feature {
  label: string;
  consolidated: Consolidated[];
  navigation: string;
  graph: FeatureGraph<any>;
}

export interface Consolidated {
  status: StatusKeys;
  qttdByStatus: number;
  color?: string;
}

export interface IDailyInput {
  id: string;
  postingDate: Date;
  realDate: Date;
  quantity: number;
  isDeleted: boolean;
  isFinal: boolean;
  syncStatus: number;
  errorMessage: string;
  materialDocument: string;
  reversalDocument: string;
}

export interface IBaseEntity {
  id: string;
  postingDate: Date;
  realDate: Date;
  quantity: number;
  isDeleted: boolean;
}
