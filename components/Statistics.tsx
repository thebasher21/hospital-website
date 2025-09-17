"use client";
import { useState } from "react";
import CountUp from "react-countup";
import { InView } from "react-intersection-observer";
import Image from "next/image";

const statistics = [
    {
        title: "OPD Patients",
        count: 113868,
        icon: "medical.png",
    },
    {
        title: "Minor Surgeries",
        count: 6117,
        icon: "report.png",
    },
    {
        title: "Patients Admitted",
        count: 5771,
        icon: "patient.png",
    },
    {
        title: "Major Surgeries",
        count: 1509,
        icon: "doctors.png",
    },
    {
        title: "Babies Born",
        count: 857,
        icon: "baby.png",
    },
];

export default function StatisticsComponent() {
    const [hasStarted, setHasStarted] = useState(false);

    return (
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                {statistics.map((stat, index) => (
                    <InView
                        className="flex items-center justify-center p-5"
                        key={index}
                        as="div"
                        onChange={(inView) => inView && setHasStarted(true)}
                    >
                        <Image
                            src={`/images/stats/${stat.icon}`}
                            alt={stat.title}
                            className="w-20 h-20"
                            width={20}
                            height={20}
                        />
                        <div className="text-center mx-5">
                            <h3 className="text-xl font-semibold text-slate-600 dark:text-slate-300 mb-2">
                                {stat.title}
                            </h3>
                            <p className="text-3xl font-bold text-blue-600">
                                {/* {stat.count} */}
                                {hasStarted && (
                                    <CountUp
                                        start={0}
                                        end={stat.count}
                                        duration={2}
                                        separator=","
                                    />
                                )}
                                {!hasStarted && 0}+
                            </p>
                        </div>
                    </InView>
                ))}
            </div>
        </div>
    );
}
