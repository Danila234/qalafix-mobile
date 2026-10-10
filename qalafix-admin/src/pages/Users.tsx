import { users } from '../data/mock';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const statusStyles: Record<string, string> = {
  'Активен': 'text-success bg-success/10',
  'Заблокирован': 'text-error bg-error/10',
  'Не активен': 'text-text-gray bg-bg',
};

const roleStyles: Record<string, string> = {
  'Гражданин': 'text-primary bg-primary-light',
  'Волонтер': 'text-success bg-success/10',
  'Модератор': 'text-warning bg-warning/10',
  'Администратор': 'text-secondary bg-secondary/10',
};

export default function Users() {
  const [selected, setSelected] = useState<string[]>([]);
  const navigate = useNavigate();

  const toggleAll = () => {
    if (selected.length === users.length) setSelected([]);
    else setSelected(users.map((u) => u.id));
  };

  const toggleOne = (id: string) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  return (
    <div className="p-8 max-w-[1600px] mx-auto">
      <div className="flex items-start justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold text-text-dark">Пользователи</h1>
          <p className="text-sm text-text-gray mt-2">
            48 290 аккаунтов · 12 846 активных сегодня
          </p>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2.5 text-sm font-medium bg-white border border-border rounded-xl hover:bg-bg transition">
            ⬇ Экспорт в CSV
          </button>
          <button className="px-4 py-2.5 text-sm font-medium bg-primary text-white rounded-xl hover:bg-primary-dark transition">
            + Добавить пользователя
          </button>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-border mb-5 p-5">
        <div className="flex gap-3 mb-4">
          <input
            type="text"
            placeholder="Имя, телефон, электронная почта или идентификатор"
            className="flex-1 px-4 py-2.5 text-sm border border-border rounded-xl focus:outline-none focus:border-primary"
          />
          <select className="px-4 py-2.5 text-sm border border-border rounded-xl bg-white">
            <option>Статус: все</option>
            <option>Активен</option>
            <option>Заблокирован</option>
          </select>
          <select className="px-4 py-2.5 text-sm border border-border rounded-xl bg-white">
            <option>Роль: все</option>
            <option>Гражданин</option>
            <option>Волонтер</option>
            <option>Модератор</option>
          </select>
          <select className="px-4 py-2.5 text-sm border border-border rounded-xl bg-white">
            <option>Район: все</option>
          </select>
          <button className="px-4 py-2.5 text-sm font-medium bg-bg border border-border rounded-xl hover:bg-border transition">
            Ещё фильтры
          </button>
        </div>

        <div className="flex gap-2 flex-wrap">
          {['Активные', 'Онлайн', '7 дней', '30 дней', 'Не входили 90+ дней'].map((f) => (
            <button
              key={f}
              className="px-3 py-1.5 text-xs font-medium bg-bg border border-border rounded-lg hover:border-primary hover:text-primary transition"
            >
              {f}
            </button>
          ))}
          <button className="px-3 py-1.5 text-xs font-medium bg-primary-light text-primary border border-primary/20 rounded-lg">
            Спец. роль ›
          </button>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-border overflow-hidden">
        {selected.length > 0 && (
          <div className="flex items-center gap-4 px-5 py-3 bg-primary-light border-b border-primary/20">
            <span className="text-sm font-medium text-primary">
              ✓ Выбрано: {selected.length}
            </span>
            <div className="flex gap-2 ml-auto">
              <button className="px-3 py-1.5 text-xs font-medium bg-white border border-border rounded-lg hover:bg-bg">
                ⚙ Сменить роль
              </button>
              <button className="px-3 py-1.5 text-xs font-medium bg-white border border-border rounded-lg hover:bg-bg">
                ✉ Отправить сообщение
              </button>
              <button className="px-3 py-1.5 text-xs font-medium bg-error text-white rounded-lg hover:opacity-90">
                🚫 Заблокировать
              </button>
            </div>
          </div>
        )}

        <table className="w-full">
          <thead>
            <tr className="border-b border-border bg-bg/50">
              <th className="px-5 py-3 text-left">
                <input
                  type="checkbox"
                  checked={selected.length === users.length && users.length > 0}
                  onChange={toggleAll}
                  className="w-4 h-4 accent-primary"
                />
              </th>
              <th className="px-3 py-3 text-left text-xs font-semibold text-text-gray uppercase tracking-wide">Пользователь</th>
              <th className="px-3 py-3 text-left text-xs font-semibold text-text-gray uppercase tracking-wide">Роль</th>
              <th className="px-3 py-3 text-left text-xs font-semibold text-text-gray uppercase tracking-wide">Статус</th>
              <th className="px-3 py-3 text-left text-xs font-semibold text-text-gray uppercase tracking-wide">Район</th>
              <th className="px-3 py-3 text-left text-xs font-semibold text-text-gray uppercase tracking-wide">Активность</th>
              <th className="px-3 py-3 text-left text-xs font-semibold text-text-gray uppercase tracking-wide">Обращений</th>
              <th className="px-3 py-3 text-left text-xs font-semibold text-text-gray uppercase tracking-wide">Рейтинг</th>
              <th className="px-3 py-3 text-left text-xs font-semibold text-text-gray uppercase tracking-wide">Действия</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <tr
                key={u.id}
                onClick={() => navigate(`/users/${u.id}`)}
                className="border-b border-border last:border-0 hover:bg-bg/50 transition cursor-pointer"
              >
                <td className="px-5 py-4" onClick={(e) => e.stopPropagation()}>
                  <input
                    type="checkbox"
                    checked={selected.includes(u.id)}
                    onChange={() => toggleOne(u.id)}
                    className="w-4 h-4 accent-primary"
                  />
                </td>
                <td className="px-3 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-primary text-white flex items-center justify-center text-xs font-semibold">
                      {u.name.split(' ').map((w) => w[0]).slice(0, 2).join('')}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-text-dark">{u.name}</p>
                      <p className="text-xs text-text-light">{u.id} · {u.email}</p>
                    </div>
                  </div>
                </td>
                <td className="px-3 py-4">
                  <span className={`inline-block px-2.5 py-1 text-xs font-medium rounded-full ${roleStyles[u.role] || 'text-text-gray bg-bg'}`}>
                    {u.role}
                  </span>
                </td>
                <td className="px-3 py-4">
                  <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-full ${statusStyles[u.status] || 'text-text-gray bg-bg'}`}>
                    <span className="w-1.5 h-1.5 rounded-full bg-current" />
                    {u.status}
                  </span>
                </td>
                <td className="px-3 py-4 text-sm text-text-dark">{u.district}</td>
                <td className="px-3 py-4 text-sm text-text-gray">{u.activity}</td>
                <td className="px-3 py-4 text-sm text-text-dark font-medium">{u.reports}</td>
                <td className="px-3 py-4 text-sm text-text-dark font-medium">{u.rating}</td>
                <td className="px-3 py-4" onClick={(e) => e.stopPropagation()}>
                  <button className="text-text-light hover:text-text-dark text-lg">⋯</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex items-center justify-between px-5 py-4 border-t border-border">
          <span className="text-sm text-text-gray">Показано 1–8 из 48 290</span>
          <div className="flex gap-1">
            <button className="px-3 py-1.5 text-sm border border-border rounded-lg hover:bg-bg">‹ Назад</button>
            <button className="w-9 h-9 text-sm font-medium bg-primary text-white rounded-lg">1</button>
            <button className="w-9 h-9 text-sm border border-border rounded-lg hover:bg-bg">2</button>
            <button className="w-9 h-9 text-sm border border-border rounded-lg hover:bg-bg">3</button>
            <button className="w-9 h-9 text-sm border border-border rounded-lg hover:bg-bg">4</button>
            <span className="px-2 self-center text-text-light">...</span>
            <button className="w-12 h-9 text-sm border border-border rounded-lg hover:bg-bg">604</button>
            <button className="px-3 py-1.5 text-sm border border-border rounded-lg hover:bg-bg">Далее ›</button>
          </div>
        </div>
      </div>
    </div>
  );
}