import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './hooks/useAuth';
import MainLayout from './components/layout/MainLayout';
import PortalLayout from './components/portal/PortalLayout';
import ScrollToTop from './components/common/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Attorneys from './pages/Attorneys';
import AttorneyProfile from './pages/AttorneyProfile';
import PracticeAreas from './pages/PracticeAreas';
import PracticeAreaDetail from './pages/PracticeAreaDetail';
import CaseResults from './pages/CaseResults';
import HowItWorks from './pages/HowItWorks';
import Resources from './pages/Resources';
import ResourceDetail from './pages/ResourceDetail';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import PortalLogin from './pages/portal/PortalLogin';
import PortalDashboard from './pages/portal/PortalDashboard';
import PortalProgress from './pages/portal/PortalProgress';
import PortalDocuments from './pages/portal/PortalDocuments';
import PortalAppointments from './pages/portal/PortalAppointments';
import PortalMessages from './pages/portal/PortalMessages';
import PortalTasks from './pages/portal/PortalTasks';
import { BASE_PATH } from './utils/helpers';

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter basename={BASE_PATH}>
        <ScrollToTop />
        <Routes>
          <Route element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="attorneys" element={<Attorneys />} />
            <Route path="attorneys/:slug" element={<AttorneyProfile />} />
            <Route path="practice-areas" element={<PracticeAreas />} />
            <Route path="practice-areas/:slug" element={<PracticeAreaDetail />} />
            <Route path="case-results" element={<CaseResults />} />
            <Route path="how-it-works" element={<HowItWorks />} />
            <Route path="resources" element={<Resources />} />
            <Route path="resources/:slug" element={<ResourceDetail />} />
            <Route path="faq" element={<FAQ />} />
            <Route path="contact" element={<Contact />} />
          </Route>

          <Route path="client-portal/login" element={<PortalLogin />} />
          <Route path="client-portal" element={<PortalLayout />}>
            <Route index element={<PortalDashboard />} />
            <Route path="progress" element={<PortalProgress />} />
            <Route path="documents" element={<PortalDocuments />} />
            <Route path="appointments" element={<PortalAppointments />} />
            <Route path="messages" element={<PortalMessages />} />
            <Route path="tasks" element={<PortalTasks />} />
          </Route>

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
