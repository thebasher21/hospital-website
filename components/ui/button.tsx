import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all duration-200 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-offset-2 focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          "bg-blue-600 hover:bg-blue-700 text-white shadow-md hover:shadow-lg active:shadow-sm border border-blue-600 hover:border-blue-700",
        destructive:
          "bg-red-600 hover:bg-red-700 text-white shadow-md hover:shadow-lg active:shadow-sm border border-red-600 hover:border-red-700",
        outline:
          "border border-blue-600 bg-transparent text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/30 shadow-sm hover:shadow-md active:shadow-sm",
        secondary:
          "bg-blue-100 text-blue-800 hover:bg-blue-200 dark:bg-blue-800 dark:text-blue-100 dark:hover:bg-blue-700 shadow-sm hover:shadow-md active:shadow-sm border border-blue-200 dark:border-blue-700",
        ghost: 
          "text-blue-600 hover:bg-blue-50 dark:text-blue-200 dark:hover:bg-blue-900/30",
        link: 
          "text-blue-600 underline-offset-4 hover:underline dark:text-blue-300",
      },
      size: {
        default: "h-10 px-5 py-2 has-[>svg]:px-4",
        sm: "h-9 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-12 rounded-md px-6 has-[>svg]:px-5 text-base",
        icon: "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
