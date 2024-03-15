import React, { createContext } from 'react';
import Context from './components/Context';
import SecondComponent, {Category} from './components/SecondComponent';
import State from './components/State';
type textOrNull = string | null;

interface IAppContext{
  language: string;
  framework: string;
  projects: number
}
export const AppContext = createContext<IAppContext | null>(null)

function App() {
  const world: string = 'World';
  const isWorking: boolean = true;

  const userGreeting = (name: string): string => {
    return `Hi ${name}`;
  }

  const myText: textOrNull = "";
  let mySecondText: textOrNull = null;

  const contextValue: IAppContext = {
    language: 'JavaScript',
    framework: 'Express',
    projects: 5
  }
  return (
    <AppContext.Provider value={contextValue}>
      <div>
        <h1>Hello {world}!!!</h1>
        <p>
          {
            isWorking &&
            <p>Is Working!</p>
          }
        </p>
        <h3>
          {
            userGreeting('Asuna')
          }
        </h3>
        
        <SecondComponent title='Title Post' content='Lorem ipsum dollor amet...' commentsQty={5} tags={['TS', 'JS', 'HTML']} category={Category.React}/>
        
        <State />

        {myText && <p>Tem texto na variável</p>}
        {mySecondText && <p>Não tem texto na segunda variável</p>}
        <Context/>
      </div>
    </AppContext.Provider>
  );
}

export default App;
