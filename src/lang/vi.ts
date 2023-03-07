export default {
  common: {
    'upload-image': 'Tải ảnh lên',
    continue: 'Tiếp tục',
    back: 'Quay lại',
    all: 'Tất cả',
    reset: 'Đặt lại',
    update: 'Cập nhật',
    more_update: 'Cập nhật thêm',
    action: 'Thao tác',
    'no-data': 'Không có dữ liệu',
    ok: 'Đồng ý',
    title: 'Amaisoft',
    confirm: 'Xác nhận',
    reject: 'Từ chối',
    access: 'Phê duyệt',
    'caps-lock-on': 'Caps lock đang bật',
    'confirm-delete': 'Bạn có chắc chắn muốn xoá?',
    'confirm-data':
			'Dữ liệu đã thay đổi. Bạn có chắc chắn muốn đóng nó không?',
    'confirm-status': 'Bạn có chắc chắn muốn thay đổi trạng thái không?',
    cancel: 'Hủy',
    delete: 'Xóa',
    edit: 'Sửa',
    save: 'Lưu',
    detail: 'Chi tiết',
    no_acc: 'Chưa có tài khoản? ',
    have_acc: 'Đã có tài khoản? ',
    register: 'Đăng ký',
    log_in: 'Đăng nhập',
    privacy: 'Điều khoản dịch vụ & Chính sách bảo mật',
    license: '©︎ 2022 Bản quyền bởi Amaisoft',
    copy_success: 'Sao chép thành công',
    copy_error: 'Sao chép thất bại',
    success_text: 'Success',
    error_text: 'Error',
    warning_text: 'Warning',
    info_text: 'Info',
    add: 'Thêm',
    'back-to-home': 'Về trang chủ',
    return_home: 'Trở về trang chủ'
  },

  validation: {
    alpha: '{_field_} chỉ có thể chứa các kí tự chữ.',
    alpha_dash:
			'{_field_} có thể chứa các kí tự chữ (A-Z a-z), số (0-9), gạch ngang (-) và gạch dưới (_).',
    alpha_num: '{_field_} chỉ có thể chứa các kí tự chữ và số.',
    alpha_spaces: '{_field_} chỉ có thế chứa các kí tự và khoảng trắng.',
    between:
			'{_field_} phải có giá trị nằm trong khoảng giữa {min} và {max}.',
    confirmed: 'Mật khẩu không khớp. Vui lòng kiểm tra lại.',
    digits: 'Trường {_field_} chỉ có thể chứa các kí tự số và bắt buộc phải có độ dài là {length}.',
    dimensions:
			'{_field_} phải có chiều rộng {width} pixels và chiều cao {height} pixels.',
    email: 'Email không đúng định dạng.',
    excluded: '{_field_} không phải là một giá trị hợp lệ.',
    ext: '{_field_} phải là một tệp.',
    image: 'Trường {_field_} phải là một ảnh.',
    oneOf: '{_field_} không phải là một giá trị hợp lệ.',
    max: '{_field_} không thể có nhiều hơn {length} kí tự.',
    'max-html': '{_field_} không thể có nhiều hơn {length} kí tự.',
    max_value: '{_field_} phải nhỏ hơn hoặc bằng {max}.',
    mimes: '{_field_} phải chứa kiểu tệp phù hợp.',
    min: '{_field_} phải chứa ít nhất {_length_} kí tự.',
    min_value: '{_field_} phải lớn hơn hoặc bằng {min}.',
    numeric: '{_field_} chỉ có thể có các kí tự số.',
    regex: '{_field_} có định dạng không đúng.',
    required: '{_field_} không được để trống.',
    required_if: '{_field_} là bắt buộc.',
    size: '{_field_} chỉ có thể chứa tệp nhỏ hơn {size}KB.',
    double: '{_field_} phải là một số thập phân hợp lệ.',
    'max-text': '{_field_} không thể có nhiều hơn {length} kí tự.',
    'after-date': '{_field_} phải lớn hơn ngày có hiệu lực.',
    'regex-number-phone': '{_field_} chỉ được nhập số.',
    less_than_wage_max: 'Mức lương Từ phải nhỏ hơn mức lương Đến.',
    phone: 'Số điện thoại không đúng định dạng.',
    'before-date-today': '{_field_} phải nhỏ hơn ngày hiện tại.',
    passNotMatch: 'Mật khẩu không khớp. Vui lòng kiểm tra lại.',
    'file-send-offer': 'Vui lòng tài file có dung lượng tối đa 5MB.',
    'check-start-time': 'Giờ kết thúc không thể nhỏ hơn giờ bắt đầu.',
    'check-end-time': 'Giờ kết thúc không thể nhỏ hơn giờ bắt đầu.',
    'confirm-password':
			'Mật khẩu mới và nhập lại mật khẩu phải trùng khớp.',
    'date-now': 'Ngày bắt đầu không thể nhỏ hơn ngày hiện tại.',
    'max-number': 'Vui lòng tài file có dung lượng tối đa 5MB.',
    'format-password':
			'Mật khẩu cần chứa 8-32 ký tự, bao gồm cả chữ hoa, chữ thường, số và ký tự đặc biệt.',
    'format-username':
			'Tên người dùng cần chứa 6 đến 32 ký tự, phải bắt đầu bằng một chữ cái và chỉ sử dụng các ký tự chữ thường(a-z), số(0-9), dấu gạch dưới ("_").',
    'max-file': 'Dung lượng file không được lớn hơn {size}MB.',
    'max-file-num': 'Upload tối đa {_num_} file.',
    'hour-now': 'Giờ bắt đầu không được nhỏ hơn giờ hiện tại.',
    'is-after-now': 'Giờ bắt đầu không được nhỏ hơn giờ hiện tại.',
    'confirm-new-password': 'Mật khẩu mới và mật khẩu cũ phải khác nhau.',
    except_skill: 'Trường kỹ năng không được phép nhập trùng.',
    'format-password-reset':
			'Mật khẩu cần chứa 8-16 ký tự, bao gồm cả chữ hoa, chữ thường, số và ký tự đặc biệt.',
    array_required: '{_field_} không được để trống.',
    required_range_date: '{_field_} không được để trống.',
    time_range_min_minute: '{_field_} phải lớn hơn {min} phút.',
    time_range_min: '{_field_} từ phải lớn hơn {min}.',
    min_price: '{_field_} phải lớn hơn hoặc bằng {min}.',
    max_length_price: '{_field_} không thể có nhiều hơn {length} kí tự.',
    has_error: 'Có lỗi xảy ra.',
    format_image:
			'Ảnh tải lên phải có định dạng JPG/JPEG/PNG và kích thước không vượt quá 10MB.',
    max_min: 'Giá trị max không nhỏ hơn giá trị min.',
    'validate-price': 'Vui lòng nhập khoảng giá phù hợp.',
    'validate-product-classification':
			'Vui lòng nhập đầy đủ tên và giá phân loại hàng.',
    between_phone: '{_field_} phải từ {min} đến {max} ký tự.',
    from_smaller_to: 'Giá gói từ phải nhỏ hơn đến.',
    must_be_greater_than_from: 'Giá gói đến phải lớn hơn từ.',
    max_day: '{_field_} phải lớn hơn {min}.',
    captcha_req: 'Vui lòng kiểm tra captcha.'
  },
  header: {
    log_out: 'Đăng xuất',
    error: 'Báo lỗi',
    profile: 'Trang cá nhân'
  },
  route: {
    dashboard: 'Trang chủ'
  },
  navbar: {
    dashboard: 'Dashboard',
    logOut: 'Đăng xuất',
    profile: 'Trang cá nhân',
    setting: 'Cài đặt hệ thống',
    theme: 'Theme',
    'change-password': 'Đổi mật khẩu'
  },
  login: {
    title: 'Title',
    logIn: 'Đăng nhập',
    'placeholder-email': 'Nhập địa chỉ email',
    'placeholder-password': 'Nhập mật khẩu',
    email: 'Email',
    password: 'Mật khẩu',
    'remember-me': 'Ghi nhớ tôi',
    'forgot-password': 'Quên mật khẩu',
    'forgot-description-title': 'Nhập địa chỉ email đã đăng ký',
    send: 'Gửi',
    'new-password': 'Mật khẩu mới',
    're-new-password': 'Nhập lại mật khẩu',
    'reset-title': 'Đặt lại mật khẩu',
    'reset-title-password': 'Nhập mật khẩu mới',
    'reset-description-title': 'Hãy nhập mật khẩu mới',
    'back-login': 'Quay về trang đăng nhập',
    register: 'Bạn chưa có tài khoản? đăng ký mới ở đây.',
    'forgot-password-title': 'Link cài đặt mật khẩu mới đã được gửi',
    'forgot-password-content-1':
			'Link đặt lại mật khẩu mới đã gửi vào email của bạn',
    'forgot-password-content-2':
			'Vui lòng kiểm tra email để đặt lại mật khẩu mới.'
  },

  reset_pass: {
    title: 'Đổi mật khẩu',
    password: 'Mật khẩu mới',
    password_confirmation: 'Nhập lại mật khẩu mới',
    save: 'Đổi mật khẩu'
  },

  account: {
    'old-password': 'Mật khẩu cũ',
    'placeholder-old-password': 'Nhập mật khẩu cũ',
    'reset-password': 'Đổi mật khẩu',
    'placeholder-new-password': 'Nhập mật khẩu mới',
    'new-password': 'Mật khẩu mới',
    're-new-password': 'Nhập lại mật khẩu mới',
    save: 'Đổi mật khẩu',
    security_verification: 'Xác minh bảo mật'
  },

  sidebar: {
    collapse: 'Thu gọn',
    notification: 'Thông báo',
    blogs: 'Bài viết',
    notification_manage: 'Quản lý thông báo',
    create_new_notification: 'Tạo thông báo',
    copyright: '© {_year_} {_company_}',
    personnel: 'Quản lý nhân sự',
    setting: 'Thiết lập'
  },
  personnel: {
    'choose-date': 'Chọn ngày',
    placeholder_search: 'Tìm kiếm nhân sự',
    empty: 'Chưa có nhân sự nào.',
    add: 'Thêm nhân sự',
    label_edit: 'Chỉnh sửa',
    label_delete: 'Xoá',
    'label-add-department': 'Thêm phòng ban',
    'name-department': 'Tên phòng ban',
    'common-title': 'Xóa phòng ban?',
    'common-content':
			'Phòng ban đã xoá sẽ không thể khôi phục. Bạn có chắc chắn muốn xoá?',
    'common-button-confirm': 'Xóa phòng ban',
    'common-content-personnel':
			'Dữ liệu nhân sự đã xoá sẽ không thể khôi phục. Bạn có chắc chắn muốn xoá?',
    'common-button-confirm-personnel': 'Xóa nhân sự',
    'common-button-cancel': 'Hủy',
    'common-data-change': 'Dữ liệu đã thay đổi',
    'label-add-personnel': 'Thêm nhân sự',
    'label-edit-personnel': 'Sửa thông tin nhân sự',
    'label-step-info': 'Thông tin cá nhân',
    'label-step-social': 'Mạng xã hội',
    'label-step-level': 'Công việc & Học vấn',
    education: 'Học vấn',
    'label-step-bank': 'Tài khoản ngân hàng',
    'label-info-personnel': 'Thông tin nhân sự',
    'label-save-personnel': 'Lưu chỉnh sửa',
    form: {
      fullname: 'Họ và tên',
      status: 'Trạng thái',
      department: 'Phòng ban',
      position: 'Vị trí',
      facebook: 'Facebook',
      telegram: 'Telegram',
      gpa: 'GPA',
      'date-join-company': 'Ngày vào công ty',
      'date-join-official': 'Ngày lên chính thức',
      'email-company': 'Email công ty',
      'email-private': 'Email cá nhân',
      birthday: 'Ngày sinh',
      phone: 'Số điện thoại',
      identity: 'CCCD/CMND',
      location: 'Nơi ở hiện nay',
      'placeholder-location': 'VD: Số nhà, Đường, Phường, Xã,...',
      'lasted-company': 'Nơi làm việc gần nhất',
      school: 'Trường',
      rank: 'Xếp loại',
      bank: 'Ngân hàng',
      'account-bank': 'Số tài khoản ngân hàng',
      agency: 'Chi nhánh ngân hàng'
    }
  },

  notification: {
    creator: 'Người tạo',
    time: 'Thời gian',
    status: 'Trạng thái',
    sort: 'Sắp xếp theo',
    create: 'Tạo bài viết',
    '15-days': '15 ngày trước',
    '30-days': '30 ngày trước',
    '90-days': '90  ngày trước',
    'custom-time': 'Thời gian tùy chỉnh ',
    save_draft: 'Lưu nháp',
    publish: 'Đăng thông báo',
    posted: 'Đã đăng',
    'last-edited-date': 'Ngày sửa gần nhất',
    'oldest-edited-date': 'Ngày sửa cũ nhất',
    'most-views': 'Lượt xem nhiều nhất',
    'common-title': 'Xóa thông báo?',
    'common-content':
			'Thông báo đã xoá sẽ không thể khôi phục. Bạn có chắc chắn muốn xoá?',
    'common-button-confirm': 'Xóa bài viết',
    'common-button-cancel': 'Hủy',
    'start-date': 'Ngày bắt đầu',
    to: '-',
    'end-date': 'Ngày kết thúc',
    title_placeholder: 'Tiêu đề thông báo...',
    title: 'Tiêu đề',
    content: 'Nội dung'
  },
  blogs: {
    title: 'Bài viết',
    create: 'Tạo bài viết',
    'common-title': 'Xóa bài viết?',
    'common-content':
			'Bài viết đã xoá sẽ không thể khôi phục. Bạn có chắc chắn muốn xoá?',
    community: {
      title: 'Cộng đồng'
    },
    posted: {
      title: 'Đã đăng'
    },
    'save-draft': {
      title: 'Lưu nháp'
    },
    favourite: {
      title: 'Yêu thích'
    }
  },
  setting: {
    title: 'Thiết lập',
    info: {
      title: 'Thông tin tài khoản'
    },
    'change-password': {
      title: 'Đổi mật khẩu'
    },
    blogs: {
      title: 'Danh mục bài viết',
      category: 'Danh mục',
      description: 'Mô tả',
      status: 'Trạng thái',
      placeholder_search: 'Tìm kiếm danh mục theo tên',
      create: 'Thêm danh mục',
      active: 'Đang hoạt động',
      diactive: 'Ngưng hoạt động',
      'common-title': 'Xóa danh mục?',
      'common-content':
				'Danh mục đã xoá sẽ không thể khôi phục. Bạn có chắc chắn muốn xoá?',
      'common-button-confirm': 'Xóa',
      'title-blogs': 'Tên danh mục'
    },
    'job-position': {
      title: 'Vị trí công việc',
      create: 'Thêm vị trí',
      job: 'Chức vụ - Vị trí công việc',
      'title-job': 'Tên chức vụ - vị trí công việc',
      description: 'Mô tả',
      action: 'Tác vụ',
      'common-title': 'Xóa vị trí công việc ?',
      'common-content':
				'Dữ liệu vị trí công việc đã xoá sẽ không thể khôi phục. Bạn có chắc chắn muốn xoá?',
      'common-button-confirm': 'Xóa vị trí công việc'
    }
  },
  error: {
    404: {
      title: 'Ôi không! Không tìm thấy trang ...',
      description:
				'Trang bạn đang tìm không được tìm thấy hoặc không có tại thời điểm này',
      reason: {
        title: 'Trong thời gian chờ đợi, bạn có thể thử:',
        1: 'Đảm bảo rằng URL của bạn đã chính xác',
        2: 'Hãy lấy cho mình một cốc nước và làm mới trang'
      }
    },
    500: {
      title: 'Ôi không! Dịch vụ không có sẵn ...',
      description: 'Máy chủ tạm thời không thể phục vụ yêu cầu của bạn',
      reason: {
        title: 'Trong thời gian chờ đợi, bạn có thể thử:',
        1: 'Làm mới lại trang sau 2 hoặc 3 phút nữa'
      }
    }
  },
  my_account: {
    profile: 'Thông tin tài khoản',
    change_password: 'Đổi mật khẩu',
    nickname: 'Biệt danh',
    setting_profile: 'Cài đặt trang cá nhân',
    introduce: 'Giới thiệu bản thân',
    personal_info: 'Thông tin cá nhân',
    no_introduce: 'Chưa có giới thiệu',
    no_nickname: 'Chưa có biệt danh',
    current_password: 'Mật khẩu hiện tại',
    new_password: 'Mật khẩu mới',
    confirm_new_password: 'Xác nhận mật khẩu mới',
    save_password: 'Lưu mật khẩu',
    user_info: {
      position: 'Vị trí',
      status: 'Trạng thái',
      department: 'Phòng ban',
      date_join: 'Ngày vào công ty',
      phone: 'Số điện thoại',
      email: 'Email',
      personal_email: 'Email cá nhân',
      dob: 'Ngày sinh',
      citizen_id: 'CCCD/CMND',
      bank: 'Ngân hàng',
      address: 'Nơi ở hiện nay',
      education: 'Học vấn',
      last_company: 'Nơi làm việc gần nhất',
      socials: 'Mạng xã hội',
      facebook: 'Facebook:',
      telegram: 'Telegram:',
      'graded-gpa': 'Xếp loại: {graded} - GPA: {gpa}',
      no_info: 'Không'
    }
  }
}
