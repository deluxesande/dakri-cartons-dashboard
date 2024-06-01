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
    id: "toolRef" | "teamMember";
    label: string;
    minWidth?: number;
    align?: "center";
    format?: (value: number) => string;
}

const columns: readonly Column[] = [
    { id: "toolRef", label: "Tool Ref", minWidth: 50, align: "center" },
    {
        id: "teamMember",
        label: "Team Member",
        minWidth: 170,
        align: "center",
    },
];

interface Data {
    toolRef: number;
    teamMember: string;
    teamMemberImage: string;
}

function createData(
    toolRef: number,
    teamMember: string,
    teamMemberImage: string
): Data {
    return {
        toolRef,
        teamMember,
        teamMemberImage,
    };
}

const rows = [
    createData(3004, "Team Member 1", "/avatar.png"),
    createData(3003, "Team Member 2", "/avatar.png"),
    // Add more data as needed
];

export default function MissingItemsTable() {
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
                                    className={`min-w-${column.minWidth} font-semibold`}
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
                                                    "teamMember" ? (
                                                        <div className="flex items-center justify-center gap-4">
                                                            <Image
                                                                src={
                                                                    row.teamMemberImage
                                                                }
                                                                alt={
                                                                    row.teamMember
                                                                }
                                                                width="25"
                                                                height="25"
                                                            />{" "}
                                                            {/* Display the image */}
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
