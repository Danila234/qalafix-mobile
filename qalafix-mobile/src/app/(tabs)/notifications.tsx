import { mockNotifications } from '@/services/api';
import { borderRadius, colors, fontSize, spacing } from '@/theme';
import { Ionicons } from '@expo/vector-icons';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const typeConfig = {
  success: { icon: 'checkmark-circle', color: colors.success },
  info: { icon: 'information-circle', color: colors.primary },
  warning: { icon: 'time', color: colors.warning },
  error: { icon: 'alert-circle', color: colors.error },
};

export default function NotificationsScreen() {
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.container}>
      <View style={[styles.header, { paddingTop: insets.top + 12 }]}>
        <Text style={styles.title}>Уведомления</Text>
        <TouchableOpacity style={styles.headerIcon}>
          <Ionicons name="checkmark-done-outline" size={22} color={colors.textDark} />
        </TouchableOpacity>
      </View>

      <FlatList
        data={mockNotifications}
        keyExtractor={(i) => i.id.toString()}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          const cfg = typeConfig[item.type as keyof typeof typeConfig];
          return (
            <TouchableOpacity activeOpacity={0.8} style={styles.card}>
              <View style={[styles.iconWrap, { backgroundColor: cfg.color + '15' }]}>
                <Ionicons name={cfg.icon as any} size={22} color={cfg.color} />
              </View>
              <View style={styles.cardBody}>
                <Text style={styles.cardText}>{item.title}</Text>
                <Text style={styles.cardDate}>{item.date}</Text>
              </View>
            </TouchableOpacity>
          );
        }}
        ListEmptyComponent={
          <View style={styles.empty}>
            <Ionicons name="notifications-off-outline" size={48} color={colors.textLight} />
            <Text style={styles.emptyText}>Пока уведомлений нет</Text>
          </View>
        }
      />
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
  title: { fontSize: 28, fontWeight: 'bold', color: colors.textDark },
  headerIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
  },
  list: { paddingHorizontal: spacing.md, paddingBottom: spacing.xl },
  card: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,
    backgroundColor: colors.white,
    borderRadius: borderRadius.lg,
    padding: spacing.md,
    marginBottom: spacing.sm + 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  iconWrap: {
    width: 42,
    height: 42,
    borderRadius: 21,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardBody: { flex: 1, paddingTop: 2 },
  cardText: {
    fontSize: fontSize.sm,
    color: colors.textDark,
    fontWeight: '500',
    lineHeight: 20,
    marginBottom: 4,
  },
  cardDate: { fontSize: fontSize.xs, color: colors.textLight },
  empty: {
    alignItems: 'center',
    paddingVertical: spacing.xxl,
    gap: 12,
  },
  emptyText: { fontSize: fontSize.sm, color: colors.textGray },
});