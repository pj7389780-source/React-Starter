import { Outlet } from 'react-router'
import Navbar from '../../Shared/ui/Components/Navbar'

const MainLayout = () => {
  return (
    <div className="w-full border-b border-gray-800 bg-gray-950 px-4 py-6 sm:px-6">
      <Navbar  />
      <div className="px-2 py-7">
        <Outlet />
      </div>
    </div>
  );
}

export default MainLayout
