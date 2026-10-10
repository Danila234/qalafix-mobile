import Card from '@/components/Card';
import { useAuth } from '@/context/AuthContext';
import { borderRadius, colors, fontSize, spacing } from '@/theme';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function ProfileScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    await logout();
    router.replace('/screens/LoginScreen' as any);
  };

  return (
    <View style={styles.container}>
      <View style={[styles.header, { paddingTop: insets.top + 12 }]}>
        <Text style={styles.headerTitle}>Профиль</Text>
        <TouchableOpacity
          style={styles.headerIcon}
          onPress={() => router.push('/screens/SettingsScreen' as any)}
        >
          <Ionicons name="settings-outline" size={22} color={colors.textDark} />
        </TouchableOpacity>
      </View>

      <ScrollView
        contentContainerStyle={styles.scroll}
        showsVerticalScrollIndicator={false}
      >
        <Card style={styles.userCard}>
          <Image
            source={require('../../../assets/images/cat.jpg')}
            style={styles.avatar}
          />
          <Text style={styles.name}>{user?.name || 'Арман Каримов'}</Text>
          <Text style={styles.role}>Гражданин · Алмалинский район</Text>
        </Card>

        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => router.push('/screens/StatisticsScreen' as any)}
        >
          <View style={styles.statsRow}>
            <Card style={styles.statCard}>
              <Text style={styles.statNum}>12</Text>
              <Text style={styles.statLabel}>Создано</Text>
            </Card>
            <Card style={styles.statCard}>
              <Text style={styles.statNum}>8</Text>
              <Text style={styles.statLabel}>Решено</Text>
            </Card>
            <Card style={styles.statCard}>
              <Text style={styles.statNum}>340</Text>
              <Text style={styles.statLabel}>Баллы</Text>
            </Card>
          </View>
        </TouchableOpacity>

        <Text style={styles.sectionTitle}>Полученные награды</Text>
        <Card>
          <View style={styles.awardsRow}>
            <View style={styles.awardItem}>
              <View style={[styles.awardIcon, { backgroundColor: colors.warning + '20' }]}>
                <Ionicons name="star" size={18} color={colors.warning} />
              </View>
              <Text style={styles.awardLabel}>Первое обращение</Text>
            </View>
            <View style={styles.awardItem}>
              <View style={[styles.awardIcon, { backgroundColor: colors.success + '20' }]}>
                <Ionicons name="leaf" size={18} color={colors.success} />
              </View>
              <Text style={styles.awardLabel}>10 обращений</Text>
            </View>
            <View style={styles.awardItem}>
              <View style={[styles.awardIcon, { backgroundColor: colors.primary + '20' }]}>
                <Ionicons name="ribbon" size={18} color={colors.primary} />
              </View>
              <Text style={styles.awardLabel}>Помощник</Text>
            </View>
          </View>
        </Card>

        <Text style={styles.sectionTitle}>Настройки</Text>
        <Card style={{ paddingVertical: 4 }}>
          <TouchableOpacity
            style={styles.settingRow}
            onPress={() => router.push('/screens/SettingsScreen' as any)}
          >
            <Ionicons name="language-outline" size={20} color={colors.textGray} />
            <Text style={styles.settingText}>Язык</Text>
            <Text style={styles.settingValue}>Русский</Text>
            <Ionicons name="chevron-forward" size={18} color={colors.textLight} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.settingRow}>
            <Ionicons name="notifications-outline" size={20} color={colors.textGray} />
            <Text style={styles.settingText}>Уведомления в приложении</Text>
            <View style={styles.switchOn}>
              <View style={styles.switchDot} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.settingRow}>
            <Ionicons name="mail-outline" size={20} color={colors.textGray} />
            <Text style={styles.settingText}>Уведомления по эл. почте</Text>
            <View style={styles.switchOn}>
              <View style={styles.switchDot} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.settingRow, { borderBottomWidth: 0 }]}
            onPress={() => router.push('/screens/SettingsScreen' as any)}
          >
            <Ionicons name="moon-outline" size={20} color={colors.textGray} />
            <Text style={styles.settingText}>Тема оформления</Text>
            <Text style={styles.settingValue}>Светлая</Text>
            <Ionicons name="chevron-forward" size={18} color={colors.textLight} />
          </TouchableOpacity>
        </Card>

        <TouchableOpacity onPress={handleLogout} style={styles.logout}>
          <Ionicons name="log-out-outline" size={20} color={colors.white} />
          <Text style={styles.logoutText}>Выйти</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.md,
    paddingBottom: spacing.md,
  },
  headerTitle: { fontSize: 28, fontWeight: 'bold', color: colors.textDark },
  headerIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
  },
  scroll: { padding: spacing.md, paddingBottom: spacing.xxl },
  userCard: { alignItems: 'center', paddingVertical: spacing.lg },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 12,
    backgroundColor: colors.background,
  },
  name: { fontSize: fontSize.lg, fontWeight: 'bold', color: colors.textDark },
  role: { fontSize: fontSize.sm, color: colors.textGray, marginTop: 4 },
  statsRow: { flexDirection: 'row', gap: 8, marginBottom: spacing.md },
  statCard: { flex: 1, alignItems: 'center', marginBottom: 0 },
  statNum: { fontSize: fontSize.xl, fontWeight: 'bold', color: colors.primary },
  statLabel: { fontSize: fontSize.xs, color: colors.textGray, marginTop: 4 },
  sectionTitle: {
    fontSize: fontSize.md,
    fontWeight: '600',
    color: colors.textDark,
    marginTop: spacing.md,
    marginBottom: spacing.sm,
  },
  awardsRow: { flexDirection: 'row', justifyContent: 'space-between' },
  awardItem: { flex: 1, alignItems: 'center', gap: 6 },
  awardIcon: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
  },
  awardLabel: {
    fontSize: fontSize.xs,
    color: colors.textGray,
    textAlign: 'center',
  },
  settingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    gap: 12,
  },
  settingText: { flex: 1, fontSize: fontSize.sm, color: colors.textDark },
  settingValue: { fontSize: fontSize.sm, color: colors.textGray },
  switchOn: {
    width: 44,
    height: 26,
    borderRadius: 13,
    backgroundColor: colors.primary,
    padding: 3,
    alignItems: 'flex-end',
  },
  switchDot: { width: 20, height: 20, borderRadius: 10, backgroundColor: colors.white },
  logout: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    backgroundColor: colors.error,
    paddingVertical: 14,
    borderRadius: borderRadius.md,
    marginTop: spacing.md,
  },
  logoutText: { color: colors.white, fontWeight: '600', fontSize: fontSize.md },
});