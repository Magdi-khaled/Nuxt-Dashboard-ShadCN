export default function useHelper() {
  const loading = ref(false);
  const open = ref(false);
  return {
    open,
    loading,
  };
}
