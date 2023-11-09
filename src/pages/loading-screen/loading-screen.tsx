import { InfinitySpin } from 'react-loader-spinner';

function LoadingScreen(): JSX.Element {
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

export default LoadingScreen;
