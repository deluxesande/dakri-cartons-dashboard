import * as React from "react";
import { Button, Card } from "@mui/material";
import Text from "@components/Text";
import StickyTable from "@components/StickyTable";
import WorkOrderStatus from "@components/WorkOrderStatus";
import MissingItemsTable from "@components/MissingItemsTable";
import ToolsAvailability from "@components/ToolsAvailability";
import RestockItemsTable from "@components/RestockItemsTable";
import ReceptionSummary from "@components/ReceptionSummary";

import ConstructionIcon from "@mui/icons-material/Construction";
import WarningIcon from "@mui/icons-material/Warning";
import InventoryIcon from "@mui/icons-material/Inventory";
import SummarizeIcon from "@mui/icons-material/Summarize";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import BrowseGalleryIcon from "@mui/icons-material/BrowseGallery";

export default function Home() {
    return (
        <>
            <div className="space-y-6">
                <div className="flex flex-wrap gap-4 w-[100%]">
                    <Card className="w-full lg:w-2/3 min-h-48 shadow rounded-md p-6 px-8">
                        <Text
                            variant="h1"
                            className="font-bold text-2xl flex gap-4 items-center justify-start"
                        >
                            <ConstructionIcon className="text-5xl" /> Rental
                            Tools
                        </Text>
                        <StickyTable />
                    </Card>
                    <Card className="w-full lg:w-1/3 min-h-48 shadow rounded-md p-4 px-8">
                        <Text
                            variant="h1"
                            className="font-bold text-2xl flex gap-4 items-center justify-start"
                        >
                            <BrowseGalleryIcon className="text-5xl" /> Work
                            Order Status
                        </Text>
                        <WorkOrderStatus />
                    </Card>
                </div>

                <div className="flex flex-wrap gap-4 ">
                    <Card className="w-full lg:w-1/3 min-h-48 shadow rounded-md p-4 px-8">
                        <Text
                            variant="h1"
                            className="font-bold text-2xl flex gap-4 items-center justify-start"
                        >
                            <WarningIcon className="text-5xl text-yellow-500" />{" "}
                            Missing Items
                        </Text>
                        <MissingItemsTable />
                    </Card>
                    <Card className="w-full lg:w-2/3 min-h-48 shadow rounded-md p-4 px-8">
                        <Text
                            variant="h1"
                            className="font-bold text-2xl flex gap-4 items-center justify-start"
                        >
                            <EventAvailableIcon className="text-5xl" /> Tools
                            and Equipments Availability
                        </Text>
                        <ToolsAvailability tools={["Drill", "Screwdriver"]} />
                    </Card>
                </div>

                <div className="flex flex-wrap gap-4 ">
                    <Card className="w-full lg:w-2/3 min-h-48 shadow rounded-md p-4 px-8">
                        <Text
                            variant="h1"
                            className="font-bold text-2xl flex gap-4 items-center justify-start"
                        >
                            <InventoryIcon className="text-5xl" /> Restock Items
                        </Text>

                        <RestockItemsTable />
                    </Card>
                    <Card className="w-full lg:w-1/3 min-h-48 shadow rounded-md p-4 px-8">
                        <Text
                            variant="h1"
                            className="font-bold text-2xl flex gap-4 items-center justify-start"
                        >
                            <SummarizeIcon className="text-5xl" /> Reception
                            Summary
                        </Text>

                        <ReceptionSummary
                            tools={[
                                { name: "Packages Received", value: 20 },
                                { name: "Processed packages", value: 5 },
                            ]}
                        />
                    </Card>
                </div>
            </div>
        </>
    );
}
