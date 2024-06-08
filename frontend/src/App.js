import 'bootstrap/dist/css/bootstrap.min.css';
import JobSeeker from './JobSeekeer/JobSeeker';
import RequireterSection from './RequirterSection/RequireterSection';
// import { Container } from 'react-bootstrap';
import VtHeader from './HireHeaderFooter/VtHeader';
import HireFooter from './HireHeaderFooter/HireFooter';
// import HomeSection from './HomeSection/HomeSection';
function App() {
  return (<>
  <VtHeader/>  
    <JobSeeker/>
    <RequireterSection/>
    <HireFooter/>
  </>
  );
}

export default App;
