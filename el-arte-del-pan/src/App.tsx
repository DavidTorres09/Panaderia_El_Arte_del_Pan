import React from 'react'; 
import { icons } from 'react-icons/lib'
import "./App.css"
import { SideBarCard, SideBarItem } from './Components/SideBar/Types/types'
import { FcHome, FcInfo, FcMultipleDevices, FcGraduationCap, FcIdea} from 'react-icons/fc'
import  SideBarMenu  from './Components/SideBar/SideBarMenu';



const App = () => {

  const items:SideBarItem[] = [
    {
      id:'1',
      label: 'Home',
      icon: FcHome,
      url: "#home",
    },
    {
      id:'2',
      label: 'About',
      icon: FcInfo,
      url: "#about",
    },
    {
      id:'3',
      label: 'Skills',
      icon: FcIdea,
      url: "#skills",
    },
    {
      id:'4',
      label: 'Services',
      icon: FcMultipleDevices,
      url: "#services",
    },{
      id:'5',
      label: 'Qualification',
      icon: FcGraduationCap,
      url: "#qualifications",
    },
  ];

  const card: SideBarCard = {
    id: "card01",
    displayName: "",
    title: "",
    photoUrl: "",
    Url: "/"
  };
  return (
    <div> 
      <h3>Hola</h3>
      <SideBarMenu/>
    </div>
  );
}

export default App;
