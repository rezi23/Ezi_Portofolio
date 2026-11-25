import type { ProjectItem } from '../types/portfolio';

export const INITIAL_PROJECTS: ProjectItem[] = [
  {
    id: 'pictomatic-dashboard',
    slug: 'pictomatic-dashboard',
    indexLabel: '01',
    title: 'Pictomatic',
    subtitle: {
      id: 'Sistem Enterprise Analitik Real-Time, Kasir POS & Manajemen Aset Kreatif Photobooth Multi-Kiosk',
      en: 'Enterprise Real-Time Analytics, POS Cashier & Creative Asset Management System for Multi-Kiosk Photobooths',
    },
    category: 'dashboard',
    categoryLabel: {
      id: 'Dashboard & Sistem POS',
      en: 'Dashboard & POS Ecosystem',
    },
    client: 'Pictomatic Braga',
    year: '2026',
    role: {
      id: 'Principal UI/UX Design & Frontend Architecture',
      en: 'Principal UI/UX Design & Frontend Architecture',
    },
    imageUrl: './assets/aistudio/pictomatic-statistics.png',
    accentHex: '#F5F2EB',
    featured: true,
    summary: {
      id: 'Platform kendali operasional 11 modul terpusat yang menyatukan Main Board Overview, monitoring statistik pendapatan harian real-time, audit transaksi kiosk & biller 12 kolom, terminal Input Transaksi Kasir (POS) sinkronisasi instan, serta distribusi aset kreatif jarak jauh (Frame cetak, Frame GIF animasi, dan Studio Stiker digital).',
      en: 'Unified 11-module operational command platform integrating an executive Main Board Overview, real-time daily revenue statistics, 12-column kiosk & biller transaction auditing, an instant-sync POS Cashier terminal, and remote creative asset distribution (Print Frames, animated GIF Frames, and Digital Sticker Studio).',
    },
    challenge: {
      id: 'Operasional photobooth multi-cabang memerlukan pemantauan omzet harian real-time, pencatatan transaksi kasir tunai/manual yang langsung tersinkron tanpa selisih pembukuan, rekonsiliasi Gross vs Net Income per kiosk, serta distribusi frame baru, animasi GIF, dan stiker digital ke seluruh mesin kiosk tanpa konfigurasi manual di lokasi.',
      en: 'Multi-branch photobooth operations required real-time daily revenue tracking, manual/cash POS entry that syncs without bookkeeping lag, per-kiosk Gross vs. Net income reconciliation, and remote deployment of print frames, GIF bundles, and digital stickers to every machine.',
    },
    solution: {
      id: 'Membangun aplikasi web 11 modul berkonsep High-Contrast Dark UI: (1) Main Board Overview untuk visibilitas status booth, pendapatan, cetakan, galeri, dan Top Booth; (2) Statistics untuk monitoring pendapatan harian real-time & leaderboard pelanggan; (3) Transaction untuk audit Gross/Net Income & log 12 kolom; (4) Terminal Input Kasir POS dengan jam live & struk otomatis; serta (5) CMS Aset Kreatif untuk distribusi Frame massal, link Frame GIF, dan 16+ Stiker Digital.',
      en: 'Engineered an 11-module dark-UI web suite: (1) Main Board Overview for booth health, revenue, prints, galleries, and Top Booths; (2) Real-Time Daily Statistics & customer leaderboards; (3) Kiosk Transaction Auditing with Gross/Net rules & 12-column logs; (4) POS Cashier Terminal with live clock & receipt preview; and (5) Creative Asset CMS for bulk Frame deployment, GIF bundles, and 16+ digital Stickers.',
    },
    highlights: [
      {
        id: 'Main Board Overview: Visibilitas terpadu rasio booth aktif, grafik Pendapatan, 4 KPI (Sesi, Hari Puncak, Cetakan, Voucher), Gallery & Public Gallery, porsi Top Booth, 8 Transaksi Terbaru, dan Frame Terpopuler.',
        en: 'Main Board Overview: Unified visibility of active booth ratio, Revenue curve, 4 KPIs (Sessions, Peak Day, Prints, Vouchers), Gallery & Public Gallery, Top Booth share, 8 Recent Transactions, and Popular Frames.',
      },
      {
        id: 'Statistik Pendapatan Harian Real-Time: Pemantauan grafik transaksi harian (Senin–Minggu) secara live, pertumbuhan mingguan & bulanan (+35% MoM), komparasi Daftar Booth, dan Leaderboard Metadata pelanggan dengan ekspor 1-klik.',
        en: 'Real-Time Daily Revenue Statistics: Live Mon–Sun transaction bar monitoring, weekly & monthly growth (+35% MoM), per-booth comparisons, and 1-click exportable customer Metadata Leaderboards.',
      },
      {
        id: 'Audit Transaksi & Rekonsiliasi Kiosk: Rekapitulasi Daftar Kiosk (Total Transaksi, Gross Income kumulatif & harian, panduan Net Income biller) bersanding dengan tabel audit Transaksi Hari Ini 12 kolom.',
        en: 'Transaction & Kiosk Auditing: Kiosk Directory rollups (Total Transactions, cumulative & daily Gross Income, biller Net Income notes) paired with a 12-column Today’s Transactions audit table.',
      },
      {
        id: 'Terminal Input Kasir (POS) Sinkronisasi Instan: Dilengkapi badge Kasir Aktif, jam digital real-time, autofill waktu "Sekarang", dan struk Ringkasan Tunai/Manual yang langsung menyinkronkan input ke Dashboard utama.',
        en: 'Instant-Sync POS Cashier Terminal: Active Cashier badge, live digital clock, "Now" timestamp autofill, and a receipt-styled Cash/Manual Summary card syncing directly to the main dashboard.',
      },
      {
        id: 'CMS Frame Massal, Frame GIF & Studio Stiker: Unggah dan distribusikan frame cetak baru secara massal ke setiap photobooth, atur tautan bundle animasi Frame GIF per kiosk, serta kelola 16 stiker aktif (6 pack, 22.900x ditempel) dengan fitur "Tes Tempel di Foto".',
        en: 'Bulk Frame CMS, GIF Bundles & Sticker Studio: Upload and bulk-deploy new print frames to every photobooth, map per-kiosk animated GIF bundles, and manage 16 active stickers (6 packs, 22,900x placed) with a live photo simulator.',
      },
    ],
    stack: [
      'React 19',
      'TypeScript',
      'Tailwind CSS',
      'Real-Time Analytics',
      'POS Cashier System',
      'Remote Kiosk CMS',
      'CSV / Report Export',
    ],
    metrics: [
      { label: { id: 'Modul Terpadu', en: 'Unified Modules' }, value: '11 Modul' },
      { label: { id: 'Stiker Ditempel', en: 'Stickers Placed' }, value: '22.900x' },
      { label: { id: 'Sinkronisasi POS', en: 'POS Data Sync' }, value: 'Real-Time' },
    ],
    hotspots: [
      {
        id: 'picto-nav',
        x: 24,
        y: 6,
        title: {
          id: 'Navigasi 11 Modul Operasional Terpadu',
          en: '11-Module Unified Operational Navigation',
        },
        description: {
          id: 'Akses instan ke Overview, Gallery, Public Gallery, Statistics, Transaction, Kasir POS, Frame, Frame GIF, Voucher, Sticker, dan Queue.',
          en: 'Instant access across Overview, Gallery, Public Gallery, Statistics, Transaction, POS Cashier, Frame, Frame GIF, Voucher, Sticker, and Queue.',
        },
      },
      {
        id: 'picto-chart',
        x: 44,
        y: 23,
        title: {
          id: 'Kurva Pendapatan & 4 Kartu KPI Inti',
          en: 'Revenue Curve & 4 Core KPI Cards',
        },
        description: {
          id: 'Fluktuasi pendapatan real-time bersanding dengan metrik Sesi, Hari Puncak, Total Cetakan, dan penggunaan Sesi Voucher.',
          en: 'Real-time revenue curve paired with Sessions, Peak Day, Total Prints, and Voucher usage counters.',
        },
      },
      {
        id: 'picto-daily-bars',
        x: 44,
        y: 53,
        title: {
          id: 'Monitoring Transaksi Harian & Pertumbuhan Bulanan',
          en: 'Daily Transaction Monitoring & Monthly Growth',
        },
        description: {
          id: 'Grafik batang Total Transaksi Harian (Senin–Minggu) live, didampingi kartu sorotan Mingguan dan Bulanan (+35% MoM).',
          en: 'Live Monday–Sunday daily transaction bars paired with Weekly and Monthly growth highlight cards (+35% MoM).',
        },
      },
      {
        id: 'picto-booth',
        x: 53,
        y: 78,
        title: {
          id: 'Daftar Booth, Top Booth & Leaderboard Metadata',
          en: 'Booth Directory, Top Booth Share & Leaderboard',
        },
        description: {
          id: 'Komparasi pendapatan Hari Ini vs Bulan Ini tiap kiosk, bar porsi Top Booth 100%, Frame Terpopuler, dan Leaderboard Metadata siap ekspor.',
          en: 'Today vs. Monthly per-booth revenue table, 100% Top Booth share bar, Popular Frame search, and exportable customer Metadata Leaderboard.',
        },
      },
    ],
    modules: [
      {
        id: 'overview',
        tabLabel: { id: '01. Main Overview', en: '01. Main Overview' },
        badge: { id: 'Pusat Kendali Utama', en: 'Executive Command Board' },
        title: {
          id: 'Main Board Overview — Pusat Visibilitas Seluruh Operasional Booth',
          en: 'Main Board Overview — Full-Spectrum Booth Operations Visibility',
        },
        imageUrl: './assets/aistudio/pictomatic-overview.png',
        description: {
          id: 'Layar kendali utama yang menyajikan seluruh indikator vital jaringan photobooth dalam satu tampilan. Manajemen dapat memantau rasio booth aktif, memfilter data berdasarkan tanggal spesifik atau periode (Hari, Minggu, Bulan), serta memeriksa pendapatan, aktivitas cetak, galeri kiosk, hingga kontribusi Top Booth secara simultan.',
          en: 'Primary command screen consolidating all vital photobooth network indicators in one view. Management tracks active booth ratios, filters data by specific dates or periods (Day, Week, Month), and inspects revenue, print volume, kiosk galleries, and Top Booth share simultaneously.',
        },
        capabilities: [
          {
            id: 'Grafik Pendapatan & 4 KPI Inti: Memantau kurva Pendapatan periode berjalan beserta kartu metrik Sesi, Hari Puncak, jumlah Cetakan fisik, dan Sesi Voucher.',
            en: 'Revenue Curve & 4 Core KPIs: Tracks active-period revenue trends alongside Sessions, Peak Day, physical Print counts, and Voucher Sessions.',
          },
          {
            id: 'Panel Gallery, Public Gallery & Top Booth: Memeriksa tangkapan foto hari ini per kiosk, galeri publik berbasis URL, serta distribusi porsi pendapatan Top Booth.',
            en: 'Gallery, Public Gallery & Top Booth: Inspects today’s kiosk photo captures, URL-shared public galleries, and Top Booth revenue contribution share.',
          },
          {
            id: '8 Transaksi Terbaru & Frame Terpopuler: Menampilkan log 8 sesi terakhir secara live (Waktu, Booth, Frame, Nominal) bersanding dengan peringkat Frame Terpopuler.',
            en: '8 Recent Transactions & Popular Frames: Streams the 8 latest sessions (Time, Booth, Frame, Amount) next to the most frequently selected frames.',
          },
        ],
        hotspots: [
          {
            id: 'ov-header',
            x: 78,
            y: 17,
            title: {
              id: 'Pemilih Tanggal & Filter Hari / Minggu / Bulan',
              en: 'Date Picker & Day / Week / Month Filter',
            },
            description: {
              id: 'Menginspeksi performa seluruh booth pada tanggal tertentu atau beralih cepat antar agregasi harian, mingguan, dan bulanan.',
              en: 'Inspects network-wide booth performance on a specific date or toggles between daily, weekly, and monthly aggregations.',
            },
          },
          {
            id: 'ov-revenue',
            x: 39,
            y: 41,
            title: {
              id: 'Kanvas Utama Grafik Pendapatan',
              en: 'Primary Revenue Trend Canvas',
            },
            description: {
              id: 'Visualisasi akumulasi pendapatan sepanjang periode aktif lengkap dengan pintasan menuju detail statistik.',
              en: 'Visualizes cumulative revenue across the active period with a direct shortcut into deep-dive statistics.',
            },
          },
          {
            id: 'ov-kpis',
            x: 72,
            y: 41,
            title: {
              id: 'Kuadran KPI Sesi, Hari Puncak, Cetakan & Voucher',
              en: 'Sessions, Peak Day, Prints & Voucher KPI Quadrant',
            },
            description: {
              id: 'Empat kartu indikator yang merangkum volume sesi foto, hari tersibuk, jumlah kertas tercetak, dan pemakaian voucher.',
              en: 'Four KPI cards summarizing photo session volume, busiest day, physical photo prints, and voucher redemptions.',
            },
          },
          {
            id: 'ov-bottom',
            x: 48,
            y: 78,
            title: {
              id: 'Monitoring Gallery, Top Booth & 8 Transaksi Terbaru',
              en: 'Gallery Feeds, Top Booth Share & 8 Recent Transactions',
            },
            description: {
              id: 'Menyatukan tangkapan foto kiosk hari ini, Public Gallery, porsi Top Booth, serta rincian 8 sesi transaksi terakhir.',
              en: 'Unifies today’s kiosk photo captures, Public Gallery status, Top Booth share, and the 8 most recent transactions.',
            },
          },
        ],
      },
      {
        id: 'statistics',
        tabLabel: { id: '02. Statistik Real-Time', en: '02. Real-Time Statistics' },
        badge: { id: 'Monitoring Pendapatan Harian', en: 'Daily Revenue Monitoring' },
        title: {
          id: 'Statistik Pendapatan Harian — Monitoring Omzet & Performa Real-Time',
          en: 'Daily Revenue Statistics — Real-Time Turnover & Performance Monitoring',
        },
        imageUrl: './assets/aistudio/pictomatic-statistics.png',
        description: {
          id: 'Modul analitik finansial untuk memonitor pergerakan pendapatan harian secara real-time setiap hari. Menghubungkan kurva lonjakan pendapatan bulanan, grafik batang transaksi harian (Senin–Minggu), persentase pertumbuhan otomatis (+35% MoM), komparasi pendapatan antar-cabang, hingga leaderboard metadata pelanggan.',
          en: 'Financial analytics module built to monitor daily revenue movements in real time every day. Connects monthly revenue curves, Monday–Sunday daily transaction bars, automated growth percentages (+35% MoM), multi-branch comparisons, and customer metadata leaderboards.',
        },
        capabilities: [
          {
            id: 'Grafik Batang Transaksi Harian (Senin–Minggu) Live: Memantau omzet harian sepanjang minggu berjalan dengan filter pengalih metrik Pendapatan, Foto, atau Sesi Voucher.',
            en: 'Live Daily Transaction Bars (Mon–Sun): Monitors day-by-day turnover across the active week with Revenue, Photo, and Voucher Session metric toggles.',
          },
          {
            id: 'Kartu Pertumbuhan Mingguan & Bulanan (+35% MoM): Menghitung akumulasi Total Transaksi Mingguan dan persentase kenaikan bulanan secara otomatis dibanding periode sebelumnya.',
            en: 'Weekly & Monthly Growth Cards (+35% MoM): Automatically computes Weekly Transaction totals and month-over-month revenue growth percentages.',
          },
          {
            id: 'Daftar Booth, Top Booth 100% & Leaderboard Metadata: Tabel komparasi omzet Hari Ini vs Bulan Ini tiap booth, bar kontribusi Top Booth, serta Leaderboard pelanggan (Email, Telepon, Nama, Rating) dengan tombol + Export.',
            en: 'Booth Directory, Top Booth 100% & Metadata Leaderboard: Today vs. Monthly per-booth revenue table, Top Booth share bar, and customer Leaderboard (Email, Phone, Name, Rating) with + Export.',
          },
        ],
        hotspots: [
          {
            id: 'stat-curve',
            x: 45,
            y: 22,
            title: {
              id: 'Kurva Tren Pendapatan Bulanan (Rp 47.345)',
              en: 'Monthly Revenue Trend Curve (Rp 47,345)',
            },
            description: {
              id: 'Memetakan titik lonjakan pendapatan harian sepanjang bulan bersanding dengan Sesi (2), Hari Puncak (2 Nov), dan Cetakan (3).',
              en: 'Maps daily revenue peaks across the month alongside live counters for Sessions (2), Peak Day (2 Nov), and Prints (3).',
            },
          },
          {
            id: 'stat-daily',
            x: 43,
            y: 53,
            title: {
              id: 'Grafik Batang Total Transaksi Harian Real-Time',
              en: 'Real-Time Daily Transaction Bar Chart',
            },
            description: {
              id: 'Pemantauan pemasukan harian dari Senin hingga Minggu secara langsung, dilengkapi tab Pendapatan, Foto, dan Sesi Voucher.',
              en: 'Live day-by-day revenue tracking from Monday to Sunday with toggles for Revenue, Photos, and Voucher Sessions.',
            },
          },
          {
            id: 'stat-growth',
            x: 74,
            y: 53,
            title: {
              id: 'Kartu Sorotan Mingguan & Pertumbuhan Bulanan (+35%)',
              en: 'Weekly & Monthly Growth Highlight Cards (+35%)',
            },
            description: {
              id: 'Menampilkan total transaksi mingguan (Rp 35.000) serta indikator kenaikan bulanan +35% dibanding Oktober 2026.',
              en: 'Surfaces weekly transaction totals (Rp 35,000) and an instant +35% month-over-month growth indicator.',
            },
          },
          {
            id: 'stat-leaderboard',
            x: 54,
            y: 90,
            title: {
              id: 'Leaderboard Metadata Pelanggan & Ekspor Laporan',
              en: 'Customer Metadata Leaderboard & Report Export',
            },
            description: {
              id: 'Mengurutkan frekuensi sesi dan total belanja pelanggan dengan filter Email, Telepon, Nama, Rating, serta aksi + Export.',
              en: 'Ranks customer session frequency and total spend with filters for Email, Phone, Name, Rating, and 1-click + Export.',
            },
          },
        ],
      },
      {
        id: 'transaction',
        tabLabel: { id: '03. Transaksi & Kiosk', en: '03. Transactions & Kiosks' },
        badge: { id: 'Audit & Rekonsiliasi', en: 'Audit & Reconciliation' },
        title: {
          id: 'Manajemen Transaksi — Rekonsiliasi Pendapatan Kiosk & Audit Harian 12 Kolom',
          en: 'Transaction Management — Kiosk Revenue Reconciliation & 12-Column Daily Audit',
        },
        imageUrl: './assets/aistudio/pictomatic-transaction.png',
        description: {
          id: 'Modul pembukuan finansial yang menyandingkan rekapitulasi pendapatan per mesin kiosk dengan tabel audit transaksi harian. Memudahkan tim keuangan merekonsiliasi Gross Income (harga paket kiosk & voucher berhasil) sekaligus memverifikasi Net Income terhadap biller pembayaran.',
          en: 'Financial ledger module pairing per-kiosk revenue rollups with a granular daily transaction audit table. Streamlines Gross Income reconciliation (kiosk package pricing & valid vouchers) while verifying Net Income against payment billers.',
        },
        capabilities: [
          {
            id: 'Rekapitulasi Daftar Kiosk & Ekspor Data: Menampilkan Nama Kiosk (Pictomatic Braga), Total Transaksi, Gross Income kumulatif, Transaksi Hari Ini, Gross Income Hari Ini, pencarian kiosk, Lihat Transaksi, dan + Export.',
            en: 'Kiosk Directory Rollup & Data Export: Lists Kiosk Name (Pictomatic Braga), Total Transactions, cumulative Gross Income, Today’s Transactions, Today’s Gross Income, search, View Transactions, and + Export.',
          },
          {
            id: 'Pedoman Rekonsiliasi Gross vs Net Income: Banner aturan akuntansi transparan mengenai tanggal mulai pencatatan, definisi Gross Income, dan pengecekan Net Income pada biller.',
            en: 'Gross vs. Net Income Reconciliation Guide: Built-in accounting notice clarifying tracking dates, Gross Income definitions, and biller settlement verification.',
          },
          {
            id: 'Tabel Audit Transaksi Hari Ini (12 Kolom): Melacak No, ID Transaksi, ID Biller, Kiosk, Waktu, Status Transaksi, Status Sesi, Tipe, Uang Masuk, Cetak, Voucher, dan Supplier.',
            en: '12-Column Today’s Transactions Audit Table: Tracks No, Transaction ID, Biller ID, Kiosk, Time, Transaction Status, Session Status, Type, Cash In, Print, Voucher, and Supplier.',
          },
        ],
        hotspots: [
          {
            id: 'trx-kiosk-header',
            x: 64,
            y: 16,
            title: {
              id: 'Pencarian Kiosk & Tombol + Export',
              en: 'Kiosk Search & + Export Action',
            },
            description: {
              id: 'Memfilter mesin kiosk berdasarkan lokasi dan mengekspor rekapitulasi pendapatan untuk pembukuan.',
              en: 'Filters kiosk machines by location name and exports revenue rollups for accounting.',
            },
          },
          {
            id: 'trx-notes',
            x: 42,
            y: 26,
            title: {
              id: 'Aturan Akuntansi Gross Income & Biller',
              en: 'Gross Income & Biller Accounting Rules',
            },
            description: {
              id: 'Penjelasan resmi histori pencatatan income, komponen Gross Income, serta rujukan pengecekan Net Income melalui biller.',
              en: 'Official accounting notes detailing income history, Gross Income components, and biller Net Income verification.',
            },
          },
          {
            id: 'trx-kiosk-row',
            x: 49,
            y: 39,
            title: {
              id: 'Baris Performa Kiosk (Kumulatif vs Hari Ini)',
              en: 'Per-Kiosk Performance Row (Cumulative vs. Today)',
            },
            description: {
              id: 'Rincian Pictomatic Braga: Total Transaksi (3), Gross Income (Rp 82.345), metrik hari ini, dan tombol Lihat Transaksi.',
              en: 'Pictomatic Braga summary: Total Transactions (3), Gross Income (Rp 82,345), today’s metrics, and View Transactions button.',
            },
          },
          {
            id: 'trx-today-table',
            x: 49,
            y: 63,
            title: {
              id: 'Skema Tabel Audit Transaksi 12 Kolom',
              en: '12-Column Transaction Audit Schema',
            },
            description: {
              id: 'Mencakup ID Transaksi, ID Biller, Kiosk, Waktu, Status Transaksi, Status Sesi, Tipe, Uang Masuk, Cetak, Voucher, dan Supplier.',
              en: 'Covers Transaction ID, Biller ID, Kiosk, Time, Transaction Status, Session Status, Type, Cash In, Print, Voucher, and Supplier.',
            },
          },
        ],
      },
      {
        id: 'kasir',
        tabLabel: { id: '04. Input Kasir (POS)', en: '04. POS Cashier Input' },
        badge: { id: 'Sinkronisasi Real-Time', en: 'Instant Dashboard Sync' },
        title: {
          id: 'Input Transaksi Kasir — Terminal POS Manual dengan Pratinjau Struk Live',
          en: 'POS Cashier Transaction Input — Manual Terminal with Live Receipt Preview',
        },
        imageUrl: './assets/aistudio/pictomatic-kasir.png',
        description: {
          id: 'Terminal Point of Sale (POS) khusus kasir untuk mencatat transaksi tunai atau manual pengunjung di lokasi booth. Setiap input langsung tersinkronisasi secara real-time ke grafik pendapatan dan tabel transaksi di Dashboard pusat, lengkap dengan pratinjau struk sebelum pengiriman.',
          en: 'Dedicated Point of Sale (POS) terminal for booth cashiers to record walk-in or cash transactions. Every entry syncs immediately in real time to central dashboard revenue charts and logs, complete with a live receipt preview prior to submission.',
        },
        capabilities: [
          {
            id: 'Status Kasir Aktif & Jam Digital Presisi: Menampilkan indikator hijau KASIR AKTIF beserta jam digital live hingga satuan detik dan tanggal hari berjalan.',
            en: 'Active Cashier Status & Precision Digital Clock: Displays an emerald KASIR AKTIF badge paired with a live second-by-second clock and full date.',
          },
          {
            id: 'Form Detail Transaksi & Tombol Waktu "Sekarang": Input cepat Nama Pengunjung, Jumlah Sesi, Waktu Transaksi dengan autofill "Sekarang" 1-klik, dan Total Bayar (Rp) angka murni.',
            en: 'Transaction Form & "Now" Timestamp Autofill: Fast entry for Visitor Name, Session Count, Transaction Time with 1-click "Sekarang" autofill, and numeric Total Payment (Rp).',
          },
          {
            id: 'Struk Ringkasan Live (Tunai / Manual) & Auto-Reset: Kartu struk bergerigi di kanan yang memverifikasi nama, sesi, waktu, dan TOTAL secara live sebelum dikirim, lalu mengosongkan form otomatis.',
            en: 'Live Receipt Summary (Cash / Manual) & Auto-Reset: Serrated receipt card on the right verifying visitor details and live TOTAL before submission, followed by automatic form clearing.',
          },
        ],
        hotspots: [
          {
            id: 'kasir-clock',
            x: 88,
            y: 13,
            title: {
              id: 'Jam Digital Real-Time & Status Kasir Aktif',
              en: 'Real-Time Digital Clock & Active Cashier Status',
            },
            description: {
              id: 'Penunjuk waktu live (18:52:30 · Sabtu, 21 November 2026) dan badge KASIR AKTIF untuk akurasi waktu transaksi.',
              en: 'Live timestamp readout (18:52:30 · Saturday, Nov 21, 2026) and KASIR AKTIF badge ensuring accurate transaction logging.',
            },
          },
          {
            id: 'kasir-form',
            x: 32,
            y: 52,
            title: {
              id: 'Formulir Input Kasir & Autofill "Sekarang"',
              en: 'Cashier Input Form & "Now" Time Autofill',
            },
            description: {
              id: 'Kolom Nama Pengunjung, Jumlah Sesi, Waktu Transaksi dengan tombol pengisi jam otomatis "Sekarang", dan Total Bayar.',
              en: 'Fields for Visitor Name, Session Count, Transaction Time with a 1-click "Sekarang" autofill button, and Total Payment.',
            },
          },
          {
            id: 'kasir-receipt',
            x: 78,
            y: 43,
            title: {
              id: 'Kartu Struk Ringkasan (Tunai / Manual)',
              en: 'Live Receipt Summary Card (Cash / Manual)',
            },
            description: {
              id: 'Pratinjau struk kasir berkontras tinggi untuk mengecek rincian pengunjung dan nominal TOTAL sebelum menekan tombol kirim.',
              en: 'High-contrast receipt preview allowing cashiers to verify visitor details and Rupiah TOTAL before submitting.',
            },
          },
          {
            id: 'kasir-submit',
            x: 32,
            y: 83,
            title: {
              id: 'Kirim Data Transaksi & Sinkronisasi Dashboard',
              en: 'Submit Transaction & Instant Dashboard Sync',
            },
            description: {
              id: 'Menyinkronkan transaksi langsung ke server Dashboard utama dan me-reset form otomatis untuk antrean berikutnya.',
              en: 'Syncs transaction data immediately to the central dashboard and auto-resets the form for the next visitor.',
            },
          },
        ],
      },
      {
        id: 'frame',
        tabLabel: { id: '05. Manajemen Frame', en: '05. Frame Management' },
        badge: { id: 'Distribusi Frame Kiosk', en: 'Multi-Kiosk Frame CMS' },
        title: {
          id: 'Manajemen Frame — Tambah & Distribusikan Frame Baru ke Setiap Photobooth',
          en: 'Frame Management — Upload & Distribute New Frames to Every Photobooth',
        },
        imageUrl: './assets/aistudio/pictomatic-frame.png',
        description: {
          id: 'Sistem manajemen katalog frame cetak tempat tim operasional menambahkan desain frame baru ke setiap unit photobooth agar langsung dapat dipilih dan dipakai oleh pengunjung. Mendukung pengaturan ukuran kertas cetak, jumlah slot foto, distribusi massal ke banyak kiosk sekaligus, serta pelacakan popularitas 30 hari terakhir.',
          en: 'Print-frame catalog CMS enabling operations teams to add new frame designs to every photobooth kiosk so visitors can immediately select and use them. Supports print size variants, photo-slot counts, bulk multi-kiosk deployment, and 30-day popularity tracking.',
        },
        capabilities: [
          {
            id: 'Tambah Frame Satuan & Distribusi Massal ke Kiosk: Tombol "+ Tambah Frame" dan "Tambah Frame Massal ke Kiosk" untuk merilis desain frame baru ke seluruh cabang photobooth secara serentak.',
            en: 'Single & Bulk Kiosk Frame Deployment: "+ Tambah Frame" and "Tambah Frame Massal ke Kiosk" buttons to roll out new frame designs across all photobooth branches at once.',
          },
          {
            id: 'Kendali Ukuran, Jumlah Slot Foto & Kiosk Aktif: Mengatur Preview visual, Nama Frame, Sumber aset, Ukuran cetak, Jumlah Foto per strip, dan penugasan Kiosk.',
            en: 'Print Size, Photo Slots & Assigned Kiosks: Controls visual Preview, Frame Name, Asset Source, Print Size, Photo Count per layout, and target Kiosks.',
          },
          {
            id: 'Analitik Pemakaian Frame 30 Hari: Indikator ringkasan jumlah frame, variasi ukuran, dan metrik "Dipakai (30 Hari)" untuk mengevaluasi frame favorit pengunjung.',
            en: '30-Day Frame Usage Analytics: Summary pills for total frames, size variants, and a "Used (30 Days)" counter to evaluate visitor-favorite designs.',
          },
        ],
        hotspots: [
          {
            id: 'frame-actions',
            x: 69,
            y: 14,
            title: {
              id: 'Tambah Frame Massal ke Kiosk & + Tambah Frame',
              en: 'Bulk Kiosk Frame Deployment & + Add Frame',
            },
            description: {
              id: 'Mengunggah desain frame baru dan mendistribusikannya secara massal ke seluruh mesin photobooth agar siap dipakai pengunjung.',
              en: 'Uploads new frame designs and bulk-distributes them across all photobooth kiosks for immediate visitor use.',
            },
          },
          {
            id: 'frame-filters',
            x: 54,
            y: 14,
            title: {
              id: 'Pencarian Nama Frame & Filter Ukuran',
              en: 'Frame Name Search & Size Filter',
            },
            description: {
              id: 'Menyaring katalog frame berdasarkan kata kunci nama tema atau dimensi ukuran kertas cetak.',
              en: 'Filters the frame catalog by theme keywords or physical print size dimensions.',
            },
          },
          {
            id: 'frame-metrics',
            x: 28,
            y: 19,
            title: {
              id: 'Indikator Total Frame, Ukuran & Pemakaian 30 Hari',
              en: 'Total Frames, Sizes & 30-Day Usage Counters',
            },
            description: {
              id: 'Ringkasan cepat jumlah koleksi frame aktif, variasi ukuran, dan total pemakaian dalam 30 hari terakhir.',
              en: 'Quick counters for active frame inventory, size variations, and total visitor usage over the last 30 days.',
            },
          },
          {
            id: 'frame-schema',
            x: 49,
            y: 23,
            title: {
              id: 'Tabel Spesifikasi & Distribusi Kiosk',
              en: 'Frame Specification & Kiosk Distribution Table',
            },
            description: {
              id: 'Memuat kolom Preview, Nama, Sumber, Ukuran, Jumlah Foto, Kiosk tujuan, Dipakai (30 Hari), dan Aksi.',
              en: 'Manages Preview, Name, Source, Size, Photo Count, assigned Kiosks, 30-Day Usage, and Actions.',
            },
          },
        ],
      },
      {
        id: 'frame-gif',
        tabLabel: { id: '06. Frame GIF', en: '06. Frame GIF' },
        badge: { id: 'Konfigurasi Animasi GIF', en: 'Animated GIF Bundles' },
        title: {
          id: 'Frame GIF — Konfigurasi Tautan Bundle Animasi GIF untuk Setiap Kiosk',
          en: 'Frame GIF — Per-Kiosk Animated GIF Frame Bundle Configuration',
        },
        imageUrl: './assets/aistudio/pictomatic-frame-gif.png',
        description: {
          id: 'Modul pengelolaan aset animasi Frame GIF untuk menghasilkan salinan digital bergerak bagi pengunjung di setiap photobooth. Tim operasional dapat menautkan URL bundle animasi spesifik ke masing-masing kiosk, memantau status kesiapan tautan, serta mengekspor laporan konfigurasi ke CSV.',
          en: 'Animated GIF Frame management module delivering moving digital keepsakes for photobooth visitors. Operations teams bind specific animated asset bundle URLs to individual kiosks, monitor link readiness, and export configuration reports to CSV.',
        },
        capabilities: [
          {
            id: 'Pemetaan Tautan Bundle GIF per Kiosk: Tombol "+ Atur Link Frame" untuk menautkan bundle animasi Frame GIF sesuai tema lokasi cabang atau event kiosk.',
            en: 'Per-Kiosk GIF Bundle Mapping: "+ Atur Link Frame" action binding animated GIF frame bundles tailored to each branch or event kiosk.',
          },
          {
            id: 'Indikator Kesiapan Link Kiosk: Kapsul status yang merinci Total Kiosk, jumlah kiosk dengan Link Terpasang, kiosk Belum Diatur, dan urutan Terakhir Update.',
            en: 'Kiosk Link Readiness Pills: Status indicators detailing Total Kiosks, Active Links Installed, Unconfigured kiosks, and Last Updated sorting.',
          },
          {
            id: 'Audit Konfigurasi & + Export CSV: Tabel pemantauan Nama Kiosk, Link Frame, dan waktu Terakhir Diubah lengkap dengan pencarian kiosk dan unduh CSV 1-klik.',
            en: 'Configuration Audit & + Export CSV: Monitoring table for Kiosk Name, Frame Link, and Last Modified timestamp with search and 1-click CSV export.',
          },
        ],
        hotspots: [
          {
            id: 'gif-actions',
            x: 70,
            y: 14,
            title: {
              id: '+ Atur Link Frame & + Export CSV',
              en: '+ Configure Frame Link & + Export CSV',
            },
            description: {
              id: 'Menetapkan tautan bundle animasi Frame GIF baru ke kiosk target serta mengekspor data konfigurasi ke CSV.',
              en: 'Assigns new animated GIF frame bundle links to target kiosks and exports configuration data to CSV.',
            },
          },
          {
            id: 'gif-status-pills',
            x: 32,
            y: 19,
            title: {
              id: 'Status Total Kiosk, Link Terpasang & Belum Diatur',
              en: 'Total Kiosks, Installed Links & Pending Status',
            },
            description: {
              id: 'Memantau kepatuhan konfigurasi animasi di seluruh jaringan kiosk agar tidak ada mesin yang belum terpasang link.',
              en: 'Monitors animation configuration coverage across the kiosk network so no machine is left unconfigured.',
            },
          },
          {
            id: 'gif-table',
            x: 49,
            y: 23,
            title: {
              id: 'Tabel Mapping Nama Kiosk & URL Link Frame',
              en: 'Kiosk Name & Frame Link URL Mapping Table',
            },
            description: {
              id: 'Menampilkan daftar Nama Kiosk, tautan Link Frame aktif, waktu Terakhir Diubah, dan tombol Aksi.',
              en: 'Displays Kiosk Name, active Frame Link URL, Last Modified timestamp, and Action controls.',
            },
          },
        ],
      },
      {
        id: 'sticker',
        tabLabel: { id: '07. Studio Stiker', en: '07. Sticker Studio' },
        badge: { id: '16 Stiker · 22.900x Ditempel', en: '16 Stickers · 22,900x Placed' },
        title: {
          id: 'Studio Stiker Digital — Manajemen Aset Dekorasi, 6 Pack Tematik & Simulasi Foto',
          en: 'Digital Sticker Studio — Decoration Asset CMS, 6 Themed Packs & Photo Simulator',
        },
        imageUrl: './assets/aistudio/pictomatic-sticker.jpg',
        description: {
          id: 'Pusat pengelolaan aset stiker digital interaktif yang digunakan pengunjung untuk menghias foto di layar sentuh photobooth. Mengelola 16 stiker aktif dalam 6 kategori Sticker Packs tematik, melacak analitik 22.900x penempelan stiker secara real-time, mendistribusikannya ke seluruh kiosk, dan menyediakan simulator "Tes Tempel di Foto".',
          en: 'Interactive digital sticker CMS empowering visitors to decorate photos on photobooth touchscreens. Manages 16 active stickers across 6 themed Sticker Packs, tracks 22,900+ real-time placements, distributes assets across kiosks, and includes a live "Test Sticker on Photo" simulator.',
        },
        capabilities: [
          {
            id: '16 Stiker Aktif dalam 6 Kategori Pack & Analitik Real-Time: Melacak popularitas aset seperti Sparkle Star Y2K (2.840x dipakai), Cute Bunny Ears (2.410x), dan Pink Satin Ribbon (1.980x) di kategori Y2K Aesthetic, Cute Korean / K-Pop, Birthday & Party, Love & Romantic, Vintage & Tape, serta Doodle Props & Anime.',
            en: '16 Active Stickers in 6 Themed Packs & Live Analytics: Tracks top assets like Sparkle Star Y2K (2,840x used), Cute Bunny Ears (2,410x), and Pink Satin Ribbon (1,980x) across Y2K Aesthetic, Cute Korean / K-Pop, Birthday & Party, Love & Romantic, Vintage & Tape, and Doodle Props & Anime.',
          },
          {
            id: 'Simulator "Tes Tempel di Foto" & 3 Mode Tampilan: Fitur uji coba penempelan stiker di atas sampel foto sebelum rilis ke kiosk, didukung mode Galeri Grid, Tabel Stiker, dan Sticker Packs.',
            en: '"Test Sticker on Photo" Simulator & 3 View Modes: Sandbox to test sticker placement and transparency on sample photos prior to kiosk rollout, plus Grid Gallery, Table, and Pack views.',
          },
          {
            id: 'Kontrol Kartu Stiker Granular & Export CSV: Setiap kartu menampilkan preview transparan, status Aktif, jumlah kiosk terhubung (4–8 Kiosk), counter pemakaian, serta aksi Coba, Edit, dan Matikan.',
            en: 'Granular Sticker Card Controls & CSV Export: Each card displays a transparency preview, Active badge, connected kiosk count (4–8 Kiosks), usage counter, and Try, Edit, and Disable actions.',
          },
        ],
        hotspots: [
          {
            id: 'stk-toolbar',
            x: 33,
            y: 15,
            title: {
              id: 'Mode Galeri Grid / Tabel / Packs & Filter Kategori',
              en: 'Grid / Table / Packs View Switcher & Category Filter',
            },
            description: {
              id: 'Beralih antara tampilan Galeri Grid visual, Tabel Stiker, atau Sticker Packs lengkap dengan pencarian dan filter kiosk.',
              en: 'Switches between visual Grid Gallery, Sticker Table, and Sticker Packs views alongside search and kiosk filters.',
            },
          },
          {
            id: 'stk-simulator',
            x: 63,
            y: 15,
            title: {
              id: '+ Tambah Stiker & Simulasi "Tes Tempel di Foto"',
              en: '+ Add Sticker & "Test Sticker on Photo" Simulator',
            },
            description: {
              id: 'Mengunggah stiker PNG transparan baru dan menguji tampilannya langsung di atas foto sampel sebelum dipublikasikan.',
              en: 'Uploads new transparent PNG stickers and tests their placement on sample photos before pushing live to kiosks.',
            },
          },
          {
            id: 'stk-stats-bar',
            x: 37,
            y: 19,
            title: {
              id: 'Bar Analitik (16 Stiker Aktif · 6 Packs · 22.900x Ditempel)',
              en: 'Analytics Bar (16 Active · 6 Packs · 22,900x Placed)',
            },
            description: {
              id: 'Ringkasan total stiker aktif, jumlah pack, kiosk terhubung, total akumulasi penempelan (22.900x), dan stiker #1 terpopuler.',
              en: 'Summarizes active stickers, pack count, connected kiosks, cumulative visitor placements (22,900x), and #1 trending sticker.',
            },
          },
          {
            id: 'stk-cards',
            x: 45,
            y: 44,
            title: {
              id: 'Katalog Kartu Stiker & Counter Pemakaian per Kiosk',
              en: 'Sticker Asset Cards & Per-Kiosk Usage Counters',
            },
            description: {
              id: 'Preview stiker di atas kanvas transparan, tag kategori pack, jumlah kiosk, angka pemakaian (2.840x), serta tombol Coba/Edit/Matikan.',
              en: 'Sticker previews on checkerboard canvas, pack tags, kiosk count, usage metrics (2,840x), and Try/Edit/Disable actions.',
            },
          },
        ],
      },
    ],
  },
  {
    id: 'adabtiv-bast-generator',
    slug: 'adabtiv-bast-generator',
    indexLabel: '02',
    title: 'Generator BAST Adabtiv',
    subtitle: {
      id: 'Sistem Otomasi Berita Acara Serah Terima (BAST) 4-Tahap, Ejaan Hukum Terbilang & Lampiran Bukti Tayang A4',
      en: '4-Step Official Handover Document (BAST) Automation, Legal Spelled-Out Currency & A4 Live Proof Suite',
    },
    category: 'automation',
    categoryLabel: {
      id: 'Otomasi Dokumen',
      en: 'Document Automation',
    },
    client: 'PT Inspirasi Suara Baik (Adabtiv)',
    year: '2026',
    role: {
      id: 'Product Design & Full Frontend Build',
      en: 'Product Design & Full Frontend Build',
    },
    imageUrl: './assets/aistudio/bast-step-1-campaign.jpg',
    accentHex: '#F5F2EB',
    featured: true,
    summary: {
      id: 'Aplikasi web otomasi dokumen legal agensi dengan alur wizard 4-tahap (Info Campaign, Pihak & Legal, Deliverables & Nilai, Lampiran Bukti Tayang) yang tersinkronisasi real-time ke kanvas A4 multi-halaman. Dilengkapi konversi tanggal & nominal rupiah terbilang otomatis, kontrol stempel & tanda tangan digital, saran cepat deliverables, paste bukti tayang via Ctrl+V, serta Export PDF 1-klik.',
      en: 'Agency legal document automation web app featuring a 4-step wizard (Campaign Info, Parties & Legal, Deliverables & Value, Live Proof Attachments) synced in real time to a multi-page A4 canvas. Includes automated legal date and spelled-out Rupiah conversion, digital stamp/signature toggles, quick-insert deliverable chips, Ctrl+V screenshot pasting, and 1-click PDF export.',
    },
    challenge: {
      id: 'Tim operasional dan legal agensi kerap menghabiskan waktu berjam-jam menyusun dokumen serah terima proyek untuk klien korporasi seperti PT Garuda Indonesia Persero Tbk karena harus menulis format tanggal terbilang, mengeja nominal rupiah secara manual, merapikan identitas badan hukum kedua belah pihak, serta menata screenshot bukti tayang lintas media (Adabtiv, Cretivox, dll.) di halaman lampiran.',
      en: 'Agency operations and legal teams spent hours assembling project handover documents for enterprise clients like PT Garuda Indonesia Persero Tbk—manually typing spelled-out dates and Rupiah amounts, formatting dual legal entity blocks, and aligning multi-channel proof screenshots across attachment pages.',
    },
    solution: {
      id: 'Membangun ruang kerja split-screen berpresisi tinggi: panel kiri menyajikan editor bertahap 4 tab dengan progres visual (Format Tanggal Otomatis, Default Resmi Pihak Pertama + toggle Stempel/TTD, Chip Saran Cepat Deliverables + Ejaan Terbilang Otomatis, serta Multi-Halaman Bukti Tayang dengan dukungan Ctrl+V), sedangkan panel kanan menampilkan pratinjau dokumen resmi A4 (Total 3+ Halaman) secara live lengkap dengan fitur Template Presets, Drafts, Highlight Kuning, dan Export PDF.',
      en: 'Engineered a high-precision split-screen workspace: the left pane provides a 4-tab guided wizard (Automated Legal Date Formatter, Default First-Party Legal Profile + Stamp/Signature toggles, Quick-Insert Deliverable Chips + Spelled-Out Rupiah Engine, and Multi-Page Proof Attachments with Ctrl+V support), while the right pane renders a live multi-page A4 document canvas with Template Presets, Drafts, Yellow Highlight Mode, and PDF Export.',
    },
    highlights: [
      {
        id: 'Otomasi Format Tanggal Hukum & Info Campaign (Tahap 1): Mengubah input kalender (02/11/2026) menjadi format header hukum terbilang ("2/11/2026 Dua November Dua Ribu Dua Puluh Enam") serta format tertanda pembukaan & TTD secara otomatis.',
        en: 'Automated Legal Date Formatting & Campaign Info (Step 1): Converts calendar dates (02/11/2026) into spelled-out legal header strings ("2/11/2026 Dua November Dua Ribu Dua Puluh Enam") and opening/signature date formats automatically.',
      },
      {
        id: 'Manajemen Badan Hukum, Stempel Basah & TTD Digital (Tahap 2): Memuat profil Default Resmi PT Inspirasi Suara Baik beserta checkbox instan untuk menyertakan Stempel Resmi & TTD CEO, dilengkapi form Pihak Kedua (Client) dan opsi unggah TTD digital mitra.',
        en: 'Dual Legal Entity, Official Stamp & Digital Signature Controls (Step 2): Pre-loads official PT Inspirasi Suara Baik entity data with instant checkboxes for company stamp and CEO signature, paired with Client legal fields and second-party signature upload.',
      },
      {
        id: 'Chip Saran Cepat Deliverables & Ejaan Rupiah Terbilang (Tahap 3): Menyediakan chip 1-klik (+ 1x Carousel Instagram, + 2x IG Stories, + 1x Video TikTok, + Laporan Analitik) serta mengonversi angka Rp 17.500.000 menjadi "Tujuh Belas Juta Lima Ratus Ribu Rupiah" tanpa risiko salah ketik.',
        en: 'Quick-Insert Deliverable Chips & Spelled-Out Currency Engine (Step 3): Provides 1-click deliverable chips (+ 1x Instagram Carousel, + 2x IG Stories, + 1x TikTok Video, + Analytics Report) and auto-converts Rp 17,500,000 into formal Indonesian legal wording.',
      },
      {
        id: 'Generator Lampiran Bukti Tayang Multi-Halaman & Paste Ctrl+V (Tahap 4): Menambahkan halaman lampiran dinamis (Hal. 2, Hal. 3, dst.) per media/bagian (Adabtiv, Cretivox) lengkap dengan tanggal tayang, URL postingan, serta unggah ganda atau paste screenshot langsung via Ctrl+V.',
        en: 'Multi-Page Live Proof Attachment Builder & Ctrl+V Paste (Step 4): Dynamically generates attachment pages (Page 2, Page 3, etc.) per media channel (Adabtiv, Cretivox) with upload dates, post URLs, dual-photo slots, and direct Ctrl+V clipboard pasting.',
      },
    ],
    stack: [
      'React 19',
      'TypeScript',
      'Tailwind CSS',
      '4-Step Legal Wizard',
      'Terbilang & Date Engine',
      'Ctrl+V Clipboard API',
      'Multi-Page A4 PDF',
    ],
    metrics: [
      { label: { id: 'Alur Editor', en: 'Wizard Steps' }, value: '4 Tahap' },
      { label: { id: 'Waktu Susun', en: 'Drafting Time' }, value: '< 3 Mnt' },
      { label: { id: 'Output Cetak', en: 'Print Output' }, value: 'Multi-Hal A4' },
    ],
    hotspots: [
      {
        id: 'bast-toolbar',
        x: 68,
        y: 3,
        title: {
          id: 'Toolbar Template Presets, Drafts, Salin Teks & Export PDF',
          en: 'Template Presets, Drafts, Copy Text & Export PDF Toolbar',
        },
        description: {
          id: 'Bar kendali utama untuk memuat preset proyek, menyimpan draf di browser, menyalin naskah BAST, dan mengekspor seluruh halaman ke PDF.',
          en: 'Primary action bar to load project presets, save browser drafts, copy plain-text clauses, and export all pages to PDF.',
        },
      },
      {
        id: 'bast-wizard-tabs',
        x: 25,
        y: 8,
        title: {
          id: 'Navigasi Wizard 4-Tahap & Indikator Progres',
          en: '4-Step Wizard Navigation & Progress Bar',
        },
        description: {
          id: 'Memandu pengguna melewati 1. Info Campaign, 2. Pihak & Legal, 3. Deliverables & Nilai, hingga 4. Bukti Tayang secara terstruktur.',
          en: 'Guides users sequentially through 1. Campaign Info, 2. Parties & Legal, 3. Deliverables & Value, and 4. Live Proof.',
        },
      },
      {
        id: 'bast-preview',
        x: 61,
        y: 44,
        title: {
          id: 'Kanvas Dokumen Resmi BAST A4 Multi-Halaman',
          en: 'Multi-Page Official A4 BAST Document Canvas',
        },
        description: {
          id: 'Pratinjau dokumen hukum real-time (Total: 3 Halaman — BAST + Bukti Tayang) lengkap dengan mode Highlight Kuning dan kontrol zoom 90%.',
          en: 'Real-time legal document preview (Total: 3 Pages — BAST + Proof Sheets) complete with Yellow Highlight verification mode and zoom controls.',
        },
      },
      {
        id: 'bast-stamp',
        x: 56,
        y: 80,
        title: {
          id: 'Otomasi Stempel Basah Digital & Blok Tanda Tangan',
          en: 'Automated Digital Company Stamp & Signature Block',
        },
        description: {
          id: 'Merender stempel resmi PT Inspirasi Suara Baik dan tanda tangan CEO yang sejajar presisi dengan kolom tanda tangan Pihak Kedua.',
          en: 'Renders the official PT Inspirasi Suara Baik stamp and CEO signature aligned cleanly with the Second Party signature block.',
        },
      },
    ],
    modules: [
      {
        id: 'info-campaign',
        tabLabel: { id: '01. Info Campaign', en: '01. Campaign Info' },
        badge: { id: 'Format Tanggal Hukum Otomatis', en: 'Automated Legal Date Engine' },
        title: {
          id: 'Tahap 1: Info Campaign — Identitas Proyek & Konversi Format Tanggal Hukum Otomatis',
          en: 'Step 1: Campaign Info — Project Identity & Automated Legal Date Conversion',
        },
        imageUrl: './assets/aistudio/bast-step-1-campaign.jpg',
        description: {
          id: 'Langkah pertama wizard BAST yang mengatur identitas utama kampanye (seperti GARUDA INDONESIA MANAGE MY BOOKING), tanggal BAST, dan periode pekerjaan. Dilengkapi mesin Format Tanggal Otomatis yang langsung menerjemahkan tanggal angka menjadi kalimat hukum terbilang pada judul header dokumen serta format tanggal penandatanganan di bagian pembuka dan penutup.',
          en: 'First wizard stage configuring core campaign identity (e.g., GARUDA INDONESIA MANAGE MY BOOKING), BAST date, and work period. Features an Automated Legal Date Formatter that immediately translates calendar dates into spelled-out Indonesian legal strings for the document header, opening paragraph, and signature block.',
        },
        capabilities: [
          {
            id: 'Sinkronisasi Header Project Campaign Real-Time: Input nama kampanye otomatis dicetak kapital tebal pada tajuk utama dokumen resmi ("PROJECT CAMPAIGN GARUDA INDONESIA MANAGE MY BOOKING") dan di dalam paragraf penyerahan pekerjaan.',
            en: 'Real-Time Campaign Header Sync: Campaign title input automatically renders in bold uppercase across the official document header and handover clause.',
          },
          {
            id: 'Mesin Format Tanggal Otomatis (Header & TTD): Mengonversi tanggal 02/11/2026 menjadi ejaan hukum lengkap "2/11/2026 Dua November Dua Ribu Dua Puluh Enam" untuk header serta "2 November 2026" untuk kalimat pembuka dan tanggal tanda tangan.',
            en: 'Automated Legal Date Formatter (Header & Signature): Converts 02/11/2026 into full legal wording "2/11/2026 Dua November Dua Ribu Dua Puluh Enam" for the header and "2 November 2026" for opening and signature lines.',
          },
          {
            id: 'Mode Highlight Kuning & Reset Contoh Korporat: Menyediakan toggle Highlight Kuning (Mode Template Panduan) untuk menandai bagian dinamis pada kertas A4 serta tombol Reset ke Contoh Garuda.',
            en: 'Yellow Highlight Guidance Mode & Enterprise Sample Reset: Includes a Yellow Highlight mode to visually inspect dynamic fields on the A4 sheet plus a 1-click Reset to Garuda sample.',
          },
        ],
        hotspots: [
          {
            id: 'bast-s1-campaign',
            x: 25,
            y: 19,
            title: {
              id: 'Input Nama Project Campaign & Periode Pekerjaan',
              en: 'Project Campaign Name & Work Period Fields',
            },
            description: {
              id: 'Mengisi nama proyek (GARUDA INDONESIA MANAGE MY BOOKING), Tanggal BAST (02/11/2026), dan Periode Pekerjaan (Oktober 2026).',
              en: 'Captures project title (GARUDA INDONESIA MANAGE MY BOOKING), BAST Date (02/11/2026), and Work Period (Oktober 2026).',
            },
          },
          {
            id: 'bast-s1-date-engine',
            x: 25,
            y: 42,
            title: {
              id: 'Panel Format Tanggal Otomatis (BAST Adabtiv)',
              en: 'Automated Legal Date Formatter Panel',
            },
            description: {
              id: 'Menghasilkan Format Header BAST terbilang ("2/11/2026 Dua November Dua Ribu Dua Puluh Enam"), tanggal tertanda, dan Kota Penandatanganan.',
              en: 'Auto-generates spelled-out BAST header dates, opening/signature date strings, and signing city (Jakarta).',
            },
          },
          {
            id: 'bast-s1-doc-header',
            x: 61,
            y: 23,
            title: {
              id: 'Render Tajuk Utama & Tanggal Terbilang di Kertas A4',
              en: 'Live A4 Document Header & Spelled-Out Date Render',
            },
            description: {
              id: 'Pratinjau langsung tajuk BERITA ACARA SERAH TERIMA PEKERJAAN beserta judul kampanye dan tanggal terbilang di lembar A4.',
              en: 'Instant preview of the formal handover title, campaign header, and spelled-out legal date on the A4 sheet.',
            },
          },
          {
            id: 'bast-s1-guide',
            x: 25,
            y: 97,
            title: {
              id: 'Mode Highlight Kuning & Reset ke Contoh Garuda',
              en: 'Yellow Highlight Guidance & Sample Reset Bar',
            },
            description: {
              id: 'Memudahkan tim operasional memverifikasi variabel dokumen yang berubah atau mengembalikan form ke template standar Garuda Indonesia.',
              en: 'Helps operators verify dynamic document variables or reset the workspace to the standard Garuda Indonesia enterprise example.',
            },
          },
        ],
      },
      {
        id: 'pihak-legal',
        tabLabel: { id: '02. Pihak & Legal', en: '02. Parties & Legal' },
        badge: { id: 'Badan Hukum & Stempel Digital', en: 'Legal Entities & Digital Stamp' },
        title: {
          id: 'Tahap 2: Pihak & Legal — Konfigurasi Badan Hukum, Stempel Resmi & Tanda Tangan Digital',
          en: 'Step 2: Parties & Legal — Dual Legal Entities, Official Stamp & Digital Signatures',
        },
        imageUrl: './assets/aistudio/bast-step-2-legal.jpg',
        description: {
          id: 'Modul pengelolaan identitas hukum Pihak Pertama (PT Inspirasi Suara Baik / Adabtiv) dan Pihak Kedua (Perusahaan Klien / Mitra). Dilengkapi profil Default Resmi agensi agar tim tidak perlu mengetik ulang alamat badan hukum, serta kontrol checkbox instan untuk menyematkan stempel basah perusahaan dan tanda tangan digital di lembar A4.',
          en: 'Legal identity module governing First Party (PT Inspirasi Suara Baik / Adabtiv) and Second Party (Client / Partner Corporation) credentials. Pre-configured with agency Default Official credentials to eliminate repetitive typing, paired with instant checkboxes to embed the company stamp and digital signatures on the A4 sheet.',
        },
        capabilities: [
          {
            id: 'Profil Default Resmi Pihak Pertama (Adabtiv): Memuat otomatis Nama Penandatangan (Dwiki Karunia Putra), Jabatan (Chief Executive Officer), Nama Badan Hukum (PT Inspirasi Suara Baik), dan alamat lengkap kantor pusat.',
            en: 'Pre-Loaded First Party Official Profile (Adabtiv): Automatically populates Signatory Name (Dwiki Karunia Putra), Title (Chief Executive Officer), Legal Entity (PT Inspirasi Suara Baik), and registered office address.',
          },
          {
            id: 'Toggle Stempel Resmi & Tanda Tangan Digital 1-Klik: Dua kontrol checkbox untuk menyertakan atau menyembunyikan Stempel Resmi PT Inspirasi Suara Baik serta tanda tangan CEO langsung pada blok tanda tangan BAST.',
            en: '1-Click Official Stamp & CEO Signature Toggles: Dual checkboxes to dynamically overlay or hide the official PT Inspirasi Suara Baik stamp and CEO signature on the BAST signature block.',
          },
          {
            id: 'Data Pihak Kedua (Client Korporat) & Upload TTD Mitra: Mencatat Nama Penanggung Jawab Client (Sarah Savira), Jabatan, Nama PT (PT Garuda Indonesia Persero Tbk), alamat lengkap mitra, serta fitur upload tanda tangan digital Pihak Kedua.',
            en: 'Second Party Enterprise Client Form & Signature Upload: Captures Client PIC Name (Sarah Savira), Title, Legal Corporation Name (PT Garuda Indonesia Persero Tbk), corporate address, and optional Second Party digital signature upload.',
          },
        ],
        hotspots: [
          {
            id: 'bast-s2-party1',
            x: 25,
            y: 26,
            title: {
              id: 'Kartu Pihak Pertama (Default Resmi PT Inspirasi Suara Baik)',
              en: 'First Party Card (Default Official Agency Profile)',
            },
            description: {
              id: 'Menyimpan data baku CEO, nama badan hukum PT Inspirasi Suara Baik, dan alamat Gedung OBE Jakarta Timur.',
              en: 'Stores default CEO credentials, PT Inspirasi Suara Baik legal entity name, and East Jakarta headquarter address.',
            },
          },
          {
            id: 'bast-s2-stamp-toggles',
            x: 23,
            y: 41,
            title: {
              id: 'Checkbox Stempel Resmi & Tanda Tangan CEO',
              en: 'Official Company Stamp & CEO Signature Checkboxes',
            },
            description: {
              id: 'Mengaktifkan rendering stempel basah digital Adabtiv dan tanda tangan Dwiki Karunia Putra secara instan di lembar dokumen.',
              en: 'Instantly toggles rendering of the digital Adabtiv company stamp and Dwiki Karunia Putra’s signature on the A4 preview.',
            },
          },
          {
            id: 'bast-s2-party2',
            x: 25,
            y: 61,
            title: {
              id: 'Kartu Pihak Kedua (Client / PT Garuda Indonesia Persero Tbk)',
              en: 'Second Party Card (Client / PT Garuda Indonesia Persero Tbk)',
            },
            description: {
              id: 'Mengelola data PIC klien (Sarah Savira), jabatan, nama PT mitra, alamat Bandara Soekarno-Hatta, dan opsi upload TTD digital klien.',
              en: 'Manages client PIC details (Sarah Savira), title, corporate entity name, address, and optional client digital signature upload.',
            },
          },
          {
            id: 'bast-s2-sig-preview',
            x: 61,
            y: 78,
            title: {
              id: 'Pratinjau Komparasi Blok Pihak Pertama & Pihak Kedua',
              en: 'Live Dual-Party Legal & Signature Block Preview',
            },
            description: {
              id: 'Menampilkan hasil tata letak identitas kedua badan hukum beserta posisi stempel dan tanda tangan yang presisi di dokumen A4.',
              en: 'Displays the formatted legal entity clauses and aligned dual-party signature blocks on the printable A4 canvas.',
            },
          },
        ],
      },
      {
        id: 'deliverables-nilai',
        tabLabel: { id: '03. Deliverables & Nilai', en: '03. Deliverables & Value' },
        badge: { id: 'Saran Cepat & Rupiah Terbilang', en: 'Quick Chips & Spelled-Out Currency' },
        title: {
          id: 'Tahap 3: Deliverables & Nilai — Daftar Hasil Pekerjaan & Ejaan Rupiah Terbilang Otomatis',
          en: 'Step 3: Deliverables & Value — Work Deliverables List & Automated Spelled-Out Rupiah',
        },
        imageUrl: './assets/aistudio/bast-step-3-deliverables.jpg',
        description: {
          id: 'Modul penyusunan daftar hasil pekerjaan (deliverables) yang diserahkan kepada klien beserta nilai nominal kontrak. Dirancang untuk mempercepat input akun eksekutif melalui tombol Saran Cepat jenis konten media sosial serta mesin konversi Ejaan Terbilang Otomatis yang mengubah nominal angka Rupiah menjadi kalimat hukum baku.',
          en: 'Deliverables and contract value builder engineered to accelerate account executive workflows. Combines Quick-Insert social media deliverable chips with an Automated Spelled-Out Currency Engine that converts numeric Rupiah values into formal Indonesian legal text.',
        },
        capabilities: [
          {
            id: 'Chip Saran Cepat Deliverables (+ Tambah Item): Menyediakan pintasan 1-klik (+ 1x Carousel Instagram, + 2x IG Stories, + 1x Video TikTok, + Laporan Analitik) serta kontrol urutan naik/turun dan hapus butir pekerjaan.',
            en: 'Quick-Insert Deliverable Chips (+ Add Item): Provides 1-click presets (+ 1x Instagram Carousel, + 2x IG Stories, + 1x TikTok Video, + Analytics Report) with up/down reordering and item deletion.',
          },
          {
            id: 'Mesin Ejaan Terbilang Otomatis (Rupiah): Saat pengguna mengetik angka nominal (Rp 17.500.000), sistem otomatis menerjemahkannya menjadi "Tujuh Belas Juta Lima Ratus Ribu Rupiah" secara akurat.',
            en: 'Automated Spelled-Out Rupiah Engine: As users type numeric values (Rp 17,500,000), the system automatically translates them into "Tujuh Belas Juta Lima Ratus Ribu Rupiah".',
          },
          {
            id: 'Format Klausul Penyerahan & Nominal Baku di A4: Merender daftar bullet point deliverables dan kalimat klausul "Nominal Pekerjaan Rp.17.500.000 Tujuh Belas Juta Lima Ratus Ribu Rupiah" secara langsung di dokumen.',
            en: 'Live Legal Handover & Value Clause Rendering: Formats bulleted deliverables and the bold legal value statement directly onto the A4 handover sheet.',
          },
        ],
        hotspots: [
          {
            id: 'bast-s3-chips',
            x: 24,
            y: 20,
            title: {
              id: 'Chip Saran Cepat Deliverables & + Tambah Item',
              en: 'Quick-Insert Deliverable Chips & + Add Item',
            },
            description: {
              id: 'Menambahkan format deliverables standar agensi (+ 1x Carousel Instagram, + 2x IG Stories, + 1x Video TikTok, + Laporan Analitik) dalam satu klik.',
              en: 'Inserts standard agency deliverable formats (+ 1x Instagram Carousel, + 2x IG Stories, + 1x TikTok Video, + Analytics Report) in one click.',
            },
          },
          {
            id: 'bast-s3-list',
            x: 25,
            y: 26,
            title: {
              id: 'Editor Butir Pekerjaan dengan Kontrol Urutan',
              en: 'Deliverable Item Editor with Reorder Controls',
            },
            description: {
              id: 'Mengedit deskripsi detail deliverables kampanye yang otomatis diformat menjadi daftar bullet point (•) pada dokumen BAST.',
              en: 'Edits detailed campaign deliverable descriptions that automatically format as bullet points (•) on the BAST document.',
            },
          },
          {
            id: 'bast-s3-terbilang',
            x: 25,
            y: 38,
            title: {
              id: 'Input Nominal Rupiah & Ejaan Terbilang Otomatis',
              en: 'Numeric Rupiah Input & Automated Spelled-Out Text',
            },
            description: {
              id: 'Mengonversi input Rp 17.500.000 secara real-time menjadi teks terbilang "Tujuh Belas Juta Lima Ratus Ribu Rupiah".',
              en: 'Converts Rp 17,500,000 in real time into formal spelled-out legal text "Tujuh Belas Juta Lima Ratus Ribu Rupiah".',
            },
          },
          {
            id: 'bast-s3-clause-preview',
            x: 61,
            y: 59,
            title: {
              id: 'Render Klausul Deliverables & Nominal di Dokumen A4',
              en: 'Live Deliverables & Value Clause on A4 Sheet',
            },
            description: {
              id: 'Menampilkan hasil akhir butir pekerjaan dan kalimat pengesahan nominal kontrak yang siap ditandatangani kedua belah pihak.',
              en: 'Displays the formatted deliverable bullets and bold contract value clause ready for executive sign-off.',
            },
          },
        ],
      },
      {
        id: 'bukti-tayang',
        tabLabel: { id: '04. Bukti Tayang (2)', en: '04. Live Proof (2)' },
        badge: { id: 'Multi-Halaman & Paste Ctrl+V', en: 'Multi-Page & Ctrl+V Paste' },
        title: {
          id: 'Tahap 4: Lampiran Bukti Tayang — Generator Halaman Bukti Multi-Media & Paste Ctrl+V',
          en: 'Step 4: Live Proof Attachments — Multi-Channel Proof Sheet Generator & Ctrl+V Paste',
        },
        imageUrl: './assets/aistudio/bast-step-4-proof.jpg',
        description: {
          id: 'Modul penyusun halaman lampiran bukti tayang resmi (Halaman 2, Halaman 3, dan seterusnya) yang menjadi syarat wajib pencairan invoice kampanye agensi. Mendukung penambahan halaman bukti tak terbatas untuk berbagai kanal media (misal: Bukti #1 — Adabtiv di Hal. 2, Bukti #2 — Cretivox di Hal. 3) lengkap dengan fitur tempel screenshot langsung dari clipboard (Ctrl+V).',
          en: 'Official proof-of-performance attachment builder (Page 2, Page 3, and beyond) required for agency campaign billing. Supports unlimited proof pages across media channels (e.g., Proof #1 — Adabtiv on Page 2, Proof #2 — Cretivox on Page 3) complete with direct Ctrl+V clipboard screenshot pasting.',
        },
        capabilities: [
          {
            id: 'Generator Halaman Lampiran Dinamis (+ Tambah Halaman Bukti): Setiap item bukti tayang otomatis membentuk halaman A4 baru (Hal. 2, Hal. 3, dst.) lengkap dengan Nama Bagian/Media (Adabtiv, Cretivox), Tanggal Upload, dan Link URL postingan live.',
            en: 'Dynamic Attachment Page Generator (+ Add Proof Page): Each proof entry automatically generates a dedicated A4 attachment page (Page 2, Page 3, etc.) with Media Channel Name (Adabtiv, Cretivox), Upload Date, and live post URL.',
          },
          {
            id: 'Paste Screenshot via Ctrl+V & Upload 2 Foto Sekaligus: Mendukung tombol "Pilih 1–2 Foto Sekaligus", drag-and-drop file, paste URL gambar, atau langsung menekan Ctrl+V pada slot Foto 1 (Utama) dan Foto 2 (Opsional).',
            en: 'Direct Ctrl+V Screenshot Paste & Dual-Photo Upload: Supports "Select 1–2 Photos Simultaneously", file drag-and-drop, image URL pasting, or pressing Ctrl+V directly into Photo 1 (Primary) and Photo 2 (Optional) slots.',
          },
          {
            id: 'Indikator Status Foto Terpasang & Ekspor PDF Multi-Halaman: Menampilkan badge hijau "Terpasang", pratinjau thumbnail bukti tayang, kontrol Ganti Foto/Hapus, serta penghitung otomatis "Total: 3 Halaman (BAST + Bukti Tayang)" yang siap diekspor ke PDF.',
            en: 'Installed Photo Status & Multi-Page PDF Export: Displays emerald "Terpasang" (Attached) badges, thumbnail previews, Replace/Delete controls, and an automated "Total: 3 Pages (BAST + Live Proof)" counter ready for 1-click PDF export.',
          },
        ],
        hotspots: [
          {
            id: 'bast-s4-add-page',
            x: 32,
            y: 16,
            title: {
              id: 'Header Lampiran & Tombol + Tambah Halaman Bukti',
              en: 'Attachment Header & + Add Proof Page Trigger',
            },
            description: {
              id: 'Menambahkan lembar lampiran bukti tayang baru (Halaman 2, 3, dst.) secara dinamis sesuai jumlah media publikasi kampanye.',
              en: 'Dynamically adds new A4 proof attachment sheets (Pages 2, 3, etc.) matching the number of campaign publication channels.',
            },
          },
          {
            id: 'bast-s4-proof1',
            x: 25,
            y: 38,
            title: {
              id: 'Kartu Bukti #1 — Adabtiv (Hal. 2) & Paste Ctrl+V',
              en: 'Proof #1 Card — Adabtiv (Page 2) & Ctrl+V Slot',
            },
            description: {
              id: 'Memuat metadata media Adabtiv (14 November 2026), tautan URL Instagram, serta slot Foto 1 (Terpasang) dan Foto 2 dengan dukungan Ctrl+V.',
              en: 'Captures Adabtiv media metadata (Nov 14, 2026), Instagram post URL, and Photo 1 (Attached) & Photo 2 slots with Ctrl+V clipboard support.',
            },
          },
          {
            id: 'bast-s4-proof2',
            x: 25,
            y: 78,
            title: {
              id: 'Kartu Bukti #2 — Cretivox (Hal. 3) Multi-Channel',
              en: 'Proof #2 Card — Cretivox (Page 3) Multi-Channel',
            },
            description: {
              id: 'Mengorganisir bukti tayang kanal kedua (Cretivox · 17 November 2026) beserta URL dan lampiran screenshot secara terpisah di Halaman 3.',
              en: 'Organizes second-channel proof (Cretivox · Nov 17, 2026) with its own URL and screenshot attachments on Page 3.',
            },
          },
          {
            id: 'bast-s4-page-counter',
            x: 49,
            y: 8,
            title: {
              id: 'Indikator Total 3 Halaman (BAST + Bukti Tayang)',
              en: 'Total 3 Pages (BAST + Live Proof) Counter',
            },
            description: {
              id: 'Menampilkan jumlah total halaman dokumen A4 yang terbentuk secara real-time dan siap diunduh menjadi satu file PDF resmi.',
              en: 'Displays the real-time total A4 page count ready to be exported into a single consolidated official PDF.',
            },
          },
        ],
      },
    ],
  },
  {
    id: 'adabtiv-spk-generator',
    slug: 'adabtiv-spk-generator',
    indexLabel: '03',
    title: 'Adabtiv SPK Generator',
    subtitle: {
      id: 'Sistem Penyusun Surat Perjanjian Kerja (SPK) 5-Bagian, 3 Preset Industri & Klausul Kontrak A4 2 Halaman',
      en: '5-Section Work Agreement (SPK) Contract Builder, 3 Industry Presets & Dual-Page A4 Legal Suite',
    },
    category: 'automation',
    categoryLabel: {
      id: 'Otomasi Dokumen',
      en: 'Document Automation',
    },
    client: 'PT Inspirasi Suara Baik (Adabtiv)',
    year: '2026',
    role: {
      id: 'UI Design & Frontend Engineering',
      en: 'UI Design & Frontend Engineering',
    },
    imageUrl: './assets/aistudio/spk-step-2-party1.jpg',
    accentHex: '#F5F2EB',
    featured: true,
    summary: {
      id: 'Aplikasi web penyusun kontrak Surat Perjanjian Kerja (SPK) dengan 3 preset industri 1-klik (Tech/Gadget, FMCG/Beauty, Otomotif/Event), editor akordeon 5 bagian (Informasi Campaign, Pihak Pertama/Klien, Pihak Kedua/Default Adabtiv, Statement of Work a-b-c otomatis, serta Nilai Kontrak, Termin H+ & Cancellation Fee), dilengkapi Auto-Save riwayat draf dan pratinjau A4 2 halaman.',
      en: 'Agency Work Agreement (SPK) contract builder featuring 3 one-click industry presets (Tech/Gadget, FMCG/Beauty, Automotive/Event), a 5-section accordion editor (Campaign Info, First Party/Client, Second Party/Default Adabtiv, auto-lettered Statement of Work, and Contract Value, H+ Payment Terms & Cancellation Fee), with browser Auto-Save and dual-page A4 preview.',
    },
    challenge: {
      id: 'Tim akun dan legal agensi kerap menghabiskan banyak waktu menyusun draf kontrak kerja sama kampanye untuk berbagai vertikal brand (seperti PT Cahaya Kosmetika Indonesia) karena harus menyesuaikan butir deliverables SoW, menghitung ulang ejaan nilai pajak/invoice, mengatur klausul termin pembayaran (H+ Hari) serta persentase biaya pembatalan (Cancellation Fee) secara manual.',
      en: 'Agency account and legal teams spent excessive time drafting campaign work agreements across client verticals (such as PT Cahaya Kosmetika Indonesia)—manually customizing SoW deliverables, spelling out tax-inclusive invoice values, and adjusting H+ payment terms and cancellation fee percentages.',
    },
    solution: {
      id: 'Membangun aplikasi kontrak split-screen berarsitektur akordeon 5 bagian dengan Template Cepat 3 Preset Industri yang langsung mengisi skema kampanye dan deliverables secara otomatis. Setiap perubahan pada identitas para pihak, butir SoW, maupun parameter finansial (Termin H+30 Hari & Cancellation Fee 50%) langsung menyusun klausul hukum di lembar A4 Halaman 1 & Halaman 2 secara real-time, didukung penyimpanan otomatis (Tersimpan otomatis) dan manajemen Draf & Riwayat.',
      en: 'Engineered a split-screen contract workspace around a 5-section accordion editor and 3 One-Click Industry Presets that populate campaign schemas and deliverables automatically. Every edit to legal parties, SoW items, or financial parameters (H+30 payment terms & 50% cancellation fee) updates formal legal clauses across Page 1 & Page 2 A4 sheets in real time, backed by browser Auto-Save and Draft & History management.',
    },
    highlights: [
      {
        id: '3 Preset Industri Instan & Auto-Save Draf Lokal (Bagian 1): Sekali klik pada preset (Tech/Gadget, FMCG/Beauty, Otomotif/Event) mengisi Nama Campaign, Kode Projek, tanggal dokumen, serta skema deliverables otomatis, diamankan oleh fitur Tersimpan Otomatis beserta panel Draf & Riwayat.',
        en: '3 Instant Industry Presets & Local Draft Auto-Save (Section 1): One click on Tech/Gadget, FMCG/Beauty, or Automotive/Event presets populates campaign titles, project codes, dates, and deliverables, protected by real-time Auto-Save and Drafts & History.',
      },
      {
        id: 'Konfigurasi Pihak Pertama (Klien) & Kanvas Tanda Tangan (Bagian 2): Mengelola Nama PT Klien (PT Cahaya Kosmetika Indonesia), Nama Penanggung Jawab (Jessica Halim), nama perwakilan di lembar TTD, serta fitur interaktif "Gambar atau Upload Tanda Tangan".',
        en: 'First Party (Client) Legal Setup & Signature Canvas (Section 2): Captures Client Corporation Name (PT Cahaya Kosmetika Indonesia), PIC Name (Jessica Halim), signatory display name, and an interactive "Draw or Upload Signature" control.',
      },
      {
        id: 'Profil Default Resmi Pihak Kedua (Adabtiv) & Cap Basah (Bagian 3): Memuat otomatis kredensial PT Inspirasi Suara Baik yang diwakili Dwiki Karunia Putra (CEO) lengkap dengan checkbox penyematan Cap Basah Resmi & Tanda Tangan.',
        en: 'Default Second Party (Adabtiv) Profile & Official Wet Stamp (Section 3): Pre-loads PT Inspirasi Suara Baik credentials represented by Dwiki Karunia Putra (CEO) with a 1-click Official Wet Stamp & Signature checkbox.',
      },
      {
        id: 'Penomoran Otomatis Statement of Work & Parameter Finansial Kontrak (Bagian 4 & 5): Menyusun daftar deliverables SoW berpenomoran huruf (a, b, c) otomatis pada Pasal 1, serta mengatur Nominal Total Invoice (Termasuk Pajak) lengkap dengan ejaan Terbilang, Termin Pembayaran (H+ 30 Hari), dan Cancellation Fee (50%).',
        en: 'Auto-Lettered Statement of Work & Financial Terms Engine (Sections 4 & 5): Formats lettered SoW deliverables (a, b, c) into Clause 1 automatically, while configuring Tax-Inclusive Invoice Totals with spelled-out Rupiah, H+30 Day Payment Terms, and 50% Cancellation Fees.',
      },
    ],
    stack: [
      'React 19',
      'TypeScript',
      'Tailwind CSS',
      '5-Part Accordion Editor',
      'Industry Preset Engine',
      'Auto-Save & Draft History',
      'Dual-Page A4 PDF',
    ],
    metrics: [
      { label: { id: 'Preset Industri', en: 'Industry Presets' }, value: '3 Vertikal' },
      { label: { id: 'Struktur Editor', en: 'Editor Structure' }, value: '5 Bagian' },
      { label: { id: 'Penyimpanan', en: 'Persistence' }, value: 'Auto-Save' },
    ],
    hotspots: [
      {
        id: 'spk-presets',
        x: 10,
        y: 11,
        title: {
          id: '3 Tombol Template Cepat (Preset Industri)',
          en: '3 Quick Template Triggers (Industry Presets)',
        },
        description: {
          id: 'Mengisi otomatis struktur kontrak dan deliverables khas Campaign Tech/Gadget, FMCG/Beauty, atau Otomotif/Event dalam satu klik.',
          en: 'Automatically populates contract structure and deliverables for Tech/Gadget, FMCG/Beauty, or Automotive/Event campaigns in one click.',
        },
      },
      {
        id: 'spk-accordion',
        x: 13,
        y: 44,
        title: {
          id: 'Editor Akordeon 5 Bagian Kontrak SPK',
          en: '5-Section SPK Contract Accordion Editor',
        },
        description: {
          id: 'Menata input Informasi Campaign, Pihak Pertama (Klien), Pihak Kedua (Adabtiv), Statement of Work (SoW), dan Nilai Kontrak & Termin.',
          en: 'Cleanly organizes Campaign Info, First Party (Client), Second Party (Adabtiv), Statement of Work (SoW), and Contract Value & Terms.',
        },
      },
      {
        id: 'spk-preview-bar',
        x: 63,
        y: 8,
        title: {
          id: 'Switcher Halaman (Semua / Hal. 1 / Hal. 2), Zoom & PDF',
          en: 'Page Switcher (All / P.1 / P.2), Zoom & PDF Toolbar',
        },
        description: {
          id: 'Navigasi pratinjau lembar A4 antara Semua Halaman, Hal. 1, atau Hal. 2, dilengkapi kontrol zoom 75%, Cetak langsung, dan Export PDF.',
          en: 'Navigates the A4 preview across All Pages, Page 1, and Page 2, complete with 75% zoom scaling, direct Print, and Export PDF.',
        },
      },
      {
        id: 'spk-sheet',
        x: 63,
        y: 48,
        title: {
          id: 'Lembar Kontrak Resmi SPK Berkop Adabtiv',
          en: 'Official Adabtiv-Letterhead SPK Contract Sheet',
        },
        description: {
          id: 'Merender kop resmi ADABTIV (PT Inspirasi Suara Baik), paragraf komparisi para pihak, dan Butir Ketentuan Pasal 1–4 secara real-time.',
          en: 'Renders the official ADABTIV letterhead, dual-party legal preamble, and Clauses 1–4 in real time.',
        },
      },
    ],
    modules: [
      {
        id: 'info-campaign-spk',
        tabLabel: { id: '01. Info Campaign & Preset', en: '01. Campaign & Presets' },
        badge: { id: '3 Preset Industri & Auto-Save', en: '3 Industry Presets & Auto-Save' },
        title: {
          id: 'Bagian 1: Informasi Campaign & Tanggal SPK — 3 Preset Industri & Penyimpanan Otomatis',
          en: 'Section 1: Campaign Info & SPK Date — 3 Industry Presets & Browser Auto-Save',
        },
        imageUrl: './assets/aistudio/spk-step-1-campaign.png',
        description: {
          id: 'Panel pembuka editor SPK yang memadukan 3 tombol Template Cepat (Preset Industri: Campaign Tech / Gadget, Campaign FMCG / Beauty, dan Campaign Otomotif / Event) dengan akordeon Informasi Campaign & Tanggal SPK. Dilengkapi indikator penyimpanan otomatis real-time di browser serta manajemen Draf & Riwayat agar progres penyusunan kontrak selalu aman.',
          en: 'Opening SPK editor module combining 3 Quick Industry Presets (Tech / Gadget, FMCG / Beauty, and Automotive / Event) with the Campaign Info & SPK Date accordion. Equipped with real-time browser Auto-Save indicators and Drafts & History management so contract progress is never lost.',
        },
        capabilities: [
          {
            id: 'Template Cepat 3 Vertikal Industri 1-Klik: Memilih preset Tech/Gadget, FMCG/Beauty, atau Otomotif/Event langsung mengisi kerangka kampanye, kode projek, dan butir deliverables standar industri.',
            en: '1-Click Industry Vertical Presets: Selecting Tech/Gadget, FMCG/Beauty, or Automotive/Event presets immediately populates campaign scaffolding, project codes, and industry-standard deliverables.',
          },
          {
            id: 'Input Nama Campaign, Kode Projek & Tanggal Kontrak: Mengatur Nama Campaign, Nama/Kode Projek (yang dicetak miring pada klausul Pasal 4), Tanggal-Bulan-Tahun Dokumen (17 November 2026), dan Kota Penandatanganan.',
            en: 'Campaign Title, Project Code & Contract Date Controls: Configures Campaign Title, Project Code (italicized in Clause 4), Document Date-Month-Year (17 November 2026), and Signing City.',
          },
          {
            id: 'Auto-Save Real-Time & Panel Draf & Riwayat: Menyimpan setiap ketikan secara otomatis di penyimpanan lokal browser ("Tersimpan otomatis"), didukung tombol + Dokumen Baru, Petunjuk Format, dan riwayat draf.',
            en: 'Real-Time Browser Auto-Save & Draft History: Automatically persists every keystroke locally ("Tersimpan otomatis"), paired with + New Document, Format Guide, and saved draft history.',
          },
        ],
        hotspots: [
          {
            id: 'spk-m1-presets',
            x: 11,
            y: 12,
            title: {
              id: 'Panel Template Cepat (3 Preset Industri)',
              en: 'Quick Template Panel (3 Industry Presets)',
            },
            description: {
              id: 'Tombol instan Campaign Tech / Gadget, Campaign FMCG / Beauty, dan Campaign Otomotif / Event untuk pengisian form otomatis.',
              en: 'Instant triggers for Tech / Gadget, FMCG / Beauty, and Automotive / Event campaigns for automated form population.',
            },
          },
          {
            id: 'spk-m1-autosave',
            x: 20,
            y: 3,
            title: {
              id: 'Indikator Tersimpan Otomatis & Menu Draf / Riwayat',
              en: 'Auto-Save Status & Drafts / History Toolbar',
            },
            description: {
              id: 'Menjamin keamanan data kontrak di browser tanpa takut hilang saat tab tertutup, lengkap dengan tombol + Dokumen Baru.',
              en: 'Ensures contract data safety in the browser without data loss on tab close, paired with + New Document and Drafts.',
            },
          },
          {
            id: 'spk-m1-form',
            x: 13,
            y: 39,
            title: {
              id: 'Akordeon 1: Informasi Campaign & Tanggal SPK',
              en: 'Accordion 1: Campaign Info & SPK Date Fields',
            },
            description: {
              id: 'Mengelola Nama Campaign, Nama Projek, pemilih Tanggal-Bulan-Tahun Dokumen, serta Kota Penandatanganan.',
              en: 'Manages Campaign Name, Project Code, Document Day-Month-Year selectors, and Signing City.',
            },
          },
          {
            id: 'spk-m1-header-preview',
            x: 63,
            y: 26,
            title: {
              id: 'Kop Resmi ADABTIV & Tajuk Surat Perjanjian Kerja',
              en: 'Official ADABTIV Letterhead & SPK Title Block',
            },
            description: {
              id: 'Merender kop PT Inspirasi Suara Baik beserta tajuk SURAT PERJANJIAN KERJA dan nama project campaign di lembar A4.',
              en: 'Renders the PT Inspirasi Suara Baik letterhead alongside the SURAT PERJANJIAN KERJA header and campaign title on the A4 sheet.',
            },
          },
        ],
      },
      {
        id: 'pihak-pertama-klien',
        tabLabel: { id: '02. Pihak Pertama (Klien)', en: '02. First Party (Client)' },
        badge: { id: 'Identitas Klien & TTD Digital', en: 'Client Entity & Digital Sign' },
        title: {
          id: 'Bagian 2: Pihak Pertama (Klien / Pemberi Kerja) — Badan Hukum Mitra & Kanvas Tanda Tangan',
          en: 'Section 2: First Party (Client / Employer) — Partner Legal Entity & Signature Canvas',
        },
        imageUrl: './assets/aistudio/spk-step-2-party1.jpg',
        description: {
          id: 'Bagian kedua akordeon yang mengatur identitas hukum Pihak Pertama (Klien / Pemberi Kerja), seperti PT Cahaya Kosmetika Indonesia yang diwakili oleh Jessica Halim. Setiap input langsung menyusun paragraf komparisi hukum di bagian pembuka SPK serta mengisi blok tanda tangan Pihak Pertama di halaman pengesahan.',
          en: 'Second accordion section governing First Party (Client / Employer) legal identity, such as PT Cahaya Kosmetika Indonesia represented by Jessica Halim. Every input dynamically updates the legal preamble paragraph on Page 1 and the First Party signature block on the execution page.',
        },
        capabilities: [
          {
            id: 'Integrasi Komparisi Badan Hukum Klien Real-Time: Input Nama PT / Perusahaan Pihak Pertama (PT Cahaya Kosmetika Indonesia) dan Nama Penanggung Jawab (Jessica Halim) otomatis tercetak tebal di paragraf pertama SPK.',
            en: 'Real-Time Client Legal Preamble Integration: Client Corporation Name (PT Cahaya Kosmetika Indonesia) and PIC Name (Jessica Halim) automatically render in bold within the opening SPK agreement clause.',
          },
          {
            id: 'Pemisahan Nama Penanggung Jawab & Nama di Lembar TTD: Memungkinkan kustomisasi Nama Perwakilan Orang yang tertera di bawah kolom tanda tangan tanpa mengubah redaksi komparisi pembuka.',
            en: 'Dedicated Signatory Display Name Control: Allows customizing the representative name printed beneath the signature line independently of the opening preamble.',
          },
          {
            id: 'Fitur Gambar atau Upload Tanda Tangan Pihak Pertama: Menyediakan tombol interaktif "Gambar atau Upload Tanda Tangan" bagi klien yang ingin langsung membubuhkan tanda tangan digital pada dokumen SPK.',
            en: 'Draw or Upload First Party Digital Signature: Provides an interactive "Gambar atau Upload Tanda Tangan" modal trigger for clients to draw or upload their digital signature directly onto the contract.',
          },
        ],
        hotspots: [
          {
            id: 'spk-m2-company',
            x: 13,
            y: 34,
            title: {
              id: 'Input Nama PT & Penanggung Jawab Pihak Pertama',
              en: 'First Party Corporation & PIC Name Inputs',
            },
            description: {
              id: 'Mencatat PT Cahaya Kosmetika Indonesia dan Jessica Halim sebagai PIHAK PERTAMA (Pemberi Pekerjaan).',
              en: 'Records PT Cahaya Kosmetika Indonesia and Jessica Halim as the FIRST PARTY (Employer).',
            },
          },
          {
            id: 'spk-m2-signatory',
            x: 13,
            y: 46,
            title: {
              id: 'Nama Perwakilan di Lembar Tanda Tangan',
              en: 'Signatory Representative Name Field',
            },
            description: {
              id: 'Mengatur nama terang perwakilan klien yang dicetak tepat di bawah garis tanda tangan Pihak Pertama pada Halaman 2.',
              en: 'Configures the printed representative name beneath the First Party signature block on Page 2.',
            },
          },
          {
            id: 'spk-m2-sig-upload',
            x: 13,
            y: 53,
            title: {
              id: 'Tombol Gambar atau Upload Tanda Tangan Klien',
              en: 'Draw or Upload Client Signature Action',
            },
            description: {
              id: 'Mendukung pembuatan goresan tanda tangan langsung di layar maupun unggah file PNG transparan tanda tangan klien.',
              en: 'Supports drawing a signature directly on screen or uploading a transparent PNG client signature file.',
            },
          },
          {
            id: 'spk-m2-preamble-preview',
            x: 63,
            y: 34,
            title: {
              id: 'Render Paragraf Komparisi Pihak Pertama di A4',
              en: 'Live First Party Legal Preamble on A4 Canvas',
            },
            description: {
              id: 'Menampilkan kalimat hukum resmi yang menghubungkan tanggal kontrak, PT Cahaya Kosmetika Indonesia, dan Jessica Halim secara presisi.',
              en: 'Displays the formal legal clause binding the contract date, PT Cahaya Kosmetika Indonesia, and Jessica Halim.',
            },
          },
        ],
      },
      {
        id: 'pihak-kedua-adabtiv',
        tabLabel: { id: '03. Pihak Kedua (Adabtiv)', en: '03. Second Party (Adabtiv)' },
        badge: { id: 'Default Adabtiv & Cap Basah', en: 'Default Adabtiv & Wet Stamp' },
        title: {
          id: 'Bagian 3: Pihak Kedua (Penerima Kerja) — Profil Default Resmi Adabtiv & Cap Basah Digital',
          en: 'Section 3: Second Party (Contractor) — Default Official Adabtiv Profile & Digital Wet Stamp',
        },
        imageUrl: './assets/aistudio/spk-step-3-party2.jpg',
        description: {
          id: 'Bagian ketiga akordeon yang memuat kredensial baku Pihak Kedua (Penerima Kerja) yaitu PT Inspirasi Suara Baik (Adabtiv) yang diwakili oleh Dwiki Karunia Putra selaku Chief Executive Officer. Dilengkapi kontrol 1-klik untuk menyertakan Cap Basah Resmi perusahaan beserta tanda tangan CEO di lembar pengesahan kontrak.',
          en: 'Third accordion section pre-configured with Second Party (Contractor) credentials for PT Inspirasi Suara Baik (Adabtiv), represented by Dwiki Karunia Putra as Chief Executive Officer. Includes a 1-click toggle to embed the official company wet stamp and CEO signature on the execution sheet.',
        },
        capabilities: [
          {
            id: 'Kredensial Default Resmi PT Inspirasi Suara Baik: Mengisi otomatis Nama Perusahaan Pihak Kedua (PT Inspirasi Suara Baik), Nama Penanggung Jawab (Dwiki Karunia Putra), dan Jabatan (Chief Executive Officer) tanpa input berulang.',
            en: 'Pre-Configured PT Inspirasi Suara Baik Credentials: Auto-populates Second Party Company Name (PT Inspirasi Suara Baik), PIC Name (Dwiki Karunia Putra), and Title (Chief Executive Officer).',
          },
          {
            id: 'Fleksibilitas Edit Penandatangan Internal: Meski sudah terisi secara default, seluruh field tetap dapat disesuaikan apabila penandatanganan SPK didelegasikan kepada direktur atau pejabat agensi lainnya.',
            en: 'Editable Internal Signatory Fields: While pre-filled by default, all fields remain editable if contract signing is delegated to another agency director or authorized officer.',
          },
          {
            id: 'Checkbox Cap Basah Resmi & Tanda Tangan CEO: Satu klik pada checkbox "Sertakan Cap Basah Resmi PT Inspirasi Suara Baik & Tanda Tangan" langsung mengesahkan blok Pihak Kedua secara visual di dokumen PDF.',
            en: 'Official Wet Stamp & CEO Signature Checkbox: Checking "Sertakan Cap Basah Resmi PT Inspirasi Suara Baik & Tanda Tangan" visually authenticates the Second Party signature block in the PDF.',
          },
        ],
        hotspots: [
          {
            id: 'spk-m3-banner',
            x: 13,
            y: 39,
            title: {
              id: 'Banner Status Default Resmi PT Inspirasi Suara Baik',
              en: 'Default Official PT Inspirasi Suara Baik Status Banner',
            },
            description: {
              id: 'Memberikan konfirmasi visual bahwa dokumen menggunakan profil resmi Adabtiv yang diwakili oleh Dwiki Karunia Putra (CEO).',
              en: 'Provides visual confirmation that the contract uses the official Adabtiv entity profile represented by CEO Dwiki Karunia Putra.',
            },
          },
          {
            id: 'spk-m3-fields',
            x: 13,
            y: 49,
            title: {
              id: 'Kolom Nama Perusahaan, Penanggung Jawab & Jabatan',
              en: 'Second Party Company, Representative & Title Fields',
            },
            description: {
              id: 'Terisi otomatis dengan PT Inspirasi Suara Baik, Dwiki Karunia Putra, dan Chief Executive Officer serta tersinkron ke paragraf komparisi.',
              en: 'Pre-filled with PT Inspirasi Suara Baik, Dwiki Karunia Putra, and Chief Executive Officer, synced live to the opening preamble.',
            },
          },
          {
            id: 'spk-m3-stamp-check',
            x: 13,
            y: 56,
            title: {
              id: 'Checkbox Cap Basah Resmi & Tanda Tangan Adabtiv',
              en: 'Official Adabtiv Wet Stamp & Signature Toggle',
            },
            description: {
              id: 'Mengontrol tampilan stempel basah resmi PT Inspirasi Suara Baik dan tanda tangan CEO pada Halaman 2 kontrak.',
              en: 'Controls rendering of the official PT Inspirasi Suara Baik wet stamp and CEO signature on Page 2 of the contract.',
            },
          },
          {
            id: 'spk-m3-clause2',
            x: 63,
            y: 42,
            title: {
              id: 'Sinkronisasi Pihak Kedua & Platform @adabtiv di A4',
              en: 'Second Party & @adabtiv Platform Clause on A4',
            },
            description: {
              id: 'Menampilkan kedudukan hukum Pihak Kedua sebagai penerima pekerjaan yang menjalankan kampanye pada jaringan media @adabtiv.',
              en: 'Renders the legal standing of the Second Party executing the campaign across the @adabtiv social media network.',
            },
          },
        ],
      },
      {
        id: 'statement-of-work',
        tabLabel: { id: '04. Statement of Work (SoW)', en: '04. Statement of Work (SoW)' },
        badge: { id: 'Penomoran a-b-c & Klausul Baku', en: 'Auto a-b-c & Legal Clauses' },
        title: {
          id: 'Bagian 4: Statement of Work (SoW) — Editor Deliverables Berpenomoran Huruf Otomatis',
          en: 'Section 4: Statement of Work (SoW) — Auto-Lettered Deliverables & Legal Clause Builder',
        },
        imageUrl: './assets/aistudio/spk-step-4-sow.jpg',
        description: {
          id: 'Bagian keempat akordeon untuk merinci daftar deliverables, konten, atau produk yang disepakati antara Pihak Pertama dan Pihak Kedua. Setiap baris item secara otomatis diberi penomoran huruf (a., b., c., dst.) dan langsung ditempatkan di dalam Butir Ketentuan Pasal 1 pada lembar Surat Perjanjian Kerja.',
          en: 'Fourth accordion section detailing agreed campaign deliverables, content assets, and products between First and Second Parties. Each entry is automatically indexed alphabetically (a., b., c., etc.) and injected directly into Clause 1 of the Work Agreement.',
        },
        capabilities: [
          {
            id: 'Penomoran Alfabet (a, b, c) Otomatis & Dinamis: Menambahkan atau menghapus baris otomatis memperbarui urutan huruf deliverables (misal: a. 2x Instagram Reels Video GRWM, b. 3x Instagram Story swipe-up, c. 1x Video TikTok Tren).',
            en: 'Dynamic Alphabetical (a, b, c) Auto-Indexing: Adding or deleting rows automatically recalculates deliverable lettering (e.g., a. 2x Instagram Reels GRWM, b. 3x Instagram Story swipe-up, c. 1x TikTok Trend Video).',
          },
          {
            id: 'Tombol + Tambah Butir Deliverable SoW Tak Terbatas: Memudahkan tim akun merinci sebanyak mungkin item deliverables kampanye lintas platform tanpa merusak tata letak margin kertas A4.',
            en: 'Unlimited + Add SoW Deliverable Trigger: Enables account teams to specify multiple cross-platform deliverables while preserving clean A4 page margins and pagination.',
          },
          {
            id: 'Integrasi Klausul Hukum Pasal 1 s.d. Pasal 4: Daftar SoW langsung menyatu dengan klausul pemenuhan kewajiban (Pasal 2), hak preview konten sesuai jadwal Adabtiv Deck (Pasal 3), dan penguncian brief yang telah disetujui (Pasal 4).',
            en: 'Seamless Integration with Legal Clauses 1–4: The SoW list merges directly with fulfillment obligations (Clause 2), Adabtiv Deck content preview rights (Clause 3), and approved brief protection (Clause 4).',
          },
        ],
        hotspots: [
          {
            id: 'spk-m4-items',
            x: 13,
            y: 51,
            title: {
              id: 'Daftar Input Deliverables Berpenomoran a, b, c',
              en: 'Alphabetically Indexed (a, b, c) Deliverable Inputs',
            },
            description: {
              id: 'Mengedit rincian konten (2x Instagram Reels Video GRWM, 3x Instagram Story swipe-up, 1x Video TikTok) lengkap dengan tombol hapus per baris.',
              en: 'Edits specific content deliverables (2x Instagram Reels GRWM, 3x Instagram Story swipe-up, 1x TikTok Video) with per-row delete buttons.',
            },
          },
          {
            id: 'spk-m4-add-btn',
            x: 8,
            y: 58,
            title: {
              id: 'Tombol + Tambah Butir Deliverable SoW',
              en: '+ Add SoW Deliverable Item Trigger',
            },
            description: {
              id: 'Menambahkan baris deliverable baru (d., e., dst.) secara instan ke dalam struktur Statement of Work.',
              en: 'Instantly appends new lettered deliverable rows (d., e., etc.) into the Statement of Work structure.',
            },
          },
          {
            id: 'spk-m4-clause1-preview',
            x: 63,
            y: 58,
            title: {
              id: 'Render Butir Ketentuan Pasal 1 (SoW) di Kertas A4',
              en: 'Live Clause 1 (Statement of Work) Render on A4',
            },
            description: {
              id: 'Setiap butir a, b, c yang diketik di kiri langsung tersusun rapi di bawah Pasal 1 Statement of Work pada lembar dokumen kanan.',
              en: 'Every a, b, c item typed on the left formats cleanly beneath Clause 1 Statement of Work on the right-hand A4 sheet.',
            },
          },
          {
            id: 'spk-m4-clauses24',
            x: 63,
            y: 72,
            title: {
              id: 'Klausul Perlindungan Eksekusi & Preview (Pasal 2–4)',
              en: 'Execution & Preview Protection Clauses (Clauses 2–4)',
            },
            description: {
              id: 'Mengatur hak preview konten sesuai Adabtiv Deck serta perlindungan dari perubahan brief sepihak setelah update deck terakhir disetujui.',
              en: 'Governs content preview rights per the Adabtiv Deck schedule and protects against unilateral brief changes after final deck approval.',
            },
          },
        ],
      },
      {
        id: 'nilai-kontrak-termin',
        tabLabel: { id: '05. Nilai Kontrak & Termin', en: '05. Contract Value & Terms' },
        badge: { id: 'Invoice, H+ Hari & Cancel Fee', en: 'Invoice, H+ Terms & Cancel Fee' },
        title: {
          id: 'Bagian 5: Nilai Kontrak & Termin Pembayaran — Nominal Pajak, H+ Hari & Cancellation Fee',
          en: 'Section 5: Contract Value & Payment Terms — Tax-Inclusive Total, H+ Days & Cancellation Fee',
        },
        imageUrl: './assets/aistudio/spk-step-5-contract.jpg',
        description: {
          id: 'Bagian kelima akordeon yang mengatur parameter finansial dan perlindungan komersial di dalam Surat Perjanjian Kerja. Mencakup input Nominal Total Invoice (Termasuk Pajak) dengan pembacaan ejaan Terbilang Rupiah otomatis, tenggat Termin Pembayaran (H+ Hari), serta persentase biaya pembatalan (Cancellation Fee %) yang dicetak pada halaman kedua kontrak.',
          en: 'Fifth accordion section governing financial parameters and commercial protection clauses within the Work Agreement. Covers Tax-Inclusive Invoice Totals with automated spelled-out Rupiah readout, H+ Day Payment Terms, and Cancellation Fee percentages rendered onto Page 2 of the contract.',
        },
        capabilities: [
          {
            id: 'Input Nominal Total Invoice (Termasuk Pajak) & Terbilang: Menghitung dan menampilkan teks ejaan "Terbilang: ... Rupiah" secara otomatis tepat di bawah kolom input nominal kontrak.',
            en: 'Tax-Inclusive Invoice Total & Automated Spelled-Out Readout: Computes and displays the formal Indonesian spelled-out currency string directly beneath the invoice input field.',
          },
          {
            id: 'Konfigurasi Termin Pembayaran (H+ Hari) Fleksibel: Mengatur batas waktu pelunasan invoice dalam satuan hari kalender/kerja (misal: H+ 30 Hari) yang langsung memperbarui pasal pembayaran di Halaman 2.',
            en: 'Flexible Payment Term (H+ Days) Configuration: Sets invoice settlement deadlines in days (e.g., H+ 30 Days), dynamically updating the payment terms clause on Page 2.',
          },
          {
            id: 'Pengaturan Klausul Cancellation Fee (%): Menentukan persentase penalti pembatalan sepihak (misal: 50%) untuk melindungi agensi apabila kampanye dibatalkan setelah SPK ditandatangani, siap dicetak atau diunduh via Export PDF.',
            en: 'Cancellation Fee (%) Penalty Control: Defines the unilateral cancellation penalty percentage (e.g., 50%) protecting the agency post-signing, ready for direct print or PDF export.',
          },
        ],
        hotspots: [
          {
            id: 'spk-m5-invoice',
            x: 13,
            y: 52,
            title: {
              id: 'Nominal Total Invoice (Termasuk Pajak) & Terbilang',
              en: 'Tax-Inclusive Invoice Total & Spelled-Out Readout',
            },
            description: {
              id: 'Kolom input nilai kontrak dalam Rupiah yang langsung menampilkan konversi ejaan Terbilang Rupiah secara real-time di bawahnya.',
              en: 'Rupiah contract value input displaying real-time spelled-out Indonesian currency conversion directly underneath.',
            },
          },
          {
            id: 'spk-m5-termin',
            x: 7,
            y: 59,
            title: {
              id: 'Input Termin Pembayaran (H+ 30 Hari)',
              en: 'Payment Term Deadline Input (H+ 30 Days)',
            },
            description: {
              id: 'Mengatur klausul jatuh tempo pembayaran invoice (H+ 30 Hari) secara presisi sesuai kesepakatan komersial dengan klien.',
              en: 'Configures the invoice payment maturity clause (H+ 30 Days) matching commercial terms agreed with the client.',
            },
          },
          {
            id: 'spk-m5-cancel',
            x: 19,
            y: 59,
            title: {
              id: 'Input Persentase Cancellation Fee (50%)',
              en: 'Cancellation Fee Percentage Input (50%)',
            },
            description: {
              id: 'Menetapkan persentase biaya pembatalan kontrak (50%) yang otomatis terintegrasi ke dalam pasal pembatalan pada Halaman 2 SPK.',
              en: 'Sets the contract cancellation fee percentage (50%) automatically integrated into the cancellation clause on Page 2.',
            },
          },
          {
            id: 'spk-m5-export',
            x: 92,
            y: 8,
            title: {
              id: 'Kontrol Cetak Langsung & Export PDF 2 Halaman',
              en: 'Direct Print & Dual-Page PDF Export Controls',
            },
            description: {
              id: 'Mencetak langsung atau mengunduh keseluruhan dokumen SPK (Hal. 1 & Hal. 2) menjadi file PDF A4 resmi siap tanda tangan.',
              en: 'Prints directly or exports the complete dual-page SPK contract (Page 1 & Page 2) into an official sign-ready A4 PDF.',
            },
          },
        ],
      },
    ],
  },
];

