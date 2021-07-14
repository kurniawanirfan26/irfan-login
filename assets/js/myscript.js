const flashData = $('.flash-data').data('flashdata');

if (flashData) {
    Swal.fire({
        icon: 'success',
        title: 'Success',
        text: flashData,
        footer: 'Terima Kasih'
    });
}


//tombol hapus
$('.tombol-hapus').on('click', function (e) {

    e.preventDefault();
    const href = $(this).attr('href');

    Swal.fire({
        title: 'Apakah anda yakin?',
        text: "data mahasiswa akan dihapus",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Hapus Data!'
    }).then((result) => {
        if (result.isConfirmed) {
            document.location.href = href;
        }
    })
});

function change() {
    var x = document.getElementById('password').type;

    if (x == 'password') {
        document.getElementById('password').type = 'text';
        document.getElementById('mybutton').innerHTML = '<i class="far fa-eye"></i>';
    }
    else {
        document.getElementById('password').type = 'password';
        document.getElementById('mybutton').innerHTML = '<i class="fas fa-eye-slash"></i>';
    }
}