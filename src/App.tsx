import './styles/theme.css';
import './styles/global.css';
import { TaskContextProvider } from './contexts/TaskContext/TaskContextProvider';
import { MessagesContainer } from './components/MessagesContainer';
import { Routers } from './Routers';

export function App() {
  return (
    <TaskContextProvider>
      <MessagesContainer>
        <Routers></Routers>
      </MessagesContainer>
    </TaskContextProvider>
  );
}
