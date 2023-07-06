"use client"

import { FC } from "react"
import Link from "next/link"

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar"
import { Icons } from "@/components/icons"

interface ProfileDropdownProps {}

const ProfileDropdown: FC<ProfileDropdownProps> = ({}) => {
  return (
    <Menubar className="border-transparent">
      <MenubarMenu>
        <MenubarTrigger>
          <Icons.user />
          <span className="sr-only">Toggle theme</span>
        </MenubarTrigger>
        <MenubarContent>
          <MenubarRadioGroup value="benoit">
            <MenubarRadioItem value="andy">Andy</MenubarRadioItem>
            <MenubarRadioItem value="benoit">Benoit</MenubarRadioItem>
            <MenubarRadioItem value="Luis">Luis</MenubarRadioItem>
          </MenubarRadioGroup>
          <MenubarSeparator />
          <Link href="/users/1/edit">
            <MenubarItem inset>Edit</MenubarItem>
          </Link>
          <MenubarSeparator />
          <Link href="/users/1/add">
            <MenubarItem inset>Add Profile</MenubarItem>
          </Link>
          <MenubarSeparator />
          <MenubarItem inset>Logout</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  )
}

export default ProfileDropdown
