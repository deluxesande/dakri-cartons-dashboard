"use client";
import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Image from "next/image";
import { Button } from "@mui/material";
import Text from "@components/Text";

interface Column {
    id: "workOrder" | "toolRef" | "teamMember" | "status" | "duration";
    label: string;
    minWidth?: number;
    align?: "right";
    format?: (value: number) => string;
}

const columns: readonly Column[] = [
    { id: "workOrder", label: "Work Order", minWidth: 50 },
    { id: "toolRef", label: "Tool Ref", minWidth: 50 },
    {
        id: "teamMember",
        label: "Team Member",
        minWidth: 170,
    },
    { id: "status", label: "Status", minWidth: 120 },
    { id: "duration", label: "Duration", minWidth: 100 },
];

interface Data {
    workOrder: number;
    toolRef: number;
    teamMember: string;
    teamMemberImage: string; // New property for the image URL
    status: string;
    duration: number;
}

function createData(
    workOrder: number,
    toolRef: number,
    teamMember: string,
    teamMemberImage: string, // New parameter for the image URL
    status: string,
    duration: number
): Data {
    return {
        workOrder,
        toolRef,
        teamMember,
        teamMemberImage,
        status,
        duration,
    };
}

const rows = [
    createData(1, 3004, "Team Member 1", "/avatar.png", "Not Started", 100),
    createData(2, 3003, "Team Member 2", "/avatar.png", "Complete", 200),
    // Add more data as needed
];

export default function StickyTable() {
    const [page, setPage] = React.useState(0);

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    return (
        <div className="w-full overflow-hidden py-6 xl:py-10">
            <TableContainer className="max-h-[440px]">
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    className={`min-w-${column.minWidth}`}
                                    style={{
                                        width:
                                            column.id === "workOrder" ||
                                            column.id === "toolRef"
                                                ? 100
                                                : column.minWidth,
                                    }} // Set width for specific columns
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                            <TableCell className="w-6"></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.slice(page * 10, page * 10 + 10).map((row) => {
                            return (
                                <TableRow
                                    hover
                                    role="checkbox"
                                    tabIndex={-1}
                                    key={row.workOrder}
                                >
                                    {columns.map((column) => {
                                        const value = row[column.id];
                                        return (
                                            <TableCell
                                                key={column.id}
                                                align={column.align}
                                            >
                                                {column.id === "status" ? (
                                                    <div className="flex items-center gap-2">
                                                        <div
                                                            style={{
                                                                width: "10px",
                                                                height: "10px",
                                                                borderRadius:
                                                                    "50%",
                                                                backgroundColor:
                                                                    value ===
                                                                    "Complete"
                                                                        ? "green"
                                                                        : value ===
                                                                          "In Progress"
                                                                        ? "blue"
                                                                        : "red",
                                                                boxShadow: `0 0 10px 2px ${
                                                                    value ===
                                                                    "Complete"
                                                                        ? "rgba(0, 128, 0, 0.4)"
                                                                        : value ===
                                                                          "In Progress"
                                                                        ? "rgba(0, 0, 255, 0.4)"
                                                                        : "rgba(255, 0, 0, 0.4)"
                                                                }`,
                                                            }}
                                                        />
                                                        <Text className="text-sm">
                                                            {value}
                                                        </Text>
                                                    </div>
                                                ) : column.id ===
                                                  "teamMember" ? (
                                                    <div className="flex items-center justify-center gap-4">
                                                        <Image
                                                            src={
                                                                row.teamMemberImage
                                                            }
                                                            alt={row.teamMember}
                                                            width="25"
                                                            height="25"
                                                        />{" "}
                                                        {/* Display the image */}
                                                        <Text>{value}</Text>
                                                    </div>
                                                ) : column.format &&
                                                  typeof value === "number" ? (
                                                    column.format(value)
                                                ) : (
                                                    <Text>{value}</Text>
                                                )}
                                            </TableCell>
                                        );
                                    })}
                                    <TableCell className="w-6">
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            size="small"
                                        >
                                            Details
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
            {/* <TablePagination
                component="div"
                count={rows.length}
                rowsPerPage={10}
                page={page}
                onPageChange={handleChangePage}
                className="pagination"
            /> */}
        </div>
    );
}
