// Dữ liệu quận và huyện ở Hà Nội
const districts = {
        'Hai Bà Trưng': ['Bạch Mai', 'Bách Khoa', 'Đồng Tâm', 'Minh Khai', 'Thanh Nhàn'],
        'Hoàn Kiếm': ['Hàng Bạc', 'Hàng Đào', 'Hàng Gai', 'Hàng Trống', 'Lý Thái Tổ'],
        'Ba Đình': ['Cống Vị', 'Điện Biên', 'Đội Cấn', 'Ngọc Hà', 'Thành Công'],
        'Đống Đa': ['Cát Linh', 'Kim Liên', 'Láng Hạ', 'Ô Chợ Dừa', 'Quang Trung'],
        'Cầu Giấy': ['Dịch Vọng', 'Mai Dịch', 'Nghĩa Đô', 'Nghĩa Tân', 'Quan Hoa'],
        'Hà Đông': ['Hà Cầu', 'Mỗ Lao', 'Phú La', 'Văn Quán', 'Yên Nghĩa'],
        'Thanh Xuân': ['Kim Giang', 'Nhân Chính', 'Phương Liệt', 'Thanh Xuân Bắc', 'Thanh Xuân Nam']
};

// Lấy các phần tử select
const stadiumTypeSelect = document.getElementById('stadiumType');
const districtSelect = document.getElementById('district');
const wardSelect = document.getElementById('ward');

// Xử lý khi chọn loại sân
stadiumTypeSelect.addEventListener('change', function() {
    if (this.value) {
        districtSelect.disabled = false;
        // Xóa các option cũ trong district select
        districtSelect.innerHTML = '<option value="" disabled selected>Chọn quận</option>';
        // Thêm các quận vào district select
        Object.keys(districts).forEach(district => {
            const option = document.createElement('option');
            option.value = district;
            option.textContent = district;
            districtSelect.appendChild(option);
        });
    } else {
        districtSelect.disabled = true;
        wardSelect.disabled = true;
        districtSelect.innerHTML = '<option value="" disabled selected>Chọn quận</option>';
        wardSelect.innerHTML = '<option value="" disabled selected>Chọn huyện</option>';
    }
});

// Xử lý khi chọn quận
districtSelect.addEventListener('change', function() {
    if (this.value) {
        wardSelect.disabled = false;
        // Xóa các option cũ trong ward select
        wardSelect.innerHTML = '<option value="" disabled selected>Chọn huyện</option>';
        // Thêm các huyện tương ứng với quận đã chọn
        districts[this.value].forEach(ward => {
            const option = document.createElement('option');
            option.value = ward;
            option.textContent = ward;
            wardSelect.appendChild(option);
        });
    } else {
        wardSelect.disabled = true;
        wardSelect.innerHTML = '<option value="" disabled selected>Chọn huyện</option>';
    }
});

let suggestItems = document.querySelectorAll('.suggest-item')

for (let i = 0; i < suggestItems.length; i++) {
    suggestItems[i].addEventListener('click', function(e) {
        e.stopPropagation();
        e.preventDefault();
        let activeItem = e.target.parentElement.parentElement
        console.log(activeItem)
        console.log(e)
        for (let j = 0; j < suggestItems.length; j++) {
            suggestItems[j].classList.remove('active');
        }
        activeItem.classList.add('active');
    })
}


