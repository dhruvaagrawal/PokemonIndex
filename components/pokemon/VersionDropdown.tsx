"use client"

import { FC, HTMLAttributes, useState } from "react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

interface VersionDropdownProps extends HTMLAttributes<HTMLDivElement> {
  versions: string[]
}

const VersionDropdown: FC<VersionDropdownProps> = ({ versions, className }) => {
  const [open, setOpen] = useState(false)
  const [selectedStatus, setSelectedStatus] = useState<string | null>(null)

  return (
    <div className={cn("flex items-center space-x-4", className)}>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            size="sm"
            className="w-30 justify-start bg-slate-900 border-slate-900 border-2 text-white"
          >
            {selectedStatus ? (
              <>{selectedStatus}</>
            ) : (
              <>
                <strong className="mr-1">+</strong>
                <p>Set Version</p>
              </>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="p-0" side="right" align="start">
          <Command>
            <CommandInput placeholder="Change status..." />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup>
                {versions.map((version) => (
                  <CommandItem
                    key={version}
                    onSelect={(value) => {
                      setSelectedStatus(
                        versions.find((version) => version === value) || null
                      )
                      setOpen(false)
                    }}
                  >
                    <span>{version}</span>
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  )
}

export default VersionDropdown
