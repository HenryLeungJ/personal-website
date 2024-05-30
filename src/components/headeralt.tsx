"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import Image from "next/image"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "SnapText",
    href: "/snaptext",
    description:
      "Send messages with a snap using SnapText",
  },
  {
    title: "ChattingBusiness",
    href: "/chattingbusiness",
    description:
      "Schedule real-time video calls with your collegues",
  },
  {
    title: "companyguesser",
    href: "/companyguesser",
    description:
      "Test your knowledge on the S&P 500's top companies",
  },
  {
    title: "CryptoViewer",
    href: "/cryptoviewer",
    description: "Take a look at your favourite cryptocurrenys' real-time price",
  },
]

export default function NavigationMenuDemo() {
  return (
    <div className="w-full flex justify-center mt-4">
        <NavigationMenu>
        <NavigationMenuList>
            <NavigationMenuItem>
                <div className="mr-4">
                    <Link href="/" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            Home
                        </NavigationMenuLink>
                    </Link>
                </div>
            </NavigationMenuItem>
            <NavigationMenuItem>
            <NavigationMenuTrigger>Contact</NavigationMenuTrigger>
            <NavigationMenuContent>
                <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                    <NavigationMenuLink asChild>
                    <a
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href="/contact"
                    >
                        <Icons.logo className="h-6 w-6" />
                        <div className="mb-2 mt-4 text-lg font-medium">
                            Contact Me
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                            I am always open to new opportunities!
                        </p>
                    </a>
                    </NavigationMenuLink>
                </li>
                <ListItem href="https://www.linkedin.com/in/henry-leung-j/" className="flex justify-center h-20">
                    <Image src="/linkedinalt.png" height={70} width={170} alt="LinkedIn"/>
                </ListItem>
                <ListItem href="mailto:HenryLeungJ@gmail.com" className="flex justify-center h-20 overflow-hidden">
                    <Image src="/gmailalt.jpg" height={30} width={170} alt="Gmail" className="mix-blend-multiply"/>
                </ListItem>
                <ListItem href="https://github.com/HenryLeungJ" className="flex justify-center h-20">
                    <Image src="/github.png" height={30} width={170} alt="Gmail" className="mix-blend-multiply"/>
                </ListItem>
                </ul>
            </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
            <NavigationMenuTrigger>Projects</NavigationMenuTrigger>
            <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {components.map((component) => (
                    <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}
                    >
                    {component.description}
                    </ListItem>
                ))}
                </ul>
            </NavigationMenuContent>
            </NavigationMenuItem>
        </NavigationMenuList>
        </NavigationMenu>
    </div>
    
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
