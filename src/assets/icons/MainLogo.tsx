import type { ComponentProps } from 'react';

export default function MainLogo({
  className,
  width = 109,
  height = 38,
  ...props
}: ComponentProps<'svg'>) {
  return (
    <svg
      role='img'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 109 38'
      fill='currentColor'
      className={className}
      width={width}
      height={height}
      {...props}
    >
      <title>MainLogo</title>
      <rect width='108.859' height='37.9054' rx='6.89655' fill='#006FFF' />
      <path
        d='M23.1767 11.9397C23.1767 12.2064 23.1282 12.4569 23.0312 12.6913C22.9343 12.9256 22.7969 13.1317 22.6191 13.3095C22.4494 13.4793 22.2473 13.6166 22.0129 13.7217C21.7786 13.8187 21.524 13.8672 21.2492 13.8672C20.9744 13.8672 20.7158 13.8187 20.4733 13.7217C20.239 13.6166 20.0329 13.4793 19.8551 13.3095C19.6853 13.1317 19.552 12.9256 19.455 12.6913C19.358 12.4569 19.3095 12.2064 19.3095 11.9397C19.3095 11.673 19.358 11.4224 19.455 11.188C19.552 10.9537 19.6853 10.7476 19.8551 10.5698C20.0329 10.392 20.239 10.2546 20.4733 10.1576C20.7158 10.0525 20.9744 10 21.2492 10C21.524 10 21.7786 10.0525 22.0129 10.1576C22.2473 10.2546 22.4494 10.392 22.6191 10.5698C22.7969 10.7476 22.9343 10.9537 23.0312 11.188C23.1282 11.4224 23.1767 11.673 23.1767 11.9397ZM19.9036 17.6131H16.4243V15.3098H22.9343V25.3233H26.4863V27.6266H16V25.3233H19.9036V17.6131Z'
        fill='white'
      />
      <path
        d='M39.7365 24.0019C39.7365 24.705 39.5789 25.3071 39.2637 25.8082C38.9566 26.3012 38.5445 26.7053 38.0272 27.0205C37.5181 27.3276 36.9362 27.5498 36.2815 27.6872C35.635 27.8327 34.9723 27.9054 34.2934 27.9054C33.3882 27.9054 32.5719 27.861 31.8446 27.7721C31.1172 27.6913 30.4302 27.57 29.7837 27.4084V24.7414C30.5434 25.0566 31.299 25.2869 32.0506 25.4324C32.8103 25.5698 33.5256 25.6385 34.1964 25.6385C34.9723 25.6385 35.5501 25.5172 35.93 25.2748C36.3179 25.0242 36.5119 24.701 36.5119 24.305C36.5119 24.1191 36.4714 23.9494 36.3906 23.7958C36.3098 23.6422 36.1563 23.4968 35.93 23.3594C35.7117 23.2139 35.4006 23.0684 34.9965 22.923C34.5924 22.7694 34.063 22.5997 33.4084 22.4138C32.8023 22.2441 32.2689 22.0541 31.8082 21.844C31.3556 21.6258 30.9798 21.3712 30.6808 21.0803C30.3817 20.7893 30.1554 20.4539 30.0019 20.0741C29.8564 19.6862 29.7837 19.2336 29.7837 18.7163C29.7837 18.2152 29.8968 17.7425 30.1231 17.298C30.3494 16.8534 30.6848 16.4655 31.1293 16.1342C31.5819 15.7947 32.1436 15.528 32.8144 15.3341C33.4852 15.1401 34.2691 15.0431 35.1662 15.0431C35.9421 15.0431 36.629 15.0835 37.2271 15.1643C37.8252 15.2452 38.3545 15.3341 38.8152 15.431V17.8435C38.1121 17.6172 37.4494 17.4596 36.827 17.3707C36.2128 17.2737 35.6026 17.2252 34.9965 17.2252C34.3904 17.2252 33.9014 17.3343 33.5296 17.5525C33.1659 17.7707 32.9841 18.0738 32.9841 18.4617C32.9841 18.6476 33.0205 18.8133 33.0932 18.9588C33.1659 19.1043 33.3074 19.2457 33.5175 19.3831C33.7357 19.5205 34.0348 19.6659 34.4146 19.8195C34.8025 19.965 35.3117 20.1266 35.9421 20.3044C36.6533 20.5065 37.2513 20.7247 37.7363 20.9591C38.2212 21.1853 38.6091 21.444 38.9001 21.7349C39.1991 22.0259 39.4133 22.3572 39.5426 22.729C39.6719 23.1008 39.7365 23.5251 39.7365 24.0019Z'
        fill='white'
      />
      <path
        d='M53.9081 22.8381C53.9081 23.7029 53.7465 24.4545 53.4232 25.0929C53.108 25.7314 52.6635 26.2608 52.0897 26.681C51.5159 27.0932 50.833 27.4003 50.041 27.6024C49.2489 27.8044 48.3842 27.9054 47.4467 27.9054C46.6142 27.9054 45.8101 27.857 45.0342 27.76C44.2584 27.663 43.4906 27.5013 42.7309 27.2751V24.3292C43.1026 24.4585 43.4906 24.5797 43.8947 24.6929C44.2988 24.806 44.7029 24.9071 45.107 24.996C45.5191 25.0768 45.9273 25.1414 46.3314 25.1899C46.7355 25.2384 47.1274 25.2627 47.5073 25.2627C48.073 25.2627 48.5539 25.2142 48.9499 25.1172C49.3459 25.0202 49.6692 24.8869 49.9197 24.7171C50.1703 24.5474 50.3521 24.3454 50.4652 24.111C50.5784 23.8766 50.635 23.618 50.635 23.3351C50.635 22.9472 50.5218 22.6239 50.2955 22.3653C50.0773 22.0986 49.7864 21.8642 49.4227 21.6622C49.059 21.4601 48.6428 21.2783 48.174 21.1166C47.7134 20.955 47.2406 20.7813 46.7557 20.5954C46.2788 20.4095 45.806 20.1994 45.3373 19.965C44.8766 19.7306 44.4644 19.4397 44.1008 19.0921C43.7371 18.7446 43.4421 18.3324 43.2158 17.8556C42.9976 17.3707 42.8885 16.7888 42.8885 16.1099C42.8885 15.4876 43.0016 14.8976 43.2279 14.34C43.4542 13.7823 43.8098 13.2974 44.2947 12.8852C44.7796 12.465 45.4019 12.1336 46.1616 11.8912C46.9213 11.6406 47.8386 11.5154 48.9135 11.5154C49.2287 11.5154 49.556 11.5315 49.8955 11.5638C50.243 11.5881 50.5824 11.6245 50.9138 11.673C51.2532 11.7134 51.5765 11.7659 51.8836 11.8305C52.1988 11.8871 52.4857 11.9477 52.7443 12.0124V14.74C52.4857 14.643 52.2029 14.5541 51.8957 14.4733C51.5886 14.3925 51.2694 14.3238 50.938 14.2672C50.6148 14.2026 50.2874 14.1541 49.9561 14.1218C49.6247 14.0894 49.3095 14.0733 49.0105 14.0733C48.4852 14.0733 48.0407 14.1177 47.677 14.2066C47.3133 14.2874 47.0143 14.4046 46.7799 14.5582C46.5455 14.7037 46.3758 14.8855 46.2707 15.1037C46.1657 15.3219 46.1131 15.5644 46.1131 15.8311C46.1131 16.1624 46.2223 16.4494 46.4405 16.6918C46.6668 16.9262 46.9617 17.1404 47.3254 17.3343C47.6972 17.5202 48.1134 17.698 48.5741 17.8677C49.0428 18.0294 49.5197 18.2072 50.0046 18.4011C50.4976 18.587 50.9744 18.8012 51.4351 19.0436C51.9038 19.2861 52.32 19.5811 52.6837 19.9286C53.0555 20.2761 53.3505 20.6883 53.5687 21.1651C53.795 21.6339 53.9081 22.1915 53.9081 22.8381Z'
        fill='white'
      />
      <path
        d='M57.4238 27.6266V11.7821H66.9644V14.3036H60.4545V18.2435H66.6614V20.7045H60.4545V25.1051H66.9644V27.6266H57.4238Z'
        fill='white'
      />
      <path
        d='M82.0453 19.6377C82.0453 21.0762 81.8755 22.3168 81.5361 23.3594C81.2047 24.4019 80.7441 25.2586 80.1541 25.9294C79.5722 26.6002 78.8852 27.0973 78.0932 27.4205C77.3093 27.7438 76.4688 27.9054 75.5717 27.9054C73.4865 27.9054 71.9186 27.2144 70.868 25.8324C69.8174 24.4423 69.292 22.4259 69.292 19.7831C69.292 18.3446 69.4577 17.104 69.7891 16.0614C70.1285 15.0189 70.5892 14.1622 71.1711 13.4914C71.761 12.8206 72.448 12.3235 73.232 12.0003C74.024 11.677 74.8685 11.5154 75.7656 11.5154C77.8508 11.5154 79.4186 12.2064 80.4693 13.5884C81.5199 14.9704 82.0453 16.9868 82.0453 19.6377ZM78.8933 19.7831C78.8933 17.9081 78.6428 16.51 78.1417 15.5886C77.6406 14.6673 76.8163 14.2066 75.6686 14.2066C75.0948 14.2066 74.6059 14.3279 74.2018 14.5703C73.7977 14.8047 73.4623 15.1522 73.1956 15.6129C72.937 16.0735 72.747 16.6433 72.6258 17.3222C72.5046 17.993 72.444 18.7648 72.444 19.6377C72.444 21.5127 72.6945 22.9108 73.1956 23.8322C73.7047 24.7535 74.5291 25.2142 75.6686 25.2142C76.2425 25.2142 76.7314 25.097 77.1355 24.8626C77.5477 24.6202 77.8831 24.2686 78.1417 23.8079C78.4003 23.3473 78.5903 22.7815 78.7115 22.1107C78.8327 21.4318 78.8933 20.656 78.8933 19.7831Z'
        fill='white'
      />
      <path
        d='M90.5434 19.0315L89.6463 16.9949C89.5574 16.809 89.4402 16.6676 89.2947 16.5706C89.1573 16.4736 88.9836 16.4251 88.7734 16.4251H88.531V19.0315H87.3066V12.7276H89.1977C89.9089 12.7276 90.4747 12.857 90.8949 13.1156C91.3152 13.3742 91.5253 13.8268 91.5253 14.4733C91.5253 14.934 91.392 15.2936 91.1253 15.5523C90.8666 15.8109 90.5393 15.9725 90.1433 16.0372C90.2888 16.0776 90.4262 16.1665 90.5555 16.3039C90.6848 16.4413 90.8182 16.6474 90.9556 16.9221L91.9496 19.0315H90.5434ZM90.2645 14.5946C90.2645 14.2874 90.1635 14.0652 89.9615 13.9278C89.7675 13.7904 89.4725 13.7217 89.0765 13.7217H88.531V15.4916H89.028C89.3998 15.4916 89.6988 15.4189 89.9251 15.2734C90.1514 15.1199 90.2645 14.8936 90.2645 14.5946ZM89.319 11.5881C88.7452 11.5881 88.2037 11.7012 87.6945 11.9275C87.1934 12.1538 86.753 12.4609 86.3731 12.8489C86.0013 13.2368 85.7064 13.6934 85.4881 14.2188C85.278 14.736 85.173 15.2896 85.173 15.8796C85.173 16.4776 85.278 17.0393 85.4881 17.5647C85.7064 18.0819 86.0013 18.5345 86.3731 18.9224C86.753 19.3103 87.1934 19.6175 87.6945 19.8438C88.2037 20.07 88.7452 20.1832 89.319 20.1832C89.9009 20.1832 90.4424 20.07 90.9434 19.8438C91.4445 19.6175 91.8809 19.3103 92.2527 18.9224C92.6325 18.5345 92.9275 18.0819 93.1377 17.5647C93.3559 17.0393 93.465 16.4776 93.465 15.8796C93.465 15.2896 93.3559 14.736 93.1377 14.2188C92.9275 13.6934 92.6325 13.2368 92.2527 12.8489C91.8809 12.4609 91.4445 12.1538 90.9434 11.9275C90.4424 11.7012 89.9009 11.5881 89.319 11.5881ZM89.319 10.3516C90.0787 10.3516 90.7939 10.497 91.4647 10.788C92.1436 11.0789 92.7336 11.4749 93.2346 11.976C93.7357 12.469 94.1317 13.055 94.4227 13.7338C94.7136 14.4046 94.8591 15.1199 94.8591 15.8796C94.8591 16.6474 94.7136 17.3666 94.4227 18.0374C94.1317 18.7082 93.7357 19.2942 93.2346 19.7953C92.7336 20.2963 92.1436 20.6923 91.4647 20.9833C90.7939 21.2742 90.0787 21.4197 89.319 21.4197C88.5512 21.4197 87.8319 21.2742 87.1611 20.9833C86.4903 20.6923 85.9044 20.2963 85.4033 19.7953C84.9022 19.2942 84.5062 18.7082 84.2152 18.0374C83.9243 17.3666 83.7788 16.6474 83.7788 15.8796C83.7788 15.1199 83.9243 14.4046 84.2152 13.7338C84.5062 13.055 84.9022 12.469 85.4033 11.976C85.9044 11.4749 86.4903 11.0789 87.1611 10.788C87.8319 10.497 88.5512 10.3516 89.319 10.3516Z'
        fill='white'
      />
    </svg>
  );
}
