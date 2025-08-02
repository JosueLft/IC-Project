type Route = {
    path?: string;
    name: string;
    description?: string;
    isVisibleInNavBar?: boolean;
    component?: React.ComponentType;
    children?: Route[];
}

export default Route;