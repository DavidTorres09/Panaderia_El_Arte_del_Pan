import { SideBarCard } from "../SideBar/Types/types"
import { classNames } from "../../assets/Util/classes"
import "./SideBarCardView.scss"

interface SideBarCardViewProps {
    card: SideBarCard;
    isOpen: boolean;
}

export default function SideBarCardView({
    card,
    isOpen,
}: SideBarCardViewProps) {
    return (
        <div className="SideBarCardView">
            <img className="profile" src={card.photoUrl} width="100%" />
            <div className={classNames('profileInfo', isOpen ? '' : 'collapsed')}>
                <div className="name">{card.displayName}</div>
                <div className="title">{card.title}</div>
            </div>
        </div>
    );
}