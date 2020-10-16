export default {
  items: [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-speedometer',
      badge: {
        variant: 'info',
        text: 'NEW',
      },
    },
    {
      title: true,
      name: 'Components',
      wrapper: {
        element: '',
        attributes: {},
      },
    },
    {
      name: 'Data',
      url: '/base',
      icon: 'icon-puzzle',
      children: [
        // {
        //         //   name: 'Forms',
        //         //   url: '/base/forms',
        //         //   icon: 'icon-list',
        //         // },
        {
          name: 'Data User',
          url: '/base/user_tabel',
          icon: 'icon-folder',
        },
        {
          name: 'Data Jabatan User',
          url: '/base/jabatan_tabel',
          icon: 'icon-folder',
        },
        {
          name: 'Data Jenis Buku',
          url: '/base/jenis_tabel',
          icon: 'icon-folder',
        },
        {
          name: 'Data Penulis Buku',
          url: '/base/penulis_tabel',
          icon: 'icon-folder',
        },
        {
          name: 'Data Penerbit Buku',
          url: '/base/penerbit_tabel',
          icon: 'icon-folder',
        },
        {
          name: 'Data Buku',
          url: '/base/buku_tabel',
          icon: 'icon-folder',
        },
        {
          name: 'Data Kriteria Buku',
          url: '/base/kriteria_tabel',
          icon: 'icon-folder',
        },
        {
          name: 'Data Nilai Buku',
          url: '/base/nilai_tabel',
          icon: 'icon-folder',
        },
        {
          name: 'Data Perhitungan SAW',
          url: '/base/hitung_tabel',
          icon: 'icon-folder',
        },
        {
          name: 'Data Admin',
          url: '/base/admin_tabel',
          icon: 'icon-folder',
        },
      ],
    },

    {
      name: 'Charts',
      url: '/charts',
      icon: 'icon-pie-chart',
    }
    // ,
    // {
    //   name: 'Sign Out',
    //   url: '/logout',
    //   icon: 'icon-logout',
    // }

    // ,
    // {
    //   title: true,
    //   name: 'Extras',
    // },
    // {
    //   name: 'Pages',
    //   url: '/pages',
    //   icon: 'icon-star',
    //   children: [
    //     {
    //       name: 'Login',
    //       url: '/login',
    //       icon: 'icon-star',
    //     },
    //     {
    //       name: 'Register',
    //       url: '/register',
    //       icon: 'icon-star',
    //     },
    //     {
    //       name: 'Error 404',
    //       url: '/404',
    //       icon: 'icon-star',
    //     },
    //     {
    //       name: 'Error 500',
    //       url: '/500',
    //       icon: 'icon-star',
    //     },
    //   ],
    // }
  ],
};
