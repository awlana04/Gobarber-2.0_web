import { ChangeEvent, InputHTMLAttributes } from 'react';

export type ImagesType = InputHTMLAttributes<HTMLImageElement> & {
  file: string | any;
  fileUrl: string | any;
  setFile: (file: any) => void;
  setFileUrl: (file: any) => void;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
};
