import type { LucideProps } from 'lucide-react';
import { iconMap } from './iconmap';
import { IconName } from './types';

type IconProps = {
  name: IconName;
} & Omit<LucideProps, 'ref'>;

export const Icon = ({ name, ...props }: IconProps) => {
  const LucideIcon = iconMap[name];
  return <LucideIcon {...props} />;
};