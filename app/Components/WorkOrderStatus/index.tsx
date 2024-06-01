"use client";
import React, { useEffect, useRef } from "react";
import {
    Chart,
    DoughnutController,
    ArcElement,
    CategoryScale,
    Tooltip,
    Title,
} from "chart.js";

const WorkOrderStatus = () => {
    const chartRef = useRef<HTMLCanvasElement | null>(null);
    const chartInstance = useRef<Chart<"doughnut", number[], string> | null>(
        null
    );

    const statuses = [
        { value: "Complete", number: 300 },
        { value: "In Progress", number: 50 },
        { value: "Due", number: 100 },
    ];

    useEffect(() => {
        if (chartRef.current) {
            const data = {
                labels: ["Complete", "In Progress", "Due"],
                datasets: [
                    {
                        data: [300, 50, 100],
                        backgroundColor: ["#008000", "#FFA500", "#FF0000"],
                        hoverBackgroundColor: ["#008000", "#FFA500", "#FF0000"],
                    },
                ],
            };

            Chart.register(
                DoughnutController,
                ArcElement,
                CategoryScale,
                Tooltip,
                Title
            );

            if (chartInstance.current) {
                chartInstance.current.destroy();
            }

            chartInstance.current = new Chart(chartRef.current, {
                type: "doughnut",
                data: data,
            });
        }
    }, []);

    return (
        <div className="flex justify-center items-center py-6 xl:py-10 gap-4 lg:gap-10">
            <div className="w-40">
                <canvas ref={chartRef} />
            </div>
            <div className="flex-1 flex-grow">
                <ul className="space-y-4 xl:space-y-8">
                    {statuses.map((status, index) => (
                        <li key={index} className="flex justify-between">
                            <div className="flex items-center justify-center gap-2">
                                <div
                                    style={{
                                        width: "10px",
                                        height: "10px",
                                        borderRadius: "50%",
                                        backgroundColor:
                                            status.value === "Complete"
                                                ? "green"
                                                : status.value === "In Progress"
                                                ? "#FFA500"
                                                : "red",
                                        boxShadow: `0 0 10px 2px ${
                                            status.value === "Complete"
                                                ? "rgba(0, 128, 0, 0.4)"
                                                : status.value === "In Progress"
                                                ? "rgba(255, 165, 0, 0.4)"
                                                : "rgba(255, 0, 0, 0.4)"
                                        }`,
                                    }}
                                />
                                {status.value}:
                            </div>
                            <span>{status.number}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default WorkOrderStatus;
