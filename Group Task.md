# Apartment Management System

## Latar Belakang

Seorang manajer IT dari sebuah apartemen mevvah di pengkolan kota Jakarta, ingin mempermudah proses pengelolaan apartemen tempat ia bekerja saat ini. Proses pengelolaan apartemen saat ini masih mengandalkan dokumen sheet yang tidak bisa diakses secara online, ditambah lagi ukuran dokumen tersebut semakin lama semakin besar. Oleh karena itu diperlukan adanya sistem pengelolaan apartemen yang dapat diakses secara online dengan mudah.

## Fitur

Berdasarkan kebutuhan itu, akan dibuat suatu sistem manajemen apartemen dengan persyaratan sebagai berikut.

1. Harus ada manajemen master data:
   1. **Unit Apartemen**, dengan deskripsi sbb.

      ```tsx
      const ApartmentStatus = {
        AVAILABLE: "available",
        RENTED: "rented",
        SOLD: "sold",
        UNAVAILABLE: "unavailable",
      };

      const ApartmentDirection = {
        NORTH: 1,
        NORTHEAST: 2,
        EAST: 3,
        SOUTHEAST: 4,
        SOUTH: 5,
        SOUTHWEST: 6,
        WEST: 7,
        NORTHWEST: 8,
      };

      const ApartmentRentSchema = {
        DAILY: "daily",
        WEEKLY: "weekly",
        MONTHLY: "monthly",
      };

      class ApartmentUnit {
        id: string; // (autogenerated at backend)
        unitCode: string;
        floor: number;
        rooms: number;
        direction: string; // (value from ApartmentDirection)
        status: string; // (value from ApartmentStatus)
        balcony: boolean;
        furnished: boolean;
        rentPrice: number;
        rentSchema: string; // (value from ApartmentRentSchema)
        sellPrice: number;
      }
      ```

   2. **Penghuni**, dengan deskripsi sbb.

      ```tsx
      const MaritalStatus = {
        SINGLE,
        TAKEN,
        MARRIED,
        DIVORCED,
        JONES,
      };

      class Resident {
        id: string; // (autogenerated at backend)
        fullname: string;
        email: string;
        phone: string;
        maritalStatus: string; // (value from MaritalStatus)
        dependents: number;
        birthDate: Date;
      }
      ```
2. Harus ada manajemen transaksi penyewaan dan penjualan apartemen.

   Unit apartemen yang sudah dibeli tidak dapat disewakan kembali dan status akan berubah menjadi **SOLD**.

   Unit apartemen yang sedang disewa (**RENTED**) tidak dapat dijual sampai masa sewa berakhir.

   Unit apartemen yang **UNAVAILABLE** tidak dapat dibeli.

   Profit dapat bernilai positif atau negatif.

   ```tsx
   class Transaction {
     id: string; // (autogenerated at backend)
     unitId: string; // (id from ApartmentUnit)
     residentId: string; // (id from Resident)
     transactionDate: Date;
     rentStartDate?: Date;
     rentEndDate?: Date;
     billingDate?: Date;
     period?: number;
     price: number;
     profit: number;
   }
   ```

   **Requirement** untuk manajemen data master **pengelolaan apartemen (contoh tabel untuk manajemen master data ApartmentUnit)**

   | #   | Floor | Unit | Status | Price           | Rental Price  | Rental Schema | Details    | Resident | Actions |
   | --- | ----- | ---- | ------ | --------------- | ------------- | ------------- | ---------- | -------- | ------- |
   | 1   | 10    | 10AA | sold   | IDR 500.000.000 | IDR 5.000.000 | monthly       | - Rooms: 3 |

   - Furnished: yes
   - Balcony: no
   - Direction: west | Paijo Sukirman | [Manage] |
     | 2 | 10 | 10AB | rented | IDR 450.000.000 | IDR 4.500.000 | monthly | - Rooms: 3
   - Furnished: no
   - Balcony: yes
   - Direction: southwest | Tukiyem Markonah | [Manage] |
     | 3 | 10 | 10AC | available | IDR 550.000.000 | IDR 5.500.000 | weekly | - Rooms: 3
   - Furnished: yes
   - Balcony: yes
   - Direction: south | - | [Manage] |

   **Persyaratan**

   1. Action **Manage** akan membuka page baru berisikan informasi lengkap terkait unit, termasuk informasi lengkap terkait penyewa/pembeli **jika ada**.
   2. Pada halaman **Manage** untuk melakukan pembaruan data terkait unit apartemen, dapat diarahkan menuju ke halaman update unit apartemen.
   3. Pada halaman laporan ini dapat dilakukan filtering data apartemen berdasarkan floor, status, atau rental schema.
   4. Pada halaman laporan ini dapat dilakukan sorting data berdasarkan sell price maupun rental price, secara ascending atau descending

