import { FC } from "react";

type DoughnutChartProps = {
    percentage: number;
};

const DoughnutChart: FC<DoughnutChartProps> = ({
    percentage,
}: DoughnutChartProps) => {
    return <div>DoughnutChart</div>;
};

export default DoughnutChart;
