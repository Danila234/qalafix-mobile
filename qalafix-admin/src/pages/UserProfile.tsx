import { users } from '../data/mock';
import { useParams, useNavigate } from 'react-router-dom';

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

const createdReports = [
  { id: 'QF-4821', title: 'Несанкционированный выброс мусора', address: 'ул. Толе би, 78', status: 'new', time: '14 октября 2026' },
  { id: 'QF-4818', title: 'Переполненный мусорный контейнер', address: 'ул. Сатпаева, 33', status: 'in_progress', time: '24 мин назад' },
  { id: 'QF-4812', title: 'Повреждения покрытия тротуара', address: 'ул. Толе би, 78', status: 'resolved', time: '12 мин назад' },
  { id: 'QF-4805', title: 'Опасный выезд под пешеходной зоной', address: 'ул. Толе би, 78', status: 'resolved', time: '10 мин назад' },
];

const activity = [
  { icon: '📄', title: 'Создал обращение QF-4821', desc: 'Не работает освещение у дома, ул. Кабанбай, 12а', time: 'Сегодня, 14:32' },
  { icon: '🔐', title: 'Вход в аккаунт', desc: 'iPhone 15, Алматы, IP 185.48.19.104', time: 'Сегодня, 09:10' },
  { icon: '👍', title: 'Поддержал обращение QF-4798', desc: 'Переполненный контейнер, ул. Жандосова, 58', time: 'Вчера, 19:44' },
  { icon: '✅', title: 'Регистрация в QalaFix', desc: 'Через Apple ID, с согласием с правилами получения', time: '25 окт, 10:58' },
  { icon: '✅', title: 'Регистрация в QalaFix', desc: 'Через Apple ID, с согласием с правилами получения', time: '25 окт, 10:58' },
];

const statusBadge: Record<string, { label: string; color: string }> = {
  new: { label: 'Не рассмотрено', color: 'text-warning bg-warning/10' },
  in_progress: { label: 'В работе', color: 'text-primary bg-primary-light' },
  resolved: { label: 'Решено', color: 'text-success bg-success/10' },
};

