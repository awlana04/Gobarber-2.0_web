import Description from '../entities/modules/description';
import Name from '../entities/modules/name';
import Prop from '../entities/modules/prop';

export type BarberType = {
  name: string;
  location: string;
  description: string;
  images?: string[];
  openAtNight: boolean;
  openOnWeekends: boolean;
  userId: string;
};
