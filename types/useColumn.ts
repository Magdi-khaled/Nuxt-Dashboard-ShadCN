export default interface IColumn {
  accessorKey: string;
  header: () => VNode;
  cell: (params: { row: any }) => VNode;
}
