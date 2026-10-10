import Button from '@/components/Button';
import { borderRadius, colors, fontSize, spacing } from '@/theme';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import {
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const categories = [
  { id: 'trash', label: 'Мусор', icon: 'trash-outline' },
  { id: 'roads', label: 'Дороги', icon: 'trail-sign-outline' },
  { id: 'lights', label: 'Освещение', icon: 'bulb-outline' },
  { id: 'stops', label: 'Остановки', icon: 'bus-outline' },
  { id: 'playgrounds', label: 'Площадки', icon: 'happy-outline' },
  { id: 'other', label: 'Другое', icon: 'ellipsis-horizontal' },
];

export default function CreateReportScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const [category, setCategory] = useState<string | null>(null);
  const [description, setDescription] = useState('');

  return (
    <View style={styles.container}>
      <View style={[styles.header, { paddingTop: insets.top + 12 }]}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
          <Ionicons name="arrow-back" size={22} color={colors.textDark} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Новое обращение</Text>
        <View style={styles.backBtn} />
      </View>

      <ScrollView
        contentContainerStyle={styles.scroll}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.label}>Фотография проблемы</Text>
        <TouchableOpacity style={styles.photoBox} activeOpacity={0.7}>
          <View style={styles.photoIconWrap}>
            <Ionicons name="camera" size={28} color={colors.primary} />
          </View>
          <Text style={styles.photoText}>Сделать фото</Text>
          <Text style={styles.photoHint}>
            Фото помогает быстрее решить проблему
          </Text>
        </TouchableOpacity>

        <Text style={styles.label}>Местоположение</Text>
        <View style={styles.locationBox}>
          <Ionicons name="location" size={20} color={colors.primary} />
          <Text style={styles.locationText}>ул. Толе би, 78, Медеуский район</Text>
        </View>

        <Text style={styles.label}>Выберите категорию</Text>
        <View style={styles.categoriesGrid}>
          {categories.map((c) => {
            const active = category === c.id;
            return (
              <TouchableOpacity
                key={c.id}
                style={[styles.catCard, active && styles.catCardActive]}
                onPress={() => setCategory(c.id)}
                activeOpacity={0.8}
              >
                <Ionicons
                  name={c.icon as any}
                  size={22}
                  color={active ? colors.primary : colors.textGray}
                />
                <Text style={[styles.catLabel, active && { color: colors.primary }]}>
                  {c.label}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>

        <Text style={styles.label}>Дополнительные сведения</Text>
        <TextInput
          style={styles.textarea}
          placeholder="Опишите проблему, например: повреждение или поломку"
          placeholderTextColor={colors.textLight}
          multiline
          numberOfLines={4}
          value={description}
          onChangeText={setDescription}
        />

        <Button
          title="Отправить обращение"
          onPress={() => {
            alert('Отправлено!');
            router.back();
          }}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.white },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.md,
    paddingBottom: spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  backBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: fontSize.md,
    fontWeight: '600',
    color: colors.textDark,
  },
  scroll: {
    padding: spacing.md,
    paddingBottom: spacing.xxl,
  },
  label: {
    fontSize: fontSize.sm,
    color: colors.textGray,
    marginBottom: spacing.sm,
    marginTop: spacing.md,
  },
  photoBox: {
    borderWidth: 2,
    borderColor: colors.primary,
    borderStyle: 'dashed',
    borderRadius: borderRadius.lg,
    paddingVertical: spacing.xl,
    alignItems: 'center',
    backgroundColor: colors.primary + '08',
  },
  photoIconWrap: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: colors.primary + '15',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  photoText: {
    fontSize: fontSize.md,
    color: colors.primary,
    fontWeight: '600',
    marginBottom: 4,
  },
  photoHint: {
    fontSize: fontSize.xs,
    color: colors.textGray,
    textAlign: 'center',
  },
  locationBox: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    backgroundColor: colors.background,
    padding: spacing.md,
    borderRadius: borderRadius.md,
  },
  locationText: {
    fontSize: fontSize.sm,
    color: colors.textDark,
    flex: 1,
  },
  categoriesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  catCard: {
    width: '31.5%',
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: borderRadius.md,
    paddingVertical: spacing.md,
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  catCardActive: {
    borderColor: colors.primary,
    backgroundColor: colors.primary + '10',
  },
  catLabel: {
    fontSize: fontSize.xs,
    textAlign: 'center',
    color: colors.textDark,
    marginTop: 6,
    fontWeight: '500',
  },
  textarea: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: borderRadius.md,
    padding: spacing.md,
    fontSize: fontSize.sm,
    minHeight: 100,
    textAlignVertical: 'top',
    color: colors.textDark,
    marginBottom: spacing.md,
  },
});