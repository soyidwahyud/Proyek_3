import React from 'react';

//Form
const Forms = React.lazy(() => import('./views/Base/Forms/Forms'));
const UserForms = React.lazy(() => import('./views/Base/Forms/UserForms/UserForms'));
const JabatanAddForms = React.lazy(() => import('./views/Base/Forms/JabatanForms/JabatanAddForms'));
const JabatanEditForms = React.lazy(() => import('./views/Base/Forms/JabatanForms/JabatanEditForms'));
const JenisAddForms = React.lazy(() => import('./views/Base/Forms/JenisForms/JenisAddForms'));
const JenisEditForms = React.lazy(() => import('./views/Base/Forms/JenisForms/JenisEditForms'));
const PenulisAddForms = React.lazy(() => import('./views/Base/Forms/PenulisForms/PenulisAddForms'));
const PenulisEditForms = React.lazy(() => import('./views/Base/Forms/PenulisForms/PenulisEditForms'));
const PenerbitAddForms = React.lazy(() => import('./views/Base/Forms/PenerbitForms/PenerbitAddForms'));
const PenerbitEditForms = React.lazy(() => import('./views/Base/Forms/PenerbitForms/PenerbitEditForms'));
const BukuAddForms = React.lazy(() => import('./views/Base/Forms/BukuForms/BukuAddForms'));
const BukuEditForms = React.lazy(() => import('./views/Base/Forms/BukuForms/BukuEditForms'));
const KriteriaAddForms = React.lazy(() => import('./views/Base/Forms/KriteriaForms/KriteriaAddForms'));
const KriteriaEditForms = React.lazy(() => import('./views/Base/Forms/KriteriaForms/KriteriaEditForms'));
const NilaiAddForms = React.lazy(() => import('./views/Base/Forms/NilaiForms/NilaiAddForms'));
const NilaiEditForms = React.lazy(() => import('./views/Base/Forms/NilaiForms/NilaiEditForms'));
const AdminForms = React.lazy(() => import('./views/Base/Forms/AdminForms/AdminForms'));

const Navbars = React.lazy(() => import('./views/Base/Navbars'));
const Navs = React.lazy(() => import('./views/Base/Navs'));

//Tabel
const Tables = React.lazy(() => import('./views/Base/Tabel/Tables'));
const UserTables = React.lazy(() => import('./views/Base/Tabel/UserTables/UserTables'));
const JabatanTables = React.lazy(() => import('./views/Base/Tabel/JabatanTables/JabatanTables'));
const JenisTables = React.lazy(() => import('./views/Base/Tabel/JenisTables/JenisTables'));
const PenulisTables = React.lazy(() => import('./views/Base/Tabel/PenulisTables/PenulisTables'));
const PenerbitTables = React.lazy(() => import('./views/Base/Tabel/PenerbitTables/PenerbitTables'));
const BookTables = React.lazy(() => import('./views/Base/Tabel/BookTables/BookTables'));
const KriteriaTables = React.lazy(() => import('./views/Base/Tabel/KriteriaTables/KriteriaTables'));
const NilaiTables = React.lazy(() => import('./views/Base/Tabel/NilaiTables/NilaiTables'));
const HitungTables = React.lazy(() => import('./views/Base/Tabel/HitungTables/HitungTables'));
const Hitung2Tables = React.lazy( () => import('./views/Base/Tabel/Hitung2Tables/Hitung2Tables'))
const AdminTables = React.lazy(() => import('./views/Base/Tabel/AdminTables/AdminTables'));
const Tabs = React.lazy(() => import('./views/Base/Tabs'));

const BrandButtons = React.lazy(() => import('./views/Buttons/BrandButtons'));
const ButtonDropdowns = React.lazy(() => import('./views/Buttons/ButtonDropdowns'));
const ButtonGroups = React.lazy(() => import('./views/Buttons/ButtonGroups'));
const Buttons = React.lazy(() => import('./views/Buttons/Buttons'));
const Charts = React.lazy(() => import('./views/Charts'));
const Dashboard = React.lazy(() => import('./views/Dashboard'));
const Alerts = React.lazy(() => import('./views/Notifications/Alerts'));

