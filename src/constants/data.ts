//https://fontawesome.com/search?m=free
export const PERMISSIONS = [
  {
    title: 'Users',
    path: '/users',
    key: 'users',
    icon: 'fa-solid fa-users',
    children: [
      { title: 'Read', key: 'read-user', icon: '' },
      { title: 'Create', key: 'create-user', icon: '' },
      { title: 'Update', key: 'update-user', icon: '' },
      { title: 'Delete', key: 'delete-user', icon: '' },
    ],
  },
  {
    title: 'Roles',
    path: '/roles',
    key: 'roles',
    icon: 'fa-solid fa-book-open-reader',
    children: [
      { title: 'Read', key: 'read-roles', icon: '' },
      { title: 'Create', key: 'create-roles', icon: '' },
      { title: 'Update', key: 'update-roles', icon: '' },
      { title: 'Delete', key: 'delete-roles', icon: '' },
    ],
  },
  {
    title: 'Permissions',
    path: '/permissions',
    key: 'permissions',
    icon: 'fa-solid fa-sitemap',
  },
  {
    title: 'Items',
    path: '/items',
    key: 'items',
    icon: 'fa-solid fa-dice-d6',
  },
];
