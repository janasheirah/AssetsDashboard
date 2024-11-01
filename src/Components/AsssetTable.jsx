import './AssetTable.css'; // Import your CSS file

const AssetTable = () => {
  return (
      <table className="asset-table">
      <thead>
        <tr data-href="#">
          <th>#</th>
          <th>Name</th>
          <th>Category</th>
          <th>Brand</th>
          <th>Model</th>
          <th>Purchase Date</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={row.id} data-href="#">
            <td>{index + 1}</td>
            <td>{row.name}</td>
            <td>{row.category}</td>
            <td>{row.brand}</td>
            <td>{row.model}</td>
            <td>{row.purchaseDate}</td>
            <td>
              <span className={`status ${row.status}`}>{row.status}</span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AssetTable;