const Widgets = React.lazy(() => import('./views/Widgets/Widgets'));
const Users = React.lazy(() => import('./views/Users/Users'));
const User = React.lazy(() => import('./views/Users/User'));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },

  //Form
  { path: '/base/forms', name: 'Forms', component: Forms },
  { path: '/base/user_forms', name: 'User Forms', component: UserForms },
  { path: '/base/jabatan_add_forms', name: 'Add Jabatan Forms', component: JabatanAddForms },
  { path: '/base/jabatan_edit_forms', name: 'Edit Jabatan Forms', component: JabatanEditForms },
  { path: '/base/jenis_add_forms', name: 'Add Jenis Buku Forms', component: JenisAddForms },
  { path: '/base/jenis_edit_forms', name: 'Edit Jenis Buku Forms', component: JenisEditForms },
  { path: '/base/penulis_add_forms', name: 'Add Penulis Buku Forms', component: PenulisAddForms },
  { path: '/base/penulis_edit_forms', name: 'Edit Penulis Buku Forms', component: PenulisEditForms },
  { path: '/base/penerbit_add_forms', name: 'Add Penerbit Buku Forms', component: PenerbitAddForms },
  { path: '/base/penerbit_edit_forms', name: 'Edit Penerbit Buku Forms', component: PenerbitEditForms },
  { path: '/base/buku_add_forms', name: 'Add Buku Forms', component: BukuAddForms },
  { path: '/base/buku_edit_forms', name: 'Edit Buku Forms', component: BukuEditForms },
  { path: '/base/kriteria_add_forms', name: 'Add Buku Forms', component: KriteriaAddForms },
  { path: '/base/kriteria_edit_forms', name: 'Edit Buku Forms', component: KriteriaEditForms },
  { path: '/base/nilai_add_forms', name: 'Add Penilaian Forms', component: NilaiAddForms },
  { path: '/base/nilai_edit_forms', name: 'Edit Penilaian Forms', component: NilaiEditForms },
  { path: '/base/admin_forms', name: 'Admin Forms', component: AdminForms },
  // { path: '/base/switches', name: 'Switches', component: Switches },
  //Tabel
  { path: '/base/tables', name: 'Tables', component: Tables },
  { path: '/base/user_tabel', name: 'User Tables', component: UserTables },
  { path: '/base/jabatan_tabel', name: 'Jabatan Tables', component: JabatanTables },
  { path: '/base/jenis_tabel', name: 'Jenis Tables', component: JenisTables },
  { path: '/base/penulis_tabel', name: 'Penulis Tables', component: PenulisTables },
  { path: '/base/penerbit_tabel', name: 'Penerbit Tables', component: PenerbitTables },
  { path: '/base/buku_tabel', name: 'Book Tables', component: BookTables },
  { path: '/base/kriteria_tabel', name: 'Kriteria Tables', component: KriteriaTables },
  { path: '/base/nilai_tabel', name: 'Nilai Tables', component: NilaiTables },
  { path: '/base/hitung_tabel', name: 'Hitung Tables SAW', component: HitungTables },
  { path: '/base/hitung2_tabel', name: 'Hitung Tables WP', component: Hitung2Tables },
  { path: '/base/admin_tabel', name: 'Admin Tables', component: AdminTables },
  { path: '/base/tabs', name: 'Tabs', component: Tabs },



  { path: '/base/navbars', name: 'Navbars', component: Navbars },
  { path: '/base/navs', name: 'Navs', component: Navs },



  { path: '/buttons', exact: true, name: 'Buttons', component: Buttons },
  { path: '/buttons/buttons', name: 'Buttons', component: Buttons },
  { path: '/buttons/button-dropdowns', name: 'Button Dropdowns', component: ButtonDropdowns },
  { path: '/buttons/button-groups', name: 'Button Groups', component: ButtonGroups },
  { path: '/buttons/brand-buttons', name: 'Brand Buttons', component: BrandButtons },




  { path: '/notifications', exact: true, name: 'Notifications', component: Alerts },
  { path: '/notifications/alerts', name: 'Alerts', component: Alerts },


  { path: '/widgets', name: 'Widgets', component: Widgets },
  { path: '/charts', name: 'Charts', component: Charts },
  { path: '/users', exact: true,  name: 'Users', component: Users },
  { path: '/users/:id', exact: true, name: 'User Details', component: User },
];

export default routes;
