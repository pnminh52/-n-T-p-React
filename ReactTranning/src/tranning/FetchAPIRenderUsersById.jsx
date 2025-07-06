import React, { useEffect, useState } from 'react';

const FetchUsersTable = () => {
  const API = 'https://jsonplaceholder.typicode.com/users';
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch(API);
        if (!res.ok) {
          throw new Error('Lỗi khi tải dữ liệu');
        }
        const data = await res.json();
        setUsers(data);
        setLoading(false);
      } catch (error) {
        setErr(error.message);
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (err) return <p>Error: {err}</p>;

  return (
    <div>
      <h1>Danh sách người dùng (dạng bảng)</h1>
      <table border="1" cellPadding="10" style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Họ tên</th>
            <th>Username</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Website</th>
            <th>Company</th>
            <th>Địa chỉ</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.website}</td>
              <td>{user.company.name}</td>
              <td>
                {user.address.street}, {user.address.suite}, {user.address.city},{' '}
                {user.address.zipcode}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FetchUsersTable;
