import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className='bg-footerTheme text-footerText py-12'>
      <div className='mx-auto max-w-[1200px] px-4'>
        <div className='text-footerInfoText mb-8 grid grid-cols-1 text-xs lg:grid-cols-5'>
          <div className='flex flex-col space-y-2 lg:col-span-1'>
            <div className='mb-2 font-bold text-black'>CHĂM SÓC KHÁC HÀNG</div>
            <Link to='https://help.shopee.vn/portal'>Trung Tâm Trợ Giúp</Link>
            <Link to='https://shopee.vn/blog/'>Shopee Blog</Link>
            <Link to='https://help.shopee.vn/portal/article/79090-[Th%C3%A0nh-vi%C3%AAn-m%E1%BB%9Bi]-Shopee-Mall-l%C3%A0-g%C3%AC?previousPage=search%20recommendation%20bar'>
              Shopee Mall
            </Link>
            <Link to='https://help.shopee.vn/portal/article/79180-[Th%c3%a0nh-vi%c3%aan-m%e1%bb%9bi]-L%c3%a0m-sao-%c4%91%e1%bb%83-mua-h%c3%a0ng-%2F-%c4%91%e1%ba%b7t-h%c3%a0ng-tr%c3%aan-%e1%bb%a9ng-d%e1%bb%a5ng-Shopee%3F'>
              Hướng Dẫn Mua Hàng
            </Link>
            <Link to='https://banhang.shopee.vn/edu/article/13243/ban-hang-online-bat-dau-tu-dau'>
              Hướng Dẫn Bán Hàng
            </Link>
            <Link to='https://help.shopee.vn/portal/category/59-Thanh-To%C3%A1n/708-V%C3%AD-ShopeePay?page=1'>
              Thanh Toán
            </Link>
            <Link to='https://help.shopee.vn/portal/article/79144-[Shopee-Xu]-C%c3%a1c-c%c3%a2u-h%e1%bb%8fi-th%c6%b0%e1%bb%9dng-g%e1%ba%b7p'>
              Shopee Xu
            </Link>
            <Link to='https://help.shopee.vn/portal/category/60-%C4%90%C6%A1n-H%C3%A0ng-V%E1%BA%ADn-Chuy%E1%BB%83n/703-%C4%90%C6%A1n-h%C3%A0ng?page=1'>
              Vận Chuyển
            </Link>
            <Link to='https://help.shopee.vn/portal/article/79258-Tr%e1%ba%a3-h%c3%a0ng%2FHo%c3%a0n-ti%e1%bb%81n]-C%e1%ba%a9m-nang-Tr%e1%ba%a3-h%c3%a0ng-ho%c3%a0n-ti%e1%bb%81n'>
              Trả Hàng & Hoàn Tiền
            </Link>
            <Link to='https://help.shopee.vn/portal/article/79191-%5BD%E1%BB%8Bch-v%E1%BB%A5%5D-L%C3%A0m-sao-%C4%91%E1%BB%83-li%C3%AAn-h%E1%BB%87-Ch%C4%83m-s%C3%B3c-Kh%C3%A1ch-h%C3%A0ng'>
              Chăm Sóc Khách Hàng
            </Link>
            <Link to='https://help.shopee.vn/portal/article/79046-[Quy-%c4%91%e1%bb%8bnh]-Ch%c3%adnh-s%c3%a1ch-b%e1%ba%a3o-h%c3%a0nh-cho-s%e1%ba%a3n-ph%e1%ba%a9m-mua-t%e1%ba%a1i-Shopee'>
              Chính Sách Bảo Hành
            </Link>
          </div>
          <div className='flex flex-col space-y-2 lg:col-span-1'>
            <div className='mb-2 font-bold text-black'>VỀ SHOPEE</div>
            <Link to='https://careers.shopee.vn/about'>Giới Thiệu Về Shopee Việt Nam</Link>
            <Link to='https://careers.shopee.vn/jobs'>Tuyển Dụng</Link>
            <Link to='https://help.shopee.vn/portal/article/77242'>Điều Khoản Shopee</Link>
            <Link to='https://help.shopee.vn/portal/article/77244'>Chính Sách Bảo Mật</Link>
            <Link to='https://shopee.vn/mall/'>Chính Hãng</Link>
            <Link to='https://banhang.shopee.vn/'>Kênh Người Bán</Link>
            <Link to='https://shopee.vn/flash_sale/'>Flash Sales</Link>
            <Link to='https://shopee.vn/affiliate/'>Chương Trình Tiếp Thị Liên Kết Shopee</Link>
            <Link to='media.vn@shopee.com'>Liên Hệ Với Truyền Thông</Link>
          </div>
          <div className='flex flex-col space-y-2 lg:col-span-1'>
            <div>
              <div className='mb-2 font-bold text-black'>THANH TOÁN</div>
              <div className='flex flex-wrap gap-2'>
                <div className='flex h-[30px] w-[60px] items-center justify-center rounded-sm bg-white shadow'>
                  <img src='https://down-vn.img.susercontent.com/file/d4bbea4570b93bfd5fc652ca82a262a8' alt='' />
                </div>
                <div className='flex h-[30px] w-[60px] items-center justify-center rounded-sm bg-white shadow'>
                  <img src='https://down-vn.img.susercontent.com/file/a0a9062ebe19b45c1ae0506f16af5c16' alt='' />
                </div>
                <div className='flex h-[30px] w-[60px] items-center justify-center rounded-sm bg-white shadow'>
                  <img src='https://down-vn.img.susercontent.com/file/38fd98e55806c3b2e4535c4e4a6c4c08' alt='' />
                </div>
                <div className='flex h-[30px] w-[60px] items-center justify-center rounded-sm bg-white shadow'>
                  <img src='	https://down-vn.img.susercontent.com/file/bc2a874caeee705449c164be385b796c' alt='' />
                </div>
                <div className='flex h-[30px] w-[60px] items-center justify-center rounded-sm bg-white shadow'>
                  <img src='https://down-vn.img.susercontent.com/file/2c46b83d84111ddc32cfd3b5995d9281' alt='' />
                </div>
                <div className='flex h-[30px] w-[60px] items-center justify-center rounded-sm bg-white shadow'>
                  <img src='https://down-vn.img.susercontent.com/file/5e3f0bee86058637ff23cfdf2e14ca09' alt='' />
                </div>
                <div className='flex h-[30px] w-[60px] items-center justify-center rounded-sm bg-white shadow'>
                  <img src='	https://down-vn.img.susercontent.com/file/9263fa8c83628f5deff55e2a90758b06' alt='' />
                </div>
                <div className='flex h-[30px] w-[60px] items-center justify-center rounded-sm bg-white shadow'>
                  <img src='https://down-vn.img.susercontent.com/file/0217f1d345587aa0a300e69e2195c492' alt='' />
                </div>
              </div>
            </div>
            <div>
              <div className='mb-2 font-bold text-black'>ĐƠN VỊ VẬN CHUYỂN</div>
              <div className='flex flex-wrap gap-2'>
                <div className='flex h-[30px] w-[60px] items-center justify-center rounded-sm bg-white shadow'>
                  <img
                    src='https://down-vn.img.susercontent.com/file/vn-50009109-159200e3e365de418aae52b840f24185'
                    alt=''
                  />
                </div>
                <div className='flex h-[30px] w-[60px] items-center justify-center rounded-sm bg-white shadow'>
                  <img src='https://down-vn.img.susercontent.com/file/d10b0ec09f0322f9201a4f3daf378ed2' alt='' />
                </div>
                <div className='flex h-[30px] w-[60px] items-center justify-center rounded-sm bg-white shadow'>
                  <img src='https://down-vn.img.susercontent.com/file/59270fb2f3fbb7cbc92fca3877edde3f' alt='' />
                </div>
                <div className='flex h-[30px] w-[60px] items-center justify-center rounded-sm bg-white shadow'>
                  <img src='https://down-vn.img.susercontent.com/file/957f4eec32b963115f952835c779cd2c' alt='' />
                </div>
                <div className='flex h-[30px] w-[60px] items-center justify-center rounded-sm bg-white shadow'>
                  <img src='https://down-vn.img.susercontent.com/file/3900aefbf52b1c180ba66e5ec91190e5' alt='' />
                </div>
                <div className='flex h-[30px] w-[60px] items-center justify-center rounded-sm bg-white shadow'>
                  <img src='https://down-vn.img.susercontent.com/file/6e3be504f08f88a15a28a9a447d94d3d' alt='' />
                </div>
                <div className='flex h-[30px] w-[60px] items-center justify-center rounded-sm bg-white shadow'>
                  <img src='https://down-vn.img.susercontent.com/file/b8348201b4611fc3315b82765d35fc63' alt='' />
                </div>
                <div className='flex h-[30px] w-[60px] items-center justify-center rounded-sm bg-white shadow'>
                  <img src='https://down-vn.img.susercontent.com/file/0b3014da32de48c03340a4e4154328f6' alt='' />
                </div>
                <div className='flex h-[30px] w-[60px] items-center justify-center rounded-sm bg-white shadow'>
                  <img src='https://down-vn.img.susercontent.com/file/0b3014da32de48c03340a4e4154328f6' alt='' />
                </div>
                <div className='flex h-[30px] w-[60px] items-center justify-center rounded-sm bg-white shadow'>
                  <img
                    src='	https://down-vn.img.susercontent.com/file/vn-50009109-ec3ae587db6309b791b78eb8af6793fd'
                    alt=''
                  />
                </div>
                <div className='flex h-[30px] w-[60px] items-center justify-center rounded-sm bg-white shadow'>
                  <img
                    src='	https://down-vn.img.susercontent.com/file/vn-50009109-ec3ae587db6309b791b78eb8af6793fd'
                    alt=''
                  />
                </div>
              </div>
            </div>
          </div>
          <div className='flex flex-col space-y-2 lg:col-span-1'>
            <div className='mb-2 font-bold text-black'>THEO DÕI CHÚNG TÔI TRÊN</div>
            <Link to='https://www.facebook.com/ShopeeVN' className='flex space-x-2'>
              <img src='https://down-vn.img.susercontent.com/file/2277b37437aa470fd1c71127c6ff8eb5' alt='' />
              <div>Facebook</div>
            </Link>
            <Link to='https://instagram.com/Shopee_VN' className='flex space-x-2'>
              <img src='https://down-vn.img.susercontent.com/file/5973ebbc642ceee80a504a81203bfb91' alt='' />
              <div>Instagram</div>
            </Link>
            <Link to='https://www.linkedin.com/company/shopee' className='flex space-x-2'>
              <img src='https://down-vn.img.susercontent.com/file/f4f86f1119712b553992a75493065d9a' alt='' />
              <div>LinkedIn</div>
            </Link>
          </div>
          <div className='flex flex-col space-y-2 lg:col-span-1'>
            <div className='mb-2 font-bold text-black'>TẢI ỨNG DỤNG SHOPEE NGAY THÔI</div>
            <div className='flex w-full gap-2'>
              <div className='flex w-1/2 items-center justify-center rounded-sm bg-white shadow'>
                <img
                  className='h-11/12 w-11/12'
                  src='https://down-vn.img.susercontent.com/file/a5e589e8e118e937dc660f224b9a1472'
                  alt=''
                />
              </div>
              <div className='w-1.2 flex h-auto w-2/5 flex-col gap-2'>
                <div className='w-25 flex h-8 items-center justify-center rounded-sm bg-white shadow'>
                  <img
                    className='h-11/12 w-11/12'
                    src='https://down-vn.img.susercontent.com/file/ad01628e90ddf248076685f73497c163'
                    alt=''
                  />
                </div>
                <div className='w-25 flex h-8 items-center justify-center rounded-sm bg-white shadow'>
                  <img
                    className='h-11/12 w-11/12'
                    src='https://down-vn.img.susercontent.com/file/ae7dced05f7243d0f3171f786e123def'
                    alt=''
                  />
                </div>
                <div className='w-25 flex h-8 items-center justify-center rounded-sm bg-white shadow'>
                  <img
                    className='h-11/12 w-11/12'
                    src='	https://down-vn.img.susercontent.com/file/35352374f39bdd03b25e7b83542b2cb0'
                    alt=''
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='grid grid-cols-1 gap-4 border-t-[1px] py-6 text-sm lg:grid-cols-3'>
          <div className='lg:col-span-1'>
            <div>@ 2024 Shopee. Tất cả các quyền được bảo lưu.</div>
          </div>
          <div className='lg:col-span-2'>
            <div>
              Quốc gia & Khu vực: Singapore Indonesia Thái Lan Malaysia Việt Nam Philippines Brazil México Colombia
              Chile Đài Loan
            </div>
          </div>
        </div>
        <div className='mx-auto grid max-w-[940px] grid-cols-1 items-center divide-x-[1px] py-4 text-center text-xs uppercase lg:grid-cols-4'>
          <div className='lg:col-span-1'>chính sách bảo mật</div>
          <div className='lg:col-span-1'>quy chế hoạt động</div>
          <div className='lg:col-span-1'>chính sách vận chuyển</div>
          <div className='lg:col-span-1'>chính sách trả hàng và hoàn tiền</div>
        </div>
        <div className='mt-16 flex flex-col space-y-2 text-center text-xs'>
          <div className='my-3'>Công ty TNHH Shopee</div>
          <div>
            Địa chỉ: Tầng 4-5-6, Tòa nhà Capital Place, số 29 đường Liễu Giai, Phường Ngọc Khánh, Quận Ba Đình, Thành
            phố Hà Nội, Việt Nam. Tổng đài hỗ trợ: 19001221 - Email: cskh@hotro.shopee.vn
          </div>
          <div>Chịu Trách Nhiệm Quản Lý Nội Dung: Nguyễn Đức Trí - Điện thoại liên hệ: 024 73081221 (ext 4678)</div>
          <div>Mã số doanh nghiệp: 0106773786 do Sở Kế hoạch & Đầu tư TP Hà Nội cấp lần đầu ngày 10/02/2015</div>
          <div>© 2015 - Bản quyền thuộc về Công ty TNHH Shopee</div>
        </div>
      </div>
    </footer>
  )
}
