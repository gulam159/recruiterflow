import { FC } from 'react';
import { LoadingIcon } from './LoadingIcon';

export const Loader: FC = () => (
  <div className="h-screen w-full flex flex-col items-center justify-center">
  <LoadingIcon />
  <p className="text-center text-base">
    Products are loading. Please wait...
  </p>
</div>
);
