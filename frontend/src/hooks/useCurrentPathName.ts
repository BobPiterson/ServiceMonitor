import {Location, useLocation} from "react-router-dom"

export const useCurrentPathName = (): string => {
    const {pathname} = useLocation() as Location
    return pathname
}