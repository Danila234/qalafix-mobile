import { NavLink } from 'react-router-dom';

const items = [
  { path: '/', label: 'Обзор', icon: '📊' },
  { path: '/users', label: 'Пользователи', icon: '👥' },
  { path: '/activity', label: 'Журнал рисков', icon: '🛡️', badge: 7 },
  { path: '/reports', label: 'Обращения', icon: '📋' },
  { path: '/districts', label: 'Районы', icon: '🗺️' },
  { path: '/reports-list', label: 'Отчёты', icon: '📈' },
  { path: '/settings', label: 'Настройки', icon: '⚙️' },
  { path: '/help', label: 'Помощь', icon: '❓' },
];

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r border-border flex flex-col h-screen sticky top-0">
      <div className="px-6 py-5 border-b border-border">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-sm">
            Q
          </div>
          <span className="text-lg font-bold text-primary">QalaFix</span>
        </div>
      </div>

      <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
        {items.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === '/'}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition ${
                isActive
                  ? 'bg-primary-light text-primary font-semibold'
                  : 'text-text-gray hover:bg-bg'
              }`
            }
          >
            <span className="text-base">{item.icon}</span>
            <span className="flex-1">{item.label}</span>
            {item.badge && (
              <span className="bg-error text-white text-xs px-1.5 py-0.5 rounded-full">
                {item.badge}
              </span>
            )}
          </NavLink>
        ))}
      </nav>

      <div className="px-3 py-3 border-t border-border">
        <NavLink
          to="/my-profile"
          className={({ isActive }) =>
            `flex items-center gap-3 px-2 py-2 rounded-lg transition ${
              isActive ? 'bg-primary-light' : 'hover:bg-bg'
            }`
          }
        >
          <div className="w-9 h-9 bg-primary rounded-full flex items-center justify-center text-white font-semibold text-sm">
            АЕ
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-text-dark truncate">Айдана Ержанова</p>
            <p className="text-xs text-text-light truncate">Администратор</p>
          </div>
        </NavLink>
      </div>
    </aside>
  );
}