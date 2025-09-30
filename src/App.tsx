import { AppRouter } from './pages/AppRouter';
import { useInitializeBlogData } from './utils';

function App() {
  useInitializeBlogData();

  return <AppRouter />;
}

export default App;
