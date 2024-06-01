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

type DoughnutChartProps = {
    percentage: number;
    color: string;
};

const DoughnutChart: React.FC<DoughnutChartProps> = ({ percentage, color }) => {
    const chartRef = useRef<HTMLCanvasElement | null>(null);
    const chartInstance = useRef<Chart<"doughnut", number[], string> | null>(
        null
    );
    const percentageRef = useRef(percentage);

    useEffect(() => {
        percentageRef.current = percentage;
        if (chartRef.current) {
            const data = {
                labels: ["Complete", "Incomplete"],
                datasets: [
                    {
                        data: [
                            percentageRef.current,
                            100 - percentageRef.current,
                        ],
                        backgroundColor: color,
                        hoverBackgroundColor: color,
                    },
                ],
            };

            const percentagePlugin = {
                id: "percentagePlugin",
                beforeDraw: ((percentage) => {
                    return (chart: Chart<"doughnut", number[], string>) => {
                        const width = chart.width,
                            height = chart.height,
                            ctx = chart.ctx;

                        ctx.save();
                        const fontSize = (height / 114).toFixed(2);
                        ctx.font = `${fontSize}em sans-serif`;
                        ctx.textBaseline = "middle";

                        const text = `${percentageRef.current}%`;
                        const textX = Math.round(
                            (width - ctx.measureText(text).width) / 2
                        );
                        const textY = height / 2;

                        ctx.fillText(text, textX, textY);
                        ctx.save();
                    };
                })(percentageRef.current),
            };

            Chart.register(
                DoughnutController,
                ArcElement,
                CategoryScale,
                Tooltip,
                Title,
                percentagePlugin
            );

            if (chartInstance.current) {
                chartInstance.current.destroy();
            }

            chartInstance.current = new Chart(chartRef.current, {
                type: "doughnut",
                data: data,
                options: {
                    cutout: "70%",
                    elements: {
                        arc: {
                            borderRadius: 5,
                        },
                    },
                },
            });
        }
    }, [percentage]);

    return (
        <div className="py-6">
            <div className="w-20">
                <canvas ref={chartRef} />
            </div>
        </div>
    );
};

export default DoughnutChart;
