import '@/styles/globals.css';

import Modal from '../components/Modal';
import SidebarOne from '@/components/SidebarOne';
export default function App({ Component, pageProps }) {
  return (
    <>
      <div className="flex flex-col md:flex-row">
        <aside className="fixed flex flex-col w-64 h-screen px-5 py-8 overflow-y-auto bg-white border-r">
          <SidebarOne />
        </aside>
        <main className="w-full h-auto p-4 ml-64 bg-white">
          <Component {...pageProps} />
        </main>
      </div>
      <Modal />
    </>
  );
}
