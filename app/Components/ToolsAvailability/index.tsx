import { FC } from "react";
import BuildIcon from "@mui/icons-material/Build";
import PlumbingIcon from "@mui/icons-material/Plumbing";
import DoughnutChart from "@components/DoughnutChart";

type ToolsAvailabilityProps = {
    tools: string[];
};

function calculate_percentage() {
    return Math.floor(Math.random() * 100);
}

const icons = [
    { id: "build", icon: <BuildIcon className="text-5xl" /> },
    { id: "plumbing", icon: <PlumbingIcon className="text-5xl" /> },
];
function shuffleArray(array: any[]) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

const colors = ["#008000", "#FFA500"];
const randomColor = colors[Math.floor(Math.random() * colors.length)];

const ToolsAvailability: FC<ToolsAvailabilityProps> = ({ tools }) => {
    const shuffledIcons = shuffleArray([...icons]);

    return (
        <ul className="space-y-6 py-6">
            {tools.map((tool, index) => (
                <li key={index} className="flex items-center justify-between">
                    <div key={shuffledIcons[index].id}>
                        {shuffledIcons[index].icon}
                    </div>
                    <div>
                        <span>{tool}</span>
                    </div>
                    <DoughnutChart
                        percentage={calculate_percentage()}
                        color={randomColor}
                    />
                </li>
            ))}
        </ul>
    );
};

export default ToolsAvailability;
