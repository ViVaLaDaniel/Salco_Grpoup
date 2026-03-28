/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import About from './pages/About';
import Makler from './pages/Makler';
import Ankaufsprofil from './pages/Ankaufsprofil';
import Contact from './pages/Contact';
import Jobs from './pages/Jobs';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="projekte" element={<Projects />} />
          <Route path="projekte/:slug" element={<ProjectDetail />} />
          <Route path="unternehmen" element={<About />} />
          <Route path="makler" element={<Makler />} />
          <Route path="ankaufsprofil" element={<Ankaufsprofil />} />
          <Route path="kontakt" element={<Contact />} />
          <Route path="jobs" element={<Jobs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
