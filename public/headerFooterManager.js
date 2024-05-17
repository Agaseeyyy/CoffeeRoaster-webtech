class SpecialHeader extends HTMLElement{
    connectedCallback(){
        this.innerHTML =`
        <header class="sticky top-0 z-50 h-24 bg-white grid content-center 2xl:h-20 xl:h-16 lg:h-14">
            <div class="container pl-2 pr-2 max-w-xxl 2xl:max-w-xl xl:max-w-lg lg:max-w-md md:max-w-sm sm:max-w-xs xs:w-full">
                <nav class="w-full grid grid-flow-col place-items-center">
                    <a class="z-30 justify-self-start" href="index.html#" id="logo">
                        <img src="/img/logo.png" alt="CoffeeRoaster" class="h-10 2xl:h-8 xl:h-7">
                    </a>

                    <button id="mobileMenuBtn" class="hidden md:block justify-self-end">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-5 h-5 hover:text-soft-blue">
                            <path fill-rule="evenodd" d="M2 3.75A.75.75 0 0 1 2.75 3h10.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 3.75ZM2 8a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 8Zm0 4.25a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd" />
                        </svg>
                    </button>
                    <ul class="mobileMenu flex flex-row gap-20 font text-xl 2xl:text-base xl:gap-10 xl:text-base lg:text-base  md:flex-col md:absolute md:bg-white md:w-full md:mt-64 items-center md:gap-6 md:pt-5 md:hidden">
                        <li><a href="index.html#home" class="hover:font-bold hover:text-rose-700 transition duration-200 ">Home</a></li>
                        <li><a href="index.html#about" class="hover:font-bold hover:text-rose-700 transition duration-200">About us</a></li>
                        <li><a href="index.html#testimonial" class="hover:font-bold hover:text-rose-700 transition duration-200">Testimonial</a></li>
                        <li><a href="index.html#blog" class="hover:font-bold hover:text-rose-700 transition duration-200">Stories</a></li>
                        <li><a href="contact.html" class="hover:font-bold hover:text-rose-700 transition duration-200">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
        `
    }
}


class SpecialFooter extends HTMLElement{
    connectedCallback(){
        this.innerHTML =`
        <footer class="py-10 bg-ld text-white grid content-center">
            <div class="container pl-2 pr-2 max-w-xxl 2xl:max-w-xl xl:max-w-lg lg:max-w-md md:max-w-sm sm:max-w-xs xs:w-full">
                
                <div class="grid grid-cols-5 grid-rows-2 2xl:text-sm">
                    <div class="grid-flow-row col-span-2 row-span-2 lg:row-span-1 sm:col-span-3">
                        <div class="flex flex-row gap-6 xl:gap-4">
                            <a href="#">
                                <img class="size-14 hover:bg-slate-600 transition duration-200 2xl:size-12 xl:size-9" src="/img/logo-footer.svg" alt="CoffeeRoaster">
                            </a>
                            <a href="#">
                                <h1 class="text-5xl font-semibold hover:text-slate-300 transition duration-200 2xl:text-4xl xl:text-3xl md:text-2xl">Coffee Roaster</h1>
                            </a>
                        </div>

                        <div class="w-96 font-light text-xl pt-7 2xl:text-base xl:text-sm sm:w-64">
                            <p>Discover tranquility at Coffee Roaster a sanctuary for unwinding, where your evenings are perfected with relaxation and rich flavors.</p><br>
                            <a href="mailto:agbustarga@my.cspc.edu.ph" class="hover:underline">agbustarga@my.cspc.edu.ph</a>
                            <p class="hover:underline">Phone: +63 9973869435</p>
                        </div>
                    </div>

                    <nav class="lg:col-start-4 sm:col-span-3 sm:col-start-4 sm:justify-self-center">
                        <h1 class="font-playfairDisplay text-3xl font-normal pb-3 2xl:text-2xl xl:text-xl">Quick Links</h1>
                        <ul>
                            <li class="font-light hover:underline py-2"><a href="index.html#about">About us</a></li>
                            <li class="font-light hover:underline py-2"><a href="index.html#testimonial">Testimonial</a></li>
                            <li class="font-light hover:underline py-2"><a href="https://bit.ly/w3program" target="_blank">W3Program</a></li>
                        </ul>
                    </nav>

                    <nav class="md:self-center md:col-span-2 sm:col-start-4 sm:justify-self-center">
                        <h1 class="font-playfairDisplay text-3xl font-normal pb-3 2xl:text-2xl xl:text-xl">Resources</h1>
                        <ul>
                            <li class="font-light hover:underline py-2"><a href="contact.html">Contact us</a></li>
                            <li class="font-light hover:underline py-2"><a href="privacy.html">Privacy Policy</a></li>
                            <li class="font-light hover:underline py-2"><a href="terms.html">Terms & Conditions</a></li>
                        </ul>
                    </nav>

                    <div class="lg:col-span-2 lg:self-center md:self-center md:col-start-4 md:mb-16 sm:col-start-1 sm:row-start-2">
                        <h1 class="font-playfairDisplay text-3xl font-normal 2xl:text-2xl xl:text-xl">Social Media</h1>
                        <div class="flex flex-row pt-5 gap-3">
                            <a href="https://www.facebook.com/Agaseeyyy" target="_blank"><img class="2xl:size-10 md:size-9 hover:bg-slate-600 transition duration-200" src="/img/Facebook.svg" alt="Facebook"></a>
                            <a href="https://twitter.com" target="_blank"><img class="2xl:size-10 md:size-9 hover:bg-slate-600 transition duration-200" src="/img/Twitter.svg" alt="Facebook"></a>
                        <a href="https://instagram.com/_agaseeyyy" target="_blank"><img class="2xl:size-10 md:size-9  hover:bg-slate-600 transition duration-200" src="/img/Instagram.svg" alt="Facebook"></a>
                            <a href="https://linkedin.com" target="_blank"><img class="2xl:size-10 md:size-9 hover:bg-slate-600 transition duration-200" src="/img/Linkedin.svg" alt="Facebook"></a>
                            <a href="https://www.youtube.com" target="_blank"><img class="2xl:size-10 md:size-9 hover:bg-slate-600 transition duration-200" src="/img/Youtube.svg" alt="Facebook"></a>
                        </div>
                    </div>

                    <form class="self-center lg:col-start-3 md:col-start-2 sm:col-span-5 sm:justify-self-center">
                        <h1 class="pb-5 font-playfairDisplay text-3xl font-normal 2xl:text-2xl xl:text-xl">Subscribe</h1>
                        <div class="relative w-max flex items-center">
                        <input class="bg-white bg-opacity-10 w-[800px] h-14 rounded-xl px-5 focus:outline-none 2xl:w-[700px] xl:h-12 xl:w-[600px] lg:w-[450px] md:w-96 md:h-11 sm:w-96 xs:max-w-96" type="email" name="subscribe" id="subscribe" placeholder="name@domain.com">
                        <button class="bg-customred absolute right-2 h-3/4 px-10 rounded-xl font-poppins">Send</button>
                        </div>
                    </form>

                </div>
            </div>
        </footer>
        `
    }
}

customElements.define('special-header', SpecialHeader);
customElements.define('special-footer', SpecialFooter);