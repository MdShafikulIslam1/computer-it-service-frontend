"use client";
import { Table } from "antd";
type UMTableProps = {
  pageSize?: number;
  total?: number;
  showSizeChanger?: boolean;
  columns: any;
  dataSource: any;
  loading?: boolean;
  showPagination?: boolean;
  onPaginationChange?: (page: number, pageSize: number) => void;
  onTableChange?: (pagination: any, filter: any, sorter: any) => void;
};
const UMTable = ({
  pageSize,
  total,
  showSizeChanger,
  columns,
  dataSource,
  loading = false,
  showPagination = true,
  onPaginationChange,
  onTableChange,
}: UMTableProps) => {
  const paginationConfig = showPagination
    ? {
        pageSize: pageSize,
        total: total,
        pageSizeOptions: [5, 10, 15, 20, 25],
        showSizeChanger: showSizeChanger,
        onChange: onPaginationChange,
      }
    : false;

  return (
    <Table
      columns={columns}
      dataSource={dataSource}
      loading={loading}
      pagination={paginationConfig}
      onChange={onTableChange}
    />
  );
};

export default UMTable;
