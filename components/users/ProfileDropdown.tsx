"use client"

import { FC } from "react"

import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"

interface ProfileDropdownProps {}

const ProfileDropdown: FC<ProfileDropdownProps> = ({}) => {
  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => console.log("Profile opened")}
    >
      <Icons.user className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}

export default ProfileDropdown
