import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Show } from "../../../hooks/Show";

class Sidebar extends Component {
  render() {
    return (
      <ul
        className={"navbar-nav bg-default sidebar sidebar-dark accordion"}
        id="accordionSidebar"
      >
        <a
          className="sidebar-brand d-flex align-items-center justify-content-center"
          href="index.html"
        >
          <img
            className="img-responsive sidebar-brand-image"
            src="./logorgb_kiki.svg"
          />
        </a>
        <Show when="feature:menu-routes">
          <hr className="sidebar-divider" />
          <div className="sidebar-heading">Administración</div>
          <li className="nav-item">
            <a
              className="nav-link collapsed"
              href="#"
              data-toggle="collapse"
              data-target="#collapse"
              aria-controls="collapse"
            >
              <i className="fas fa-fw fa-map-marked-alt"></i>
              <span>Rutas</span>
            </a>
            <div
              id="collapse"
              className="collapse"
              aria-labelledby="collapse"
              data-parent="#accordionSidebar"
            >
              <div className="bg-white py-2 collapse-inner rounded">
                <Show when="feature:see-routes">
                  <Link className="collapse-item" to="/routing">
                    Rutas en tiempo real
                  </Link>
                </Show>
                <Show when="feature:read-address">
                  <Link className="collapse-item" to="/addresses">
                    Direcciones
                  </Link>
                </Show>
                <Show when="feature:assign-addresses">
                  <Link className="collapse-item" to="/assignaddress">
                    Asignar direcciones
                  </Link>
                </Show>
                <Show when="feature:assignments-addresses">
                  <Link className="collapse-item" to="/assignments">
                    Asignaciones
                  </Link>
                </Show>
                <Show when="feature:generate-addresses">
                  <Link className="collapse-item" to="/generate">
                    Generador de direcciones
                  </Link>
                </Show>
              </div>
            </div>
          </li>
        </Show>
        <Show when="feature:menu-masters">
          <hr className="sidebar-divider" />
          <div className="sidebar-heading">Configuración</div>
          <li className="nav-item">
            <a
              className="nav-link collapsed"
              href="#"
              data-toggle="collapse"
              data-target="#collapse1"
              aria-controls="collapse1"
            >
              <i className="fas fa-fw fa-cog"></i>
              <span>Maestros</span>
            </a>
            <div
              id="collapse1"
              className="collapse"
              aria-labelledby="collapse1"
              data-parent="#accordionSidebar"
            >
              <div className="bg-white py-2 collapse-inner rounded">
                <Show when="feature:read-country">
                  <Link className="collapse-item" to="/countries">
                    Paises
                  </Link>
                </Show>
                <Show when="feature:read-department">
                  <Link className="collapse-item" to="/departments">
                    Departamentos
                  </Link>
                </Show>
                <Show when="feature:read-city">
                  <Link className="collapse-item" to="/cities">
                    Ciudades
                  </Link>
                </Show>
                <Show when="feature:read-area">
                  <Link className="collapse-item" to="/areas">
                    Áreas
                  </Link>
                </Show>
                <Show when="feature:read-zone">
                  <Link className="collapse-item" to="/zones">
                    Zonas
                  </Link>
                </Show>
                <Show when="feature:read-neighborhood">
                  <Link className="collapse-item" to="/neighborhoods">
                    Barrios
                  </Link>
                </Show>
                <Show when="feature:read-zoneneighborhood">
                  <Link className="collapse-item" to="/zoneneighborhoods">
                    Zonas - Barrios
                  </Link>
                </Show>
                <Show when="feature:read-company">
                  <Link className="collapse-item" to="/companies">
                    Empresas
                  </Link>
                </Show>
                <Show when="feature:read-observation">
                  <Link className="collapse-item" to="/observations">
                    Observaciones
                  </Link>
                </Show>
              </div>
            </div>
          </li>
        </Show>
        <Show when="feature:menu-security">
          <li className="nav-item">
            <a
              className="nav-link collapsed"
              href="#"
              data-toggle="collapse"
              data-target="#collapse2"
              aria-controls="collapse2"
            >
              <i className="fas fa-shield-alt"></i>
              <span>Seguridad</span>
            </a>
            <div
              id="collapse2"
              className="collapse"
              aria-labelledby="collapse2"
              data-parent="#accordionSidebar"
            >
              <div className="bg-white py-2 collapse-inner rounded">
                <Show when="feature:read-role">
                  <Link className="collapse-item" to="/roles">
                    Roles
                  </Link>
                </Show>
                <Show when="feature:read-permission">
                  <Link className="collapse-item" to="/permissions">
                    Permisos
                  </Link>
                </Show>
                <Show when="feature:read-user">
                  <Link className="collapse-item" to="/users">
                    Usuarios
                  </Link>
                </Show>
              </div>
            </div>
          </li>
        </Show>
      </ul>
    );
  }
}

export default Sidebar;
