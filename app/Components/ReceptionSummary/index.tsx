import { FC } from "react";
import BuildIcon from "@mui/icons-material/Build";

type Tool = {
    name: string;
    value: number;
};

type ReceptionSummaryProps = {
    tools: Tool[];
};

const ReceptionSummary: FC<ReceptionSummaryProps> = ({ tools }) => (
    <ul className="space-y-10 py-6">
        {tools.map((tool, index) => (
            <li key={index} className="flex items-center justify-between">
                <BuildIcon fontSize="large" />
                <div>
                    <span>{tool.name}</span>
                </div>
                <span>{tool.value}</span>
            </li>
        ))}
    </ul>
);

export default ReceptionSummary;