export const CAPABILITIES_DATA = [
  {
    index: '01',
    title: {
      id: 'Arsitektur UI/UX & Sistem Desain',
      en: 'UI/UX Architecture & Design Systems',
    },
    summary: {
      id: 'Merancang antarmuka aplikasi web, dashboard enterprise, dan sistem token 3-lapis dengan hierarki informasi yang padat, jelas, dan berkarakter kuat.',
      en: 'Architecting web applications, enterprise dashboards, and 3-layer token systems with dense, crystal-clear information hierarchy and distinctive character.',
    },
    deliverables: {
      id: [
        'Desain Dashboard & SaaS High-Density',
        'Sistem Token 3-Lapis (W3C DTCG)',
        'Prototipe Interaktif & Audit WCAG AA',
        'Arsitektur Komponen Modular',
      ],
      en: [
        'High-Density Dashboard & SaaS UI',
        '3-Layer Design Tokens (W3C DTCG)',
        'Interactive Prototypes & WCAG AA Audits',
        'Modular Component Architecture',
      ],
    },
  },
  {
    index: '02',
    title: {
      id: 'Rekayasa Frontend & Mikro-Interaksi',
      en: 'Frontend Engineering & Micro-Interactions',
    },
    summary: {
      id: 'Membangun aplikasi produksi berbasis React 19, TypeScript, dan Tailwind CSS v4 dengan manajemen state presisi, responsivitas penuh, dan gerak halus.',
      en: 'Engineering production applications with React 19, TypeScript, and Tailwind CSS v4 featuring clean state management, responsive precision, and fluid motion.',
    },
    deliverables: {
      id: [
        'React 19, TypeScript & Tailwind CSS v4',
        'Visualisasi Data & Statistik Real-Time',
        'Transisi Layout & Koreografi Gerak',
        'Optimasi Bundle & Performa Multi-Layar',
      ],
      en: [
        'React 19, TypeScript & Tailwind CSS v4',
        'Real-Time Data & Analytics Visualization',
        'Layout Transitions & Motion Choreography',
        'Bundle Optimization & Viewport Resilience',
      ],
    },
  },
  {
    index: '03',
    title: {
      id: 'Sistem POS, CMS Kiosk & Otomasi Dokumen',
      en: 'POS Terminals, Kiosk CMS & Document Automation',
    },
    summary: {
      id: 'Mengembangkan perangkat lunak operasional nyata—mulai dari terminal kasir POS, manajemen aset photobooth jarak jauh, hingga generator kontrak A4 PDF.',
      en: 'Developing real-world operational software—from POS cashier terminals and remote photobooth asset CMS to live A4 PDF legal document generators.',
    },
    deliverables: {
      id: [
        'Terminal Kasir POS & Audit Transaksi',
        'CMS Distribusi Frame, GIF & Stiker Kiosk',
        'Generator Dokumen BAST & SPK Live A4',
        'Alur Kerja Cepat (Ctrl+V, Preset & Auto-Save)',
      ],
      en: [
        'POS Cashier Terminals & Ledger Auditing',
        'Remote Kiosk Frame, GIF & Sticker CMS',
        'Live A4 PDF BAST & SPK Document Builders',
        'High-Speed Workflows (Ctrl+V, Presets & Auto-Save)',
      ],
    },
  },
];

