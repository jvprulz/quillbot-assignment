import './App.css';
import Header from "./components/Header";
import TopSection from "./components/TopSection";
import UpLevelSection from "./components/UpLevelSection";
import GetJobDoneSection from "./components/GetJobDoneSection";
import ReportSection  from "./components/ReportSection";
import UpgradeSection from "./components/UpgradeSection";
import Footer from "./components/Footer";
import CssBaseline from '@mui/material/CssBaseline';

const App = () => {
    return (
        <div className="App">
            <CssBaseline />
            <Header />
            <TopSection />
            <UpLevelSection />
            <GetJobDoneSection />
            <ReportSection />
            <UpgradeSection />
            <Footer />
        </div>
    );
}

export default App;
