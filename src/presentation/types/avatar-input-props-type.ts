import { ImagePropsType } from './image-props-type';

export type AvatarInputPropsType = React.InputHTMLAttributes<HTMLImageElement> &
  ImagePropsType & {
    handleRemove(): void;
  };
