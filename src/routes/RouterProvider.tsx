import React, { createContext, PropsWithChildren, useContext, useMemo } from 'react';
import {
  RouterProvider,
  createBrowserRouter,
  RouteObject,
} from 'react-router-dom';
import Route from './@type';

interface RoutesContextProps  extends PropsWithChildren {
    routes: Route[];
}

const RoutesContext = createContext<RoutesContextProps | undefined>(undefined);

interface RoutesProviderProps {
    routes: Route[];
}

export const RoutesProvider: React.FC<RoutesProviderProps> = ({ routes }) => {
    const buildRouteTree = (originalRoutes: Route[]): RouteObject[] =>
        originalRoutes.map((route): RouteObject => {
            const { component, children, ...rest } = route;
            
            let element = component ? React.createElement(component) : undefined;
            
            return {
                ...rest,
                element,
                children: children ? buildRouteTree(children) : undefined,
            };
    });

    const routeList = useMemo(() => buildRouteTree(routes), [routes]);
    
    return (
        <RoutesContext.Provider value={{ routes }}>
            <RouterProvider router={createBrowserRouter(routeList)} />
        </RoutesContext.Provider>
    );
};

export const useRoutes = (): RoutesContextProps => {
    const context = useContext(RoutesContext);

    if (!context) {
        throw new Error('useRoutes must be used withing a RouteProvider');
    }

    return context;
}