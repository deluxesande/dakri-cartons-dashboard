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
    id: "toolRef" | "tool" | "stockStatus";
    label: string;
    minWidth?: number;
    align?: "left";
    format?: (value: number) => string;
}

const columns: readonly Column[] = [
    { id: "toolRef", label: "Tool Ref", minWidth: 50 },
    {
        id: "tool",
        label: "Tool",
        minWidth: 170,
    },
    {
        id: "stockStatus",
        label: "Stock Status",
        minWidth: 170,
    },
];

interface Data {
    toolRef: number;
    tool: string;
    stockStatus: string;
}

function createData(toolRef: number, tool: string, stockStatus: string): Data {
    return {
        toolRef,
        tool,
        stockStatus,
    };
}

const rows = [
    createData(3003, "Tool 1", "Low"),
    createData(3004, "Tool 2", "None"),
    createData(3005, "Tool 3", "High"),
    // Add more data as needed
];

export default function RestockItemsTable() {
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
                        {rows
                            .slice(page * 10, page * 10 + 10)
                            .map((row, index) => {
                                return (
                                    <TableRow
                                        hover
                                        role="checkbox"
                                        tabIndex={-1}
                                        key={index}
                                    >
                                        {columns.map((column) => {
                                            const value = row[column.id];
                                            return (
                                                <TableCell
                                                    key={column.id}
                                                    align={column.align}
                                                >
                                                    {column.id ===
                                                    "stockStatus" ? (
                                                        <div className="flex items-center gap-2">
                                                            <div
                                                                style={{
                                                                    width: "10px",
                                                                    height: "10px",
                                                                    borderRadius:
                                                                        "50%",
                                                                    backgroundColor:
                                                                        value ===
                                                                        "High"
                                                                            ? "green"
                                                                            : value ===
                                                                              "Low"
                                                                            ? "blue"
                                                                            : "red",
                                                                    boxShadow: `0 0 10px 2px ${
                                                                        value ===
                                                                        "High"
                                                                            ? "rgba(0, 128, 0, 0.4)"
                                                                            : value ===
                                                                              "Low"
                                                                            ? "rgba(0, 0, 255, 0.4)"
                                                                            : "rgba(255, 0, 0, 0.4)"
                                                                    }`,
                                                                }}
                                                            />
                                                            <Text>{value}</Text>
                                                        </div>
                                                    ) : column.format &&
                                                      typeof value ===
                                                          "number" ? (
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
