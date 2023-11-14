import { ReactNode } from 'react';
import { InfinitySpin } from 'react-loader-spinner';

import { useAppSelector } from '../../hooks';
import { selectDataLoading } from '../../store/offers/offers-selector';

type TLoadingProps = {
  children: ReactNode;
}

function Loading({children}: TLoadingProps): ReactNode {
  const isDataLoading = useAppSelector(selectDataLoading);

  if (isDataLoading) {
    return (
      <div style={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
      >
        <InfinitySpin width='200' color='#4481c3' />
      </div>
    );
  }

  return children;
}

export default Loading;
