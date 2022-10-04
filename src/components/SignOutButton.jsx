import { TouchableOpacity } from "react-native";

import { useDispatch } from "react-redux";
import { signOut } from "../store/slices/authSlice";

import SignOutIcon from "./icons/SignOutIcon";

export default function SignOutButton() {
    const dispatch = useDispatch();

    return (
        <TouchableOpacity onPress={() => dispatch(signOut())}>
            <SignOutIcon />
        </TouchableOpacity>
    );
}
