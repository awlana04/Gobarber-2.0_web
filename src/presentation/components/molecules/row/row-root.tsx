import { BarberDataType, UserDataType } from '@/infra/types/data-type';

import AvatarImage from '@/atoms/avatar-image';

type RowType = {
  isModal?: boolean;
  textblack?: boolean;
  size: 'small' | 'medium' | 'large';
  data: BarberDataType & UserDataType;
  dataType: 'user' | 'barber';
  date?: number;
  hour?: number;
};

type RowRootType<T extends RowType> = T & {
  Render?: React.ComponentType<RowType>;
};

export default function RowRoot({ Render, ...props }: RowRootType<RowType>) {
  return (
    <div
      data-size={props.size}
      data-textblack={props.textblack}
      className='bg-button-text group data-[textblack=true]:bg-orange flex cursor-pointer flex-row rounded-2xl data-[size=large]:w-3xl data-[size=large]:hover:bg-black data-[size=medium]:w-3xl data-[size=medium]:hover:bg-black'
    >
      {props.size !== 'small' && (
        <div
          data-size={props.size}
          className='bg-orange visible h-16 w-1 self-center rounded-tr-2xl rounded-br-2xl data-[size=medium]:invisible data-[size=medium]:group-hover:visible data-[size=small]:invisible'
        />
      )}

      <div className='flex w-3xl flex-row place-content-between items-center justify-between'>
        <div
          data-size={props.size}
          className='flex flex-row items-center space-x-4 p-4 py-6 data-[size=small]:p-0 data-[size=small]:py-4'
        >
          {props.isModal === true || props.size === 'medium' ? (
            <AvatarImage
              src={props.data.user ? props.data.user.avatar : props.data.avatar}
              size='small'
            />
          ) : (
            <AvatarImage
              src={props.data.user ? props.data.user.avatar : props.data.avatar}
              size={props.size ? 'small' : 'large'}
            />
          )}

          <h5
            data-modal={props.isModal}
            data-textblack={props.textblack}
            data-size={props.size}
            className='data-[textblack=true]:text-background truncate data-[modal=true]:left-32 data-[modal=true]:w-96 data-[size=big]:font-semibold data-[size=large]:text-xl data-[size=small]:absolute data-[size=small]:left-28 data-[size=small]:w-44'
          >
            {props.data.user ? props.data.user.name : props.data.name}
          </h5>
        </div>

        {Render && <Render {...props} />}
      </div>
    </div>
  );
}
