import svgPaths from "./svg-qls7rm5nfp";

function Frame1() {
  return (
    <div className="absolute bg-[#8363f2] content-stretch flex items-center justify-center left-1/2 pb-[12px] pt-[13px] px-[10px] rounded-[6px] top-[581px] translate-x-[-50%] w-[420px]">
      <p className="font-['Nunito_Sans:ExtraBold',sans-serif] font-extrabold leading-[normal] relative shrink-0 text-[18px] text-nowrap text-white whitespace-pre" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        Continue
      </p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-center px-[10px] py-[13px] relative rounded-[5px] shrink-0 w-[420px]">
      <div aria-hidden="true" className="absolute border border-[#565555] border-solid inset-0 pointer-events-none rounded-[5px]" />
      <p className="font-['Nunito_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#555555] text-[14px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        Enter user email address
      </p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0">
      <p className="font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#555555] text-[14px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        <span>{`User Email Address `}</span>
        <span className="text-[#f63232]">*</span>
      </p>
      <Frame />
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-1/2 top-[355px] translate-x-[-50%] w-[420px]">
      <Frame2 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute left-[calc(8.33%-16px)] size-[35px] top-[50px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35 35">
        <g id="Group 49">
          <path clipRule="evenodd" d={svgPaths.p208ff700} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector" />
          <circle cx="17.5" cy="17.5" id="Ellipse 119" r="17" stroke="var(--stroke-0, black)" />
        </g>
      </svg>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-[calc(8.33%-16px)] top-[44px]">
      <p className="absolute font-['Be_Vietnam_Pro:Medium',sans-serif] leading-[50px] left-[calc(8.33%+33px)] not-italic text-[20px] text-black text-nowrap top-[44px] tracking-[-0.32px] whitespace-pre">back</p>
      <Group />
    </div>
  );
}

export default function VendorLoginInvalidPassword() {
  return (
    <div className="bg-white relative size-full" data-name="Vendor login invalid Password">
      <div className="absolute bg-white border border-[#8363f2] border-solid h-[1024px] left-[calc(45.83%+48.5px)] top-0 translate-x-[-50%] w-[1463px]" />
      <div className="absolute inset-[79.83%_-10.42%_-31.15%_10.42%]">
        <div className="absolute inset-[3.27%_-0.28%_-1.52%_-0.28%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1448 517">
            <g filter="url(#filter0_d_8_1755)" id="Rectangle 1">
              <path d={svgPaths.p172e8900} fill="url(#paint0_linear_8_1755)" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="516.355" id="filter0_d_8_1755" width="1448" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_8_1755" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_8_1755" mode="normal" result="shape" />
              </filter>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_8_1755" x1="4" x2="1444" y1="268.074" y2="268.074">
                <stop offset="0.474" stopColor="#7954FB" />
                <stop offset="1" stopColor="#2D1B69" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <Frame1 />
      <Frame3 />
      <Group1 />
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[21px] left-[calc(50%+0.5px)] not-italic text-[32px] text-black text-center text-nowrap top-[215px] tracking-[-0.32px] translate-x-[-50%] whitespace-pre">Forgot password</p>
      <p className="absolute font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[65px] left-[calc(45.83%+48px)] not-italic text-[18px] text-black text-center top-[241px] tracking-[-0.32px] translate-x-[-50%] w-[564px]">Please enter email address to rest password</p>
    </div>
  );
}