3. Halaman **Transaksi Jual/Beli**

   | #   | Floor | Unit | Resident         | Status | Price           | Transaction Price | Profit         | Transaction Date | Rental Schema | Start / End Date          | Billing Date |
   | --- | ----- | ---- | ---------------- | ------ | --------------- | ----------------- | -------------- | ---------------- | ------------- | ------------------------- | ------------ |
   | 1   | 10    | 10AA | Paijo Sukirman   | sold   | IDR 500.000.000 | IDR 550.000.000   | IDR 50.000.000 | 19-Sep-2022      | -             | -                         | -            |
   | 2   | 10    | 10AB | Tukiyem Markonah | rented | IDR 4.000.000   | IDR 3.500.000     | (IDR 500.000)  | 20-Sep-2022      | monthly       | 20-Sep-2022 / 19-Mar-2022 | 20-Oct-2022  |

   **Persyaratan**

   1. Pada halaman ini dapat dilakukan pencarian data resident berdasarkan nama.
   2. Pada halaman ini dapat dilakukan filtering data transaksi berdasarkan floor atau status.
   3. Pada halaman ini dapat dilakukan sorting data berdasarkan profit atau transaction date, secara ascending atau descending.

4. Harus ada **form transaksi penjualan / penyewaan**.
   1. Memiliki field dropdown Unit Apartemen yang available.
   2. Memiliki field dropdown nama lengkap calon Resident yang akan membeli/menyewa.
   3. Memiliki field dropdown jenis transaksi **sewa** atau **jual**.
   4. Memiliki field price (readonly) otomatis terisi sesuai jenis transaksi, jika **sewa** menampilkan harga **sewa**, jika **jual** menampilkan harga **jual**.
   5. Memiliki field transaction price yang dapat diisi, pada mulanya field ini langsung diisikan price sesuai unit-nya (harga sewa atau harga jual), namun dapat diubah (harga jadi, bisa naik atau turun).
   6. Memiliki field transaction date yang dapat diisi, field bertipe date.
   7. Jika memilih jenis transaksi **sewa**, akan menambahkan field baru sbb (jika transaksi jual tidak ditampilkan).
      1. Field start date, tanggal mulai sewa.
      2. Field end date, tanggal berakhir sewa.
      3. Field billing date, tanggal tagihan sewa.
   8. Seluruh field wajib diisi, field tambahan untuk transaksi sewa hanya dapat wajib diisi ketika jenis transaksi adalah sewa.

## Technical Requirements

1. Wajib menerapkan HTTP Request dan Routing.
2. Wajib menambahkan fitur login user, seluruh halaman manajemen tidak dapat diakses tanpa login.
3. Wajib menerapkan form validation pada form transaction, master data, dan pada form login.
4. Bebas menggunakan state redux atau redux toolkit.
5. Bebas menggunakan function component atau class component.
6. Bebas menggunakan css framework manapun, selama dapat menghasilkan output tampilan yang rapih.
7. Bebas menggunakan template react JavaScript atau TypeScript.

## Kriteria Penilaian

1. Keseluruhan fitur terimplementasi dengan lengkap.
2. Technical requirements yang wajib sudah terpenuhi.
3. Tampilan rapih, dan jika bisa responsive.
