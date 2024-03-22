import DashboardHeaderOne from '@/layouts/headers/dashboard/DashboardHeaderOne';
import AddPropertyBody from './AddPropertyBody';
import AddPropertyProvider from 'src/context/AddPropertyProvider/AddPropertyProvider';

const DashboardAddProperty = () => {
  return (
    <>
      <AddPropertyProvider>
        <AddPropertyBody />
      </AddPropertyProvider>
    </>
  );
};

export default DashboardAddProperty;
