import { t } from "i18next";
import { useRoutes } from "../../routes/RouterProvider";
import paths from "../../routes/paths";
import MenuItem from "../MenuItem";
import { logoContainer, navBarContainerStyle, navigationContainerStyles } from "./styles";
import Logo from "../Logo/Logo";

const NavBar: React.FC = () => {
    const { routes } = useRoutes();
    
    const renderNavItems = () => 
        routes
            .filter(
                (route) => route.isVisibleInNavBar
            )
            .map((route) => (
                <MenuItem
                    key={route.path}
                    name={route.name}
                    path={route.path || ''}
                />
            ));
    
    return  (
        <div style={navBarContainerStyle}>
            <div style={navigationContainerStyles}>
                <div style={logoContainer}>
                    <Logo url={paths.HOME} />
                </div>
                {renderNavItems()}
            </div>
        </div>
    )
};

export default NavBar;