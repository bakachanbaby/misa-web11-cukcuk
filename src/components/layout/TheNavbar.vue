<template>
    <div class="navbar">
        <!-- Narbar logo -->
        <div class="m-logo-box">
            <div class="m-toggle"></div>
            <div class="m-logo-page"></div>
            <div class="m-text">Kế toán</div>
        </div>
        <!-- Narbar content -->
        <div class="m-navbar-box">
            <div class="m-menu-item">
                <div class="m-menu-item-icon i-overview"></div>
                <div class="m-menu-item-text">Tổng quan</div>
            </div>
            <router-link class="m-menu-item" to="/employee">
                <div class="m-menu-item-icon i-cash"></div>
                <div class="m-menu-item-text">Nhân viên</div>
            </router-link>
            <router-link class="m-menu-item" to="/customer">
                <div class="m-menu-item-icon i-deposit"></div>
                <div class="m-menu-item-text">Khách hàng</div>
            </router-link>
            <div class="m-menu-item">
                <div class="m-menu-item-icon i-purchas"></div>
                <div class="m-menu-item-text">Mua hàng</div>
            </div>
            <div class="m-menu-item">
                <div class="m-menu-item-icon i-sell"></div>
                <div class="m-menu-item-text">Bán hàng</div>
            </div>
            <div class="m-menu-item">
                <div class="m-menu-item-icon i-bill"></div>
                <div class="m-menu-item-text">Quản lý hóa đơn</div>
            </div>
            <div class="m-menu-item">
                <div class="m-menu-item-icon i-warehouse"></div>
                <div class="m-menu-item-text">Kho</div>
            </div>
            <div class="m-menu-item">
                <div class="m-menu-item-icon i-tools"></div>
                <div class="m-menu-item-text">Công cụ dụng cụ</div>
            </div>
            <div class="m-menu-item">
                <div class="m-menu-item-icon i-asset"></div>
                <div class="m-menu-item-text">Tài sản cố định</div>
            </div>
            <div class="m-menu-item">
                <div class="m-menu-item-icon i-tax"></div>
                <div class="m-menu-item-text">Thuế</div>
            </div>
            <div class="m-menu-item">
                <div class="m-menu-item-icon i-price"></div>
                <div class="m-menu-item-text">Giá thành</div>
            </div>
            <div class="m-menu-item">
                <div class="m-menu-item-icon i-general"></div>
                <div class="m-menu-item-text">Tổng hợp</div>
            </div>
            <div class="m-menu-item">
                <div class="m-menu-item-icon i-bank"></div>
                <div class="m-menu-item-text">Ngân hàng</div>
            </div>
            <div class="m-menu-item">
                <div class="m-menu-item-icon i-notify"></div>
                <div class="m-menu-item-text">Báo cáo</div>
            </div>
            <div class="m-menu-item">
                <div class="m-menu-item-icon i-financial-analysis"></div>
                <div class="m-menu-item-text">Phân tích tài chính</div>
            </div>
        </div>
    </div>
</template>