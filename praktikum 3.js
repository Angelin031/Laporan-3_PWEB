document.getElementById("praktikumForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = {
    nama: document.getElementById("inputName").value.trim(),
    nim: document.getElementById("inputNIM").value.trim(),
    asal: document.getElementById("inputAsal").value.trim(),
    dosen: document.getElementById("selectDosen").value,
    tanggal: document.getElementById("inputTanggalLahir").value,
    teman: document.getElementById("inputTemanFavorit").value.trim(),
    ai: document.getElementById("inputAiFavorit").value.trim()
  };

  const fieldNames = {
    nama: "Nama",
    nim: "NIM",
    asal: "Asal",
    dosen: "Dosen favorit",
    tanggal: "Tanggal lahir",
    teman: "Nama teman favorit",
    ai: "AI favorit"
  };

  for (const key in formData) {
    if (!formData[key]) {
      return Swal.fire({
        icon: 'error',
        title: 'Oops!',
        text: `${fieldNames[key]} belum diisi.`,
        confirmButtonText: 'OK'
      });
    }
  }

  // Format tanggal ke dd-mm-yyyy
  const tanggalLahir = new Date(formData.tanggal);
  const formattedTanggal = tanggalLahir.toLocaleDateString('id-ID', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });

  const konfirmasi = [
    { title: "Nama Kamu:", text: formData.nama },
    { title: "NIM Kamu:", text: formData.nim },
    { title: "Asal Kamu:", text: formData.asal },
    { title: "Dosen Favorit:", text: formData.dosen },
    { title: "Tanggal Lahir:", text: formattedTanggal },
    { title: "Teman Favorit:", text: formData.teman },
    { title: "AI Favorit:", text: formData.ai }
  ];

  tampilkanPopUpKonfirmasi(konfirmasi, 0);
});

function tampilkanPopUpKonfirmasi(list, index) {
  if (index >= list.length) {
    Swal.fire({
      icon: 'success',
      title: 'Data Terkirim!',
      text: 'Terima kasih, semua data berhasil dikirim.',
      confirmButtonText: 'OK'
    });
    document.getElementById("praktikumForm").reset();
    return;
  }

  Swal.fire({
    icon: 'info',
    title: list[index].title,
    text: list[index].text,
    confirmButtonText: 'OK'
  }).then(() => tampilkanPopUpKonfirmasi(list, index + 1));
}
