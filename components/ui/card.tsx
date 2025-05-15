"use client";

import * as React from "react";

import { useState } from "react";

import { cn } from "@/lib/utils";

function Card({ className, ...props }: React.ComponentProps<"div">) {
    return (
        <div
            data-slot="card"
            className={cn(
                "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
                className
            )}
            {...props}
        />
    );
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
    return (
        <div
            data-slot="card-header"
            className={cn("flex flex-col gap-1.5 px-6", className)}
            {...props}
        />
    );
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
    return (
        <div
            data-slot="card-title"
            className={cn("leading-none font-semibold", className)}
            {...props}
        />
    );
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
    return (
        <div
            data-slot="card-description"
            className={cn("text-muted-foreground text-sm", className)}
            {...props}
        />
    );
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
    return (
        <div
            data-slot="card-content"
            className={cn("px-6", className)}
            {...props}
        />
    );
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
    return (
        <div
            data-slot="card-footer"
            className={cn("flex items-center px-6", className)}
            {...props}
        />
    );
}

interface CardClickHandlerProps {
    icon: string;
    title: string;
    description: string;
    data: string[];
}

function CardClickHandler({
    icon,
    title,
    description,
    data,
}: CardClickHandlerProps) {
    const [activeCard, setActiveCard] = useState(false);

    const handleCardClick = () => {
        setActiveCard(!activeCard);
    };

    return (
        <Card
            className="shadow-md border bg-white dark:bg-gray-800/60 transition-all duration-300 transform hover:scale-105 hover:shadow-xl cursor-pointer"
            onClick={handleCardClick}
        >
            <CardHeader className="text-center">
                <div className="bg-gray-100 dark:bg-gray-700 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-gray-700 dark:text-gray-300 text-2xl flex items-center justify-center w-full h-full">
                        {icon}
                    </span>
                </div>
                <CardTitle
                    className="text-lg sm:text-xl font-semibold text-slate-900 dark:text-white"
                    data-i18n="services.emergency.title"
                >
                    {title}
                </CardTitle>
            </CardHeader>
            <CardContent>
                {activeCard ? (
                    <ul className="flex flex-wrap gap-2">
                        {data.map((emergency, index) => (
                            <li
                                key={index}
                                className="bg-blue-600 dark:bg-blue-400 text-white px-4 py-1 rounded-full text-sm"
                            >
                                {emergency}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p
                        className="text-slate-600 dark:text-slate-300 leading-relaxed"
                        data-i18n="services.emergency.description"
                    >
                        {description}
                    </p>
                )}
            </CardContent>
        </Card>
    );
}

export {
    Card,
    CardHeader,
    CardFooter,
    CardTitle,
    CardDescription,
    CardContent,
    CardClickHandler,
};
