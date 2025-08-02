import React from 'react';
import { DropdownMenuProps } from './types';
import DropdownMenu from '../DropdownMenu';
import LinkItem from '../LinkItem';

const MenuItem: React.FC<DropdownMenuProps> = ({
    path,
    name,
    icon,
    children
}) => <>
    {React.Children.count(children) > 0 ? (
        <DropdownMenu name={name} path={path} icon={icon}>
            {children}
        </DropdownMenu>
    ) : (
        <LinkItem path={path} name={name} />
    )}
</>;

export default MenuItem;