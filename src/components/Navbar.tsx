import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";

import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const navigation = [
  { name: "Dashboard", href: "#", current: true },
  { name: "Team", href: "#", current: false },
  { name: "Projects", href: "#", current: false },
  { name: "Calendar", href: "#", current: false },
];

function classNames(...classes: (string | boolean | undefined)[]): string {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const location = useLocation();
  const { isAuthenticated, logout } = useAuth(); // Usando o hook global
  const isLoginPage = location.pathname === "/login";

  return (
    <Disclosure
      as="nav"
      className={classNames(
        "relative after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white/10",
        isLoginPage
          ? "bg-secundary-100"
          : isAuthenticated
          ? "bg-primary-300 shadow-sm"
          : "bg-primary-100"
      )}
    >
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 py-3">
        <div className="relative flex h-16 items-center justify-between">
          {/* <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-500">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon
                aria-hidden="true"
                className="block size-6 group-data-open:hidden"
              />
              <XMarkIcon
                aria-hidden="true"
                className="hidden size-6 group-data-open:block"
              />
            </DisclosureButton>
          </div> */}
          <div className="flex flex-1 items-center justify-start sm:items-stretch sm:justify-start p-1 sm:p-0">
            <div className="flex shrink-0 items-center">
              <Link
                to="/"
                className="text-xl font-bold text-secundary-300 sm:text-2xl"
              >
                Listou
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {/* BOTÕES DA NAVBAR */}

                {/* {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? "page" : undefined}
                    className={classNames(
                      item.current
                        ? "bg-gray-950/50 text-white"
                        : "text-gray-300 hover:bg-white/5 hover:text-white",
                      "rounded-md px-3 py-2 text-sm font-medium"
                    )}
                  >
                    {item.name}
                  </a>
                ))} */}
              </div>
            </div>
          </div>
          {!isAuthenticated ? (
            <div
              className={classNames(
                "absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 ",
                isLoginPage ? "hidden" : ""
              )}
            >
              <Link
                to="/login"
                className="rounded-3xl px-6 py-3 text-sm font-medium text-secundary-300"
              >
                Entrar
              </Link>
              <Link
                to="/login"
                className="rounded-3xl bg-secundary-200 px-6 py-3 text-sm font-medium text-white shadow hover:bg-blue-400 active:bg-blue-500"
              >
                Criar conta
              </Link>
            </div>
          ) : (
            // Botão de Logout quando autenticado
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <button
                onClick={logout}
                className="rounded-3xl px-6 py-3 text-sm font-medium text-gray-600 cursor-pointer hover:text-gray-400"
              >
                Sair
              </button>
            </div>
          )}
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pt-2 pb-3">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? "page" : undefined}
              className={classNames(
                item.current
                  ? "bg-gray-950/50 text-white"
                  : "text-gray-300 hover:bg-white/5 hover:text-white",
                "block rounded-md px-3 py-2 text-base font-medium"
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
