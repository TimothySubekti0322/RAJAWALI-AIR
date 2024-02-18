import {useNavigate} from "react-router-dom";

export const NavigatePage = (linkUrl: string) => {
    const navigate = useNavigate();
    navigate(linkUrl)
}