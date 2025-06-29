import { useToastContext } from '@/contexts/use-toast-context';

export default function useAddToast() {
  const { addToast } = useToastContext();

  return addToast;
}
