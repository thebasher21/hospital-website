"use client";
import { useState } from "react";
import CountUp from "react-countup";
import { InView } from "react-intersection-observer";

const statistics = [
    {
        title: "OPD Patients",
        count: 57178,
        icon: "medical.png",
    },
    {
        title: "Minor Surgeries",
        count: 3564,
        icon: "report.png",
    },
    {
        title: "Major Surgeries",
        count: 620,
        icon: "doctors.png",
    },
    {
        title: "Babies Born",
        count: 190,
        icon: "baby.png",
    },
];

export default function StatisticsComponent() {
    const [hasStarted, setHasStarted] = useState(false);

    return (
        <div className="container mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {statistics.map((stat, index) => (
                    <InView
                        className="flex items-center justify-center p-6"
                        key={index}
                        as="div"
                        onChange={(inView) => inView && setHasStarted(true)}
                    >
                        <div className="mr-4">
                            <img
                                src={`/images/stats/${stat.icon}`}
                                alt={stat.title}
                                className="w-20 h-20"
                            />
                        </div>
                        <div className="text-center">
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
