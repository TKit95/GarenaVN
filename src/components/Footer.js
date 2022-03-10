

function Footer() {
    return (
        <div className="Footer">
            <div className="Footer__logo">
                <img src="https://cdn.vn.garenanow.com/web/lol-product/LOLwebsite/img/footer/logos-vn.png" />
            </div>
            <div className="Footer__text">
                <p>Sản phẩm được hợp tác phát hành bởi Công ty TNHH Liên Minh Huyền Thoại và Công ty Cổ phần Giải trí và Thể thao Điện tử Việt Nam.</p>
                <p>Văn phòng đại diện: Tầng 29, tòa nhà Trung tâm Lotte Hà Nội, số 54 đường Liễu Giai, phường Cống Vị, quận Ba Đình, thành phố Hà Nội, Việt Nam.</p>
                <p>Điện thoại: (04)7305-3939; Fax: (04)3759-2429</p>
            </div>
            <ul className="Footer__list">
                <li className="Footer__list-item">
                    <i class="fa-brands fa-facebook"></i>
                    <a>Facebook</a>
                </li >
                <li className="Footer__list-item">
                    <i class="fa-brands fa-youtube"></i>
                    <a>Youtube</a>
                </li>
                <li className="Footer__list-item">
                    <i class="fa-solid fa-book"></i>
                    <a>Điều khoản dịch vụ</a>
                </li>
                <li className="Footer__list-item">
                    <i class="fa-solid fa-list"></i>
                    <a>Trung tâm hỗ trợ</a>
                </li>
            </ul>
            <div className="Footer__end">
                <div className="Footer__end-link">
                    <a className="Footer__end-link-a">CHƠI MIỄN PHÍ</a>
                </div>
                <img className="Footer__end-img" src="https://cdn.vn.garenanow.com/web/lol-product/LOLwebsite/img/footer/vn-12.png"/>
            </div>
        </div>
    )
}

export default Footer