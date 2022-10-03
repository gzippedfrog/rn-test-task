import { TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import SignOutIcon from "./icons/SignOutIcon";
import { signOut } from "../store/slices/authSlice";

export default function SignOutButton() {
    const dispatch = useDispatch();

    return (
        <TouchableOpacity onPress={() => dispatch(signOut())}>
            <SignOutIcon />
        </TouchableOpacity>
    );
}
