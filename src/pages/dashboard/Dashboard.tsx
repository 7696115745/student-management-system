import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
 
export default function Dashboard() {
  return (<>
    <div className="flex">
      <Sidebar />
         <Navbar />
     </div>
         </>
  );
}
