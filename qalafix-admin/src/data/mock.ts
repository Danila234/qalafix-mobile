export const users = [
  { id: 'U-10248', name: 'Алия Досова', email: 'a.dosova@mail.ru', phone: '+7 707 123 45 67', role: 'Гражданин', status: 'Активен', district: 'Бостандыкский', activity: '2 мин назад', reports: 18, rating: 92 },
  { id: 'U-10247', name: 'Мұрат Қ.', email: 'murat.k@mail.ru', phone: '+7 705 987 65 43', role: 'Гражданин', status: 'Активен', district: 'Медеуский', activity: '6 мин назад', reports: 7, rating: 88 },
  { id: 'U-10246', name: 'Нурлан Салимов', email: 'n.salimov@mail.ru', phone: '+7 747 555 44 33', role: 'Волонтер', status: 'Активен', district: 'Алмалинский', activity: '24 мин назад', reports: 31, rating: 95 },
  { id: 'U-10245', name: 'Руслан Оспанов', email: 'r.ospanov@mail.ru', phone: '+7 777 000 12 34', role: 'Гражданин', status: 'Заблокирован', district: 'Ауэзовский', activity: '1 ч назад', reports: 4, rating: 42 },
  { id: 'U-10244', name: 'Жанар Таубаева', email: 'zh.t@mail.ru', phone: '+7 701 333 22 11', role: 'Модератор', status: 'Активен', district: 'Алмалинский', activity: '2 ч назад', reports: 62, rating: 98 },
  { id: 'U-10243', name: 'Дамир Кожанов', email: 'd.kozh@mail.ru', phone: '+7 702 444 55 66', role: 'Гражданин', status: 'Заблокирован', district: 'Турксибский', activity: 'вчера, 21:48', reports: 2, rating: 15 },
  { id: 'U-10242', name: 'Аружан Сатин', email: 'a.satin@mail.ru', phone: '+7 708 777 88 99', role: 'Волонтер', status: 'Активен', district: 'Наурызбайский', activity: 'вчера, 18:20', reports: 24, rating: 91 },
  { id: 'U-10241', name: 'Ильяс Болатов', email: 'i.bolatov@mail.ru', phone: '+7 747 111 22 33', role: 'Гражданин', status: 'Не активен', district: 'Жетысуский', activity: '10 окт 2026', reports: 0, rating: 50 },
];

export const reports = [
  { id: 'QF-4821', title: 'Несанкционированный выброс мусора', address: 'ул. Толе би, 78', status: 'new', category: 'Мусор', date: '14 октября 2026', user: 'Алия Досова' },
  { id: 'QF-4820', title: 'Уличное освещение', address: 'ул. Назарбаева, 112', status: 'in_progress', category: 'Освещение', date: '13 октября 2026', user: 'Мұрат Қ.' },
  { id: 'QF-4819', title: 'Глубокая яма на дороге', address: 'ул. Сатпаева, 33', status: 'resolved', category: 'Дороги', date: '10 октября 2026', user: 'Нурлан Салимов' },
  { id: 'QF-4818', title: 'Сломанная скамейка', address: 'Алматы, парк', status: 'resolved', category: 'Другое', date: '5 октября 2026', user: 'Руслан Оспанов' },
];

export const activities = [
  { id: 1, type: 'danger', title: 'Несколько регистраций с одного устройства', desc: 'Пользователь: qf-4821, устройство: Xiaomi Redmi Note 12', time: 'Сегодня, 16:42' },
  { id: 2, type: 'success', title: '17 подозрительных входов', desc: 'Пользователь: qf-4820, устройство: iPhone 14 Pro', time: 'Сегодня, 15:18' },
  { id: 3, type: 'warning', title: 'Массовые жалобы на пользователя', desc: 'Жалоб: 3, всего за 24 часа', time: 'Сегодня, 14:35' },
  { id: 4, type: 'warning', title: 'Массовые обращения без фото', desc: 'Пользователь: qf-4819, 8 обращений за 10 минут', time: 'Сегодня, 12:12' },
  { id: 5, type: 'info', title: 'Новый аккаунт в профиле', desc: 'Аккаунт: qf-4822', time: 'Сегодня, 12:44' },
  { id: 6, type: 'danger', title: 'Попытка обращения', desc: 'Сессия: qf-4018, 5 попыток', time: 'Сегодня, 11:03' },
];

export const events = [
  { id: 1, color: '#2E7D32', text: 'Алия Досова зарегистрировалась', time: '2 мин назад' },
  { id: 2, color: '#1565C0', text: 'Мұрат Қ. создал обращение QF-4821', time: '5 мин назад' },
  { id: 3, color: '#F9A825', text: 'Нурлан Салимов оставил отзыв о решении', time: '1 ч назад' },
  { id: 4, color: '#757575', text: 'Руслан С. создал новое сообщество', time: '1 ч назад' },
];