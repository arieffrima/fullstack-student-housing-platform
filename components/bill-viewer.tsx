"use client"

import { useLanguage } from "@/contexts/language-context"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

// Mock data for bills
const bills = [
  { id: 1, date: "2023-05-01", amount: 1500000, status: "Paid" },
  { id: 2, date: "2023-06-01", amount: 1500000, status: "Unpaid" },
  { id: 3, date: "2023-07-01", amount: 1500000, status: "Upcoming" },
]

export default function BillViewer() {
  const { t } = useLanguage()

  return (
    <Card>
      <CardHeader>
        <CardTitle>{t.residentPortal.bills.title}</CardTitle>
        <CardDescription>{t.residentPortal.bills.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>{t.residentPortal.bills.dateLabel}</TableHead>
              <TableHead>{t.residentPortal.bills.amountLabel}</TableHead>
              <TableHead>{t.residentPortal.bills.statusLabel}</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {bills.map((bill) => (
              <TableRow key={bill.id}>
                <TableCell>{bill.date}</TableCell>
                <TableCell>Rp {bill.amount.toLocaleString()}</TableCell>
                <TableCell>{bill.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

