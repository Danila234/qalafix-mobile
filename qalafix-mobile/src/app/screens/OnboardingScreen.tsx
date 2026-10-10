import { borderRadius, colors, fontSize, spacing } from '@/theme';
import { useRouter } from 'expo-router';
import { useRef, useState } from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const { width } = Dimensions.get('window');

const slides = [
  {
    id: '1',
    title: 'Заметили проблему в городе?',
    description:
      'Сообщайте о ямах, сломанных скамейках, мусоре и неработающем освещении прямо с телефона.',
    image: require('../../../assets/images/img1.png'),
  },
  {
    id: '2',
    title: 'Сообщите за 15 секунд',
    description:
      'Сделайте фото, выберите категорию и отправьте. Местоположение добавится автоматически.',
    image: require('../../../assets/images/img2.png'),
  },
  {
    id: '3',
    title: 'Следите до полного решения',
    description:
      'Получайте уведомления о статусе обращения. Зарабатывайте баллы и помогайте делать район чище.',
    image: require('../../../assets/images/img3.png'),
  },
];

export default function OnboardingScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);

  const handleNext = () => {
    if (currentIndex < slides.length - 1) {
      flatListRef.current?.scrollToIndex({ index: currentIndex + 1 });
      setCurrentIndex(currentIndex + 1);
    } else {
      router.replace('/screens/LoginScreen' as any);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.skipButton, { top: insets.top + 12 }]}
        onPress={() => router.replace('/screens/LoginScreen' as any)}
      >
        <Text style={styles.skipText}>Пропустить</Text>
      </TouchableOpacity>

      <FlatList
        ref={flatListRef}
        data={slides}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        onMomentumScrollEnd={(e) => {
          const index = Math.round(e.nativeEvent.contentOffset.x / width);
          setCurrentIndex(index);
        }}
        renderItem={({ item }) => (
          <View style={styles.slide}>
            <Image source={item.image} style={styles.image} resizeMode="cover" />
            <View style={styles.textWrap}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.description}>{item.description}</Text>
            </View>
          </View>
        )}
      />

      <View style={[styles.bottom, { paddingBottom: insets.bottom + 16 }]}>
        <View style={styles.dotsContainer}>
          {slides.map((_, index) => (
            <View
              key={index}
              style={[styles.dot, index === currentIndex && styles.activeDot]}
            />
          ))}
        </View>

        <TouchableOpacity style={styles.button} onPress={handleNext} activeOpacity={0.85}>
          <Text style={styles.buttonText}>
            {currentIndex === slides.length - 1 ? 'Начать' : 'Далее'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.white },
  skipButton: {
    position: 'absolute',
    right: spacing.lg,
    zIndex: 10,
    padding: 8,
  },
  skipText: { fontSize: fontSize.md, color: colors.textGray },
  slide: {
    width,
    alignItems: 'center',
    paddingTop: 100,
  },
  image: {
    width: width,
    height: 300,
    marginBottom: 32,
  },
  textWrap: {
    paddingHorizontal: 32,
    alignItems: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: colors.textDark,
    textAlign: 'center',
    marginBottom: 14,
    lineHeight: 32,
  },
  description: {
    fontSize: fontSize.md,
    color: colors.textGray,
    textAlign: 'center',
    lineHeight: 24,
  },
  bottom: {
    paddingHorizontal: spacing.lg,
  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.border,
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: colors.primary,
    width: 24,
  },
  button: {
    backgroundColor: colors.primary,
    paddingVertical: 16,
    borderRadius: borderRadius.md,
    alignItems: 'center',
  },
  buttonText: {
    color: colors.white,
    fontSize: fontSize.md,
    fontWeight: 'bold',
  },
});