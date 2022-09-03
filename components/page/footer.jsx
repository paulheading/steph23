import { Container, Wrap } from 'components'
import styles from 'styles/components/page/footer.module.scss'

export function Footer({ variant }) {
  const containerProps = {
    section: false,
    padding: false,
    dark: true,
    variant,
  }
  return (
    <footer>
      <Container {...containerProps}>
        <Wrap className={styles.wrap}>
          <div className={styles.socials}>
            <svg width="32" viewBox="0 0 38 36">
              <path d="M13.9193 0C14.3943 0 14.8837 0 15.3587 0C17.561 0.705318 19.7777 0.633347 21.98 0C22.4119 0 22.8437 0 23.2755 0C24.4702 0.345462 25.6937 0.676529 26.543 1.65534C27.9824 3.28189 29.6953 4.46221 31.6674 5.39784C33.3947 6.21831 34.4167 7.71531 34.647 9.62975C34.8773 11.6162 35.4386 13.4442 36.4319 15.1859C37.4826 16.9996 37.4826 18.9284 36.4319 20.7421C35.4099 22.4982 34.8773 24.3695 34.6326 26.3703C34.4023 28.2127 33.3659 29.5946 31.7393 30.5158C31.2787 30.7749 30.7749 30.9476 30.3431 31.2499C29.4363 31.8545 28.5438 32.4878 27.6802 33.1643C27.1764 33.5674 26.7589 34.0712 26.2839 34.5174C25.2763 35.4674 23.9808 35.7409 22.6854 36C22.5846 36 22.4982 36 22.3975 36C19.8497 35.2659 17.3163 35.2803 14.7685 36C14.6678 36 14.5814 36 14.4806 36C12.998 35.7121 11.5586 35.3379 10.5222 34.1431C9.18355 32.6174 7.58579 31.4946 5.74333 30.6597C3.84329 29.7817 2.77812 28.2127 2.50462 26.1255C2.30311 24.4702 2.00083 22.8581 1.0796 21.4186C-0.374223 19.1299 -0.345435 16.8125 1.0796 14.5094C1.84249 13.2859 2.27432 11.9616 2.38947 10.5222C2.40387 10.3063 2.46144 10.0904 2.49023 9.88884C2.79251 7.68652 3.94405 6.14634 5.88727 5.18193C7.11078 4.57737 8.39187 4.07357 9.3275 2.994C10.5654 1.56897 11.976 0.37425 13.9193 0ZM21.6058 31.3794C21.9369 31.2067 22.2823 30.9908 22.6566 30.8613C23.1892 30.6741 23.3475 30.3287 23.3475 29.7673C23.3331 28.1551 23.4051 26.5574 23.4339 24.9452C23.4482 23.88 23.6498 23.6353 24.7149 23.4914C25.2907 25.3627 25.8665 27.2339 26.471 29.2203C26.8741 28.8748 27.1188 28.6158 27.4067 28.4142C27.968 28.0112 28.0688 27.5938 27.8097 26.9028C26.3847 23.1028 25.9385 19.1443 26.1544 15.0996C26.1688 14.898 26.1544 14.6965 26.1544 14.3798C25.7225 14.6965 25.3915 14.97 25.0316 15.1859C24.4846 15.4882 24.2975 15.9056 24.3407 16.539C24.4127 17.7625 24.4127 18.986 24.4414 20.2095C24.4702 21.3179 24.4846 21.3179 23.2755 21.6489C23.146 19.9504 23.0164 18.2807 22.8869 16.5966C21.3755 16.7405 21.174 17.0716 21.2747 18.4678C21.4474 20.7277 21.5194 23.002 21.577 25.2763C21.649 27.2771 21.6058 29.2779 21.6058 31.3794ZM20.1232 14.7397C23.0164 14.7397 25.3339 12.4366 25.3627 9.54338C25.3771 6.70772 22.9876 4.33267 20.1232 4.33267C17.2731 4.33267 14.8981 6.67893 14.8837 9.47141C14.8693 12.4078 17.1868 14.7397 20.1232 14.7397ZM26.7733 6.69332C26.4566 7.16833 26.1975 7.57137 25.9097 7.94562C25.6506 8.27669 25.7657 8.46381 26.0248 8.72291C26.543 9.22671 27.0324 9.7449 27.4786 10.3063C27.6226 10.479 27.6945 10.7957 27.637 10.9972C26.4423 15.1859 26.7157 19.3315 27.968 23.4482C28.2847 24.4846 28.7309 25.4778 29.1196 26.5286C29.3067 26.399 29.3787 26.3846 29.4219 26.3271C29.7385 25.9384 30.0984 25.5642 30.3431 25.1467C30.4726 24.9308 30.5302 24.5422 30.4295 24.3263C29.1052 21.505 28.6878 18.511 28.8461 15.445C28.8893 14.6389 29.0332 13.8329 29.134 13.0268C29.2059 13.0268 29.2923 13.0124 29.3643 13.0124C29.6522 13.6313 29.9401 14.2359 30.2711 14.9124C30.7317 14.6677 31.2067 14.4806 31.6098 14.1927C31.7681 14.0776 31.9121 13.7177 31.8545 13.5306C30.9189 10.7525 29.1772 8.55018 26.7733 6.69332ZM19.2739 26.6581C19.2739 27.4354 19.3027 28.1551 19.2595 28.8605C19.2451 29.1339 19.0868 29.5658 18.9141 29.609C18.6262 29.6953 18.1512 29.6233 17.9496 29.4218C17.633 29.1052 17.3883 28.6445 17.2443 28.1983C16.7549 26.5862 16.9708 24.9596 17.3163 23.3619C17.7337 21.4474 18.4391 19.6769 20.4542 18.8421C20.5406 18.7989 20.6558 18.6837 20.6702 18.5974C20.6846 17.9208 20.6846 17.2443 20.6846 16.467C18.4822 17.3738 17.1292 18.8133 16.3087 20.7853C15.445 22.8581 15.2147 25.0604 15.2867 27.2627C15.3155 28.1263 15.5458 29.0188 15.8625 29.8249C16.4095 31.2067 17.5322 31.7681 18.986 31.509C19.4323 31.437 19.8497 31.2355 20.2959 31.1203C20.7133 31.0052 20.8429 30.7749 20.8429 30.3431C20.8141 28.7597 20.8285 27.1763 20.8141 25.593C20.8141 25.2907 20.8141 24.9884 20.8141 24.6429C20.1951 24.7149 19.6914 24.7437 19.2019 24.8157C17.7481 25.0316 17.7481 25.0316 17.8345 26.5286C17.8345 26.543 17.8633 26.5718 17.9065 26.6293C18.2807 26.6581 18.7125 26.6581 19.2739 26.6581ZM9.77372 19.9936C10.1048 19.8209 10.3063 19.6913 10.5222 19.605C11.2131 19.3459 11.4147 18.8852 11.2995 18.1511C11.1556 17.2011 11.1412 16.2511 11.0404 15.2867C10.9972 14.8405 11.098 14.567 11.5298 14.3223C13.7321 13.0844 14.8261 10.2199 14.0488 7.87365C13.5162 6.23271 12.1344 5.59936 10.5942 6.37665C9.96084 6.69332 9.38507 7.15394 8.86688 7.64334C8.63657 7.85926 8.49263 8.30548 8.52142 8.62215C8.70854 10.6949 8.95325 12.7677 9.18355 14.8405C9.37068 16.5246 9.5722 18.2087 9.77372 19.9936ZM13.6746 28.8892C12.6094 28.1839 11.6018 27.5074 10.5798 26.8309C12.4223 22.8724 13.9049 18.8996 14.8549 14.5814C14.2071 14.7541 13.7033 14.9412 13.1708 15.042C12.6814 15.1427 12.5374 15.4162 12.4654 15.8768C12.3359 16.6973 12.1632 17.5322 11.9472 18.3383C11.1268 21.2891 9.83129 24.0384 8.3055 26.6869C8.19035 26.9028 8.13277 27.3347 8.24793 27.4642C9.48583 28.7885 11.0116 29.7385 12.6814 30.5302C13.0268 29.9544 13.3435 29.4362 13.6746 28.8892ZM7.48503 10.2487C5.64257 11.1267 4.73573 13.2427 5.36908 15.1571C5.64257 15.992 6.08879 16.7693 6.43425 17.5898C7.29791 19.5762 7.25472 21.4474 5.70015 23.1172C5.59939 23.2323 5.49863 23.477 5.5562 23.5922C5.84409 24.2399 6.17516 24.8589 6.49183 25.5066C6.60698 25.449 6.69335 25.4346 6.73653 25.3914C8.40626 23.6066 9.14037 21.4762 8.76612 19.0724C8.57899 17.8633 8.03201 16.7117 7.68655 15.517C7.38427 14.495 7.18275 13.4586 7.98883 12.5374C8.04641 12.4654 8.08959 12.3071 8.0608 12.2207C7.88807 11.573 7.68655 10.9396 7.48503 10.2487ZM15.5458 16.0208C14.3511 19.5762 13.1708 23.0884 11.9904 26.6437C12.4223 26.8884 12.8685 27.1475 13.3435 27.421C13.5882 26.9028 13.8041 26.4998 13.948 26.068C14.8693 23.4338 15.8049 20.7853 16.683 18.1367C17.1868 16.611 17.1292 16.5822 15.589 16.0208C15.5746 16.0064 15.5458 16.0208 15.5458 16.0208ZM23.3763 9.57217C23.3907 7.81607 21.9512 6.33347 20.2095 6.30468C18.3527 6.27589 16.8701 7.71531 16.8557 9.51459C16.8557 11.3427 18.2519 12.7533 20.08 12.7677C21.9081 12.7677 23.3619 11.3571 23.3763 9.57217ZM12.0912 8.43503C11.9472 8.23351 11.4722 8.10396 11.2275 8.19032C10.9253 8.29108 10.5078 8.65094 10.5078 8.89564C10.551 10.1335 10.7237 11.3571 10.8533 12.6669C12.2063 11.9904 12.9117 9.52899 12.0912 8.43503Z" />
            </svg>
            <svg width="30" viewBox="0 0 36 30">
              <path d="M11.3184 29.2608C24.8976 29.2608 32.328 18 32.328 8.2512C32.328 7.9344 32.328 7.6176 32.3136 7.3008C33.7536 6.264 35.0064 4.9536 36 3.4704C34.6752 4.0608 33.2496 4.4496 31.752 4.6368C33.2784 3.7296 34.4448 2.2752 35.0064 0.5472C33.5808 1.3968 31.9968 2.0016 30.312 2.3328C28.9728 0.8928 27.0432 0 24.9264 0C20.8512 0 17.5392 3.312 17.5392 7.3872C17.5392 7.9632 17.6112 8.5248 17.7264 9.072C11.592 8.7552 6.1488 5.8176 2.5056 1.3536C1.872 2.448 1.512 3.7152 1.512 5.0688C1.512 7.632 2.8224 9.8928 4.7952 11.2176C3.5856 11.1744 2.448 10.8432 1.44 10.296C1.44 10.3248 1.44 10.3536 1.44 10.3968C1.44 13.968 3.9888 16.9632 7.3584 17.64C6.7392 17.8128 6.0912 17.8992 5.4144 17.8992C4.9392 17.8992 4.4784 17.856 4.032 17.7696C4.968 20.7072 7.704 22.8384 10.9296 22.896C8.3952 24.8832 5.2128 26.064 1.7568 26.064C1.1664 26.064 0.576 26.0352 0 25.9632C3.2688 28.0368 7.1568 29.2608 11.3184 29.2608Z" />
            </svg>
            <svg width="30" viewBox="0 0 36 36">
              <path d="M19.1776 16.2457L19.2256 16.1976L19.1776 16.2457ZM35.7597 2.59546V33.4045C35.7597 34.8465 34.5581 36 33.1162 36H2.64353C1.2016 36 0 34.8465 0 33.4045V2.59546C0 1.15354 1.2016 0 2.64353 0H33.1162C34.5581 0 35.7597 1.15354 35.7597 2.59546ZM10.8144 13.8905H5.43124V30.1362H10.8144V13.8905ZM11.1989 8.84379C11.1509 7.25768 10.0454 6.05608 8.1709 6.05608C6.34446 6.05608 5.09479 7.25768 5.09479 8.84379C5.09479 10.3818 6.24833 11.6315 8.07477 11.6315H8.12283C9.99733 11.6315 11.1989 10.3818 11.1989 8.84379ZM30.2804 20.8117C30.2804 15.8131 27.6369 13.506 24.0801 13.506C21.1963 13.506 19.9466 15.0921 19.2256 16.1976V13.8905H13.8425C13.8905 15.4286 13.8425 30.1362 13.8425 30.1362H19.2256V21.0521C19.2256 20.5714 19.2737 20.0908 19.4179 19.7543C19.8024 18.7931 20.7156 17.7837 22.2056 17.7837C24.1762 17.7837 24.9453 19.2737 24.9453 21.4366V30.1362H30.2804V20.8117Z" />
            </svg>
            <svg width="14" viewBox="0 0 17 36">
              <path d="M3.70765 26.9474C3.70765 24.1318 3.69174 21.3161 3.72356 18.5005C3.72356 18.0233 3.5963 17.8801 3.11907 17.896C2.24415 17.9278 1.36924 17.896 0.478414 17.9119C0.128448 17.9278 -0.0147204 17.8165 0.00118717 17.4506C0.0170947 15.7008 0.0170947 13.935 0.00118717 12.1852C0.00118717 11.8511 0.0966326 11.7398 0.446599 11.7398C1.33742 11.7557 2.24415 11.708 3.13498 11.7557C3.65993 11.7875 3.75537 11.5966 3.75537 11.1194C3.72356 9.78316 3.72356 8.44692 3.75537 7.11069C3.78719 5.47221 4.2326 3.94508 5.20296 2.62475C6.41194 0.922639 8.16177 0.159076 10.182 0.0636303C12.25 -0.0318151 14.3339 0.0159076 16.4178 0C16.7041 0 16.7996 0.0954455 16.7996 0.381782C16.7837 2.16343 16.7837 3.92917 16.7996 5.71082C16.7996 6.02897 16.7041 6.12442 16.386 6.12442C15.3838 6.10851 14.3816 6.12442 13.3954 6.12442C12.0591 6.12442 11.2637 6.80844 11.1842 8.12877C11.1206 9.17867 11.1683 10.2445 11.1365 11.3103C11.1206 11.6921 11.3592 11.6603 11.5978 11.6603C13.109 11.6603 14.6362 11.6762 16.1474 11.6443C16.5928 11.6443 16.736 11.7398 16.6882 12.2011C16.4973 13.9668 16.3383 15.7326 16.1792 17.5142C16.1474 17.9119 15.9565 17.9915 15.6065 17.9915C14.4134 17.9756 13.2045 17.9756 12.0114 17.9915C11.1524 17.9915 11.2319 17.8642 11.2319 18.7391C11.2319 24.2591 11.216 29.7631 11.2478 35.283C11.2478 35.8716 11.1047 36.0147 10.532 35.9988C8.47992 35.967 6.41194 35.967 4.35986 35.9988C3.78719 36.0147 3.69174 35.8079 3.69174 35.2989C3.70765 32.4992 3.70765 29.7153 3.70765 26.9474Z" />
            </svg>
            <svg width="30" viewBox="0 0 37 36">
              <path d="M18.0006 3.27713C22.7953 3.27713 23.3693 3.27713 25.2644 3.38298C26.4045 3.39256 27.5342 3.60199 28.602 4.00175C29.3748 4.30196 30.0767 4.75977 30.663 5.34605C31.2493 5.93233 31.7071 6.63424 32.0073 7.4071C32.4069 8.47498 32.6166 9.60456 32.6267 10.7447C32.7168 12.6397 32.7319 13.2138 32.7319 18.0085C32.7319 22.8032 32.7319 23.3772 32.6267 25.2722C32.6167 26.4124 32.4071 27.542 32.0073 28.6098C31.7072 29.3828 31.2495 30.0849 30.6632 30.6713C30.0769 31.2577 29.3749 31.7155 28.602 32.0158C27.5341 32.4153 26.4045 32.6247 25.2644 32.6346C23.3693 32.7253 22.8032 32.7404 18.0006 32.7404C13.198 32.7404 12.6325 32.7404 10.7369 32.6346C9.59693 32.6246 8.46755 32.4152 7.39985 32.0158C6.63317 31.7103 5.9381 31.2494 5.35845 30.6619C4.7788 30.0744 4.32716 29.3733 4.03199 28.6026C3.63223 27.5348 3.4228 26.4051 3.41322 25.265C3.32249 23.3699 3.30737 22.7959 3.30737 18.0012C3.30737 13.2065 3.30737 12.6331 3.41322 10.7375C3.42286 9.59751 3.63229 8.46807 4.03199 7.40045C4.33233 6.6381 4.78632 5.9457 5.36571 5.36631C5.9451 4.78692 6.6375 4.33294 7.39985 4.0326C8.46747 3.63289 9.5969 3.42347 10.7369 3.41382C12.6325 3.3231 13.2059 3.30797 18.0006 3.30797V3.27713ZM18.0006 0.0683491C13.123 0.0683491 12.5115 0.0683491 10.5935 0.174199C9.10214 0.205012 7.62678 0.488263 6.23005 1.01193C5.02607 1.47041 3.93266 2.17832 3.02158 3.08919C2.11049 4.00007 1.40234 5.09331 0.94358 6.29719C0.419825 7.69432 0.136574 9.17009 0.10585 10.6618C0.0223798 12.5811 0 13.1908 0 18.069C0 22.9471 0 23.5581 0.10585 25.4761C0.166532 26.9482 0.473199 28.3997 1.01314 29.7706C1.47156 30.9744 2.17946 32.0677 3.09035 32.9786C4.00125 33.8895 5.09453 34.5974 6.2984 35.0558C7.69542 35.58 9.17124 35.8635 10.6631 35.8941C12.5805 35.977 13.1926 36 18.0702 36C22.9477 36 23.5593 36 25.4773 35.8941C26.9689 35.8635 28.4445 35.58 29.8413 35.0558C31.0453 34.5975 32.1387 33.8896 33.0497 32.9787C33.9607 32.0678 34.6687 30.9745 35.1272 29.7706C35.6509 28.3736 35.9341 26.8981 35.9649 25.4065C36.0484 23.4885 36.0708 22.877 36.0708 17.9988C36.0708 13.1206 36.0708 12.5097 35.9649 10.5917C35.9335 9.10087 35.6499 7.62614 35.126 6.23005C34.6674 5.02605 33.9593 3.93264 33.0484 3.02156C32.1374 2.11048 31.0441 1.40233 29.8401 0.94358C28.4432 0.419836 26.9676 0.136583 25.4761 0.10585C23.5581 0.0223798 22.9465 0 18.069 0L18.0006 0.0683491ZM18.0006 8.77469C16.1756 8.77469 14.3916 9.31588 12.8742 10.3298C11.3567 11.3438 10.1741 12.7849 9.47574 14.471C8.77739 16.1571 8.59474 18.0125 8.95086 19.8024C9.30699 21.5923 10.1859 23.2364 11.4765 24.5268C12.767 25.8172 14.4113 26.6959 16.2012 27.0518C17.9912 27.4077 19.8465 27.2248 21.5325 26.5262C23.2185 25.8277 24.6595 24.6448 25.6733 23.1273C26.687 21.6097 27.228 19.8256 27.2277 18.0006C27.2276 15.5535 26.2554 13.2067 24.525 11.4764C22.7945 9.74614 20.4477 8.77409 18.0006 8.77409V8.77469ZM18.0006 23.9893C16.8163 23.9893 15.6585 23.6381 14.6738 22.9801C13.6891 22.3222 12.9215 21.3869 12.4683 20.2928C12.0151 19.1986 11.8965 17.9946 12.1276 16.833C12.3586 15.6714 12.9289 14.6044 13.7664 13.767C14.6038 12.9295 15.6708 12.3592 16.8324 12.1282C17.994 11.8971 19.198 12.0157 20.2922 12.4689C21.3863 12.9221 22.3216 13.6897 22.9795 14.6744C23.6375 15.6591 23.9887 16.8169 23.9887 18.0012C23.9887 18.7876 23.8338 19.5662 23.5329 20.2928C23.232 21.0193 22.7909 21.6794 22.2348 22.2354C21.6788 22.7915 21.0187 23.2326 20.2922 23.5335C19.5656 23.8344 18.787 23.9893 18.0006 23.9893ZM25.4307 8.41177C25.4307 8.839 25.5574 9.25663 25.7948 9.61184C26.0321 9.96706 26.3695 10.2439 26.7642 10.4074C27.1589 10.5708 27.5932 10.6136 28.0123 10.5302C28.4313 10.4468 28.8161 10.241 29.1182 9.93888C29.4202 9.63674 29.6259 9.25182 29.7092 8.83279C29.7924 8.41376 29.7496 7.97945 29.586 7.58478C29.4224 7.19011 29.1455 6.85281 28.7902 6.61555C28.4349 6.37828 28.0173 6.2517 27.59 6.25182C27.0173 6.25198 26.4681 6.47962 26.0631 6.88467C25.6582 7.28972 25.4307 7.83903 25.4307 8.41177Z" />
            </svg>
          </div>
          <div className={styles.contact}>
            <a href="mailto:steph@sparkthecannon.com">steph@sparkthecannon.com</a>
            <a href="tel:+447547795849">+44 7547 795849</a>
          </div>
        </Wrap>
      </Container>
    </footer>
  )
}
