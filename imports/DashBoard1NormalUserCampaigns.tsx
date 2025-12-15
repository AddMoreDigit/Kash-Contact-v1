import svgPaths from "./svg-c93d13tepm";
import imgKcLogoWhite2Transparent1 from "figma:asset/4b4bad59041302b06eae37218f1d3bd7c64d7d1e.png";
import imgRectangle137 from "figma:asset/2d90d1ffe99df5817a38c395c08ec5116a7be340.png";
import imgRectangle143 from "figma:asset/e646802d554bb1fa6ce3ceb35bf48236c77c77e1.png";
import imgRectangle138 from "figma:asset/87102388d503206b3b0fb177ad63642a9945094b.png";
import imgRectangle144 from "figma:asset/9f1f8c1da3629502bc71901baf4363bbeeeff080.png";
import imgRectangle139 from "figma:asset/5d9bf658577635a939c9246246e5a8bf87eb8ec2.png";
import imgRectangle145 from "figma:asset/09008cafd958ef228fae370333984be464a418ff.png";
import imgRectangle349 from "figma:asset/a3825e566b26b37668a63ccc1ccf01de1ed9f478.png";

function Search() {
  return (
    <div className="absolute left-[8px] size-[24px] top-[8px]" data-name="search 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="search 1">
          <path clipRule="evenodd" d={svgPaths.p250aca00} fill="var(--fill-0, #7878AB)" fillRule="evenodd" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-[#f5f5fa] overflow-clip right-[12px] rounded-[32px] shadow-[5px_5px_10px_0px_rgba(170,170,204,0.5),-5px_-5px_10px_0px_#ffffff] size-[40px] top-1/2 translate-y-[-50%]" data-name="Button">
      <Search />
    </div>
  );
}

function Input() {
  return (
    <div className="absolute bg-[#f5f5fa] h-[64px] left-[calc(16.67%+27px)] overflow-clip rounded-[20px] top-[21px] w-[360px]" data-name="Input">
      <div className="absolute flex flex-col font-['SF_Pro_Rounded:Light',sans-serif] justify-center leading-[0] left-[32px] not-italic opacity-60 right-[64px] text-[#7878ab] text-[24px] top-1/2 translate-y-[-50%]">
        <p className="leading-[40px]">{`Search `}</p>
      </div>
      <Button />
      <div className="absolute inset-0 pointer-events-none shadow-[-2px_-2px_4px_0px_inset_rgba(255,255,255,0.5),2px_2px_4px_0px_inset_rgba(170,170,204,0.25),5px_5px_10px_0px_inset_rgba(170,170,204,0.5),-5px_-5px_10px_0px_inset_#ffffff]" />
    </div>
  );
}

function ProfileAvatar() {
  return (
    <div className="absolute left-[calc(91.67%+46px)] size-[24px] top-[43px]" data-name="Profile Avatar">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_8_2090)" id="Profile Avatar">
          <path d={svgPaths.p10fc6980} fill="var(--fill-0, black)" id="Vector" />
          <path d={svgPaths.p1534e400} fill="var(--fill-0, #EEEEEE)" fillOpacity="0.933333" id="Vector_2" />
          <path d={svgPaths.p38192080} fill="var(--fill-0, #EEEEEE)" fillOpacity="0.933333" id="Vector_3" />
        </g>
        <defs>
          <clipPath id="clip0_8_2090">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text() {
  return (
    <div className="absolute content-stretch flex flex-col items-center justify-center left-[41px] rounded-[12px] top-[12px]" data-name="Text">
      <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[46px] not-italic text-[20px] text-center text-white top-[17px] translate-x-[-50%] translate-y-[-50%] w-[104px]">
        <p className="leading-[28px]">Create</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute bg-[#8363f2] content-stretch flex items-center left-[calc(66.67%+104px)] min-h-[56px] px-[24px] py-[12px] rounded-[8px] top-[27px] w-[150px]" data-name="Button">
      <Text />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents left-[calc(66.67%+104px)] top-[27px]">
      <Button1 />
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents left-[calc(66.67%+104px)] top-[27px]">
      <Group3 />
    </div>
  );
}

function Text1() {
  return (
    <div className="absolute content-stretch flex flex-col items-center justify-center left-[37px] rounded-[12px] top-[12px]" data-name="Text">
      <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[46px] not-italic text-[20px] text-black text-center top-[14px] translate-x-[-50%] translate-y-[-50%] w-[104px]">
        <p className="leading-[28px]">See all</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute bg-white content-stretch flex items-center left-[calc(83.33%+40px)] min-h-[56px] px-[24px] py-[12px] rounded-[8px] top-[478px] w-[150px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#8363f2] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Text1 />
    </div>
  );
}

function Button3() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[8px] items-center left-[calc(66.67%+92px)] min-h-[56px] px-[24px] py-[12px] rounded-[8px] top-[478px] w-[176px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#8363f2] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="relative shrink-0 size-[24px]" data-name="Vector">
        <div className="absolute inset-[-3.13%_-3.12%_-3.13%_-3.13%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 26">
            <path d={svgPaths.peb16000} id="Vector" stroke="var(--stroke-0, #2D1B69)" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-black text-center text-nowrap">
        <p className="leading-[28px] whitespace-pre">Filter By</p>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents left-[32px] top-[587px]">
      <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[94px] not-italic text-[#202020] text-[20px] text-center text-nowrap top-[641px] translate-x-[-50%] translate-y-[-50%]">
        <p className="leading-[28px] whitespace-pre">Help</p>
      </div>
      <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[72px] not-italic text-[#202020] text-[20px] top-[704px] translate-y-[-50%] w-[122px]">
        <p className="leading-[28px]">Logout</p>
      </div>
      <div className="absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] left-[32px] not-italic text-[#8363f2] text-[13px] top-[601px] translate-y-[-50%] w-[104px]">
        <p className="leading-[28px]">Feedback</p>
      </div>
      <div className="absolute inset-[51.45%_95.9%_46.77%_2.43%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <path d={svgPaths.p3591e200} fill="var(--fill-0, #F63232)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="absolute content-stretch flex flex-col items-center justify-center left-[16px] rounded-[12px] top-[12px]" data-name="Text">
      <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[72.5px] not-italic text-[#6b6969] text-[24px] text-center top-[14px] translate-x-[-50%] translate-y-[-50%] w-[283px]">
        <p className="leading-[28px]">Load More</p>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="absolute bg-white content-stretch flex items-center justify-center left-[calc(54.17%+34px)] min-h-[56px] px-[24px] py-[12px] rounded-[8px] top-[1174px] translate-x-[-50%] w-[174px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#acaaaa] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Text2 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[24.98%_95.9%_73.23%_2.43%]" data-name="Group">
      <div className="absolute inset-[-4.17%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 26">
          <g id="Group">
            <path d={svgPaths.p1d4ae3f0} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.pbfd1c00} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents inset-[24.98%_95.9%_73.23%_2.43%]" data-name="Group">
      <Group />
    </div>
  );
}

function MaskGroup() {
  return (
    <div className="absolute contents inset-[24.98%_95.9%_73.23%_2.43%]" data-name="Mask group">
      <Group1 />
      <div className="absolute inset-[24.68%_95.63%_72.94%_2.15%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <path d="M0 0H32V32H0V0Z" fill="var(--fill-0, black)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Menu() {
  return (
    <div className="absolute contents left-0 top-[139px]" data-name="Menu">
      <div className="absolute bg-[#8363f2] h-[49px] left-0 top-[139px] w-[222px]" />
      <div className="absolute left-[35px] size-[24px] top-[153px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <path d={svgPaths.p23320a80} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
      <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[124px] not-italic text-[20px] text-center text-white top-[165px] translate-x-[-50%] translate-y-[-50%] w-[104px]">
        <p className="leading-[28px]">Dashboard</p>
      </div>
      <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[72px] not-italic text-[#202020] text-[20px] top-[289px] translate-y-[-50%] w-[122px]">
        <p className="leading-[28px]">Vouchers</p>
      </div>
      <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[70px] not-italic text-[#202020] text-[20px] top-[225px] translate-y-[-50%] w-[122px]">
        <p className="leading-[28px]">Campaigns</p>
      </div>
      <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[72px] not-italic text-[#202020] text-[20px] top-[348px] translate-y-[-50%] w-[122px]">
        <p className="leading-[28px]">Transactions</p>
      </div>
      <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[70px] not-italic text-[#202020] text-[20px] top-[404px] translate-y-[-50%] w-[122px]">
        <p className="leading-[28px]">Profile</p>
      </div>
      <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[72px] not-italic text-[#202020] text-[20px] top-[459px] translate-y-[-50%] w-[122px]">
        <p className="leading-[28px]">Overview</p>
      </div>
      <div className="absolute inset-[37.32%_95.97%_60.59%_2.36%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 28">
          <path d={svgPaths.p2187b600} fill="var(--fill-0, black)" id="Vector" opacity="0.8" />
        </svg>
      </div>
      <MaskGroup />
      <div className="absolute inset-[15.99%_95.9%_82.23%_2.43%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <path d={svgPaths.p662940} fill="var(--fill-0, black)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[33.38%_95.9%_65.13%_2.43%]" data-name="Vector">
        <div className="absolute inset-[-5%_-4.17%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 22">
            <path d={svgPaths.p3ebaad70} id="Vector" stroke="var(--stroke-0, black)" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[20.74%_95.9%_77.47%_2.43%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <path d={svgPaths.p666ca00} fill="var(--fill-0, black)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[29.22%_95.9%_69%_2.43%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <path clipRule="evenodd" d={svgPaths.p3e294900} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

export default function DashBoard1NormalUserCampaigns() {
  return (
    <div className="bg-white relative size-full" data-name="Dash board 1 normal user campaigns">
      <div className="absolute flex h-0 items-center justify-center left-[calc(8.33%+65px)] top-[44px] w-[18px]">
        <div className="flex-none rotate-[180deg]">
          <div className="h-0 relative w-[18px]">
            <div className="absolute inset-[-11.05px_-8.33%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 23">
                <path d={svgPaths.p2c866000} fill="var(--stroke-0, #8363F2)" id="Arrow 1" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[22px] items-center justify-center left-[calc(8.33%+62.5px)] top-[33px] w-0" style={{ "--transform-inner-width": "22", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <div className="h-0 relative w-[22px]">
            <div className="absolute inset-[-1px_-4.55%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 2">
                <path d="M1 1H23" id="Line 3" stroke="var(--stroke-0, #2D1B69)" strokeLinecap="round" strokeWidth="2" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute h-[65px] left-[calc(4.17%-2.5px)] top-[13px] translate-x-[-50%] w-[59px]" data-name="KC-Logo-White-2-Transparent 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[152.98%] left-[-72.22%] max-w-none top-[-0.08%] w-[225.56%]" src={imgKcLogoWhite2Transparent1} />
        </div>
      </div>
      <p className="absolute font-['Roboto:SemiBold',sans-serif] font-semibold leading-[82px] left-[calc(16.67%+5px)] text-[24px] text-nowrap text-white top-[457px] tracking-[-0.32px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        1
      </p>
      <Input />
      <ProfileAvatar />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[82px] left-[calc(29.17%-153px)] not-italic text-[32px] text-black text-nowrap top-[463px] tracking-[-0.32px] whitespace-pre">Service Providers</p>
      <div className="absolute flex h-[269.824px] items-center justify-center left-[calc(16.67%+27px)] top-[858px] w-[355.159px]" style={{ "--transform-inner-width": "268.078125", "--transform-inner-height": "353.84375" } as React.CSSProperties}>
        <div className="flex-none rotate-[270.281deg]">
          <div className="bg-white h-[353.848px] rounded-[8px] shadow-[0px_4px_6px_1px_rgba(95,94,96,0.25)] w-[268.092px]" />
        </div>
      </div>
      <div className="absolute flex h-[269.822px] items-center justify-center left-[calc(16.67%+25px)] top-[552px] w-[354.729px]" style={{ "--transform-inner-width": "268.078125", "--transform-inner-height": "353.40625" } as React.CSSProperties}>
        <div className="flex-none rotate-[270.281deg]">
          <div className="bg-white h-[353.418px] rounded-[8px] shadow-[0px_4px_6px_1px_rgba(95,94,96,0.25)] w-[268.092px]" />
        </div>
      </div>
      <div className="absolute flex h-[270.647px] items-center justify-center left-[calc(41.67%+51px)] top-[855px] w-[351.523px]" style={{ "--transform-inner-width": "268.921875", "--transform-inner-height": "350.1875" } as React.CSSProperties}>
        <div className="flex-none rotate-[270.281deg]">
          <div className="bg-white h-[350.208px] rounded-[8px] shadow-[0px_4px_6px_1px_rgba(95,94,96,0.25)] w-[268.932px]" />
        </div>
      </div>
      <div className="absolute flex h-[270.658px] items-center justify-center left-[calc(41.67%+51px)] top-[549px] w-[353.79px]" style={{ "--transform-inner-width": "268.921875", "--transform-inner-height": "352.46875" } as React.CSSProperties}>
        <div className="flex-none rotate-[270.281deg]">
          <div className="bg-white h-[352.475px] rounded-[8px] shadow-[0px_4px_6px_1px_rgba(95,94,96,0.25)] w-[268.932px]" />
        </div>
      </div>
      <div className="absolute flex h-[269.682px] items-center justify-center left-[calc(66.67%+88px)] top-[856px] w-[353.106px]" style={{ "--transform-inner-width": "267.953125", "--transform-inner-height": "351.78125" } as React.CSSProperties}>
        <div className="flex-none rotate-[270.281deg]">
          <div className="bg-white h-[351.796px] rounded-[8px] shadow-[0px_4px_6px_1px_rgba(95,94,96,0.25)] w-[267.96px]" />
        </div>
      </div>
      <div className="absolute flex h-[269.68px] items-center justify-center left-[calc(66.67%+79px)] top-[550px] w-[352.638px]" style={{ "--transform-inner-width": "267.953125", "--transform-inner-height": "351.3125" } as React.CSSProperties}>
        <div className="flex-none rotate-[270.281deg]">
          <div className="bg-white h-[351.327px] rounded-[8px] shadow-[0px_4px_6px_1px_rgba(95,94,96,0.25)] w-[267.96px]" />
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[82px] left-[calc(16.67%+50.57px)] not-italic text-[20px] text-black text-nowrap top-[1056px] tracking-[-0.32px] whitespace-pre">Cape town /accomodation</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[82px] left-[calc(16.67%+58.57px)] not-italic text-[20px] text-black text-nowrap top-[746px] tracking-[-0.32px] whitespace-pre">Durban /accommodation</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[82px] left-[calc(41.67%+102.57px)] not-italic text-[20px] text-black text-nowrap top-[1050px] tracking-[-0.32px] whitespace-pre">Durban food service</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[82px] left-[calc(41.67%+82.57px)] not-italic text-[20px] text-black text-nowrap top-[744px] tracking-[-0.32px] whitespace-pre">{`Durban | food service & Motel`}</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[82px] left-[calc(75%+11.57px)] not-italic text-[20px] text-black text-nowrap top-[1046px] tracking-[-0.32px] whitespace-pre">Zanzibar/Accommodation</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[82px] left-[calc(66.67%+112.57px)] not-italic text-[20px] text-black text-nowrap top-[740px] tracking-[-0.32px] whitespace-pre">Cape town /Accommodation</p>
      <Group4 />
      <div className="absolute h-[155px] left-[calc(16.67%+29px)] rounded-tl-[8px] rounded-tr-[8px] top-[859px] w-[352px]">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-tl-[8px] rounded-tr-[8px] size-full" src={imgRectangle137} />
      </div>
      <div className="absolute h-[155px] left-[calc(16.67%+27px)] rounded-tl-[8px] rounded-tr-[8px] top-[553px] w-[352px]">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-tl-[8px] rounded-tr-[8px] size-full" src={imgRectangle143} />
      </div>
      <div className="absolute h-[155px] left-[calc(41.67%+52px)] rounded-tl-[8px] rounded-tr-[8px] top-[855px] w-[352px]">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-tl-[8px] rounded-tr-[8px] size-full" src={imgRectangle138} />
      </div>
      <div className="absolute h-[155px] left-[calc(41.67%+52px)] rounded-tl-[8px] rounded-tr-[8px] top-[549px] w-[352px]">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-tl-[8px] rounded-tr-[8px] size-full" src={imgRectangle144} />
      </div>
      <div className="absolute h-[155px] left-[calc(66.67%+88px)] rounded-tl-[8px] rounded-tr-[8px] top-[860px] w-[352px]">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-tl-[8px] rounded-tr-[8px] size-full" src={imgRectangle139} />
      </div>
      <div className="absolute h-[155px] left-[calc(66.67%+79px)] rounded-tl-[8px] rounded-tr-[8px] top-[554px] w-[352px]">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-tl-[8px] rounded-tr-[8px] size-full" src={imgRectangle145} />
      </div>
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[82px] left-[calc(29.17%-114.43px)] not-italic text-[32px] text-black text-nowrap top-[1009px] tracking-[-0.32px] whitespace-pre">Seaview Lodge</p>
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[82px] left-[calc(29.17%-129.43px)] not-italic text-[32px] text-black text-nowrap top-[703px] tracking-[-0.32px] whitespace-pre">Blue Water Hotel</p>
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[82px] left-[calc(54.17%-119.43px)] not-italic text-[32px] text-black text-nowrap top-[1009px] tracking-[-0.32px] whitespace-pre">Tastebites catering</p>
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[82px] left-[calc(54.17%-99px)] not-italic text-[32px] text-black text-nowrap top-[705px] tracking-[-0.32px] whitespace-pre">Lekkeslaap</p>
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[82px] left-[calc(83.33%-105.43px)] not-italic text-[32px] text-black text-nowrap top-[1007px] tracking-[-0.32px] whitespace-pre">{`Island paradise `}</p>
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[82px] left-[calc(83.33%-130px)] not-italic text-[32px] text-black text-nowrap top-[701px] tracking-[-0.32px] whitespace-pre">Cape town Beach</p>
      <Button2 />
      <Button3 />
      <div className="absolute inset-[3.2%_7.64%_95.02%_90.69%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <path d={svgPaths.p3422b400} fill="var(--fill-0, #202020)" id="Vector" />
        </svg>
      </div>
      <div className="absolute h-[303px] left-[calc(16.67%+60px)] top-[153px] w-[1059px]">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgRectangle349} />
      </div>
      <div className="absolute flex inset-[22.23%_3.47%_75.69%_95.49%] items-center justify-center">
        <div className="flex-none h-[28px] rotate-[180deg] w-[15px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 28">
              <path d={svgPaths.p3dacfc00} fill="var(--fill-0, #706A6A)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute inset-[22.23%_80.49%_75.69%_18.47%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 28">
          <path d={svgPaths.p3dacfc00} fill="var(--fill-0, #706A6A)" id="Vector" />
        </svg>
      </div>
      <div className="absolute flex h-0 items-center justify-center left-[calc(8.33%+102px)] top-[111px] w-[1234px]">
        <div className="flex-none rotate-[180deg]">
          <div className="h-0 relative w-[1234px]">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1234 1">
                <line id="Line 1" stroke="var(--stroke-0, #ACAAAA)" x2="1234" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[1345px] items-center justify-center left-[calc(8.33%+102px)] top-0 w-0" style={{ "--transform-inner-width": "1345", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <div className="h-0 relative w-[1345px]">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1345 1">
                <line id="Line 4" stroke="var(--stroke-0, #ACAAAA)" x2="1345" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute h-0 left-0 top-[554px] w-[222px]">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 222 1">
            <line id="Line 5" stroke="var(--stroke-0, #ACAAAA)" x2="222" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[72px] not-italic text-[#202020] text-[20px] top-[516px] translate-y-[-50%] w-[122px]">
        <p className="leading-[28px]">Draft</p>
      </div>
      <div className="absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] left-[32px] not-italic text-[#8363f2] text-[13px] top-[125px] translate-y-[-50%] w-[104px]">
        <p className="leading-[28px]">Explore</p>
      </div>
      <Group2 />
      <div className="absolute inset-[46.99%_95.9%_51.23%_2.43%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <path d={svgPaths.p3754a70} fill="var(--fill-0, black)" id="Vector" />
        </svg>
      </div>
      <div className="absolute bg-[#2d1b69] h-[3481px] left-[calc(100%+44px)] top-[-218px] w-[4814px]" />
      <div className="absolute inset-[3.2%_11.46%_95.02%_86.88%]" data-name="Vector">
        <div className="absolute inset-[-4.17%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 26">
            <path d={svgPaths.p12cfc680} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <Button4 />
      <Menu />
    </div>
  );
}