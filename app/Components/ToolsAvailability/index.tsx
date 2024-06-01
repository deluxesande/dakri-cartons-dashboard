import { FC } from "react";
import BuildIcon from "@mui/icons-material/Build";
import DoughnutChart from "@components/DoughnutChart";

type ToolsAvailabilityProps = {
    tools: string[];
};

const ToolsAvailability: FC<ToolsAvailabilityProps> = ({ tools }) => (
    <ul className="space-y-10 py-6">
        {tools.map((tool, index) => (
            <li key={index} className="flex items-center justify-between">
                <BuildIcon fontSize="large" />
                <div>
                    <span>{tool}</span>
                </div>
                <DoughnutChart percentage={Math.random() * 100} />
            </li>
        ))}
    </ul>
);

export default ToolsAvailability;
