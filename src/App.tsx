import Routes from './routes';
import ContextProvider from './context';
import Theme from './context/theme';

const App: React.FC = () => {
  return (
    <ContextProvider>
      <Theme>
        <Routes />
      </Theme>
    </ContextProvider>
  );
};

export default App;
