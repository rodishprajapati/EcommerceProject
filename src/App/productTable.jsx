import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Products } from "../Data/Products";
import { useState } from "react";

const ProductTable = () => {
  const columnHelper = createColumnHelper();

  // const [tableData,setTableData]=useState (Products)
  const columns = [
    columnHelper.accessor("id", {
      header: "ID",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("name", {
      header: "Product Name",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("category", {
      header: "Category",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("brand", {
      header: "Brand",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("discountPrice", {
      header: "Price",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("stock", {
      header: "Stock",
      cell: (info) => info.getValue(),
    }),
  ];
  const table = useReactTable({
    data: Products,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <>
      <div className="p-4">
        <div className="font-semibold m-2">Product Details</div>

        <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
          <thead className="bg-gray-100">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td
                    key={cell.id}
                    className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
export default ProductTable;
