import { Button } from "@/components/ui/button";
import { UserCircleIcon } from "lucide-react";

const AuthButton = () => {
    return ( 
        <Button
            variant={"outline"}
            className="text-sm font-medium px-4 py-2 text-blue-500 hover:text-blue-400 rounded-[8px]"
        >
            <UserCircleIcon />
            Sign in
        </Button>
     );
}
 
export default AuthButton;