import { PersonalInfoProvider } from './context/PersonalInfoProvider';
import { ExperienceProvider } from './context/ExperienceProvider';
import { QualificationProvider } from './context/QualificationProvider';

import './styles/styles.css';

import AppHeader from './components/AppHeader';
import Tabs from './components/Tabs';
import CVPreview from './components/CVPreview';

function App() {
  return (
    <main className="main-container">
      <AppHeader />

      <div className="cv-container">
        <PersonalInfoProvider>
          <ExperienceProvider>
            <QualificationProvider>
              <Tabs />
              <CVPreview />
            </QualificationProvider>
          </ExperienceProvider>
        </PersonalInfoProvider>
      </div>
    </main>
  );
}

export default App;
