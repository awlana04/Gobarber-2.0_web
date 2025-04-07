import { ImagePropsType } from './image-props-type';

export type FormImagesInputProps = React.InputHTMLAttributes<HTMLImageElement> &
  ImagePropsType & {
    setFile: (file: any) => void;
    setFileUrl: (file: any) => void;
  };
