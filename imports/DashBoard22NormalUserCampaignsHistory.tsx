import svgPaths from "./svg-q987a5psm8";
import clsx from "clsx";
import imgKcLogoWhite2Transparent1 from "figma:asset/4b4bad59041302b06eae37218f1d3bd7c64d7d1e.png";
import imgRectangle397 from "figma:asset/4f3cf17b509ff91a3ab3bb07631643b028d47067.png";
type Wrapper1Props = {
  additionalClassNames?: string;
};

function Wrapper1({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper1Props>) {
  return (
    <div className={clsx("absolute", additionalClassNames)}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
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
      <div className="absolute inset-[-4.17%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 26">
          {children}
        </svg>
      </div>
    </div>
  );
}
type DashBoard22NormalUserCampaignsHistoryVectorProps = {
  additionalClassNames?: string;
};

function DashBoard22NormalUserCampaignsHistoryVector({ additionalClassNames = "" }: DashBoard22NormalUserCampaignsHistoryVectorProps) {
  return (
    <Wrapper1 additionalClassNames={additionalClassNames}>
      <path d={svgPaths.p33841700} fill="var(--fill-0, #908F92)" id="Vector" />
    </Wrapper1>
  );
}
type TextTextProps = {
  text: string;
};

function TextText({ text }: TextTextProps) {
  return (
    <div className="absolute content-stretch flex flex-col items-center justify-center left-[20px] rounded-[12px] top-[14px] w-[129px]">
      <div className="absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] left-[46px] not-italic text-[#2d1b69] text-[24px] text-center top-[14px] translate-x-[-50%] translate-y-[-50%] w-[104px]">
        <p className="leading-[28px]">{text}</p>
      </div>
    </div>
  );
}

function Group() {
  return (
    <Wrapper additionalClassNames="inset-[31.93%_95.76%_65.72%_2.57%]">
      <g id="Group">
        <path d={svgPaths.p1d4ae3f0} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        <path d={svgPaths.pbfd1c00} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      </g>
    </Wrapper>
  );
}

function Group1() {
  return (
    <div className="absolute contents inset-[31.93%_95.76%_65.72%_2.57%]" data-name="Group">
      <Group />
    </div>
  );
}

function MaskGroup() {
  return (
    <div className="absolute contents inset-[31.93%_95.76%_65.72%_2.57%]" data-name="Mask group">
      <Group1 />
      <div className="absolute inset-[31.54%_95.49%_65.33%_2.29%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <path d="M0 0H32V32H0V0Z" fill="var(--fill-0, black)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Menu() {
  return (
    <div className="absolute contents left-[2px] top-[130px]" data-name="Menu">
      <div className="absolute bg-[#8363f2] h-[49px] left-[2px] top-[130px] w-[222px]" />
      <Wrapper1 additionalClassNames="left-[37px] size-[24px] top-[144px]">
        <path d={svgPaths.p23320a80} fill="var(--fill-0, white)" id="Vector" />
      </Wrapper1>
      <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[126px] not-italic text-[20px] text-center text-white top-[156px] translate-x-[-50%] translate-y-[-50%] w-[104px]">
        <p className="leading-[28px]">Dashboard</p>
      </div>
      <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[74px] not-italic text-[#202020] text-[20px] top-[280px] translate-y-[-50%] w-[122px]">
        <p className="leading-[28px]">Vouchers</p>
      </div>
      <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[72px] not-italic text-[#202020] text-[20px] top-[216px] translate-y-[-50%] w-[122px]">
        <p className="leading-[28px]">Campaigns</p>
      </div>
      <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[74px] not-italic text-[#202020] text-[20px] top-[339px] translate-y-[-50%] w-[122px]">
        <p className="leading-[28px]">Transactions</p>
      </div>
      <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[72px] not-italic text-[#202020] text-[20px] top-[395px] translate-y-[-50%] w-[122px]">
        <p className="leading-[28px]">Profile</p>
      </div>
      <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[74px] not-italic text-[#202020] text-[20px] top-[450px] translate-y-[-50%] w-[122px]">
        <p className="leading-[28px]">Overview</p>
      </div>
      <div className="absolute inset-[48.14%_95.83%_49.12%_2.5%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 28">
          <path d={svgPaths.p2187b600} fill="var(--fill-0, black)" id="Vector" opacity="0.8" />
        </svg>
      </div>
      <MaskGroup />
      <Wrapper1 additionalClassNames="inset-[20.12%_95.76%_77.54%_2.57%]">
        <path d={svgPaths.p662940} fill="var(--fill-0, black)" id="Vector" />
      </Wrapper1>
      <div className="absolute inset-[42.97%_95.76%_55.08%_2.57%]" data-name="Vector">
        <div className="absolute inset-[-5%_-4.17%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 22">
            <path d={svgPaths.p3ebaad70} id="Vector" stroke="var(--stroke-0, black)" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <Wrapper1 additionalClassNames="inset-[26.37%_95.76%_71.29%_2.57%]">
        <path d={svgPaths.p666ca00} fill="var(--fill-0, black)" id="Vector" />
      </Wrapper1>
      <Wrapper1 additionalClassNames="inset-[37.5%_95.76%_60.16%_2.57%]">
        <path clipRule="evenodd" d={svgPaths.p3e294900} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector" />
      </Wrapper1>
    </div>
  );
}

function Search() {
  return (
    <Wrapper1 additionalClassNames="left-[8px] size-[24px] top-[8px]">
      <g id="search 1">
        <path clipRule="evenodd" d={svgPaths.p250aca00} fill="var(--fill-0, #7878AB)" fillRule="evenodd" id="Union" />
      </g>
    </Wrapper1>
  );
}

function Button() {
  return (
    <div className="absolute bg-[#f5f5fa] overflow-clip right-[12px] rounded-[32px] shadow-[5px_5px_10px_0px_rgba(170,170,204,0.5),-5px_-5px_10px_0px_white] size-[40px] top-1/2 translate-y-[-50%]" data-name="Button">
      <Search />
    </div>
  );
}

function Input() {
  return (
    <div className="absolute bg-[#f5f5fa] h-[64px] left-[calc(16.67%+34px)] overflow-clip rounded-[20px] top-[25px] w-[360px]" data-name="Input">
      <div className="absolute flex flex-col font-['SF_Pro_Rounded:Light',sans-serif] justify-center leading-[0] left-[32px] not-italic opacity-60 right-[64px] text-[#7878ab] text-[24px] top-1/2 translate-y-[-50%]">
        <p className="leading-[40px]">{`Search `}</p>
      </div>
      <Button />
      <div className="absolute inset-0 pointer-events-none shadow-[inset_-2px_-2px_4px_0px_rgba(255,255,255,0.5),inset_2px_2px_4px_0px_rgba(170,170,204,0.25),inset_5px_5px_10px_0px_rgba(170,170,204,0.5),inset_-5px_-5px_10px_0px_white]" />
    </div>
  );
}

function ProfileAvatar() {
  return (
    <Wrapper1 additionalClassNames="left-[calc(91.67%+53px)] size-[24px] top-[47px]">
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
    </Wrapper1>
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
    <div className="absolute bg-[#8363f2] content-stretch flex items-center left-[calc(75%-4px)] min-h-[56px] px-[24px] py-[12px] rounded-[8px] top-[26px] w-[150px]" data-name="Button">
      <Text />
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents left-[calc(75%-4px)] top-[26px]">
      <Button1 />
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute contents left-[calc(75%-4px)] top-[26px]">
      <Group5 />
    </div>
  );
}

function Header() {
  return (
    <div className="absolute contents left-[calc(16.67%+34px)] top-[25px]" data-name="Header">
      <Input />
      <ProfileAvatar />
      <Wrapper1 additionalClassNames="inset-[4.59%_7.15%_93.07%_91.18%]">
        <path d={svgPaths.p3422b400} fill="var(--fill-0, #202020)" id="Vector" />
      </Wrapper1>
      <Wrapper additionalClassNames="inset-[4.59%_10.97%_93.07%_87.36%]">
        <path d={svgPaths.p12cfc680} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      </Wrapper>
      <Group6 />
    </div>
  );
}

function MenuCollapesButton() {
  return (
    <div className="absolute h-[22px] left-[calc(8.33%+64.5px)] top-[25px] w-[20.5px]" data-name="menu collapes button">
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

function Group4() {
  return (
    <div className="absolute contents left-[31px] top-[572px]">
      <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[93px] not-italic text-[#202020] text-[20px] text-center text-nowrap top-[626px] translate-x-[-50%] translate-y-[-50%]">
        <p className="leading-[28px]">Help</p>
      </div>
      <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[71px] not-italic text-[#202020] text-[20px] top-[689px] translate-y-[-50%] w-[122px]">
        <p className="leading-[28px]">Logout</p>
      </div>
      <div className="absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] left-[31px] not-italic text-[#8363f2] text-[13px] top-[586px] translate-y-[-50%] w-[104px]">
        <p className="leading-[28px]">Feedback</p>
      </div>
      <Wrapper1 additionalClassNames="inset-[66.11%_95.97%_31.54%_2.36%]">
        <path d={svgPaths.p3591e200} fill="var(--fill-0, #F63232)" id="Vector" />
      </Wrapper1>
    </div>
  );
}

function HeaderMenu() {
  return (
    <div className="absolute contents left-[2px] top-[7px]" data-name="Header & Menu">
      <div className="absolute h-[65px] left-[calc(4.17%-0.5px)] top-[7px] translate-x-[-50%] w-[59px]" data-name="KC-Logo-White-2-Transparent 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[152.98%] left-[-72.22%] max-w-none top-[-0.08%] w-[225.56%]" src={imgKcLogoWhite2Transparent1} />
        </div>
      </div>
      <Menu />
      <div className="absolute flex h-0 items-center justify-center left-[calc(16.67%-16px)] top-[105px] w-[1234px]">
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
      <Group4 />
      <Wrapper1 additionalClassNames="inset-[60.16%_96.18%_37.5%_2.15%]">
        <path d={svgPaths.p3754a70} fill="var(--fill-0, black)" id="Vector" />
      </Wrapper1>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute inset-[42.62%_79.33%_55.22%_19.13%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 23">
        <g id="Group 27">
          <path d={svgPaths.pa168800} fill="var(--fill-0, black)" id="Vector" />
          <path d={svgPaths.p7709200} fill="var(--fill-0, #8363F2)" id="Vector_2" />
          <path d={svgPaths.p4d96400} fill="var(--fill-0, #8363F2)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute contents left-[calc(16.67%+30px)] top-[433px]">
      <div className="absolute bg-[#eee] h-[29px] left-[calc(16.67%+30px)] rounded-[8px] top-[433px] w-[31.762px]" />
      <Group3 />
    </div>
  );
}

function Text1() {
  return <div className="absolute h-[28px] left-[4px] rounded-[12px] top-[7px] w-[129px]" data-name="Text" />;
}

function Button2() {
  return (
    <div className="absolute bg-white content-stretch flex h-[56px] items-center left-[calc(16.67%+29px)] px-[24px] py-[12px] rounded-[5px] top-[584px] w-[1104px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#8363f2] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[5px]" />
      <Text1 />
    </div>
  );
}

function Button3() {
  return (
    <div className="absolute bg-[rgba(131,99,242,0.05)] content-stretch flex h-[56px] items-center left-[calc(16.67%+31px)] px-[24px] py-[12px] rounded-[5px] top-[675px] w-[144px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0.5px] border-[rgba(131,99,242,0.1)] border-solid inset-0 pointer-events-none rounded-[5px]" />
      <TextText text="R100" />
    </div>
  );
}

function Button4() {
  return (
    <div className="absolute bg-[rgba(131,99,242,0.05)] content-stretch flex h-[56px] items-center left-[calc(25%+78px)] px-[24px] py-[12px] rounded-[5px] top-[675px] w-[144px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0.5px] border-[rgba(131,99,242,0.1)] border-solid inset-0 pointer-events-none rounded-[5px]" />
      <TextText text="R500" />
    </div>
  );
}

function Text2() {
  return (
    <div className="absolute content-stretch flex flex-col items-center justify-center left-[20px] rounded-[12px] top-[14px] w-[129px]" data-name="Text">
      <div className="absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] left-[49px] not-italic text-[#2d1b69] text-[24px] text-center top-[14px] translate-x-[-50%] translate-y-[-50%] w-[104px]">
        <p className="leading-[28px]">R1000</p>
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="absolute bg-[rgba(131,99,242,0.05)] content-stretch flex h-[56px] items-center left-[calc(41.67%+5px)] px-[24px] py-[12px] rounded-[5px] top-[675px] w-[144px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0.5px] border-[rgba(131,99,242,0.1)] border-solid inset-0 pointer-events-none rounded-[5px]" />
      <Text2 />
    </div>
  );
}

function Text3() {
  return (
    <div className="absolute content-stretch flex flex-col items-center justify-center left-[20px] rounded-[12px] top-[14px] w-[129px]" data-name="Text">
      <div className="absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] left-[46px] not-italic text-[24px] text-black text-center top-[14px] translate-x-[-50%] translate-y-[-50%] w-[104px]">
        <p className="leading-[28px]">Custom</p>
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div className="absolute bg-[rgba(131,99,242,0.05)] content-stretch flex h-[56px] items-center left-[calc(50%+46px)] px-[24px] py-[12px] rounded-[5px] top-[675px] w-[144px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0.5px] border-[rgba(131,99,242,0.1)] border-solid inset-0 pointer-events-none rounded-[5px]" />
      <Text3 />
    </div>
  );
}

function Group2() {
  return (
    <Wrapper1 additionalClassNames="inset-[78.42%_60.56%_19.24%_37.78%]">
      <g id="Group 23">
        <path d={svgPaths.p33841700} fill="var(--fill-0, #8363F2)" id="Vector" />
        <path d={svgPaths.p1c257900} fill="var(--fill-0, #8363F2)" id="Vector_2" />
      </g>
    </Wrapper1>
  );
}

function Text4() {
  return (
    <div className="absolute content-stretch flex flex-col items-center justify-center left-[32px] rounded-[12px] top-[12px]" data-name="Text">
      <div className="absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] left-[110px] not-italic text-[24px] text-center text-white top-[14px] translate-x-[-50%] translate-y-[-50%] w-[304px]">
        <p className="leading-[28px]">Confirm Contribute</p>
      </div>
    </div>
  );
}

function Button7() {
  return (
    <div className="absolute bg-[#8363f2] content-stretch flex items-center left-[calc(75%+21px)] min-h-[56px] px-[24px] py-[12px] rounded-[8px] top-[934px] w-[284px]" data-name="Button">
      <Text4 />
    </div>
  );
}

function Text5() {
  return (
    <div className="absolute content-stretch flex flex-col items-center justify-center left-[37px] rounded-[12px] top-[10px] w-[129px]" data-name="Text">
      <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[46px] not-italic text-[24px] text-black text-center top-[14px] translate-x-[-50%] translate-y-[-50%] w-[104px]">
        <p className="leading-[28px]">Cancel</p>
      </div>
    </div>
  );
}

function Button8() {
  return (
    <div className="absolute bg-white content-stretch flex h-[56px] items-center left-[calc(58.33%+81px)] px-[24px] py-[12px] rounded-[5px] top-[934px] w-[170px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#8363f2] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[5px]" />
      <Text5 />
    </div>
  );
}

export default function DashBoard22NormalUserCampaignsHistory() {
  return (
    <div className="bg-white relative size-full" data-name="Dash board 22 Normal userCampaigns History">
      <p className="absolute font-['Roboto:SemiBold',sans-serif] font-semibold leading-[82px] left-[calc(16.67%+5px)] text-[24px] text-nowrap text-white top-[457px] tracking-[-0.32px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        1
      </p>
      <div className="absolute inset-[7.32%_19.38%_90.72%_79.38%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 20">
          <path d={svgPaths.p6995f80} fill="var(--fill-0, #F5F5F5)" id="Vector" />
        </svg>
      </div>
      <HeaderMenu />
      <div className="absolute flex h-[1024px] items-center justify-center left-[calc(16.67%-16px)] top-0 w-[2px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[270.112deg]">
          <div className="h-0 relative w-[1024.002px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1024 1">
                <line id="Line 4" stroke="var(--stroke-0, #ACAAAA)" x2="1024" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[70px] not-italic text-[#202020] text-[20px] top-[512px] translate-y-[-50%] w-[122px]">
        <p className="leading-[28px]">Draft</p>
      </div>
      <div className="absolute bg-white h-[1000px] left-[calc(16.67%-14px)] rounded-[8px] shadow-[0px_1px_3px_1px_rgba(0,0,0,0.25)] top-0 w-[1171px]" />
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[82px] left-[calc(16.67%+31px)] not-italic text-[32px] text-black text-nowrap top-[15px] tracking-[-0.32px]">Contribute</p>
      <div className="absolute h-[233px] left-[calc(16.67%+32px)] rounded-tl-[8px] rounded-tr-[8px] top-[100px] w-[1118px]">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-tl-[8px] rounded-tr-[8px] size-full" src={imgRectangle397} />
      </div>
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[82px] left-[calc(16.67%+30px)] not-italic text-[#1b1b1b] text-[24px] text-nowrap top-[332px] tracking-[-0.32px]">Gold Reef City Weekend</p>
      <div className="absolute bg-[#d9d9d9] h-[15px] left-[calc(16.67%+29px)] rounded-[5px] top-[475px] w-[1068px]" />
      <div className="absolute bg-[#35c73e] h-[15px] left-[calc(16.67%+31px)] rounded-[5px] top-[475px] w-[216px]" />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[82px] left-[calc(16.67%+64px)] not-italic text-[#212020] text-[20px] text-nowrap top-[407px] tracking-[-0.32px]">Goal R10 000</p>
      <Group7 />
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[82px] left-[calc(91.67%+28px)] not-italic text-[20px] text-black text-nowrap top-[435px] tracking-[-0.32px]">15%</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[82px] left-[calc(75%+26px)] not-italic text-[24px] text-black text-nowrap top-[412px] tracking-[-0.32px]">Contributed R3000</p>
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[82px] left-[calc(16.67%+30px)] not-italic text-[28px] text-black text-nowrap top-[512px] tracking-[-0.32px]">Enter Amount (ZAR)</p>
      <Button2 />
      <Button3 />
      <Button4 />
      <Button5 />
      <Button6 />
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[82px] left-[calc(16.67%+32px)] not-italic text-[28px] text-black text-nowrap top-[717px] tracking-[-0.32px]">Payment Methods</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[82px] left-[calc(16.67%+61px)] not-italic text-[24px] text-black text-nowrap top-[776px] tracking-[-0.32px]">Ewallent Balance</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[82px] left-[calc(33.33%+100px)] not-italic text-[24px] text-black text-nowrap top-[774px] tracking-[-0.32px]">{`Debit Card `}</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[82px] left-[calc(50%+43px)] not-italic text-[24px] text-black text-nowrap top-[774px] tracking-[-0.32px]">EFT</p>
      <Group2 />
      <DashBoard22NormalUserCampaignsHistoryVector additionalClassNames="inset-[79%_79.79%_18.65%_18.54%]" />
      <DashBoard22NormalUserCampaignsHistoryVector additionalClassNames="inset-[78.42%_47.57%_19.24%_50.76%]" />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[82px] left-[calc(16.67%+63px)] not-italic text-[0px] text-[20px] text-black text-nowrap top-[871px] tracking-[-0.32px]">
        <span>{`I agree to campaign `}</span>
        <span className="text-[#8363f2]">{`terms & Conditions`}</span>
      </p>
      <Wrapper1 additionalClassNames="inset-[87.89%_79.44%_9.77%_18.89%]">
        <path clipRule="evenodd" d={svgPaths.p82cb80} fill="var(--fill-0, #8363F2)" fillRule="evenodd" id="Vector" />
      </Wrapper1>
      <Button7 />
      <Button8 />
    </div>
  );
}