import Image from 'next/image';
const Footer = () => {
  return (
<footer class="bg-gray-800 py-7 px-8 font-sans tracking-wide">
      <div class="flex max-lg:flex-col items-center justify-between gap-6">
        <p class='text-base text-gray-300  max-lg:order-1'>Copyright © 2023<a href='https://readymadeui.com/' target='_blank'
          class="hover:underline mx-1"></a>All Rights Reserved.</p>
        <ul class="flex gap-x-6 gap-y-2 flex-wrap">
          <li><a href="javascript:void(0)" class="text-gray-300 hover:text-white text-base">X</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
