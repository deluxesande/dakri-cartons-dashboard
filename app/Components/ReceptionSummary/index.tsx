import { FC } from "react";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import Text from "@components/Text";

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
                <ReceiptLongIcon fontSize="large" />
                <div>
                    <Text variant="h2" className="font-semibold">
                        {tool.name}
                    </Text>
                </div>
                <Text>{tool.value}</Text>
            </li>
        ))}
    </ul>
);

export default ReceptionSummary;
