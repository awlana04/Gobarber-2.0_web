import { RowPropsType } from '@/presentation/types/row-props-type';

import AvatarImage from '@/atoms/avatar-image';

type RowRootType<T extends RowPropsType> = T & {
  Render?: React.ComponentType<T>;
};

export default function RowRoot({
  Render,
  ...props
}: RowRootType<RowPropsType>) {
  return (
    <div
      data-size={props.size}
      data-textblack={props.textblack}
      className='bg-button-text group data-[textblack=true]:bg-orange flex cursor-pointer flex-row rounded-2xl data-[size=extra-large]:w-3xl data-[size=extra-large]:hover:bg-black data-[size=large]:w-3xl data-[size=large]:hover:bg-black data-[size=medium]:h-24 data-[size=medium]:w-[612] data-[size=medium]:hover:bg-black'
    >
      {props.size !== 'small' && (
        <div
          data-size={props.size}
          className='bg-orange visible h-16 w-1 self-center rounded-tr-2xl rounded-br-2xl data-[size=extra-large]:h-20 data-[size=large]:invisible data-[size=large]:group-hover:visible data-[size=medium]:invisible data-[size=medium]:h-14 data-[size=medium]:group-hover:visible data-[size=small]:invisible'
        />
      )}

      <div className='flex w-3xl flex-row place-content-between items-center justify-between'>
        <div
          data-size={props.size}
          data-notlarge={props.size !== 'extra-large'}
          className='flex flex-row items-center space-x-4 p-4 data-[notlarge=true]:py-6 data-[size=small]:p-0 data-[size=small]:py-4'
        >
          {props.isModal === true ||
          props.size === 'medium' ||
          props.size === 'large' ? (
            <AvatarImage
              src={props.data.user ? props.data.user.avatar : props.data.avatar}
              size='small'
            />
          ) : (
            <AvatarImage
              src={props.data.user ? props.data.user.avatar : props.data.avatar}
              size={
                (props.size === 'small' && 'small') ||
                (props.size === 'extra-large' && 'medium')
              }
            />
          )}

          <h5
            data-modal={props.isModal}
            data-textblack={props.textblack}
            data-size={props.size}
            className='data-[textblack=true]:text-background truncate data-[modal=true]:left-32 data-[modal=true]:w-96 data-[size=extra-large]:text-xl data-[size=extra-large]:font-semibold data-[size=small]:absolute data-[size=small]:left-28 data-[size=small]:w-44'
          >
            {props.data.user ? props.data.user.name : props.data.name}
          </h5>
        </div>

        {Render && <Render {...props} />}
      </div>
    </div>
  );
}
