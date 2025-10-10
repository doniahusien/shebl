
export const useDir = () => {
  const { locale } = useI18n()
  const isDir = computed(() => (locale.value == 'ar' ? 'rtl' : 'ltr'))
  return { isDir }
}
