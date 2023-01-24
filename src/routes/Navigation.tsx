import { Suspense } from "react";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";

import logo from '../logo.svg';
import { routes } from "./routes";

export const Navigation = () => {
  return (
    <Suspense fallback={<span>Cargando...</span>}>
      <BrowserRouter>
        <div className="main-layout">
          <nav>
              <img src={ logo } alt="React Logo" />
            <ul>
              {routes.map(item => (
                <li>
                  <NavLink 
                    key={item.to}
                    to={item.to} 
                    className={({ isActive }) => isActive ? "nav-active" : ""}
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Routes>
            {routes.map(item => (            
              <Route key={item.path} path={item.path} element={ <item.Component /> } />
            ))}
          </Routes>
        </div>
      </BrowserRouter>
    </Suspense>
  );
}