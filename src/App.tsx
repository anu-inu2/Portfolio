import { useTheme } from './hooks/useTheme';
import Background from './components/Background';
import Navbar from './components/Navbar';
import CustomCursor from './components/CustomCursor';
import Home from './components/Home';
import WorkArchive from './components/WorkArchive';
import BuildsDirectory from './components/BuildsDirectory';
import BlogLogs from './components/BlogLogs';
import DevActivity from './components/DevActivity';
import NowPlaying from './components/NowPlaying';

export default function App() {
  const { theme, toggle } = useTheme();

  return (
    <div className="relative min-h-screen bg-[#0B0F14]">
      <Background />
      <CustomCursor />

      <div className="relative z-10">
        <Navbar theme={theme} toggleTheme={toggle} />

        <main>
          <Home />
          <WorkArchive />
          <BuildsDirectory />
          <BlogLogs />
          <DevActivity />
          <NowPlaying />
        </main>
      </div>
    </div>
  );
}