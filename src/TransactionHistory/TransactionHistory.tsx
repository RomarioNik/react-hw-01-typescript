import { firstLetterToUppercase } from "../utils";
import {
  Table,
  TableHead,
  TableRowHead,
  TableHeadCell,
  TableBody,
  TableRowBody,
  TableBodyCell,
} from "./TransactionHistory.styled";
import { TransactionsData } from "../data";

interface TransactionsItems {
  items: TransactionsData[];
}

export const TransactionHistory = ({ items }: TransactionsItems) => {
  return (
    <Table>
      <TableHead>
        <TableRowHead>
          <TableHeadCell>Type</TableHeadCell>
          <TableHeadCell>Amount</TableHeadCell>
          <TableHeadCell>Currency</TableHeadCell>
        </TableRowHead>
      </TableHead>

      <TableBody>
        {items.map(({ id, type, amount, currency }) => (
          <TableRowBody key={id}>
            <TableBodyCell>{firstLetterToUppercase(type)}</TableBodyCell>
            <TableBodyCell>{amount}</TableBodyCell>
            <TableBodyCell>{currency}</TableBodyCell>
          </TableRowBody>
        ))}
      </TableBody>
    </Table>
  );
};
