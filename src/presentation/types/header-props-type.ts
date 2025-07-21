import { UserDataType } from '@/infra/types/data-type';
import AvailableLanguagesType from '@/shared/types/available-languages-type';

export type HeaderPropsType = {
  user: UserDataType;
  logoutOnclick(): void;
  setLanguage?(
    language: AvailableLanguagesType
  ): React.MouseEventHandler<HTMLUListElement> | undefined;
};
