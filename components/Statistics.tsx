"use client";
import { useState } from "react";
import CountUp from "react-countup";
import { InView } from "react-intersection-observer";
import Image from "next/image";

const statistics = [
    {
        title: "OPD Patients",
<<<<<<< HEAD
        count: 113868,
=======
        count: 86708,
>>>>>>> e31addc92b5704474a0ecd3ecc4d575ad3c0eb18
        icon: "medical.png",
    },
    {
        title: "Minor Surgeries",
<<<<<<< HEAD
        count: 6117,
=======
        count: 5315,
>>>>>>> e31addc92b5704474a0ecd3ecc4d575ad3c0eb18
        icon: "report.png",
    },
    {
        title: "Patients Admitted",
<<<<<<< HEAD
        count: 5771,
=======
        count: 4696,
>>>>>>> e31addc92b5704474a0ecd3ecc4d575ad3c0eb18
        icon: "patient.png",
    },
    {
        title: "Major Surgeries",
<<<<<<< HEAD
        count: 1509,
=======
        count: 1126,
>>>>>>> e31addc92b5704474a0ecd3ecc4d575ad3c0eb18
        icon: "doctors.png",
    },
    {
        title: "Babies Born",
<<<<<<< HEAD
        count: 857,
=======
        count: 759,
>>>>>>> e31addc92b5704474a0ecd3ecc4d575ad3c0eb18
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
