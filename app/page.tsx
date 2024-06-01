import * as React from "react";
import { Button, Card } from "@mui/material";
import Text from "@components/Text";
import StickyTable from "@components/StickyTable";

export default function Home() {
    return (
        <>
            <div className="space-y-6">
                <div className="flex gap-4">
                    <Card className="dark-light-card w-2/3 min-h-48 shadow rounded-md p-4">
                        <Text variant="h1" className="font-bold text-2xl">
                            Rental Tools
                        </Text>
                        <StickyTable />
                    </Card>
                    <Card className="dark-light-card w-1/3 min-h-48 shadow rounded-md p-4">
                        <Text variant="h1" className="font-bold text-2xl">
                            Work Order Status
                        </Text>
                    </Card>
                </div>
            </div>
        </>
    );
}
