import { TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import LogoutIcon from "../icons/LogoutIcon";
import { signOut } from "../store/slices/authSlice";

export default function LogoutButton() {
    const dispatch = useDispatch();

    return (
        <TouchableOpacity onPress={() => dispatch(signOut())}>
            <LogoutIcon />
        </TouchableOpacity>
    );
}
