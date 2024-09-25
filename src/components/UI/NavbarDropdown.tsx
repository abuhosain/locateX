"use client";
import { useUser } from "@/src/context/user.provider";
import { logOut } from "@/src/services/AuthService";
import { Avatar } from "@nextui-org/avatar";
 
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/dropdown";
 
import { useRouter } from "next/navigation";
export default function NavbarDropdown() {
  const router = useRouter();
  const {user,setIsloading : userLoading} = useUser();
  const handleLogout = () => {
    logOut();
    userLoading(true);
  }
  const handleNavigation = (pathname: string) => {
    router.push(pathname);
  };
  return (
    <Dropdown>
      <DropdownTrigger>
        <Avatar className="cursor-pointer"  src={user?.profilePhoto} />
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        <DropdownItem onClick={() => handleNavigation("/profile")}>
          Proile
        </DropdownItem>
        <DropdownItem onClick={() => handleNavigation("/profile/settings")}>
          Settings
        </DropdownItem>
        <DropdownItem
          onClick={() => handleNavigation("/profile/create-post")}
          key="new"
        >
          Create Post
        </DropdownItem>
       
          <DropdownItem onClick={() => handleLogout() } key="delete" className="text-danger" color="danger">
            Logout
          </DropdownItem>
         
      </DropdownMenu>
    </Dropdown>
  );
}
