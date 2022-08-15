import { useContext } from "react";
import { Context } from "..";

export function useStore() {
    return useContext(Context);
}