import StatusBadge from '@/components/StatusBadge';
import { mockReports } from '@/services/api';
import { borderRadius, colors, fontSize, spacing } from '@/theme';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const reportImages: Record<string, any> = {
  trash: require('../../../assets/images/trash.png'),
  lights: require('../../../assets/images/light.png'),
  roads: require('../../../assets/images/pit.png'),
  stops: require('../../../assets/images/stop.png'),
};

export default function MyReportsScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.container}>
      <View style={[styles.header, { paddingTop: insets.top + 12 }]}>
        <Text style={styles.title}>Мои обращения</Text>
        <TouchableOpacity style={styles.headerIcon}>
          <Ionicons name="notifications-outline" size={22} color={colors.textDark} />
        </TouchableOpacity>
      </View>

      <FlatList
        data={mockReports}
        keyExtractor={(i) => i.id.toString()}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() =>
              router.push(`/screens/ReportDetailScreen?id=${item.id}` as any)
            }
          >
            <View style={styles.card}>
              <Image
                source={reportImages[item.category as string]}
                style={styles.cardImage}
              />
              <View style={styles.cardContent}>
                <View style={styles.cardTop}>
                  <Text style={styles.cardTitle} numberOfLines={2}>
                    {item.title}
                  </Text>
                  <StatusBadge status={item.status as any} />
                </View>
                <Text style={styles.cardAddress}>{item.address}</Text>
                <Text style={styles.cardDate}>{item.date}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
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
    backgroundColor: colors.white,
    borderRadius: borderRadius.lg,
    marginBottom: spacing.sm + 4,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  cardImage: {
    width: 88,
    height: '100%',
    minHeight: 88,
    backgroundColor: colors.background,
  },
  cardContent: { flex: 1, padding: spacing.md },
  cardTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 6,
    gap: 8,
  },
  cardTitle: {
    flex: 1,
    fontSize: fontSize.md,
    fontWeight: '600',
    color: colors.textDark,
    lineHeight: 20,
  },
  cardAddress: { fontSize: fontSize.sm, color: colors.textGray, marginBottom: 4 },
  cardDate: { fontSize: fontSize.xs, color: colors.textLight },
});