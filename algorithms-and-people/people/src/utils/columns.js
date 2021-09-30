export const COLUMNS = [
  {
    Header: 'Avatar',
    accessor: 'avatar.url',
    Cell: ({ cell: { value } }) => (
      <img src={'http://apis.chromeye.com:9191' + value} alt={value} width={30} />
    )
  },
  {
    Header: 'ID',
    accessor: 'id'
  },
  {
    Header: 'First Name',
    accessor: 'firstName'
  },
  {
    Header: 'Last Name',
    accessor: 'lastName'
  },
  {
    Header: 'Email',
    accessor: 'email',
    Cell: ({ cell: { value } }) => (
      <a href={value} style={{ textDecoration: 'none', color: '#20B2AA' }}>{value}</a>
    )
  },
  {
    Header: 'Company',
    accessor: 'company.name'
  },
  {
    Header: 'Department',
    accessor: 'company.department'
  },
  {
    Header: '	Start Date',
    accessor: 'company.startDate'
  }
];