export const PROCESS_STEPS = [
  {
    step: '01',
    title: { id: 'Audit Alur & Pemetaan Sistem', en: 'Workflow Audit & System Mapping' },
    detail: {
      id: 'Membedah kebutuhan operasional nyata (kasir, admin, legal) agar struktur layar langsung memangkas langkah manual yang berulang.',
      en: 'Dissecting real operational workflows (cashier, admin, legal) so screen architecture directly eliminates repetitive manual steps.',
    },
  },
  {
    step: '02',
    title: { id: 'Arsitektur Token & Hierarki Visual', en: 'Token Architecture & Visual Hierarchy' },
    detail: {
      id: 'Menetapkan kontras permukaan gelap, skala tipografi presisi, dan kepadatan data agar ribuan metrik tetap nyaman dibaca.',
      en: 'Establishing dark surface contrast, precision typographic scales, and data density so complex metrics remain effortless to scan.',
    },
  },
  {
    step: '03',
    title: { id: 'Rekayasa Komponen & State Produksi', en: 'Component & Production State Engineering' },
    detail: {
      id: 'Mengimplementasikan kode React & TypeScript modular dengan sinkronisasi real-time, validasi ketat, dan ekspor dokumen/CSV akurat.',
      en: 'Implementing modular React & TypeScript code with real-time sync, strict validation, and accurate PDF/CSV export pipelines.',
    },
  },
  {
    step: '04',
    title: { id: 'Verifikasi Kualitas & Peluncuran', en: 'Quality Verification & Deployment' },
    detail: {
      id: 'Pengujian unit terotomatisasi, audit aksesibilitas keyboard, responsivitas penuh, dan kesiapan pakai langsung oleh tim operasional.',
      en: 'Automated unit testing, keyboard accessibility audits, full responsiveness, and immediate operational deployment readiness.',
    },
  },
];
