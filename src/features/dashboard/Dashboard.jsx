import { useState } from "react";
import {
  Home,
  BarChart3,
  Users,
  Settings,
  FileText,
  Bell,
  Search,
  Menu,
  X,
  ChevronDown,
  User,
  LogOut,
} from "lucide-react";

export const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("dashboard");
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);

  const menuItems = [
    { id: "dashboard", name: "Dashboard", icon: Home },
    { id: "analytics", name: "Analytics", icon: BarChart3 },
    { id: "users", name: "Users", icon: Users },
    { id: "reports", name: "Reports", icon: FileText },
    { id: "settings", name: "Settings", icon: Settings },
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      {/* sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}
      >
        <div className="flex items-center justify-between h-16 px-6 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">D</span>
            </div>
            <span className="text-xl font-semibold text-gray-800">
              Dashboard
            </span>
          </div>
          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden p-1 rounded-md hover:bg-gray-100"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {/* nav */}
        <nav className="mt-8 px-4">
          <ul className="space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.id}>
                  <button
                    onClick={() => setActiveItem(item.id)}
                    className={`w-full flex items-center cursor-pointer px-4 py-3 text-sm font-medium rounded-lg transition-colors duration-200 ${
                      activeItem === item.id
                        ? "bg-blue-50 text-blue-700 border-r-2 border-blue-700"
                        : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                    }`}
                  >
                    <Icon
                      className={`mr-3 h-5 w-5 ${
                        activeItem === item.id
                          ? "text-blue-700"
                          : "text-gray-400"
                      }`}
                    />
                    {item.name}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200">
          <div className="relative">
            <button
              onClick={() => setUserDropdownOpen(!userDropdownOpen)}
              className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer"
            >
              <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                <User className="w-4 h-4 text-gray-600" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-700 truncate">
                  Jd Ronson Bading
                </p>
                <p className="text-xs text-gray-500 truncate">
                  jdbayot@gmail.com
                </p>
              </div>
              <ChevronDown
                className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
                  userDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {userDropdownOpen && (
              <div className="absolute bottom-full left-0 right-0 mb-2 bg-white border border-gray-200 rounded-lg shadow-lg py-2">
                <button
                  onClick={() => {
                    alert("Logging out...");
                    setUserDropdownOpen(false);
                  }}
                  className="w-full flex items-center px-4 py-2 cursor-pointer text-sm text-gray-700 hover:bg-gray-50"
                >
                  <LogOut className="w-4 h-4 mr-3 text-gray-400" />
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* main */}
      <div className="flex-1 flex flex-col overflow-hidden lg:ml-0">
        {/* header */}
        <header className="bg-white shadow-sm border-b border-gray-200">
          <div className="flex items-center justify-between h-16 px-6">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden p-2 rounded-md hover:bg-gray-100"
              >
                <Menu className="w-5 h-5 text-gray-500" />
              </button>

              <div className="hidden md:block">
                <h1 className="text-2xl font-semibold text-gray-800 capitalize">
                  {activeItem}
                </h1>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="relative hidden sm:block">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-4 w-4 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search..."
                  className="block w-64 pl-10 pr-3 py-2 border border-gray-300 rounded-lg text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <button className="relative p-2 text-gray-400 hover:text-gray-500 hover:bg-gray-100 rounded-lg">
                <Bell className="w-5 h-5" />
                <span className="absolute top-1 right-1 block h-2 w-2 rounded-full bg-red-400 ring-2 ring-white"></span>
              </button>

              <div className="relative">
                <button className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-medium">JB</span>
                  </div>
                  <ChevronDown className="w-4 h-4 text-gray-400 hidden sm:block" />
                </button>
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-auto bg-gray-50 p-6">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white rounded-xl shadow-sm p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Home className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-800 mb-2">
                Welcome to Dashboard
              </h2>
              <p className="text-gray-600 text-lg">Dashboard ni JD bayot!</p>
            </div>
          </div>
        </main>
      </div>

      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {userDropdownOpen && (
        <div
          className="fixed inset-0 z-30"
          onClick={() => setUserDropdownOpen(false)}
        ></div>
      )}
    </div>
  );
};
