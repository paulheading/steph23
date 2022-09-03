
interface TwentyFourTypes {
  className?: string
}

function TwentyFour({ className }:TwentyFourTypes) {
  return (
    <svg className={className} width="60" height="55" viewBox="0 0 60 55" xmlns="http://www.w3.org/2000/svg">
      <path d="M59.5871 15.0203C58.96 11.949 57.658 9.20291 55.5979 6.83223C53.1838 4.05454 50.1478 2.24102 46.6599 1.15394C42.8893 -0.0222031 39.0319 -0.226813 35.1296 0.214791C31.8146 0.590155 28.6144 1.43804 25.5188 2.676C19.5336 5.06949 14.3006 8.58614 9.83006 13.2318C6.76607 16.4158 4.25702 19.9839 2.46484 24.0335C0.611575 28.225 -0.341554 32.5859 0.111826 37.1911C0.331893 39.4293 0.909658 41.5732 1.91431 43.5899C3.93244 47.6424 7.10316 50.4664 11.2373 52.2336C15.2463 53.947 19.4504 54.3879 23.759 54.0545C27.0777 53.7976 30.2918 53.0447 33.411 51.8935C39.9666 49.4743 45.6434 45.7155 50.4452 40.6429C53.3914 37.5304 55.7981 34.0461 57.5388 30.1188C59.0778 26.6478 59.9779 23.0295 60 19.4511C59.9978 17.8032 59.8705 16.4047 59.5878 15.021L59.5871 15.0203ZM57.7714 25.819C56.4959 30.1202 54.304 33.9269 51.4343 37.3478C47.418 42.1363 42.5537 45.8016 36.7952 48.2584C34.345 49.3043 31.805 50.0484 29.165 50.4201C25.3149 50.9618 21.523 50.78 17.9004 49.2461C12.9971 47.1698 10.0163 43.4655 8.92183 38.2671C8.16154 34.654 8.62596 31.1131 9.72334 27.6333C10.9326 23.7987 12.883 20.3593 15.3891 17.2335C19.0537 12.6629 23.5154 9.07558 28.7764 6.4922C31.7174 5.04815 34.7991 4.03393 38.0434 3.54375C39.2792 3.35681 40.523 3.25229 41.4467 3.26922C44.6432 3.2626 47.4194 3.72555 50.0278 4.95836C54.5631 7.10235 57.3342 10.6698 58.3948 15.5524C59.1492 19.0249 58.7709 22.4481 57.7714 25.8197V25.819ZM47.8691 46.5568C48.7442 46.5877 49.2109 47.2633 48.9297 48.0928C48.6508 48.9157 47.6888 49.556 46.8225 49.4942C46.0203 49.4367 45.5846 48.7493 45.8473 47.9559C46.1064 47.1743 47.0404 46.528 47.8684 46.5568H47.8691ZM48.717 47.9537C48.9025 47.3443 48.5772 46.8629 47.939 46.8041C47.1868 46.7341 46.3228 47.3148 46.0777 48.0545C45.8569 48.7221 46.2381 49.2505 46.944 49.2572C47.6925 49.2638 48.4991 48.6706 48.717 47.9537ZM34.8852 25.3126C34.7785 25.554 34.6836 25.769 34.5886 25.9831C34.2103 26.8332 33.8276 27.6811 33.4566 28.5341C33.3845 28.6997 33.2999 28.7704 33.107 28.7704C28.4142 28.7645 23.7215 28.7682 19.0287 28.7623C18.5326 28.7623 18.0417 28.6909 17.564 28.5444C16.2841 28.1529 15.657 27.2498 15.9514 25.9434C16.4681 23.65 17.3646 21.5487 19.3856 20.1245C20.5044 19.3363 21.6997 18.7504 23.0863 18.6341C23.1945 18.6253 23.3041 18.6216 23.4131 18.6216C25.4467 18.6216 27.481 18.6245 29.5146 18.6187C30.099 18.6172 30.6826 18.5988 31.2516 18.4288C31.9508 18.2197 32.4571 17.8127 32.7103 17.1106C32.8112 16.8316 32.9547 16.5689 33.0511 16.2885C33.216 15.8086 33.0688 15.5326 32.5896 15.3743C32.1679 15.2352 31.73 15.2352 31.295 15.2352C28.2295 15.2308 25.1633 15.233 22.0978 15.233H21.7747C21.7151 15.1381 21.7836 15.0733 21.8137 15.0093C22.2737 14.0333 22.7411 13.0611 23.1945 12.0829C23.2688 11.9225 23.3557 11.8724 23.5279 11.8724C26.9312 11.8776 30.3338 11.8731 33.737 11.879C34.2729 11.8798 34.8043 11.9386 35.3187 12.1079C36.6509 12.5444 37.4289 13.6668 37.1691 15.0446C36.7046 17.5073 35.6448 19.6395 33.4522 21.057C32.5057 21.6687 31.4738 21.9425 30.3551 21.9403C27.9241 21.9366 25.493 21.9601 23.0627 21.9307C21.6923 21.9145 20.5743 23.3195 20.4735 24.3396C20.4087 24.9895 20.7215 25.3126 21.3964 25.3126C25.7617 25.3126 30.1269 25.3126 34.4922 25.3126H34.8852V25.3126ZM51.2511 23.7685H56.1625C56.0285 24.1726 55.9041 24.5457 55.7805 24.9203C55.5538 25.607 55.319 26.2908 55.1048 26.9812C55.0437 27.1777 54.9539 27.2344 54.7501 27.2329C53.2221 27.2233 51.6942 27.2307 50.1662 27.2233C49.9712 27.2226 49.8792 27.2697 49.8034 27.464C48.8119 29.9988 47.8066 32.5277 46.813 35.0618C46.7438 35.2384 46.6621 35.3032 46.4722 35.3025C45.2718 35.2944 44.0713 35.2914 42.8702 35.3039C42.6118 35.3069 42.6339 35.2237 42.7068 35.0382C43.7011 32.5262 44.6903 30.012 45.681 27.4986C45.7126 27.4176 45.7399 27.3352 45.7774 27.2285H43.7659C42.7936 27.2285 41.8206 27.2417 40.8491 27.2248C39.7046 27.2049 38.63 26.9407 37.7181 26.201C36.6914 25.3678 36.3631 24.0467 36.8724 22.8279C38.3629 19.2678 39.8547 15.7077 41.3378 12.1447C41.4232 11.9386 41.5233 11.8687 41.7478 11.8709C42.9879 11.8834 44.2281 11.8834 45.4683 11.8709C45.7347 11.868 45.7561 11.9283 45.6574 12.1595C44.2745 15.4001 42.9239 18.6547 41.5093 21.8806C40.9985 23.0457 41.6903 23.6103 42.6155 23.717C43.3868 23.8053 44.1611 23.7538 44.9347 23.7626C45.5794 23.7707 46.2249 23.7545 46.8689 23.77C47.0728 23.7744 47.1589 23.7074 47.2303 23.5205C47.8493 21.9035 48.4837 20.2916 49.1019 18.6739C49.1733 18.4876 49.2543 18.4177 49.4604 18.4199C50.6409 18.431 51.8222 18.431 53.0028 18.4207C53.2471 18.4185 53.309 18.4538 53.2089 18.7077C52.5833 20.2909 51.9738 21.8799 51.3593 23.4675C51.3247 23.5573 51.2945 23.6493 51.2525 23.7678L51.2511 23.7685ZM36.5 41.4901C35.9053 41.4901 35.3099 41.4864 34.7152 41.4923C34.5356 41.4938 34.4951 41.4555 34.5599 41.2715C34.8175 40.534 34.8109 40.5318 35.5859 40.5318C36.3609 40.5318 37.1919 40.5347 37.9949 40.5303C38.4151 40.5281 38.6344 40.3647 38.7699 39.9724C38.8751 39.6677 38.8288 39.5897 38.5123 39.5868C37.8881 39.5801 37.2633 39.5846 36.6384 39.5846C36.539 39.5846 36.4397 39.5868 36.341 39.5787C35.7324 39.5286 35.4527 39.1658 35.6006 38.5696C35.7051 38.1471 35.87 37.7401 36.1431 37.3913C36.4676 36.9784 36.8908 36.7472 37.4222 36.745C38.4931 36.7414 39.564 36.7487 40.6342 36.7399C40.8587 36.7377 40.8454 36.8105 40.7828 36.9806C40.5223 37.6952 40.5275 37.6967 39.7738 37.6967C39.09 37.6967 38.4055 37.6982 37.7218 37.6967C37.3369 37.696 37.0888 37.8836 36.9534 38.2369C36.8415 38.5291 36.8953 38.6189 37.2059 38.6248C37.4929 38.6307 37.7807 38.6263 38.0685 38.6263C38.3857 38.6263 38.7029 38.6189 39.0201 38.6277C39.949 38.6542 40.2831 39.1871 39.9696 40.0578C39.6899 40.835 39.2564 41.401 38.3717 41.4798C38.2826 41.4879 38.1936 41.4893 38.1045 41.4893C37.5687 41.4901 37.0336 41.4893 36.4985 41.4893L36.5 41.4901ZM46.1726 36.7502C46.0033 37.3812 45.6086 37.6967 44.9884 37.6967C44.3444 37.6967 43.6996 37.6996 43.0556 37.6967C42.684 37.6945 42.4374 37.8689 42.2946 38.2045C42.1555 38.5313 42.2291 38.6447 42.578 38.6417C43.0637 38.6366 43.5488 38.6277 44.0345 38.6285C44.2421 38.6285 44.4526 38.6307 44.6565 38.6616C45.2261 38.7485 45.5338 39.1753 45.4013 39.7288C45.3093 40.113 45.1672 40.4876 44.9332 40.813C44.602 41.2737 44.1302 41.482 43.576 41.4871C42.3962 41.4967 41.2164 41.4871 40.0365 41.493C39.8592 41.4938 39.8179 41.4643 39.882 41.2811C40.1425 40.534 40.1366 40.5318 40.9337 40.5318C41.7308 40.5318 42.5198 40.5333 43.3132 40.5311C43.7372 40.5296 43.9631 40.3699 44.0993 39.9857C44.2134 39.664 44.1677 39.5897 43.8292 39.5868C43.1947 39.5816 42.5603 39.5853 41.9259 39.5846C41.8272 39.5846 41.7271 39.5846 41.6293 39.575C41.0692 39.5176 40.7865 39.1621 40.9153 38.6182C41.0176 38.1854 41.1832 37.7666 41.4607 37.4089C41.7588 37.0232 42.143 36.7612 42.642 36.7553C43.8108 36.7421 44.9803 36.7509 46.1734 36.7509L46.1726 36.7502ZM18.1359 35.3945C18.3677 34.7357 18.5871 34.1138 18.8197 33.4529C18.1815 33.4529 17.5787 33.4463 16.976 33.4558C16.6411 33.461 16.2304 33.3204 15.9927 33.5154C15.7718 33.6958 15.7314 34.0961 15.6114 34.3994C15.6004 34.4274 15.5937 34.4561 15.5812 34.4833C15.4465 34.7784 15.4429 35.209 15.1875 35.351C14.9365 35.4916 14.5493 35.3797 14.2233 35.3981C13.9995 35.4107 13.9524 35.3591 14.0378 35.1391C14.4757 34.0137 14.8997 32.8832 15.3288 31.7542C15.459 31.4119 15.593 31.0712 15.7137 30.7252C15.766 30.5766 15.83 30.4978 16.0074 30.5074C16.3334 30.5243 16.6609 30.5118 17.0312 30.5118C16.8288 31.0822 16.6345 31.6283 16.4401 32.1744C16.3646 32.3869 16.4389 32.4934 16.6632 32.4939C17.4176 32.4939 18.1712 32.488 18.9256 32.4983C19.1133 32.5012 19.2083 32.4453 19.2716 32.265C19.4534 31.752 19.6616 31.2485 19.8449 30.7363C19.9038 30.5721 19.9759 30.4956 20.1614 30.5074C20.4381 30.525 20.7171 30.5214 20.9946 30.5088C21.1918 30.5 21.2021 30.5648 21.1388 30.7304C20.5699 32.2186 20.0068 33.709 19.446 35.2002C19.3945 35.3363 19.3297 35.4048 19.17 35.3981C18.8366 35.3849 18.5017 35.3937 18.1352 35.3937L18.1359 35.3945ZM31.9824 38.627H34.2434C34.9787 38.627 34.9706 38.6241 34.7233 39.3211C34.6526 39.5205 34.5614 39.5941 34.345 39.5904C33.5023 39.5772 32.6588 39.5963 31.8161 39.5801C31.4473 39.5728 31.4937 39.8606 31.426 40.0615C31.3553 40.272 31.4709 40.3964 31.6718 40.4582C31.8735 40.52 32.081 40.5311 32.2893 40.5318C32.8641 40.534 33.4397 40.5369 34.0145 40.5303C34.1963 40.5281 34.2626 40.5509 34.1867 40.7614C33.9255 41.4879 33.9336 41.496 33.1534 41.4893C32.4218 41.4835 31.6843 41.5497 30.9675 41.3429C30.807 41.2965 30.6458 41.2406 30.4986 41.1626C30.0607 40.9307 29.8841 40.5649 30.0335 40.0946C30.2675 39.3601 30.5251 38.6292 30.8585 37.9337C31.1787 37.2654 31.7969 37.0041 32.4844 36.8702C33.4868 36.6759 34.5003 36.7664 35.5101 36.7436C35.6742 36.7399 35.6573 36.8113 35.6109 36.9254C35.5359 37.1086 35.463 37.2934 35.4107 37.484C35.3614 37.6614 35.2584 37.7004 35.0854 37.7018C34.3531 37.7107 33.6171 37.6459 32.8884 37.7651C32.3519 37.8527 32.0921 38.0956 31.9824 38.627V38.627ZM24.5841 41.4908C24.1228 41.4908 23.9717 41.2742 24.1307 40.8409C24.4118 40.0799 24.732 39.3314 24.9697 38.5571C25.3054 37.4649 26.0458 36.9099 27.141 36.7752C27.8115 36.6935 28.4842 36.6707 29.1517 36.8098C29.2864 36.8378 29.4211 36.8775 29.5484 36.9283C30.0968 37.1469 30.3323 37.5605 30.1424 38.1147C29.7707 39.2004 29.3541 40.2705 28.9618 41.3495C28.9133 41.4835 28.8227 41.493 28.7072 41.4916C28.4194 41.4886 28.1309 41.4783 27.8446 41.4945C27.6061 41.5077 27.5377 41.4687 27.637 41.2111C28.0065 40.2514 28.3539 39.2828 28.7035 38.3142C28.8676 37.8594 28.7719 37.7232 28.281 37.7048C27.994 37.6945 27.7055 37.6974 27.4184 37.7099C26.915 37.732 26.5566 37.9617 26.3784 38.4504C26.0605 39.324 25.7227 40.191 25.4194 41.0698C25.312 41.3804 25.1795 41.5703 24.8211 41.493C24.7452 41.4768 24.6628 41.4908 24.5833 41.4908H24.5841ZM28.9479 30.5125C28.5394 31.5842 28.1478 32.6079 27.7577 33.6325C27.6841 33.8268 27.6142 34.0225 27.5435 34.2176C27.4729 34.4134 27.5369 34.537 27.7496 34.5392C28.3046 34.5451 28.861 34.5539 29.4152 34.5348C29.7626 34.523 29.9547 34.2941 30.0732 33.9784C30.4729 32.9134 30.8894 31.8543 31.2839 30.7871C31.3612 30.5773 31.4547 30.4897 31.6851 30.5074C31.9802 30.5302 32.279 30.5125 32.6154 30.5125C32.4262 31.0152 32.2488 31.4944 32.067 31.9713C31.7852 32.711 31.5011 33.4485 31.2184 34.1881C30.9446 34.9065 30.213 35.4364 29.4358 35.4511C28.7219 35.4644 28.008 35.4578 27.2933 35.4526C26.6486 35.4482 26.0156 34.8741 26.3578 34.0608C26.8171 32.9671 27.2123 31.8454 27.6275 30.7333C27.6878 30.5714 27.7651 30.4978 27.9484 30.5074C28.2641 30.5236 28.5821 30.5118 28.9486 30.5118L28.9479 30.5125ZM18.0859 36.7406C17.9732 37.049 17.8724 37.3154 17.7775 37.5848C17.7267 37.7283 17.6104 37.6974 17.5059 37.6982C16.7522 37.7026 15.9985 37.6989 15.2456 37.7114C14.793 37.7188 14.486 37.9381 14.3234 38.3738C14.2483 38.5748 14.2778 38.6336 14.4964 38.6314C15.2596 38.6226 16.0236 38.6329 16.7868 38.6248C17.0002 38.6226 17.0658 38.6535 16.9774 38.8876C16.7132 39.5823 16.7235 39.5868 15.9838 39.5868C15.359 39.5868 14.7341 39.5927 14.1099 39.5831C13.9326 39.5801 13.8487 39.6375 13.7898 39.8076C13.6198 40.3029 13.4225 40.7894 13.2481 41.2833C13.1936 41.4363 13.12 41.5041 12.9493 41.496C12.6423 41.4812 12.3347 41.4886 12.027 41.493C11.8791 41.4952 11.8011 41.4783 11.8703 41.295C12.2861 40.194 12.6858 39.087 13.1053 37.9882C13.3386 37.3751 13.7979 37.0078 14.4404 36.8856C15.6372 36.6582 16.8457 36.7782 18.0859 36.7414V36.7406ZM22.892 36.745C23.6059 36.745 24.3198 36.7502 25.0338 36.7421C25.2369 36.7399 25.2605 36.7885 25.1942 36.9784C24.941 37.696 24.9477 37.6967 24.1881 37.6996C23.8819 37.7004 23.511 37.6076 23.2872 37.7467C23.0488 37.8947 23.0304 38.3002 22.9185 38.5939C22.5807 39.4808 22.2458 40.3691 21.9263 41.2634C21.8601 41.4496 21.771 41.5063 21.5848 41.496C21.3177 41.4812 21.0483 41.4754 20.7826 41.4967C20.4852 41.521 20.4955 41.4157 20.5839 41.1846C20.9887 40.1218 21.3707 39.051 21.7769 37.9882C21.8667 37.7519 21.8417 37.6812 21.5775 37.6945C21.1918 37.7136 20.8039 37.6945 20.4175 37.7018C20.2519 37.7055 20.1916 37.6599 20.277 37.5002C20.2858 37.4833 20.2902 37.4634 20.2968 37.4442C20.4627 36.9791 20.7926 36.7465 21.2868 36.7465H22.8927L22.892 36.745ZM19.34 36.745C20.0481 36.745 20.0458 36.7443 19.7993 37.403C19.3253 38.6712 18.8498 39.9393 18.3847 41.2119C18.3103 41.4157 18.2198 41.5173 17.985 41.4974C17.7098 41.4739 17.4301 41.4864 17.1533 41.4938C16.987 41.4982 16.9127 41.468 16.9833 41.2774C17.5265 39.8238 18.0645 38.3679 18.5996 36.9114C18.6438 36.7907 18.7019 36.7362 18.8336 36.7436C19.0014 36.7539 19.1707 36.7458 19.3393 36.7458L19.34 36.745ZM37.1499 33.681C37.6048 34.2117 37.9455 34.788 38.3297 35.3952C37.805 35.3952 37.3324 35.3923 36.8599 35.3974C36.7363 35.3989 36.6892 35.3216 36.6347 35.237C36.4485 34.9448 36.2432 34.6636 36.0768 34.3604C35.8744 33.9909 35.555 33.815 35.1627 33.7892C34.6791 33.7576 34.1919 33.7782 33.7061 33.7664C33.556 33.7627 33.531 33.8599 33.492 33.9644C33.3381 34.3714 33.1777 34.7762 33.0283 35.1847C32.9753 35.3297 32.9105 35.4092 32.7339 35.4011C32.3791 35.3842 32.0229 35.3959 31.6232 35.3959C31.7425 35.0809 31.8499 34.7976 31.9574 34.5149C32.346 33.4889 32.7486 32.4666 33.1166 31.4333C33.2579 31.038 33.5199 30.8172 33.8887 30.6759C34.1683 30.5692 34.4569 30.4882 34.7535 30.4794C35.803 30.4463 36.8533 30.4088 37.9014 30.503C38.1693 30.5272 38.4254 30.6112 38.6506 30.765C38.8884 30.9284 38.9914 31.1367 38.8759 31.4289C38.6749 31.9345 38.4799 32.4416 38.2929 32.9524C38.2068 33.1872 38.0317 33.3233 37.8226 33.4198C37.6085 33.5184 37.3818 33.592 37.1499 33.681V33.681ZM35.3872 32.8332C35.7728 32.8332 36.1592 32.839 36.5449 32.831C36.8452 32.8251 37.0734 32.7183 37.1646 32.3908C37.2309 32.1546 37.3324 31.9264 37.4399 31.7041C37.5481 31.4796 37.4738 31.3913 37.2463 31.3913C36.4544 31.3913 35.6632 31.3876 34.8712 31.3979C34.5908 31.4016 34.3884 31.5297 34.3023 31.8234C34.2353 32.05 34.1323 32.2657 34.0454 32.4858C33.9233 32.7971 33.9431 32.8295 34.2883 32.8332C34.6549 32.8376 35.0206 32.8339 35.3872 32.8339V32.8317V32.8332ZM24.3522 30.4536C24.6959 30.4801 25.114 30.4065 25.5269 30.4934C26.2445 30.6443 26.5448 31.1919 26.2813 31.8675C25.9935 32.605 25.6851 33.3351 25.4224 34.0807C25.1088 34.9698 24.4567 35.3805 23.5654 35.4533C22.8544 35.5115 22.1383 35.5085 21.4266 35.4519C20.592 35.3856 20.2269 34.7865 20.5272 34.0174C20.8187 33.2711 21.1557 32.5388 21.3898 31.7748C21.6349 30.9755 22.5983 30.4559 23.3277 30.4544C23.6449 30.4544 23.9629 30.4544 24.3515 30.4544L24.3522 30.4536ZM24.06 31.3869C23.8326 31.3869 23.6044 31.3943 23.377 31.3854C22.9891 31.37 22.7404 31.5518 22.6013 31.9043C22.3076 32.6492 22.0102 33.3918 21.721 34.1381C21.5996 34.4509 21.6555 34.5355 21.9874 34.5407C22.4923 34.5481 22.998 34.5481 23.5029 34.5407C23.7943 34.5363 24.0321 34.4001 24.1425 34.1322C24.4737 33.3285 24.7879 32.5174 25.1022 31.7071C25.1861 31.4899 25.0823 31.3898 24.863 31.3898C24.5958 31.3898 24.3279 31.3898 24.0608 31.3898V31.3884L24.06 31.3869ZM48.1348 48.6345C47.8757 48.6956 47.6733 48.6595 47.549 48.3924C47.4334 48.1451 47.192 48.1929 46.9763 48.1848C46.7666 48.1767 46.7879 48.36 46.7423 48.4726C46.6908 48.5992 46.6326 48.6632 46.4862 48.6573C46.3434 48.6514 46.2845 48.6323 46.3515 48.4718C46.4803 48.1627 46.5973 47.8477 46.7092 47.532C46.7732 47.3516 46.9189 47.3023 47.0779 47.2825C47.4025 47.2412 47.7293 47.2479 48.0539 47.2766C48.2938 47.2979 48.391 47.4267 48.2776 47.6622C48.1952 47.8337 48.1915 48.0604 47.9574 48.1274C47.8301 48.1642 47.9111 48.2319 47.9398 48.2805C48.0082 48.3968 48.1157 48.4917 48.1348 48.6352V48.6345ZM47.2546 47.529C47.0419 47.5202 47.0028 47.6946 46.9911 47.8227C46.9749 47.9993 47.1442 47.9029 47.2317 47.9198C47.3076 47.9346 47.39 47.9147 47.468 47.9243C47.7521 47.9603 47.8919 47.8337 47.9052 47.5305C47.6859 47.5305 47.4702 47.5371 47.2553 47.529H47.2546Z" />
    </svg>
  )
}

export { TwentyFour }