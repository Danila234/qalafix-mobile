import StatusBadge from '@/components/StatusBadge';
import { mockReports } from '@/services/api';
import { borderRadius, colors, fontSize, spacing } from '@/theme';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const reportImages: Record<string, any> = {
  trash: require('../../../assets/images/trash.png'),
  lights: require('../../../assets/images/light.png'),
  roads: require('../../../assets/images/pit.png'),
  stops: require('../../../assets/images/stop.png'),
};

export default function HomeScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const [selected, setSelected] = useState<any>(null);

  return (
    <View style={styles.container}>
      <View style={styles.mapWrap}>
        <Image
          source={require('../../../assets/images/map.jpg')}
          style={styles.mapImage}
          resizeMode="cover"
        />

        <TouchableOpacity
          style={[styles.pin, { top: 80, left: 120, backgroundColor: colors.error }]}
          onPress={() => setSelected(mockReports[0])}
        >
          <Ionicons name="location" size={18} color={colors.white} />
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.pin, { top: 150, left: 210, backgroundColor: colors.warning }]}
          onPress={() => setSelected(mockReports[1])}
        >
          <Ionicons name="location" size={18} color={colors.white} />
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.pin, { top: 230, left: 90, backgroundColor: colors.success }]}
          onPress={() => setSelected(mockReports[2])}
        >
          <Ionicons name="location" size={18} color={colors.white} />
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.pin, { top: 190, left: 250, backgroundColor: colors.success }]}
          onPress={() => setSelected(mockReports[3])}
        >
          <Ionicons name="location" size={18} color={colors.white} />
        </TouchableOpacity>
      </View>

      <View style={[styles.topBar, { top: insets.top + 12 }]}>
        <View style={styles.logoRow}>
          <View style={styles.logoIcon}>
            <Ionicons name="location" size={16} color={colors.white} />
          </View>
          <Text style={styles.logo}>QalaFix</Text>
        </View>
        <View style={styles.topIcons}>
          <TouchableOpacity
            style={styles.iconBtn}
            onPress={() => router.push('/(tabs)/notifications' as any)}
          >
            <Ionicons name="notifications-outline" size={20} color={colors.textDark} />
            <View style={styles.badge} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.iconBtn}
            onPress={() => router.push('/(tabs)/profile' as any)}
          >
            <Image source={require('../../../assets/images/cat.jpg')} style={styles.avatar} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={[styles.filters, { top: insets.top + 72 }]}>
        <TouchableOpacity style={styles.filterChipActive}>
          <Ionicons name="grid-outline" size={14} color={colors.white} />
          <Text style={styles.filterChipActiveText}>Категория</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterChip}>
          <Text style={styles.filterChipText}>Статус</Text>
          <Ionicons name="chevron-down" size={12} color={colors.textDark} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterChip}>
          <Text style={styles.filterChipText}>Радиус (500 м)</Text>
          <Ionicons name="chevron-down" size={12} color={colors.textDark} />
        </TouchableOpacity>
      </View>

      {selected && (
        <View style={[styles.card, { bottom: 110 + insets.bottom }]}>
          <View style={styles.cardRow}>
            <Image source={reportImages[selected.category]} style={styles.cardImage} />
            <View style={styles.cardBody}>
              <View style={styles.cardHeader}>
                <Text style={styles.cardTitle} numberOfLines={1}>
                  {selected.title}
                </Text>
                <StatusBadge status={selected.status as any} />
              </View>
              <Text style={styles.cardAddress}>📍 {selected.address}</Text>
              <View style={styles.cardFooter}>
                <Text style={styles.cardDate}>{selected.date}</Text>
                <TouchableOpacity
                  onPress={() =>
                    router.push(`/screens/ReportDetailScreen?id=${selected.id}` as any)
                  }
                >
                  <Text style={styles.cardLink}>Подробнее ›</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      )}

      <TouchableOpacity
        style={[styles.reportBtn, { bottom: 16 + insets.bottom }]}
        onPress={() => router.push('/screens/CreateReportScreen' as any)}
      >
        <Ionicons name="camera" size={20} color={colors.white} />
        <Text style={styles.reportBtnText}>Сообщить о проблеме</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  mapWrap: {
    marginTop: 180,
    height: '45%',
    overflow: 'hidden',
    backgroundColor: '#E8EEF5',
    borderRadius: 16,
    marginHorizontal: 16,
  },
  mapImage: { width: '100%', height: '100%' },
  pin: {
    position: 'absolute',
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    borderColor: colors.white,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
  },
  topBar: {
    position: 'absolute',
    left: spacing.md,
    right: spacing.md,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.white,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: borderRadius.lg,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 4,
  },
  logoRow: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  logoIcon: {
    width: 28,
    height: 28,
    borderRadius: 8,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: { fontSize: fontSize.lg, fontWeight: 'bold', color: colors.primary },
  topIcons: { flexDirection: 'row', gap: 8 },
  iconBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.background,
    position: 'relative',
  },
  badge: {
    position: 'absolute',
    top: 8,
    right: 8,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.error,
  },
  avatar: { width: 32, height: 32, borderRadius: 16 },
  filters: {
    position: 'absolute',
    left: spacing.md,
    right: spacing.md,
    flexDirection: 'row',
    gap: 8,
  },
  filterChipActive: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: colors.primary,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
  },
  filterChipActiveText: { color: colors.white, fontSize: fontSize.xs, fontWeight: '600' },
  filterChip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: colors.white,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  filterChipText: { color: colors.textDark, fontSize: fontSize.xs, fontWeight: '500' },
  card: {
    position: 'absolute',
    left: spacing.md,
    right: spacing.md,
    backgroundColor: colors.white,
    borderRadius: borderRadius.lg,
    padding: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 12,
    elevation: 6,
  },
  cardRow: { flexDirection: 'row', gap: 12 },
  cardImage: { width: 64, height: 64, borderRadius: 12, backgroundColor: colors.background },
  cardBody: { flex: 1 },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 8,
    marginBottom: 4,
  },
  cardTitle: { fontSize: fontSize.sm, fontWeight: '600', flex: 1, color: colors.textDark },
  cardAddress: { fontSize: fontSize.xs, color: colors.textGray, marginBottom: 6 },
  cardFooter: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  cardDate: { fontSize: fontSize.xs, color: colors.textLight },
  cardLink: { fontSize: fontSize.xs, color: colors.primary, fontWeight: '600' },
  reportBtn: {
    position: 'absolute',
    left: spacing.md,
    right: spacing.md,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    backgroundColor: colors.secondary,
    paddingVertical: 16,
    borderRadius: borderRadius.md,
    shadowColor: colors.secondary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
  reportBtnText: { color: colors.white, fontWeight: 'bold', fontSize: fontSize.md },
});