export default function UserProfile() {
  const { id } = useParams();
  const navigate = useNavigate();
  const user = users.find((u) => u.id === id) || users[0];

  return (
    <div className="p-8 max-w-350 mx-auto">
      <div className="flex items-start justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold text-text-dark">Профиль пользователя</h1>
          <p className="text-sm text-text-gray mt-1">{user.id}</p>
        </div>
        <div className="flex gap-3">
          <button
            onClick={() => navigate('/users')}
            className="px-4 py-2.5 text-sm font-medium bg-white border border-border rounded-xl hover:bg-bg transition"
          >
            ← Назад к списку
          </button>
          <button className="px-4 py-2.5 text-sm font-medium bg-white border border-border rounded-xl hover:bg-bg transition">
            ⋯ Действия
          </button>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-border p-6 mb-5">
        <div className="flex items-center gap-5">
          <div className="w-20 h-20 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold">
            {user.name.split(' ').map((w) => w[0]).slice(0, 2).join('')}
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <h2 className="text-2xl font-bold text-text-dark">{user.name}</h2>
              <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-full ${statusStyles[user.status]}`}>
                <span className="w-1.5 h-1.5 rounded-full bg-current" />
                {user.status}
              </span>
              <span className={`inline-block px-2.5 py-1 text-xs font-medium rounded-full ${roleStyles[user.role]}`}>
                {user.role}
              </span>
            </div>
            <p className="text-sm text-text-gray">{user.district} район · последняя активность {user.activity}</p>
          </div>
          <div className="flex gap-2">
            <button className="px-4 py-2.5 text-sm font-medium bg-white border border-border rounded-xl hover:bg-bg transition">
              ✉ Сообщение
            </button>
            <button className="px-4 py-2.5 text-sm font-medium bg-error/10 text-error border border-error/20 rounded-xl hover:bg-error/20 transition">
              🚫 Заблокировать
            </button>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-border">
          <div>
            <p className="text-2xl font-bold text-text-dark">{user.reports}</p>
            <p className="text-sm text-text-gray mt-1">Обращений</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-text-dark">14</p>
            <p className="text-sm text-text-gray mt-1">Решено</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-text-dark">{user.rating * 3}</p>
            <p className="text-sm text-text-gray mt-1">Баллов</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-5">
        <div className="col-span-2 space-y-5">
          <div className="bg-white rounded-2xl border border-border">
            <div className="flex gap-6 px-6 pt-5 border-b border-border">
              <button className="pb-3 text-sm font-semibold text-primary border-b-2 border-primary">
                Активность
              </button>
              <button className="pb-3 text-sm font-medium text-text-gray hover:text-text-dark">
                Сессии
              </button>
              <button className="pb-3 text-sm font-medium text-text-gray hover:text-text-dark">
                Изменения профиля
              </button>
            </div>
            <div className="p-6 space-y-5">
              {activity.map((a, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-lg bg-bg flex items-center justify-center shrink-0">
                    <span className="text-sm">{a.icon}</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-text-dark">{a.title}</p>
                    <p className="text-xs text-text-gray mt-1">{a.desc}</p>
                  </div>
                  <span className="text-xs text-text-light whitespace-nowrap">{a.time}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-border p-6">
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-lg font-semibold text-text-dark">Созданные обращения</h3>
              <button className="text-sm font-medium text-primary hover:underline">
                Все {user.reports} →
              </button>
            </div>
            <div className="space-y-3">
              {createdReports.map((r) => {
                const badge = statusBadge[r.status];
                return (
                  <div
                    key={r.id}
                    className="flex items-center gap-4 p-3 rounded-xl hover:bg-bg transition cursor-pointer"
                  >
                    <div className="w-9 h-9 rounded-lg bg-primary-light flex items-center justify-center shrink-0">
                      <span className="text-primary text-sm">📋</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-text-dark truncate">
                        {r.id} · {r.title}
                      </p>
                      <p className="text-xs text-text-gray mt-0.5">{r.address}</p>
                    </div>
                    <span className={`text-xs font-medium px-2.5 py-1 rounded-full whitespace-nowrap ${badge.color}`}>
                      ● {badge.label}
                    </span>
                    <span className="text-xs text-text-light whitespace-nowrap w-24 text-right">
                      {r.time}
                    </span>
                    <span className="text-text-light">›</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="space-y-5">
          <div className="bg-white rounded-2xl border border-border p-6">
            <h3 className="text-sm font-semibold text-text-dark mb-4">Контакты</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-primary">📧</span>
                <span className="text-sm text-text-dark">{user.email}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-primary">📱</span>
                <span className="text-sm text-text-dark">{user.phone}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-primary">🌐</span>
                <span className="text-sm text-text-dark">Русский</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-border p-6">
            <h3 className="text-sm font-semibold text-text-dark mb-4">Уровень доверия</h3>
            <div className="flex items-center justify-between mb-3">
              <span className="text-3xl font-bold text-success">{user.rating}</span>
              <span className="text-xs text-success bg-success/10 px-2 py-1 rounded-full font-medium">
                ✓ Высокое доверие
              </span>
            </div>
            <div className="space-y-3 mt-4">
              <div>
                <div className="flex justify-between text-xs mb-1.5">
                  <span className="text-text-dark font-medium">Баллы обращений</span>
                  <span className="text-text-gray">34%</span>
                </div>
                <div className="h-1.5 bg-bg rounded-full overflow-hidden">
                  <div className="h-full bg-success rounded-full" style={{ width: '34%' }} />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs mb-1.5">
                  <span className="text-text-dark font-medium">Положительно</span>
                  <span className="text-text-gray">98%</span>
                </div>
                <div className="h-1.5 bg-bg rounded-full overflow-hidden">
                  <div className="h-full bg-success rounded-full" style={{ width: '98%' }} />
                </div>
              </div>
            </div>
            <p className="text-xs text-text-light mt-4 leading-relaxed">
              Основан на количестве обращений, их качестве, поддержке других пользователей и отклике на запросы.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-border p-6">
            <h3 className="text-sm font-semibold text-text-dark mb-4">Действия администратора</h3>
            <div className="space-y-2">
              <button className="w-full text-left px-4 py-2.5 text-sm text-text-dark hover:bg-bg rounded-lg transition">
                📊 Посмотреть активные сессии
              </button>
              <button className="w-full text-left px-4 py-2.5 text-sm text-error hover:bg-error/5 rounded-lg transition flex items-center gap-2">
                🚫 Заблокировать пользователя
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}