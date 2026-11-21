import type { ProjectItem } from '../types/portfolio';

export const INITIAL_PROJECTS: ProjectItem[] = [
  {
    id: 'pictomatic-dashboard',
    slug: 'pictomatic-dashboard',
    indexLabel: '01',
    title: 'Pictomatic',
    subtitle: {
      id: 'Ekosistem Enterprise Analitik Real-Time, Kasir POS & Manajemen Aset Kreatif Photobooth Multi-Kiosk',
      en: 'Enterprise Real-Time Analytics, POS Cashier & Creative Asset Management Ecosystem for Multi-Kiosk Photobooths',
    },
    category: 'dashboard',
    categoryLabel: {
      id: 'Dashboard & Sistem POS',
      en: 'Dashboard & POS Ecosystem',
    },
    client: 'Pictomatic Braga',
    year: '2026',
    role: {
      id: 'Principal UI/UX Design & Full Frontend Architecture',
      en: 'Principal UI/UX Design & Full Frontend Architecture',
    },
    imageUrl: '/assets/aistudio/pictomatic-statistics.png',
    accentHex: '#22C55E',
    featured: true,
    summary: {
      id: 'Platform kendali operasional terpusat yang mengintegrasikan Main Board Overview eksekutif, monitoring statistik pendapatan harian real-time, audit transaksi kiosk & biller, terminal Input Transaksi Kasir (POS) bersinkronisasi instan, serta distribusi aset kreatif (Frame cetak, Frame GIF animasi, dan Studio Stiker digital) untuk jaringan mesin photobooth.',
      en: 'Centralized operational command platform uniting an executive Main Board Overview, real-time daily revenue statistics, kiosk & biller transaction auditing, an instant-sync POS Cashier terminal, and remote creative asset distribution (Print Frames, animated GIF Frames, and Digital Sticker Studio) across photobooth kiosks.',
    },
    challenge: {
      id: 'Mengelola jaringan mesin photobooth membutuhkan lebih dari sekadar laporan statis. Tim operasional dan kasir di lapangan memerlukan visibilitas omzet harian secara real-time, pencatatan transaksi tunai/manual di meja kasir yang langsung masuk ke pusat data tanpa selisih pembukuan, audit Gross vs Net Income per kiosk, hingga cara cepat untuk mendistribusikan frame foto baru, animasi Frame GIF, dan koleksi stiker digital ke seluruh mesin photobooth tanpa harus melakukan konfigurasi manual satu per satu di lokasi.',
      en: 'Operating a multi-kiosk photobooth network demands more than static reports. Field operators and cashiers required real-time daily revenue monitoring, manual/cash POS transaction entry that syncs immediately without reconciliation lag, per-kiosk Gross vs. Net income auditing, and a seamless remote pipeline to deploy new print frames, animated GIF bundles, and digital sticker packs to every photobooth kiosk simultaneously.',
    },
    solution: {
      id: 'Merancang arsitektur aplikasi web 11 modul terpadu berkonsep High-Contrast Dark UI: (1) Main Board Overview untuk memantau kesehatan seluruh kiosk, pendapatan, sesi, cetakan, galeri foto, transaksi terbaru, dan Top Booth dalam satu layar; (2) Modul Statistics untuk monitoring pendapatan harian secara real-time dengan komparasi mingguan/bulanan dan leaderboard metadata pelanggan; (3) Modul Transaction untuk rekonsiliasi Gross/Net Income daftar kiosk serta log audit transaksi 12 kolom; (4) Terminal Input Transaksi Kasir dilengkapi jam digital live dan struk ringkasan otomatis; serta (5) Pipeline Manajemen Aset Kreatif terpusat untuk mengunggah Frame baru secara massal ke kiosk, mengonfigurasi bundle Frame GIF, dan mengelola 16+ Stiker Digital interaktif dengan fitur Tes Tempel di Foto.',
      en: 'Engineered a unified 11-module dark-mode operational suite: (1) Main Board Overview consolidating active kiosk health, revenue curves, sessions, print counts, live photo galleries, recent transactions, and Top Booth rankings; (2) Real-Time Daily Revenue Statistics with day-by-day bar charts, period-over-period growth cards, and exportable customer metadata leaderboards; (3) Kiosk & Transaction Auditing with Gross/Net income reconciliation and a 12-column live transaction log; (4) An ergonomic POS Cashier Input terminal with live digital clock and receipt preview card; plus (5) A Centralized Creative Asset Pipeline to bulk-deploy print Frames, configure animated GIF Frame bundles, and manage 16+ digital Stickers with an interactive photo-placement simulator.',
    },
    highlights: [
      {
        id: 'Main Board Overview Komprehensif: Menyajikan ringkasan eksekutif dari status keaktifan booth, kurva pendapatan, metrik Sesi/Hari Puncak/Cetakan/Voucher, tangkapan Gallery & Public Gallery, distribusi porsi Top Booth, hingga 8 Transaksi Terbaru dan Frame Terpopuler.',
        en: 'Comprehensive Main Board Overview: Delivers executive visibility across active booth status, revenue curves, Sessions/Peak Day/Prints/Voucher KPIs, kiosk Gallery & Public Gallery feeds, Top Booth revenue share, 8 Recent Transactions, and Popular Frames.',
      },
      {
        id: 'Monitoring Statistik Pendapatan Harian Real-Time: Memantau grafik transaksi harian (Senin–Minggu) secara langsung, pertumbuhan mingguan & bulanan (+35% MoM), komparasi performa Daftar Booth, serta Leaderboard Metadata pelanggan (Email, Telepon, Nama, Rating) dengan ekspor 1-klik.',
        en: 'Real-Time Daily Revenue Statistics: Tracks live Monday–Sunday daily transaction bars, weekly and monthly growth cards (+35% MoM), per-booth daily vs. monthly tables, and customer Metadata Leaderboards with 1-click export.',
      },
      {
        id: 'Audit Transaksi & Rekonsiliasi Kiosk Presisi: Memisahkan rekapitulasi Daftar Kiosk (Total Transaksi, Gross Income kumulatif & harian, panduan Net Income biller) dengan tabel audit Transaksi Hari Ini 12 kolom (ID Transaksi, ID Biller, Status Sesi, Uang Masuk, Cetak, Voucher, Supplier).',
        en: 'Precision Transaction & Kiosk Auditing: Pairs Kiosk Directory summaries (Total Transactions, cumulative & daily Gross Income, biller Net Income notes) with a 12-column Today’s Transactions audit table.',
      },
      {
        id: 'Terminal Input Transaksi Kasir (POS) Sinkronisasi Instan: Dilengkapi badge Kasir Aktif, jam digital real-time, tombol autofill waktu "Sekarang", dan pratinjau struk Ringkasan Tunai/Manual bergaya kertas struk yang langsung menyinkronkan input manual kasir ke Dashboard utama.',
        en: 'Instant-Sync POS Cashier Terminal: Features an Active Cashier status badge, live digital clock, one-click "Now" timestamp autofill, and a receipt-styled Cash/Manual Summary card that syncs manual transactions directly to the main dashboard.',
      },
      {
        id: 'Distribusi Frame Massal, Frame GIF & Studio Stiker Interaktif: Tim operasional dapat menambahkan frame cetak baru maupun mendistribusikannya secara massal ke setiap photobooth, mengatur tautan bundle animasi Frame GIF per kiosk, serta mengelola 16 stiker aktif (6 kategori pack, 22.900x ditempel) lengkap dengan fitur "Tes Tempel di Foto".',
        en: 'Bulk Frame Deployment, GIF Bundles & Interactive Sticker Studio: Enables operators to upload and bulk-distribute new print frames to every photobooth, configure per-kiosk animated GIF Frame bundles, and manage 16 active stickers (6 themed packs, 22,900+ placements) with an interactive "Test Sticker on Photo" tool.',
      },
    ],
    stack: [
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Real-Time Analytics',
      'POS Cashier System',
      'Remote Kiosk CMS',
      'CSV / Report Export',
    ],
    metrics: [
      { label: { id: 'Modul Terintegrasi', en: 'Integrated Modules' }, value: '11 Modul' },
      { label: { id: 'Interaksi Stiker', en: 'Sticker Placements' }, value: '22.900x' },
      { label: { id: 'Sinkronisasi Kasir', en: 'POS Data Sync' }, value: 'Real-Time' },
    ],
    hotspots: [
      {
        id: 'picto-nav',
        x: 24,
        y: 6,
        title: {
          id: 'Arsitektur Navigasi 11 Modul Terpadu',
          en: '11-Module Unified Navigation Architecture',
        },
        description: {
          id: 'Berpindah instan antar Overview, Gallery, Public Gallery, Statistics, Transaction, Kasir POS, Frame, Frame GIF, Voucher, Sticker, dan Queue.',
          en: 'Instant switching across Overview, Gallery, Public Gallery, Statistics, Transaction, POS Cashier, Frame, Frame GIF, Voucher, Sticker, and Queue.',
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
          id: 'Memantau fluktuasi pendapatan secara real-time bersanding dengan metrik Sesi, Hari Puncak, Total Cetakan, dan penggunaan Sesi Voucher.',
          en: 'Monitors real-time revenue fluctuations paired side-by-side with Sessions, Peak Day, Total Prints, and Voucher usage counters.',
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
          id: 'Grafik batang Total Transaksi Harian (Senin–Minggu) yang diperbarui real-time, berdampingan dengan kartu sorotan Mingguan dan Bulanan (+35% MoM).',
          en: 'Live Monday–Sunday daily transaction bar chart paired with high-contrast Weekly and Monthly growth cards (+35% MoM).',
        },
      },
      {
        id: 'picto-booth',
        x: 53,
        y: 78,
        title: {
          id: 'Komparasi Daftar Booth, Top Booth & Leaderboard',
          en: 'Booth Directory, Top Booth Share & Leaderboard',
        },
        description: {
          id: 'Tabel pendapatan Hari Ini vs Bulan Ini tiap kiosk, bar porsi Top Booth 100%, pencarian Frame Terpopuler, dan Leaderboard Metadata dengan fitur Export.',
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
        imageUrl: '/assets/aistudio/pictomatic-overview.png',
        description: {
          id: 'Halaman utama (Main Board) yang merangkum seluruh denyut operasional jaringan photobooth dalam satu layar terpadu. Manajemen dapat memeriksa rasio booth aktif dari total keseluruhan booth, memfilter performa berdasarkan tanggal spesifik maupun rentang waktu (Hari, Minggu, Bulan), serta memantau metrik finansial dan aktivitas fisik mesin secara simultan tanpa perlu berpindah tab.',
          en: 'The primary executive command board summarizing the entire photobooth network pulse on a single screen. Management can inspect active-to-total booth ratios, filter performance by specific dates or period granularity (Day, Week, Month), and monitor financial and physical machine activity simultaneously.',
        },
        capabilities: [
          {
            id: 'Panel Ringkasan Pendapatan & 4 Kartu Indikator Utama: Menampilkan grafik garis Pendapatan periode berjalan beserta kartu Sesi, Hari Puncak, total Cetakan fisik, dan Sesi Voucher.',
            en: 'Revenue Summary & 4 Core KPI Cards: Displays the active period revenue trend alongside Sessions, Peak Day, physical Print counts, and Voucher Sessions.',
          },
          {
            id: 'Pemantauan Gallery, Public Gallery & Top Booth: Memantau foto yang tertangkap hari ini per kiosk, status galeri publik yang dibagikan lewat tautan URL, serta porsi kontribusi pendapatan Top Booth.',
            en: 'Gallery, Public Gallery & Top Booth Panels: Tracks photos captured today per kiosk, URL-shared public galleries, and Top Booth revenue contribution share.',
          },
          {
            id: 'Log Transaksi Terbaru & Frame Terpopuler: Menampilkan 8 sesi transaksi terakhir secara langsung (Waktu, Booth, Frame yang dipilih, dan Nominal pembayaran) bersanding dengan peringkat Frame Terpopuler.',
            en: 'Recent Transactions & Popular Frames: Streams the 8 latest sessions (Time, Booth, Selected Frame, and Amount) alongside the most frequently used frames.',
          },
        ],
        hotspots: [
          {
            id: 'ov-header',
            x: 78,
            y: 17,
            title: {
              id: 'Pemilih Tanggal & Filter Granular Hari/Minggu/Bulan',
              en: 'Date Picker & Day/Week/Month Granularity Toggle',
            },
            description: {
              id: 'Kontrol cepat untuk menginspeksi performa seluruh booth pada tanggal tertentu atau membandingkan agregasi harian, mingguan, dan bulanan.',
              en: 'Quick controls to inspect network-wide booth performance on a specific date or switch between daily, weekly, and monthly aggregations.',
            },
          },
          {
            id: 'ov-revenue',
            x: 39,
            y: 41,
            title: {
              id: 'Grafik Utama Pendapatan & Tautan Detail Statistik',
              en: 'Primary Revenue Canvas & Deep-Dive Link',
            },
            description: {
              id: 'Visualisasi akumulasi pendapatan sepanjang rentang tanggal aktif lengkap dengan pintasan langsung menuju analitik mendalam.',
              en: 'Visualizes cumulative revenue across the active date range with a direct shortcut into deep-dive statistics.',
            },
          },
          {
            id: 'ov-kpis',
            x: 72,
            y: 41,
            title: {
              id: 'Kuadran Metrik Sesi, Hari Puncak, Cetakan & Voucher',
              en: 'Sessions, Peak Day, Prints & Voucher KPI Quadrant',
            },
            description: {
              id: 'Empat kartu indikator dengan aksen garis warna yang merangkum volume sesi foto, hari tersibuk, jumlah kertas foto tercetak, dan pemakaian voucher.',
              en: 'Four color-accented KPI cards summarizing photo session volume, busiest day, physical photo prints, and voucher redemptions.',
            },
          },
          {
            id: 'ov-bottom',
            x: 48,
            y: 78,
            title: {
              id: 'Panel Gallery, Top Booth & 8 Transaksi Terbaru',
              en: 'Gallery Feeds, Top Booth Share & 8 Recent Transactions',
            },
            description: {
              id: 'Menyatukan tangkapan foto kiosk hari ini, pengelolaan Public Gallery, distribusi porsi Top Booth, serta rincian 8 sesi transaksi terakhir.',
              en: 'Unifies today’s kiosk photo captures, Public Gallery management, Top Booth revenue distribution, and the 8 most recent session transactions.',
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
        imageUrl: '/assets/aistudio/pictomatic-statistics.png',
        description: {
          id: 'Modul analitik mendalam yang dirancang agar pemilik bisnis dan tim manajemen dapat memonitor pergerakan pendapatan harian secara real-time setiap hari. Menyajikan korelasi antara lonjakan pendapatan bulanan, distribusi transaksi dari Senin hingga Minggu, persentase pertumbuhan antar-periode, hingga peringkat kontribusi setiap cabang dan metadata pelanggan.',
          en: 'In-depth analytics module engineered for business owners and operations leads to monitor daily revenue movements in real time every day. Correlates monthly revenue spikes, Monday-through-Sunday daily transaction bars, period-over-period growth percentages, per-branch contribution rankings, and customer metadata.',
        },
        capabilities: [
          {
            id: 'Monitoring Transaksi Harian (Senin–Minggu) Real-Time: Grafik batang interaktif yang memperlihatkan omzet harian dalam satu minggu berjalan, didukung filter pengalih metrik Pendapatan, Foto, atau Sesi Voucher.',
            en: 'Real-Time Daily Transaction Bars (Mon–Sun): Interactive bar chart tracking day-by-day turnover across the active week, complete with Revenue, Photo, and Voucher Session metric switchers.',
          },
          {
            id: 'Kartu Komparasi Mingguan & Pertumbuhan Bulanan Otomatis: Kartu kontras tinggi yang menghitung Total Transaksi Mingguan serta persentase kenaikan Total Transaksi Bulanan secara otomatis (misal: +35% dibanding bulan sebelumnya).',
            en: 'Weekly Comparison & Automated Monthly Growth Cards: High-contrast highlight cards computing Weekly Transaction totals and automatic month-over-month growth percentages (+35% vs. prior month).',
          },
          {
            id: 'Tabel Performa Daftar Booth, Top Booth & Leaderboard Metadata: Membandingkan pendapatan Hari Ini vs Bulan Ini per lokasi booth (seperti Pictomatic Braga), porsi kontribusi Top Booth 100%, serta Leaderboard Metadata pelanggan (Email, Telepon, Nama, Rating) lengkap dengan tombol + Export.',
            en: 'Booth Directory, Top Booth Share & Metadata Leaderboard: Compares Today vs. Monthly revenue per booth location, 100% Top Booth share bars, and filterable customer Metadata Leaderboards (Email, Phone, Name, Rating) with + Export.',
          },
        ],
        hotspots: [
          {
            id: 'stat-curve',
            x: 45,
            y: 22,
            title: {
              id: 'Kurva Tren Pendapatan Bulanan Presisi Tinggi',
              en: 'High-Precision Monthly Revenue Trend Curve',
            },
            description: {
              id: 'Menampilkan titik lonjakan transaksi harian sepanjang bulan (Rp 47.345) berdampingan dengan jumlah Sesi (2), Hari Puncak (2 Nov), dan Cetakan (3).',
              en: 'Visualizes daily transaction peaks across the month alongside live counters for Sessions (2), Peak Day (2 Nov), and Prints (3).',
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
              id: 'Memungkinkan pemantauan pemasukan harian dari Senin hingga Minggu secara langsung, dilengkapi switcher tab Pendapatan, Foto, dan Sesi Voucher.',
              en: 'Enables live day-by-day revenue monitoring from Monday to Sunday with dedicated toggles for Revenue, Photos, and Voucher Sessions.',
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
              id: 'Kartu aksen ungu dan hijau emerald yang menampilkan akumulasi transaksi mingguan serta indikator pertumbuhan bulanan +35% secara mencolok.',
              en: 'Vibrant indigo and emerald cards surfacing weekly transaction totals and an instant +35% month-over-month growth indicator.',
            },
          },
          {
            id: 'stat-leaderboard',
            x: 54,
            y: 90,
            title: {
              id: 'Leaderboard Metadata Pelanggan & Ekspor Data',
              en: 'Customer Metadata Leaderboard & Data Export',
            },
            description: {
              id: 'Mengurutkan pelanggan berdasarkan jumlah sesi dan kontribusi pendapatan dengan filter Email, Telepon, Nama, Rating, serta tombol + Export.',
              en: 'Ranks customers by session frequency and total spend with quick filters for Email, Phone, Name, Rating, and a 1-click + Export action.',
            },
          },
        ],
      },
      {
        id: 'transaction',
        tabLabel: { id: '03. Transaksi & Kiosk', en: '03. Transactions & Kiosks' },
        badge: { id: 'Audit & Rekonsiliasi', en: 'Audit & Reconciliation' },
        title: {
          id: 'Manajemen Transaksi — Rekonsiliasi Pendapatan Kiosk & Audit Harian',
          en: 'Transaction Management — Kiosk Revenue Reconciliation & Daily Audit',
        },
        imageUrl: '/assets/aistudio/pictomatic-transaction.png',
        description: {
          id: 'Modul pembukuan dan transparansi transaksi yang memisahkan rekapitulasi performa finansial per unit mesin kiosk dengan log rincian transaksi harian. Dirancang khusus untuk memudahkan tim keuangan melakukan rekonsiliasi Gross Income dari harga paket kiosk maupun penggunaan voucher yang berhasil, serta memverifikasi Net Income terhadap penyedia pembayaran (biller).',
          en: 'Financial transparency and ledger module separating per-kiosk revenue rollups from granular daily transaction logs. Purpose-built for finance teams to reconcile Gross Income across kiosk pricing and successful voucher redemptions while verifying Net Income against payment billers.',
        },
        capabilities: [
          {
            id: 'Tabel Rekapitulasi Daftar Kiosk & Ekspor Laporan: Menampilkan Nama Kiosk (misal: Pictomatic Braga), Total Transaksi kumulatif, Gross Income total, Transaksi Hari Ini, Gross Income Hari Ini, pencarian kiosk, tombol Lihat Transaksi, dan tombol + Export.',
            en: 'Kiosk Directory Rollup & Report Export: Lists Kiosk Name (e.g., Pictomatic Braga), cumulative Total Transactions, total Gross Income, Today’s Transactions, Today’s Gross Income, kiosk search, View Transactions action, and + Export.',
          },
          {
            id: 'Panduan Rekonsiliasi Gross vs Net Income Terintegrasi: Menyediakan banner informasi aturan pencatatan pendapatan dan panduan pengecekan Net Income berdasarkan biller yang digunakan.',
            en: 'Integrated Gross vs. Net Income Reconciliation Guide: Includes an always-visible accounting rule banner clarifying gross kiosk/voucher revenue versus biller net settlement.',
          },
          {
            id: 'Tabel Audit Transaksi Hari Ini (12 Kolom Presisi): Melacak No, ID Transaksi, ID Biller, Kiosk, Waktu, Status Transaksi, Status Sesi, Tipe pembayaran, Uang Masuk, status Cetak, Voucher, hingga Supplier secara terperinci.',
            en: '12-Column Today’s Transactions Audit Table: Tracks No, Transaction ID, Biller ID, Kiosk, Timestamp, Transaction Status, Session Status, Type, Cash In, Print status, Voucher, and Supplier.',
          },
        ],
        hotspots: [
          {
            id: 'trx-kiosk-header',
            x: 64,
            y: 16,
            title: {
              id: 'Pencarian Kiosk & Ekspor Data Rekonsiliasi',
              en: 'Kiosk Search & Reconciliation Export',
            },
            description: {
              id: 'Memfilter daftar mesin kiosk berdasarkan nama lokasi secara cepat dan mengekspor laporan pendapatan ke file eksternal.',
              en: 'Quickly filters kiosk machines by location name and exports revenue reconciliation data.',
            },
          },
          {
            id: 'trx-notes',
            x: 42,
            y: 26,
            title: {
              id: 'Kotak Catatan Aturan Gross Income & Biller',
              en: 'Gross Income & Biller Accounting Notice',
            },
            description: {
              id: 'Penjelasan transparan mengenai histori pencatatan income, definisi Gross Income (harga kiosk/voucher berhasil), dan acuan Net Income via biller.',
              en: 'Clear accounting notice defining income tracking start dates, Gross Income rules, and biller references for Net Income.',
            },
          },
          {
            id: 'trx-kiosk-row',
            x: 49,
            y: 39,
            title: {
              id: 'Baris Metrik Kiosk (Total vs Hari Ini)',
              en: 'Per-Kiosk Metrics Row (Cumulative vs. Today)',
            },
            description: {
              id: 'Menampilkan performa Pictomatic Braga lengkap dengan Total Transaksi, Gross Income akumulatif, metrik hari ini, serta tombol Lihat Transaksi.',
              en: 'Displays Pictomatic Braga performance with Total Transactions, cumulative Gross Income, today’s metrics, and a View Transactions button.',
            },
          },
          {
            id: 'trx-today-table',
            x: 49,
            y: 63,
            title: {
              id: 'Tabel Audit Transaksi Hari Ini 12 Kolom',
              en: '12-Column Today’s Transactions Audit Ledger',
            },
            description: {
              id: 'Struktur kolom lengkap mulai dari ID Transaksi, ID Biller, Kiosk, Waktu, Status Transaksi & Sesi, Tipe, Uang Masuk, Cetak, Voucher, hingga Supplier.',
              en: 'Comprehensive 12-column schema covering Transaction ID, Biller ID, Kiosk, Time, Transaction & Session Status, Type, Cash In, Print, Voucher, and Supplier.',
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
        imageUrl: '/assets/aistudio/pictomatic-kasir.png',
        description: {
          id: 'Antarmuka Point of Sale (POS) khusus petugas kasir untuk mencatat transaksi pengunjung secara manual atau tunai di lokasi booth. Setiap transaksi yang diinput melalui halaman ini langsung tersinkronisasi secara real-time ke grafik pendapatan dan tabel transaksi di Dashboard utama, menghilangkan risiko selisih pencatatan manual.',
          en: 'Dedicated Point of Sale (POS) interface for booth cashiers to record walk-in or cash visitor transactions. Every entry submitted through this terminal syncs immediately in real time to the main dashboard revenue charts and transaction logs, eliminating manual bookkeeping discrepancies.',
        },
        capabilities: [
          {
            id: 'Indikator Kasir Aktif & Jam Digital Real-Time: Menampilkan status kesiapan terminal (KASIR AKTIF) beserta panel waktu presisi hingga satuan detik dan tanggal hari berjalan.',
            en: 'Active Cashier Status & Live Digital Clock: Displays terminal readiness (KASIR AKTIF) paired with a live second-by-second digital clock and full date readout.',
          },
          {
            id: 'Formulir Detail Transaksi Ergonomis & Autofill Waktu: Mencakup input Nama Pengunjung, Jumlah Sesi foto, Waktu Transaksi dengan tombol pintas "Sekarang" untuk pengisian jam otomatis, serta nominal Total Bayar (Rp) tanpa perlu mengetik titik/koma.',
            en: 'Ergonomic Transaction Form & Timestamp Autofill: Captures Visitor Name, Number of Sessions, Transaction Time with a one-click "Sekarang" (Now) autofill button, and clean numeric Total Payment (Rp) input.',
          },
          {
            id: 'Kartu Pratinjau Struk Ringkasan & Reset Otomatis: Panel kanan bergaya kertas struk kasir (Tunai / Manual) yang menampilkan rincian pengunjung dan TOTAL secara live sebelum dikirim, dilengkapi Panduan Singkat dan pengosongan form otomatis pasca-pengiriman.',
            en: 'Live Receipt Summary Card & Auto-Reset: Right-hand receipt-styled summary card (Cash / Manual) previewing visitor details and live TOTAL before submission, paired with operator guidelines and automatic form reset.',
          },
        ],
        hotspots: [
          {
            id: 'kasir-clock',
            x: 88,
            y: 13,
            title: {
              id: 'Panel Jam Digital Live & Badge Kasir Aktif',
              en: 'Live Digital Clock & Active Cashier Badge',
            },
            description: {
              id: 'Penunjuk waktu real-time (jam, menit, detik, hari, dan tanggal) serta indikator hijau KASIR AKTIF yang memastikan pencatatan akurat.',
              en: 'Real-time clock readout (hours, minutes, seconds, day, and date) paired with an emerald KASIR AKTIF status pill.',
            },
          },
          {
            id: 'kasir-form',
            x: 32,
            y: 52,
            title: {
              id: 'Form Input Detail Transaksi & Tombol "Sekarang"',
              en: 'Transaction Detail Form & "Now" Time Autofill',
            },
            description: {
              id: 'Kolom input terstruktur untuk Nama Pengunjung, Jumlah Sesi, Waktu Transaksi dengan tombol pengisi waktu otomatis "Sekarang", dan Total Bayar.',
              en: 'Structured fields for Visitor Name, Session Count, Transaction Time with a one-click "Sekarang" autofill button, and Total Amount.',
            },
          },
          {
            id: 'kasir-receipt',
            x: 78,
            y: 43,
            title: {
              id: 'Struk Ringkasan Live (Tunai / Manual)',
              en: 'Live Receipt Summary Card (Cash / Manual)',
            },
            description: {
              id: 'Kartu pratinjau kontras putih dengan tepi bawah bergerigi menyerupai struk fisik untuk memverifikasi data dan total Rupiah sebelum dikirim.',
              en: 'Crisp white receipt card with a serrated bottom edge allowing cashiers to double-check visitor details and Rupiah totals before sending.',
            },
          },
          {
            id: 'kasir-submit',
            x: 32,
            y: 83,
            title: {
              id: 'Tombol Kirim & Sinkronisasi Instan ke Dashboard',
              en: 'Submit Action & Instant Dashboard Sync',
            },
            description: {
              id: 'Mengirim data transaksi langsung ke server pusat dan mengosongkan formulir secara otomatis agar siap melayani antrean pengunjung berikutnya.',
              en: 'Pushes transaction data immediately to the central dashboard and auto-clears the form for the next customer in queue.',
            },
          },
        ],
      },
      {
        id: 'frame',
        tabLabel: { id: '05. Manajemen Frame', en: '05. Frame Management' },
        badge: { id: 'Distribusi Frame Kiosk', en: 'Multi-Kiosk Frame CMS' },
        title: {
          id: 'Manajemen Frame — Pengelolaan & Distribusi Frame Baru ke Setiap Photobooth',
          en: 'Frame Management — Uploading & Distributing New Frames to Every Photobooth',
        },
        imageUrl: '/assets/aistudio/pictomatic-frame.png',
        description: {
          id: 'Pusat kendali aset frame foto cetak yang memungkinkan tim operasional menambahkan desain frame baru ke setiap unit photobooth agar pengunjung dapat langsung memilih dan memakainya saat sesi foto berlangsung. Mendukung manajemen ukuran cetak, konfigurasi jumlah slot foto per frame, pelacakan popularitas pemakaian selama 30 hari terakhir, hingga distribusi serentak ke banyak kiosk.',
          en: 'Centralized print-frame management system enabling operations teams to add new frame designs to every photobooth kiosk so visitors can immediately select and use them during photo sessions. Supports print size variants, photo-slot configuration, 30-day usage tracking, and multi-kiosk distribution.',
        },
        capabilities: [
          {
            id: 'Tambah Frame Baru & Distribusi Massal ke Kiosk: Menyediakan tombol "+ Tambah Frame" untuk rilis frame satuan maupun fitur "Tambah Frame Massal ke Kiosk" untuk menerapkan koleksi frame baru ke banyak lokasi photobooth sekaligus.',
            en: 'New Frame Upload & Bulk Kiosk Deployment: Provides "+ Tambah Frame" for individual releases alongside "Tambah Frame Massal ke Kiosk" to push frame collections across multiple photobooth locations simultaneously.',
          },
          {
            id: 'Manajemen Ukuran, Jumlah Slot Foto & Kiosk Tujuan: Mengatur spesifikasi teknis tiap frame meliputi Preview visual, Nama Frame, Sumber aset, Ukuran kertas cetak, Jumlah Foto dalam satu strip, serta daftar Kiosk yang mengaktifkannya.',
            en: 'Print Size, Photo Slot & Target Kiosk Controls: Manages technical specifications per frame including visual Preview, Frame Name, Asset Source, Print Size, Number of Photos per layout, and assigned Kiosks.',
          },
          {
            id: 'Analitik Pemakaian Frame 30 Hari Terakhir: Dilengkapi badge ringkasan jumlah total frame, variasi ukuran, dan metrik "Dipakai (30 Hari)" untuk membantu tim kreatif mengevaluasi desain frame yang paling diminati pengunjung.',
            en: '30-Day Frame Usage Analytics: Features summary pills for total frames, size variants, and a "Used (30 Days)" column so creative teams can evaluate which frame designs resonate most with visitors.',
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
              id: 'Memungkinkan operasional mengunggah frame baru dan langsung mendistribusikannya secara massal ke seluruh unit photobooth.',
              en: 'Allows operations teams to upload new frames and bulk-assign them across multiple photobooth kiosks in seconds.',
            },
          },
          {
            id: 'frame-filters',
            x: 54,
            y: 14,
            title: {
              id: 'Pencarian Nama Frame & Filter Ukuran Cetak',
              en: 'Frame Name Search & Print Size Filter',
            },
            description: {
              id: 'Memudahkan kurasi katalog frame berdasarkan kata kunci nama tema atau dimensi ukuran cetak photobooth.',
              en: 'Streamlines catalog curation by filtering frames via theme keywords or physical print dimensions.',
            },
          },
          {
            id: 'frame-metrics',
            x: 28,
            y: 19,
            title: {
              id: 'Indikator Total Frame, Ukuran & Pemakaian 30 Hari',
              en: 'Total Frames, Size Variants & 30-Day Usage Pills',
            },
            description: {
              id: 'Ringkasan instan jumlah koleksi frame aktif, variasi format ukuran, dan frekuensi pemakaian oleh pengunjung dalam 30 hari terakhir.',
              en: 'Instant counters for active frame inventory, format size varieties, and visitor usage frequency over the past 30 days.',
            },
          },
          {
            id: 'frame-schema',
            x: 49,
            y: 23,
            title: {
              id: 'Tabel Kendali Spesifikasi & Distribusi Kiosk',
              en: 'Frame Specification & Kiosk Distribution Schema',
            },
            description: {
              id: 'Mengelola kolom Preview, Nama, Sumber, Ukuran, Jumlah Foto, Kiosk terhubung, statistik Dipakai (30 Hari), dan tombol Aksi.',
              en: 'Manages Preview, Name, Source, Size, Photo Count, connected Kiosks, 30-Day Usage counts, and quick Actions.',
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
        imageUrl: '/assets/aistudio/pictomatic-frame-gif.png',
        description: {
          id: 'Selain cetakan fisik, pengunjung photobooth modern sangat menyukai salinan digital berbentuk animasi gerak (GIF). Modul Daftar Frame GIF ini memudahkan tim teknis dan operasional mengatur, memetakan, dan memperbarui tautan bundle animasi Frame GIF secara spesifik untuk masing-masing mesin kiosk dari jarak jauh.',
          en: 'Beyond physical prints, modern photobooth visitors love animated digital keepsakes (GIFs). The Frame GIF module enables technical and operations teams to remotely configure, map, and update animated GIF frame bundle links for each individual kiosk machine.',
        },
        capabilities: [
          {
            id: 'Pemetaan Tautan Bundle Animasi per Kiosk: Tombol "+ Atur Link Frame" untuk menautkan URL bundle aset animasi Frame GIF ke unit kiosk tertentu agar hasil render GIF pengunjung sesuai dengan tema cabang atau event.',
            en: 'Per-Kiosk Animated Bundle Mapping: "+ Atur Link Frame" action binds specific animated GIF asset bundle URLs to individual kiosks so digital outputs match branch or event themes.',
          },
          {
            id: 'Pemantauan Status Kesiapan Link Kiosk: Indikator kapsul status yang merinci Total Kiosk, jumlah kiosk dengan Link Terpasang (hijau), kiosk yang Belum Diatur, serta filter urutan Terakhir Update.',
            en: 'Kiosk Link Readiness Indicators: Status pills detailing Total Kiosks, kiosks with Active Links Installed (emerald), Unconfigured kiosks, and Last Updated sorting.',
          },
          {
            id: 'Pencarian Kiosk, Filter Status & Export CSV: Memungkinkan audit cepat daftar konfigurasi Nama Kiosk, Link Frame, dan waktu Terakhir Diubah lengkap dengan fitur unduh laporan "+ Export CSV".',
            en: 'Kiosk Search, Status Filtering & CSV Export: Enables rapid auditing of Kiosk Name, Frame Link, and Last Modified timestamps with one-click "+ Export CSV".',
          },
        ],
        hotspots: [
          {
            id: 'gif-actions',
            x: 70,
            y: 14,
            title: {
              id: 'Tombol + Atur Link Frame & + Export CSV',
              en: '+ Configure Frame Link & + Export CSV Actions',
            },
            description: {
              id: 'Menambahkan atau memperbarui tautan bundle animasi Frame GIF ke kiosk target serta mengekspor tabel konfigurasi ke file CSV.',
              en: 'Adds or updates animated GIF frame bundle URLs for target kiosks and exports configuration tables to CSV.',
            },
          },
          {
            id: 'gif-status-pills',
            x: 32,
            y: 19,
            title: {
              id: 'Indikator Total Kiosk, Link Terpasang & Belum Diatur',
              en: 'Total Kiosks, Installed Links & Pending Status Pills',
            },
            description: {
              id: 'Memastikan tidak ada mesin photobooth yang terlewat saat peluncuran kampanye animasi baru dengan pemantauan status terpasang.',
              en: 'Ensures no photobooth kiosk is missed during new campaign rollouts by surfacing installed vs. unconfigured link counts.',
            },
          },
          {
            id: 'gif-table',
            x: 49,
            y: 23,
            title: {
              id: 'Tabel Mapping Nama Kiosk & Link Frame GIF',
              en: 'Kiosk Name & GIF Frame Link Mapping Table',
            },
            description: {
              id: 'Menampilkan daftar Nama Kiosk, URL Link Frame aktif, stempel waktu Terakhir Diubah, dan kontrol Aksi perubahan.',
              en: 'Displays Kiosk Name, active Frame Link URL, Last Modified timestamp, and configuration Action controls.',
            },
          },
        ],
      },
      {
        id: 'sticker',
        tabLabel: { id: '07. Studio Stiker', en: '07. Sticker Studio' },
        badge: { id: '16 Stiker · 22.900x Ditempel', en: '16 Stickers · 22,900x Placed' },
        title: {
          id: 'Studio Stiker Digital — Manajemen Aset Dekorasi, Kategori Pack & Simulasi Live',
          en: 'Digital Sticker Studio — Decoration Asset CMS, Themed Packs & Live Simulator',
        },
        imageUrl: '/assets/aistudio/pictomatic-sticker.jpg',
        description: {
          id: 'Modul pengelolaan aset stiker digital interaktif yang memungkinkan pengunjung menghias foto mereka di layar sentuh kiosk photobooth. Tim kreatif dapat mengelola 16+ stiker aktif yang dikelompokkan ke dalam 6 kategori Sticker Packs tematik, memantau frekuensi pemakaian setiap stiker secara presisi (total 22.900x ditempel oleh pengunjung), mendistribusikannya ke seluruh kiosk, hingga melakukan simulasi penempelan stiker di foto sebelum dipublikasikan.',
          en: 'Interactive digital sticker asset management module empowering visitors to customize their photos on kiosk touchscreens. Creative teams manage 16+ active stickers organized across 6 themed Sticker Packs, track exact placement analytics (22,900+ total visitor placements), distribute packs across kiosks, and test sticker placement on sample photos prior to deployment.',
        },
        capabilities: [
          {
            id: 'Katalog Visual 6 Kategori Sticker Packs & Analitik Pemakaian: Mengelola aset populer seperti Sparkle Star Y2K (2.840x dipakai), Cute Bunny Ears (2.410x), Pink Satin Ribbon (1.980x), Retro Sunglasses Y2K, hingga Royal Golden Crown dalam kategori Y2K Aesthetic, Cute Korean / K-Pop, Birthday & Party, Love & Romantic, Vintage & Tape, serta Doodle Props & Anime.',
            en: '6 Themed Sticker Pack Categories & Placement Analytics: Manages top-performing assets like Sparkle Star Y2K (2,840x used), Cute Bunny Ears (2,410x), and Pink Satin Ribbon (1,980x) across Y2K Aesthetic, Cute Korean / K-Pop, Birthday & Party, Love & Romantic, Vintage & Tape, and Doodle Props & Anime packs.',
          },
          {
            id: 'Simulasi Interaktif "Tes Tempel di Foto" & 3 Mode Tampilan: Dilengkapi fitur khusus "Tes Tempel di Foto" untuk menguji transparansi dan skala stiker di atas kanvas foto, serta 3 pilihan tata letak manajemen (Galeri Grid, Tabel Stiker, dan Sticker Packs).',
            en: 'Interactive "Test Sticker on Photo" Simulator & 3 View Modes: Includes a built-in "Tes Tempel di Foto" sandbox to verify transparency and scaling on sample photos, plus 3 management views (Grid Gallery, Sticker Table, and Sticker Packs).',
          },
          {
            id: 'Kontrol Granular per Kartu Stiker & Export CSV: Setiap kartu stiker menampilkan pratinjau di atas kanvas transparan, badge status Aktif, jumlah kiosk terhubung (misal: 8 Kiosk), counter pemakaian real-time, serta tombol cepat Coba, Edit, dan Matikan.',
            en: 'Granular Per-Sticker Card Controls & CSV Export: Each sticker card renders on a transparency checkerboard with an Active badge, connected kiosk count (e.g., 8 Kiosks), real-time usage counter, and quick Try, Edit, and Disable actions.',
          },
        ],
        hotspots: [
          {
            id: 'stk-toolbar',
            x: 33,
            y: 15,
            title: {
              id: 'Switcher Galeri Grid / Tabel / Packs & Filter Kategori',
              en: 'Grid / Table / Packs View Switcher & Pack Filters',
            },
            description: {
              id: 'Berpindah mulus antara tampilan Galeri Grid visual, Tabel Stiker, atau pengelompokan Sticker Packs disertai pencarian dan filter kiosk.',
              en: 'Seamlessly toggles between visual Grid Gallery, Sticker Table, and Sticker Packs views alongside search and kiosk filters.',
            },
          },
          {
            id: 'stk-simulator',
            x: 63,
            y: 15,
            title: {
              id: 'Fitur "+ Tambah Stiker" & Simulasi "Tes Tempel di Foto"',
              en: '"+ Add Sticker" & "Test Sticker on Photo" Simulator',
            },
            description: {
              id: 'Tim operasional dapat mengunggah aset PNG transparan baru dan langsung mencoba menempelkannya pada sampel foto sebelum tayang di kiosk.',
              en: 'Operators can upload new transparent PNG stickers and immediately test-place them on sample photos before pushing live to kiosks.',
            },
          },
          {
            id: 'stk-stats-bar',
            x: 37,
            y: 19,
            title: {
              id: 'Bar Analitik Stiker (16 Aktif · 6 Packs · 22.900x Ditempel)',
              en: 'Sticker Analytics Bar (16 Active · 6 Packs · 22,900x Placed)',
            },
            description: {
              id: 'Merangkum total aset aktif, jumlah pack, jumlah kiosk terhubung, total akumulasi penempelan stiker (22.900x), dan stiker terpopuler.',
              en: 'Summarizes active sticker count, pack totals, connected kiosks, cumulative visitor placements (22,900x), and the #1 trending sticker.',
            },
          },
          {
            id: 'stk-cards',
            x: 45,
            y: 44,
            title: {
              id: 'Kartu Aset Stiker Interaktif dengan Counter Pemakaian',
              en: 'Interactive Sticker Asset Cards with Usage Counters',
            },
            description: {
              id: 'Menampilkan preview stiker di atas grid transparan, label pack kategori, cakupan kiosk, angka pemakaian (2.840x dipakai), serta tombol Coba/Edit/Matikan.',
              en: 'Displays sticker previews on a checkerboard canvas, category pack tags, kiosk coverage, usage counters (2,840x used), and Try/Edit/Disable controls.',
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
      id: 'Aplikasi Otomasi Berita Acara Serah Terima & Bukti Tayang Resmi',
      en: 'Official Handover Document (BAST) & Live Proof Automation App',
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
    imageUrl: '/assets/aistudio/image_4731c564.png',
    accentHex: '#4F46E5',
    featured: true,
    summary: {
      id: 'Web app khusus agensi untuk menyusun dokumen resmi BAST lengkap dengan lampiran screenshot bukti tayang live, stempel perusahaan, dan ekspor PDF presisi format A4.',
      en: 'Purpose-built agency web app for generating official BAST handover documents complete with live campaign screenshots, digital company stamps, and print-ready A4 PDF export.',
    },
    challenge: {
      id: 'Menyusun dokumen serah terima proyek untuk klien korporasi seperti Garuda Indonesia membutuhkan akurasi format hukum, penulisan nominal terbilang, serta penataan lampiran screenshot yang sering memakan waktu lama secara manual.',
      en: 'Assembling formal handover documents for enterprise clients like Garuda Indonesia required legal formatting precision, spelled-out currency, and clean screenshot layouts that took hours manually.',
    },
    solution: {
      id: 'Membangun antarmuka split-screen: panel editor terstruktur di kiri dengan dukungan drag-and-drop & paste clipboard (Ctrl+V) untuk bukti tayang, serta pratinjau dokumen resmi A4 secara real-time di kanan.',
      en: 'Crafted a split-screen workspace: a structured multi-step editor on the left supporting drag-and-drop and Ctrl+V screenshot pasting, synced live to an authentic A4 legal preview on the right.',
    },
    highlights: [
      {
        id: 'Paste bukti tayang langsung via Ctrl+V atau unggah 2 foto sekaligus per halaman lampiran.',
        en: 'Paste live proof screenshots via Ctrl+V or upload two visuals simultaneously per attachment sheet.',
      },
      {
        id: 'Mode Template Presets, Drafts tersimpan, Salin Teks cepat, Highlight Kuning panduan, dan Export PDF instan.',
        en: 'Template Presets, saved Drafts, quick text copy, yellow template guidance mode, and instant PDF export.',
      },
      {
        id: 'Rendering stempel resmi perusahaan dan tata letak tanda tangan Pihak Pertama & Kedua secara presisi.',
        en: 'Precision rendering of official company stamp and dual-party signature blocks ready for executive sign-off.',
      },
    ],
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Live A4 Preview', 'PDF Export'],
    metrics: [
      { label: { id: 'Waktu Susun', en: 'Drafting Time' }, value: '< 3 Mnt' },
      { label: { id: 'Langkah Editor', en: 'Editor Steps' }, value: '4 Tahap' },
      { label: { id: 'Format Output', en: 'Output Format' }, value: 'A4 PDF' },
    ],
    hotspots: [
      {
        id: 'bast-toolbar',
        x: 71,
        y: 4,
        title: {
          id: 'Toolbar Aksi Cepat & Export PDF',
          en: 'Quick Action Bar & PDF Export',
        },
        description: {
          id: 'Preset template agensi, penyimpanan draf, salin teks dokumen, dan ekspor PDF multi-halaman sekali klik.',
          en: 'Agency template presets, draft storage, plain-text copy, and one-click multi-page PDF generation.',
        },
      },
      {
        id: 'bast-upload',
        x: 21,
        y: 62,
        title: {
          id: 'Unggah & Paste Ctrl+V Bukti Tayang',
          en: 'Drag-Drop & Ctrl+V Proof Upload',
        },
        description: {
          id: 'Mendukung upload ganda atau langsung menempel screenshot dari clipboard untuk mempercepat lampiran bukti live.',
          en: 'Supports dual uploads or direct clipboard pasting to assemble live social proof sheets in seconds.',
        },
      },
      {
        id: 'bast-preview',
        x: 61,
        y: 44,
        title: {
          id: 'Pratinjau Dokumen Resmi A4 Real-Time',
          en: 'Real-Time Official A4 Live Preview',
        },
        description: {
          id: 'Setiap perubahan data pihak, deliverables, dan nominal rupiah terbilang langsung terlihat akurat pada lembar cetak.',
          en: 'Every edit to legal parties, deliverables, and spelled-out rupiah values updates the printable A4 sheet instantly.',
        },
      },
      {
        id: 'bast-stamp',
        x: 59,
        y: 88,
        title: {
          id: 'Blok Tanda Tangan & Stempel Digital',
          en: 'Signature Block & Digital Stamp',
        },
        description: {
          id: 'Integrasi visual stempel resmi PT Inspirasi Suara Baik yang sejajar presisi dengan kolom tanda tangan para pihak.',
          en: 'Crisp placement of the official PT Inspirasi Suara Baik company stamp aligned with dual signature lines.',
        },
      },
    ],
  },
  {
    id: 'adabtiv-spk-generator',
    slug: 'adabtiv-spk-generator',
    indexLabel: '03',
    title: 'Adabtiv SPK Generator',
    subtitle: {
      id: 'Builder Surat Perjanjian Kerja Interaktif dengan Preset Industri',
      en: 'Interactive Work Agreement (SPK) Builder with Industry Presets',
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
    imageUrl: '/assets/aistudio/image_2a6bab41.png',
    accentHex: '#10B981',
    featured: true,
    summary: {
      id: 'Alat penyusun kontrak SPK modern dengan preset industri sekali klik, formulir akordeon 5 bagian, penyimpanan otomatis di browser, dan pratinjau A4 dua halaman.',
      en: 'Modern legal contract builder featuring one-click industry presets, a 5-section accordion form, browser auto-save with history, and dual-page A4 live preview.',
    },
    challenge: {
      id: 'Tim akun dan legal agensi kerap mengulang penulisan klausul Statement of Work (SoW) untuk berbagai vertikal klien—mulai dari Tech/Gadget hingga FMCG dan Otomotif—yang rawan typo dan inkonsistensi.',
      en: 'Agency account and legal teams repeatedly rewrote Statement of Work clauses across verticals—from Tech/Gadget to FMCG and Automotive—risking typos and formatting drift.',
    },
    solution: {
      id: 'Menghadirkan sistem preset industri otomatis yang mengisi butir SoW secara instan, dipadukan dengan formulir akordeon bersih, fitur Draf & Riwayat lokal, serta kontrol zoom & cetak 2 halaman.',
      en: 'Delivered an automated industry preset engine that populates structured SoW deliverables instantly, paired with a clean 5-part accordion form, local draft history, and 2-page zoom/print controls.',
    },
    highlights: [
      {
        id: '3 Preset Industri instan (Tech/Gadget, FMCG/Beauty, Otomotif/Event) untuk mengisi klausul kerja otomatis.',
        en: '3 one-click Industry Presets (Tech/Gadget, FMCG/Beauty, Automotive/Event) for instant contract scaffolding.',
      },
      {
        id: 'Auto-save lokal di browser dengan manajemen Draf & Riwayat agar pekerjaan aman tanpa login rumit.',
        en: 'Automatic browser persistence with Drafts & History management so work is never lost mid-edit.',
      },
      {
        id: 'Navigasi pratinjau Semua Halaman, Hal. 1, dan Hal. 2 dengan zoom fleksibel serta tombol Cetak & Export PDF.',
        en: 'Dedicated All Pages, Page 1, and Page 2 preview controls with zoom scaling plus Print & Export PDF.',
      },
    ],
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Local Persistence', 'Print CSS'],
    metrics: [
      { label: { id: 'Preset Industri', en: 'Industry Presets' }, value: '3 Vertikal' },
      { label: { id: 'Struktur Form', en: 'Form Structure' }, value: '5 Bagian' },
      { label: { id: 'Auto-Save', en: 'Auto-Save' }, value: 'Browser' },
    ],
    hotspots: [
      {
        id: 'spk-presets',
        x: 13,
        y: 13,
        title: {
          id: 'Template Cepat Preset Industri',
          en: 'Quick Industry Presets',
        },
        description: {
          id: 'Sekali klik mengisi deliverables khas kampanye Tech/Gadget, FMCG/Beauty, atau Otomotif/Event.',
          en: 'One-click presets pre-fill typical campaign deliverables for Tech, FMCG/Beauty, or Automotive/Event.',
        },
      },
      {
        id: 'spk-accordion',
        x: 14,
        y: 52,
        title: {
          id: 'Formulir Akordeon 5 Langkah',
          en: '5-Section Accordion Builder',
        },
        description: {
          id: 'Mengelompokkan Informasi Campaign, Pihak Pertama, Pihak Kedua, SoW, dan Nilai Kontrak tanpa terasa penuh sesak.',
          en: 'Groups Campaign Info, First Party, Second Party, SoW Deliverables, and Contract Terms with zero visual clutter.',
        },
      },
      {
        id: 'spk-preview-bar',
        x: 65,
        y: 9,
        title: {
          id: 'Kontrol Halaman, Zoom & Export',
          en: 'Page Switcher, Zoom & Export',
        },
        description: {
          id: 'Berpindah mulus antara Semua Halaman, Hal. 1, atau Hal. 2, atur zoom, cetak langsung, atau unduh PDF.',
          en: 'Switch effortlessly between All Pages, Page 1, and Page 2, adjust zoom, print directly, or export PDF.',
        },
      },
      {
        id: 'spk-sheet',
        x: 64,
        y: 49,
        title: {
          id: 'Lembar Kontrak SPK Format Resmi',
          en: 'Official Legal SPK Sheet',
        },
        description: {
          id: 'Tipografi dokumen formal berstandar korporat dengan kop Adabtiv dan penomoran butir ketentuan otomatis.',
          en: 'Corporate-grade legal typography featuring the Adabtiv letterhead and structured Statement of Work clauses.',
        },
      },
    ],
  },
];

export const CAPABILITIES_DATA = [
  {
    index: '01',
    title: {
      id: 'Desain Antarmuka & Sistem Desain',
      en: 'Interface Design & Design Systems',
    },
    summary: {
      id: 'Merancang antarmuka web dan aplikasi yang bersih, terukur, dan punya karakter visual kuat — bukan sekadar template generik.',
      en: 'Crafting crisp, structured web and product interfaces with unmistakable visual character — never generic templates.',
    },
    deliverables: {
      id: ['UI/UX Aplikasi Web & SaaS', 'Arsitektur Komponen Modular', 'Prototipe Interaktif High-Fidelity', 'Audit Visual & Aksesibilitas'],
      en: ['Web App & SaaS UI/UX', 'Modular Component Architecture', 'High-Fidelity Interactive Prototypes', 'Visual & Accessibility Audits'],
    },
  },
  {
    index: '02',
    title: {
      id: 'Frontend Engineering & Interaksi',
      en: 'Frontend Engineering & Motion',
    },
    summary: {
      id: 'Menerjemahkan desain menjadi kode React & TypeScript yang cepat, responsif, dan dilengkapi mikro-interaksi halus.',
      en: 'Translating designs into fast, responsive React & TypeScript applications elevated by crisp micro-interactions.',
    },
    deliverables: {
      id: ['React, TypeScript & Tailwind CSS', 'Animasi Transisi & Gerak Presisi', 'Dashboard Data & Visualisasi Real-Time', 'Optimasi Performa & Responsivitas'],
      en: ['React, TypeScript & Tailwind CSS', 'Precision Motion & Transitions', 'Real-Time Data Dashboards', 'Performance & Responsive Polish'],
    },
  },
  {
    index: '03',
    title: {
      id: 'Alat Otomasi & Web Internal Bisnis',
      en: 'Workflow Tools & Business Automation',
    },
    summary: {
      id: 'Membangun aplikasi web fungsional seperti generator dokumen BAST/SPK, kasir, dan panel operasional yang memangkas jam kerja manual.',
      en: 'Building purposeful operational tools like BAST/SPK document generators, POS dashboards, and internal systems that cut manual hours.',
    },
    deliverables: {
      id: ['Generator Dokumen & Live A4 PDF', 'Alur Kerja Tanpa Hambatan (Ctrl+V / Preset)', 'Panel Admin Multi-Modul', 'Penyimpanan Draf & Ekspor Laporan'],
      en: ['Document Generators & Live A4 PDF', 'Frictionless Workflows (Ctrl+V / Presets)', 'Multi-Module Admin Panels', 'Draft Persistence & Report Exports'],
    },
  },
];

export const PROCESS_STEPS = [
  {
    step: '01',
    title: { id: 'Pemetaan Masalah', en: 'Problem Framing' },
    detail: {
      id: 'Membedah alur kerja nyata pengguna agar setiap tombol dan layar menyelesaikan hambatan operasional yang spesifik.',
      en: 'Dissecting real user workflows so every control and layout directly removes operational friction.',
    },
  },
  {
    step: '02',
    title: { id: 'Eksplorasi Visual & Gerak', en: 'Visual & Motion Direction' },
    detail: {
      id: 'Menetapkan hierarki tipografi, kontras warna, serta ritme animasi yang memberi kesan modern dan mudah dipahami.',
      en: 'Establishing typographic hierarchy, contrast balance, and motion choreography that feels modern and intuitive.',
    },
  },
  {
    step: '03',
    title: { id: 'Eksekusi Kode Produksi', en: 'Production Engineering' },
    detail: {
      id: 'Implementasi komponen terstruktur dengan manajemen state yang rapi, validasi lengkap, dan performa stabil di semua layar.',
      en: 'Building structured components with clean state management, thorough validation, and smooth performance across viewports.',
    },
  },
  {
    step: '04',
    title: { id: 'Uji Detail & Peluncuran', en: 'Polish & Delivery' },
    detail: {
      id: 'Penyempurnaan mikro-interaksi, responsivitas mobile, dan kesiapan pakai langsung oleh tim bisnis maupun klien.',
      en: 'Refining micro-interactions, mobile ergonomics, and launch readiness for immediate daily team adoption.',
    },
  },
];
