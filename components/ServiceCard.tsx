'use client';

import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardHeader, CardContent } from "@/components/ui/card";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  href?: string;
  className?: string;
}

export default function ServiceCard({
  title,
  description,
  icon,
  href,
  className,
}: ServiceCardProps) {
  const content = (
    <>
      <CardHeader>
        <div className="flex items-center mb-2">
          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
            <Image 
              src={icon}
              alt={`${title} icon`}
              width={30}
              height={30}
            />
          </div>
          <h3 className="text-xl text-primary font-medium">{title}</h3>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </>
  );

  // Render different components based on whether href is provided
  if (href) {
    return (
      <Link href={href} className={className}>
        <Card className="h-full transition-all duration-300 hover:shadow-lg">
          {content}
        </Card>
      </Link>
    );
  }

  // Render a div when no href is provided
  return (
    <Card className={cn("h-full transition-all duration-300 hover:shadow-lg", className)}>
      {content}
    </Card>
  );
} 