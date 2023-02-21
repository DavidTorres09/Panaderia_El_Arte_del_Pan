import { useState } from "react";
import { SideBarCard, SideBarItem } from "./Types/types"
import { classNames } from "../../assets/Util/classes";
import { VscMenu } from "react-icons/vsc"
import SideBarItemView from "./SideBarItemView";
import SideBarCardView from "./SideBarCardView";
import "./SideBarMenu.scss";


interface SideBarMenu {
    items: SideBarItem[];
    card: SideBarCard;
}
export function SideBarMenu({ items, card }: SideBarMenu) {
    const [isOpen, setIsOPen] = useState<boolean>(true);

    function handleClick() {
        setIsOPen(!isOpen)
    }
    return <div className={classNames('SideBar', isOpen ? "expanded" : "collapsed")}>
        <div className="menuButton">
            <button className="NavIcon" onClick={handleClick}>
                <VscMenu></VscMenu>
            </button>
        </div>
        <SideBarCardView card={card} isOpen={isOpen} />
        {
            items.map(item => (
                <SideBarItemView key={item.id} item={item} isOpen={isOpen} />
            ))}
    </div>
}
export default SideBarMenu