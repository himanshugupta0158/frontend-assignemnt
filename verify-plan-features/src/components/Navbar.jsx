import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex space-x-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-white px-3 py-2 rounded-md text-sm font-medium ${
                isActive ? 'bg-gray-900' : 'hover:bg-gray-700'
              }`
            }
          >
            Route 1
          </NavLink>
          <NavLink
            to="/route2"
            className={({ isActive }) =>
              `text-white px-3 py-2 rounded-md text-sm font-medium ${
                isActive ? 'bg-gray-900' : 'hover:bg-gray-700'
              }`
            }
          >
            Route 2
          </NavLink>
          <NavLink
            to="/route3"
            className={({ isActive }) =>
              `text-white px-3 py-2 rounded-md text-sm font-medium ${
                isActive ? 'bg-gray-900' : 'hover:bg-gray-700'
              }`
            }
          >
            Route 3
          </NavLink>
        </div>
      </div>
    </nav>
  );
}