import { IconName } from '@/component/ui/Icon';

interface LinkItemProps {
    path: string;
    name: string;
    icon?: IconName;
    description?: string;
    isVisibleInNavBar: boolean;
}

interface DropdownMenuProps {
    name: string;
    path: string;
    icon?: IconName;
    children?: React.ReactNode;
}

export type { LinkItemProps, DropdownMenuProps };