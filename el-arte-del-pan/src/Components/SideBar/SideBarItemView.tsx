import { SideBarItem } from "../SideBar/Types/types"
import { classNames } from "../../assets/Util/classes"
import "./SideBarItemView.scss"

interface SideBarItemViewProps {
    item: SideBarItem,
    isOpen: boolean;
}

export default function SideBarItemView({
    item,
    isOpen,
}: SideBarItemViewProps) {
    return (
        <div className="SideBarItemView">
            <a href={item.url}>
                <div className={classNames("ItemContent", isOpen ? "" : "collapsed")}>
                    <div className="icon">
                        <item.icon size="33" />
                    </div>
                    <span className="label">{item.label}</span>
                </div>
            </a>
            {!isOpen ? <div className="tooltip">{item.label}</div> : ""}
        </div>
    )
}