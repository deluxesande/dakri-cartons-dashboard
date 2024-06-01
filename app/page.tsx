import * as React from "react";
import { Button, Card } from "@mui/material";
import Text from "@components/Text";
import StickyTable from "@components/StickyTable";
import WorkOrderStatus from "@components/WorkOrderStatus";
import MissingItemsTable from "@components/MissingItemsTable";
import ToolsAvailability from "@components/ToolsAvailability";
import RestockItemsTable from "@components/RestockItemsTable";

export default function Home() {
    return (
        <>
            <div className="space-y-6">
                <div className="flex gap-4 ">
                    <Card className="w-2/3 min-h-48 shadow rounded-md p-4">
                        <Text variant="h1" className="font-bold text-2xl">
                            Rental Tools
                        </Text>
                        <StickyTable />
                    </Card>
                    <Card className="w-1/3 min-h-48 shadow rounded-md p-4">
                        <Text variant="h1" className="font-bold text-2xl">
                            Work Order Status
                        </Text>
                        <WorkOrderStatus />
                    </Card>
                </div>

                <div className="flex gap-4 ">
                    <Card className="w-1/3 min-h-48 shadow rounded-md p-4">
                        <Text variant="h1" className="font-bold text-2xl">
                            Missing Items
                        </Text>
                        <MissingItemsTable />
                    </Card>
                    <Card className="w-2/3 min-h-48 shadow rounded-md p-4">
                        <Text variant="h1" className="font-bold text-2xl">
                            Tools and Equipments Availability
                        </Text>
                        <ToolsAvailability
                            tools={["Drill", "Screwdriver", "Hammer"]}
                        />
                    </Card>
                </div>

                <div className="flex gap-4 ">
                    <Card className="w-2/3 min-h-48 shadow rounded-md p-4">
                        <Text variant="h1" className="font-bold text-2xl">
                            Restock Items
                        </Text>

                        <RestockItemsTable />
                    </Card>
                    <Card className="w-1/3 min-h-48 shadow rounded-md p-4">
                        <Text variant="h1" className="font-bold text-2xl">
                            Reception Summary
                        </Text>
                    </Card>
                </div>
            </div>
        </>
    );
}
