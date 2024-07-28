import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { CircleCheck } from "lucide-react";

interface ServiceTableRow {
  title: string;
  checks: number[];
}

interface PflegeServiceTableProps {
  prices: string[];
}

const tableData: ServiceTableRow[] = [
  { title: "Waschen", checks: [1, 1, 1, 1] },
  { title: "Saugen", checks: [1, 1, 1, 1] },
  { title: "Fenster", checks: [1, 1, 1, 1] },
  { title: "Cockpit", checks: [1, 1, 1, 1] },
  { title: "Felgenreinigung", checks: [0, 0, 0, 1] },
  { title: "Sitzshampoo", checks: [0, 1, 0, 1] },
  { title: "Politur", checks: [0, 0, 1, 1] },
  { title: "Lackreinigung", checks: [0, 0, 0, 1] },
  { title: "Versiegelung", checks: [0, 0, 0, 1] },
];

const PflegeServiceTable: React.FC<PflegeServiceTableProps> = ({ prices }) => {
  return (
    <div className="w-full p-12 min-h-[500px]">
      <Table className="h-[500px] border-2">
        {/* <TableCaption>A list of your recent Pflege services.</TableCaption> */}
        <TableHeader>
          <TableRow>
            <TableHead>Pflege</TableHead>
            <TableHead className="text-center">Economy</TableHead>
            <TableHead className="text-center">Comfort</TableHead>
            <TableHead className="text-center">Deluxe</TableHead>
            <TableHead className="text-center">Premium</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tableData.map((row, rowIndex) => (
            <TableRow key={rowIndex}>
              <TableCell className="font-medium">{row.title}</TableCell>
              {row.checks.map((check, checkIndex) => (
                <TableCell key={checkIndex} className="text-center">
                  {check ? <CircleCheck className="mx-auto" /> : "-"}
                </TableCell>
              ))}
            </TableRow>
          ))}
          <TableRow>
            <TableCell className="font-medium">Preise</TableCell>
            {prices.map((price, index) => (
              <TableCell key={index} className="text-center font-medium">
                {price}
              </TableCell>
            ))}
          </TableRow>
        </TableBody>
        {/*       <TableFooter>
      </TableFooter> */}
      </Table>
    </div>
  );
};

export default PflegeServiceTable;
