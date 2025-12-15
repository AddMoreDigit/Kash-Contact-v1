import svgPaths from "./svg-yz68h60k91";
import clsx from "clsx";
import imgKcLogoWhite2Transparent1 from "figma:asset/4b4bad59041302b06eae37218f1d3bd7c64d7d1e.png";
import imgRectangle150 from "figma:asset/50b9941bb18b04433a8da878785acb0358877f72.png";
import imgRectangle151 from "figma:asset/840a8d2b23fcae6efd3c33d28ca3649c5eda74ed.png";
import imgRectangle148 from "figma:asset/703a3a22134188eeed9837e5755d43d8e16d5f2f.png";
type Wrapper2Props = {
  additionalClassNames?: string;
};

function Wrapper2({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper2Props>) {
  return (
    <div className={clsx("absolute", additionalClassNames)}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        {children}
      </svg>
    </div>
  );
}
type Wrapper1Props = {
  additionalClassNames?: string;
};

function Wrapper1({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper1Props>) {
  return (
    <div className={clsx("absolute", additionalClassNames)}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 26">
        {children}
      </svg>
    </div>
  );
}
type WrapperProps = {
  additionalClassNames?: string;
};

function Wrapper({ children, additionalClassNames = "" }: React.PropsWithChildren<WrapperProps>) {
  return (
    <div className={clsx("absolute", additionalClassNames)}>
      <Wrapper1 additionalClassNames="inset-[-4.17%]">{children}</Wrapper1>
    </div>
  );
}
type DashBoard10NormalUserVector1Props = {
  additionalClassNames?: string;
};

function DashBoard10NormalUserVector1({ additionalClassNames = "" }: DashBoard10NormalUserVector1Props) {
  return (
    <div className={clsx("absolute", additionalClassNames)}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 48">
        <path d={svgPaths.p15244080} fill="var(--fill-0, #8363F2)" id="Vector" />
      </svg>
    </div>
  );
}
type DashBoard10NormalUserVectorProps = {
  additionalClassNames?: string;
};

function DashBoard10NormalUserVector({ additionalClassNames = "" }: DashBoard10NormalUserVectorProps) {
  return (
    <div className={clsx("absolute", additionalClassNames)}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 30">
        <path d={svgPaths.p3f393f40} fill="var(--fill-0, #2D1B69)" id="Vector" />
      </svg>
    </div>
  );
}
type HelperProps = {
  additionalClassNames?: string;
};

function Helper({ additionalClassNames = "" }: HelperProps) {
  return (
    <div className={clsx("absolute", additionalClassNames)}>
      <Wrapper1 additionalClassNames="inset-[-4.17%_-4.16%_-4.17%_-4.17%]">
        <g id="Group 19">
          <path d={svgPaths.p8488c00} id="Vector" stroke="var(--stroke-0, #8363F2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <g id="Group">
            <path d={svgPaths.p2864ba00} id="Vector_2" stroke="var(--stroke-0, #8363F2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </g>
      </Wrapper1>
    </div>
  );
}

function Group() {
  return (
    <Wrapper additionalClassNames="inset-[30.86%_95.9%_66.8%_2.43%]">
      <g id="Group">
        <path d={svgPaths.p1d4ae3f0} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        <path d={svgPaths.pbfd1c00} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      </g>
    </Wrapper>
  );
}

function Group1() {
  return (
    <div className="absolute contents inset-[30.86%_95.9%_66.8%_2.43%]" data-name="Group">
      <Group />
    </div>
  );
}

function MaskGroup() {
  return (
    <div className="absolute contents inset-[30.86%_95.9%_66.8%_2.43%]" data-name="Mask group">
      <Group1 />
      <div className="absolute inset-[30.47%_95.63%_66.41%_2.15%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <path d="M0 0H32V32H0V0Z" fill="var(--fill-0, black)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Menu() {
  return (
    <div className="absolute contents left-0 top-[119px]" data-name="Menu">
      <div className="absolute bg-[#8363f2] h-[49px] left-0 top-[119px] w-[222px]" />
      <Wrapper2 additionalClassNames="left-[35px] size-[24px] top-[133px]">
        <path d={svgPaths.p23320a80} fill="var(--fill-0, white)" id="Vector" />
      </Wrapper2>
      <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[124px] not-italic text-[20px] text-center text-white top-[145px] translate-x-[-50%] translate-y-[-50%] w-[104px]">
        <p className="leading-[28px]">Dashboard</p>
      </div>
      <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[72px] not-italic text-[#202020] text-[20px] top-[269px] translate-y-[-50%] w-[122px]">
        <p className="leading-[28px]">Vouchers</p>
      </div>
      <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[70px] not-italic text-[#202020] text-[20px] top-[205px] translate-y-[-50%] w-[122px]">
        <p className="leading-[28px]">Campaigns</p>
      </div>
      <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[72px] not-italic text-[#202020] text-[20px] top-[328px] translate-y-[-50%] w-[122px]">
        <p className="leading-[28px]">Transactions</p>
      </div>
      <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[70px] not-italic text-[#202020] text-[20px] top-[384px] translate-y-[-50%] w-[122px]">
        <p className="leading-[28px]">Profile</p>
      </div>
      <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[72px] not-italic text-[#202020] text-[20px] top-[439px] translate-y-[-50%] w-[122px]">
        <p className="leading-[28px]">Overview</p>
      </div>
      <div className="absolute inset-[47.07%_95.97%_50.2%_2.36%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 28">
          <path d={svgPaths.p2187b600} fill="var(--fill-0, black)" id="Vector" opacity="0.8" />
        </svg>
      </div>
      <MaskGroup />
      <Wrapper2 additionalClassNames="inset-[19.04%_95.9%_78.61%_2.43%]">
        <path d={svgPaths.p662940} fill="var(--fill-0, black)" id="Vector" />
      </Wrapper2>
      <div className="absolute inset-[41.89%_95.9%_56.15%_2.43%]" data-name="Vector">
        <div className="absolute inset-[-5%_-4.17%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 22">
            <path d={svgPaths.p3ebaad70} id="Vector" stroke="var(--stroke-0, black)" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <Wrapper2 additionalClassNames="inset-[25.29%_95.9%_72.36%_2.43%]">
        <path d={svgPaths.p666ca00} fill="var(--fill-0, black)" id="Vector" />
      </Wrapper2>
      <Wrapper2 additionalClassNames="inset-[36.43%_95.9%_61.23%_2.43%]">
        <path clipRule="evenodd" d={svgPaths.p3e294900} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector" />
      </Wrapper2>
    </div>
  );
}

function Search() {
  return (
    <Wrapper2 additionalClassNames="left-[8px] size-[24px] top-[8px]">
      <g id="search 1">
        <path clipRule="evenodd" d={svgPaths.p250aca00} fill="var(--fill-0, #7878AB)" fillRule="evenodd" id="Union" />
      </g>
    </Wrapper2>
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
    <div className="absolute bg-[#f5f5fa] h-[64px] left-[calc(16.67%+32px)] overflow-clip rounded-[20px] top-[14px] w-[360px]" data-name="Input">
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
    <Wrapper2 additionalClassNames="left-[calc(91.67%+51px)] size-[24px] top-[36px]">
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
    </Wrapper2>
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
    <div className="absolute bg-[#8363f2] content-stretch flex items-center left-[calc(66.67%+114px)] min-h-[56px] px-[24px] py-[12px] rounded-[8px] top-[15px] w-[150px]" data-name="Button">
      <Text />
    </div>
  );
}

function AppRegistration() {
  return (
    <Wrapper2 additionalClassNames="left-[calc(75%+13.78px)] size-[24px] top-[30.67px]">
      <g id="app_registration">
        <mask height="24" id="mask0_31_189" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
          <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
        </mask>
        <g mask="url(#mask0_31_189)">
          <path d={svgPaths.pb95a080} fill="var(--fill-0, white)" id="app_registration_2" />
        </g>
      </g>
    </Wrapper2>
  );
}

function Group3() {
  return (
    <div className="absolute contents left-[calc(75%+13.78px)] top-[30.67px]">
      <AppRegistration />
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents left-[calc(75%+13.78px)] top-[30.67px]">
      <Group3 />
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute contents left-[calc(66.67%+114px)] top-[15px]">
      <Button1 />
      <Group4 />
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents left-[calc(66.67%+114px)] top-[15px]">
      <Group6 />
    </div>
  );
}

function Header() {
  return (
    <div className="absolute contents left-[calc(16.67%+32px)] top-[14px]" data-name="Header">
      <Input />
      <ProfileAvatar />
      <Wrapper2 additionalClassNames="inset-[3.52%_7.29%_94.14%_91.04%]">
        <path d={svgPaths.p3422b400} fill="var(--fill-0, #202020)" id="Vector" />
      </Wrapper2>
      <Wrapper additionalClassNames="inset-[3.52%_11.11%_94.14%_87.22%]">
        <path d={svgPaths.p12cfc680} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      </Wrapper>
      <Group5 />
    </div>
  );
}

function MenuCollapesButton() {
  return (
    <div className="absolute h-[22px] left-[calc(8.33%+62.5px)] top-[14px] w-[20.5px]" data-name="menu collapes button">
      <div className="absolute inset-[-4.55%_-7.32%_-4.55%_-4.88%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 24">
          <g id="menu collapes button">
            <path d="M1 1L1 23" id="Line 3" stroke="var(--stroke-0, #2D1B69)" strokeLinecap="round" strokeWidth="2" />
            <path d={svgPaths.p2692800} fill="var(--stroke-0, #8363F2)" id="Arrow 1" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents left-[29px] top-[561px]">
      <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[91px] not-italic text-[#202020] text-[20px] text-center text-nowrap top-[615px] translate-x-[-50%] translate-y-[-50%]">
        <p className="leading-[28px] whitespace-pre">Help</p>
      </div>
      <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[69px] not-italic text-[#202020] text-[20px] top-[678px] translate-y-[-50%] w-[122px]">
        <p className="leading-[28px]">Logout</p>
      </div>
      <div className="absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] left-[29px] not-italic text-[#8363f2] text-[13px] top-[575px] translate-y-[-50%] w-[104px]">
        <p className="leading-[28px]">Feedback</p>
      </div>
      <Wrapper2 additionalClassNames="inset-[65.04%_96.11%_32.62%_2.22%]">
        <path d={svgPaths.p3591e200} fill="var(--fill-0, #F63232)" id="Vector" />
      </Wrapper2>
    </div>
  );
}

function HeaderMenu() {
  return (
    <div className="absolute contents left-0 top-[-4px]" data-name="Header & Menu">
      <div className="absolute h-[65px] left-[calc(4.17%-2.5px)] top-[-4px] translate-x-[-50%] w-[59px]" data-name="KC-Logo-White-2-Transparent 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[152.98%] left-[-72.22%] max-w-none top-[-0.08%] w-[225.56%]" src={imgKcLogoWhite2Transparent1} />
        </div>
      </div>
      <Menu />
      <div className="absolute flex h-0 items-center justify-center left-[calc(8.33%+102px)] top-[94px] w-[1234px]">
        <div className="flex-none rotate-[180deg]">
          <div className="h-0 relative w-[1234px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1234 1">
                <line id="Line 1" stroke="var(--stroke-0, #ACAAAA)" x2="1234" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Header />
      <MenuCollapesButton />
      <Group2 />
      <Wrapper2 additionalClassNames="inset-[59.08%_96.32%_38.57%_2.01%]">
        <path d={svgPaths.p3754a70} fill="var(--fill-0, black)" id="Vector" />
      </Wrapper2>
    </div>
  );
}

export default function DashBoard10NormalUser() {
  return (
    <div className="bg-white relative size-full" data-name="Dash board 10 Normal user">
      <p className="absolute font-['Roboto:SemiBold',sans-serif] font-semibold leading-[82px] left-[calc(16.67%+5px)] text-[24px] text-nowrap text-white top-[457px] tracking-[-0.32px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        1
      </p>
      <div className="absolute inset-[7.32%_19.38%_90.72%_79.38%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 20">
          <path d={svgPaths.p6995f80} fill="var(--fill-0, #F5F5F5)" id="Vector" />
        </svg>
      </div>
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[82px] left-[calc(29.17%-148px)] not-italic text-[32px] text-black text-nowrap top-[105px] tracking-[-0.32px] whitespace-pre">Selected Services</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[82px] left-[calc(16.67%+32px)] not-italic text-[#4e4d4d] text-[24px] text-nowrap top-[156px] tracking-[-0.32px] whitespace-pre">Selected from our trusted partners for accommodation ,food,actives and more</p>
      <div className="absolute inset-[7.42%_23.89%_90.82%_74.86%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
          <path d={svgPaths.pbe7a5c0} fill="var(--fill-0, #F5F5F5)" id="Vector" />
        </svg>
      </div>
      <div className="absolute bg-white h-[258px] left-[calc(16.67%+27px)] rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.25)] top-[243px] w-[1116px]" />
      <div className="absolute bg-white h-[258px] left-[calc(16.67%+32px)] rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.25)] top-[518px] w-[1121px]" />
      <div className="absolute bg-white h-[258px] left-[calc(25%+17px)] rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.25)] top-[785px] w-[966px]" />
      <div className="absolute bg-white h-[258px] left-[calc(16.67%+32px)] rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.25)] top-[787px] w-[1117px]" />
      <div className="absolute h-[258px] left-[calc(16.67%+31px)] rounded-bl-[8px] rounded-tl-[8px] top-[243px] w-[340px]">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-bl-[8px] rounded-tl-[8px] size-full" src={imgRectangle150} />
      </div>
      <div className="absolute h-[258px] left-[calc(16.67%+32px)] rounded-bl-[8px] rounded-tl-[8px] top-[512px] w-[340px]">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-bl-[8px] rounded-tl-[8px] size-full" src={imgRectangle151} />
      </div>
      <div className="absolute bg-[rgba(131,99,242,0.2)] h-[258px] left-[calc(83.33%+18px)] rounded-br-[8px] rounded-tr-[8px] top-[243px] w-[171px]" />
      <div className="absolute bg-[rgba(131,99,242,0.2)] h-[258px] left-[calc(83.33%+22px)] rounded-br-[8px] rounded-tr-[8px] top-[518px] w-[171px]" />
      <div className="absolute bg-[rgba(131,99,242,0.2)] h-[258px] left-[calc(83.33%+24px)] rounded-br-[8px] rounded-tr-[8px] top-[787px] w-[171px]" />
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[82px] left-[calc(41.67%+44px)] not-italic text-[32px] text-black text-nowrap top-[247px] tracking-[-0.32px] whitespace-pre">{`Deluxe Room `}</p>
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[82px] left-[calc(41.67%+44px)] not-italic text-[32px] text-black text-nowrap top-[786px] tracking-[-0.32px] whitespace-pre">16 Sitter mini bus</p>
      <DashBoard10NormalUserVector additionalClassNames="inset-[33.69%_53.61%_63.38%_44.72%]" />
      <DashBoard10NormalUserVector additionalClassNames="inset-[61.82%_53.75%_35.25%_44.58%]" />
      <DashBoard10NormalUserVector additionalClassNames="inset-[88.09%_53.61%_8.98%_44.72%]" />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[40px] left-[calc(41.67%+73px)] not-italic text-[20px] text-black text-nowrap top-[340px] tracking-[-0.32px] whitespace-pre">Cape Town | Seaview lodge</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[40px] left-[calc(41.67%+71px)] not-italic text-[20px] text-black text-nowrap top-[628px] tracking-[-0.32px] whitespace-pre">Cape Town | Tastebites catering</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[40px] left-[calc(41.67%+73px)] not-italic text-[20px] text-black text-nowrap top-[897px] tracking-[-0.32px] whitespace-pre">Cape Town | Ride Africa Trans</p>
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[40px] left-[calc(66.67%+53px)] not-italic text-[32px] text-black text-nowrap top-[385px] tracking-[-0.32px] whitespace-pre">R2500.00</p>
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[40px] left-[calc(66.67%+53px)] not-italic text-[32px] text-black text-nowrap top-[716px] tracking-[-0.32px] whitespace-pre">R750.00</p>
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[40px] left-[calc(66.67%+53px)] not-italic text-[32px] text-black text-nowrap top-[976px] tracking-[-0.32px] whitespace-pre">R3750.00</p>
      <div className="absolute bg-[rgba(131,99,242,0.2)] h-[56px] left-[calc(41.67%+42px)] rounded-[8px] top-[431px] w-[212px]" />
      <div className="absolute bg-[rgba(131,99,242,0.2)] h-[56px] left-[calc(41.67%+44px)] rounded-[8px] top-[708px] w-[92px]" />
      <div className="absolute bg-[rgba(131,99,242,0.2)] h-[56px] left-[calc(41.67%+44px)] rounded-[8px] top-[969px] w-[144px]" />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[40px] left-[calc(41.67%+58px)] not-italic text-[#3f3d3d] text-[24px] text-nowrap top-[439px] tracking-[-0.32px] whitespace-pre">Accommodation</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[40px] left-[calc(41.67%+60px)] not-italic text-[#3f3d3d] text-[24px] text-nowrap top-[716px] tracking-[-0.32px] whitespace-pre">Food</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[40px] left-[calc(41.67%+60px)] not-italic text-[#3f3d3d] text-[24px] text-nowrap top-[977px] tracking-[-0.32px] whitespace-pre">Transport</p>
      <div className="absolute inset-[32.91%_8.13%_62.4%_89.24%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38 48">
          <path d={svgPaths.p21e24c80} fill="var(--fill-0, #8363F2)" id="Vector" />
        </svg>
      </div>
      <DashBoard10NormalUserVector1 additionalClassNames="inset-[59.77%_7.64%_35.55%_89.58%]" />
      <DashBoard10NormalUserVector1 additionalClassNames="inset-[86.04%_7.5%_9.28%_89.72%]" />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[40px] left-[calc(83.33%+59px)] not-italic text-[24px] text-black top-[388px] tracking-[-0.32px] w-[94px]">Remove</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[40px] left-[calc(83.33%+63px)] not-italic text-[24px] text-black top-[663px] tracking-[-0.32px] w-[94px]">Remove</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[40px] left-[calc(83.33%+65px)] not-italic text-[24px] text-black top-[932px] tracking-[-0.32px] w-[94px]">Remove</p>
      <Helper additionalClassNames="inset-[26.95%_38.54%_70.7%_59.79%]" />
      <Helper additionalClassNames="inset-[53.81%_38.61%_43.85%_59.72%]" />
      <Helper additionalClassNames="inset-[79.39%_29.31%_18.26%_69.03%]" />
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[82px] left-[calc(41.67%+44px)] not-italic text-[32px] text-black text-nowrap top-[522px] tracking-[-0.32px] whitespace-pre">{`Deluxe Super `}</p>
      <div className="absolute h-[258px] left-[calc(16.67%+36px)] rounded-bl-[8px] rounded-tl-[8px] top-[785px] w-[340px]">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-bl-[8px] rounded-tl-[8px] size-full" src={imgRectangle148} />
      </div>
      <HeaderMenu />
      <div className="absolute flex h-[1029px] items-center justify-center left-[calc(8.33%+102px)] top-[-4px] w-0" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <div className="h-0 relative w-[1029px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1029 1">
                <line id="Line 4" stroke="var(--stroke-0, #ACAAAA)" x2="1029" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}