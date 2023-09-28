import Committee from "@/components/committeePage/Committees"
import {cheifPatron} from '@/components/committeePage/data'
export default function Committees() {
    return (
        <>
            <Committee data = {cheifPatron} size = {3}/>
        </>
    )
}
