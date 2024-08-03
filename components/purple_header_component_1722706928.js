/* Summary: HTML file that describes the header section including:
1. Site branding with a logo on the left.
2. Desktop navigation menu with links to different pages in the middle.
3. Desktop sign-in and sign-up links on the right.
*/ 

Vue.component("purple_header_component_1722706928", {
    template: `
    <header class="w-full z-30" id="header-section-container">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 bg-gradient-to-r from-blue-900 to-purple-900 bg-opacity-90 bg-[url('images/toilet-paper-game-bg.jpg')] bg-cover bg-center">
            <div class="flex items-center justify-between h-16 md:h-20">
    
                <div id="site-branding" class="flex-1"><a id="logo-link" class="inline-flex" href="index.html" aria-label="Cruip"><img id="logo-image" class="max-w-none" src="./images/logo.svg" width="38" height="38" alt="Stellar"></a></div>
    
                <nav id="desktop-navigation" class="hidden md:flex md:grow">
    
                    <ul id="desktop-menu-links" class="flex grow justify-center flex-wrap items-center">
                        <li><a id="Home-link" class="font-medium text-sm mx-4 lg:mx-5 transition duration-150 ease-in-out text-white hover:text-purple-300" href="Home.html">Home</a></li>
                        <li><a id="Trade-link" class="font-medium text-sm mx-4 lg:mx-5 transition duration-150 ease-in-out text-white hover:text-purple-300" href="Trade.html">Trade</a></li>
                        <li><a id="Inventory-link" class="font-medium text-sm mx-4 lg:mx-5 transition duration-150 ease-in-out text-white hover:text-purple-300" href="Inventory.html">Inventory</a></li>
                        <li><a id="Market-link" class="font-medium text-sm mx-4 lg:mx-5 transition duration-150 ease-in-out text-white hover:text-purple-300" href="Market.html">Market</a></li>
                        <li><a id="Account-link" class="font-medium text-sm mx-4 lg:mx-5 transition duration-150 ease-in-out text-white hover:text-purple-300" href="Account.html">Account</a></li>
                    </ul>
    
                </nav>
    
                <ul id="desktop-sign-in-links" class="flex-1 flex justify-end items-center">
                    <li><a id="sign-in-link" class="font-medium text-sm whitespace-nowrap transition duration-150 ease-in-out text-white hover:text-purple-300" href="signin.html">Sign in</a></li>
                    <li class="ml-6"><a id="sign-up-link" class="btn-sm transition duration-150 ease-in-out w-full group relative before:absolute before:inset-0 before:bg-purple-600 before:rounded-full before:pointer-events-none text-white hover:text-purple-200 bg-gradient-to-r from-blue-500 to-purple-600" href="signup.html"><span class="relative inline-flex items-center">Sign up <span id="sign-up-arrow" class="tracking-normal group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1 text-purple-300">-&gt;</span></span></a></li>
                </ul>
    
                <div id="mobile-menu" class="md:hidden flex items-center ml-4" x-data="{ expanded: false }">
    
                    <button id="hamburger-button" class="hamburger" :class="{ 'active': expanded }" @click.stop="expanded = !expanded" aria-controls="mobile-nav" :aria-expanded="expanded">
                        <span class="sr-only">Menu</span>
                        <svg id="hamburger-icon" class="w-5 h-5 fill-current transition duration-150 ease-in-out text-white hover:text-purple-300" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <rect y="2" width="20" height="2" rx="1" />
                            <rect y="9" width="20" height="2" rx="1" />
                            <rect y="16" width="20" height="2" rx="1" />
                        </svg>
                    </button>
    
                    <nav id="mobile-nav" class="absolute top-full z-20 left-0 w-full px-4 sm:px-6 overflow-hidden transition-all duration-300 ease-in-out" x-ref="mobileNav" :style="expanded ? 'max-height: ' + $refs.mobileNav.scrollHeight + 'px; opacity: 1' : 'max-height: 0; opacity: .8'" @click.outside="expanded = false" @keydown.escape.window="expanded = false" x-cloak>
                        <ul id="mobile-nav-list" class="border border-purple-500 rounded-lg px-4 py-1.5 bg-gradient-to-r from-blue-900 to-purple-900">
                            <li><a id="mobile-Home-link" class="flex font-medium text-sm py-1.5 text-white hover:text-purple-300" href="Home.html">Home</a></li>
                            <li><a id="mobile-Trade-link" class="flex font-medium text-sm py-1.5 text-white hover:text-purple-300" href="Trade.html">Trade</a></li>
                            <li><a id="mobile-Inventory-link" class="flex font-medium text-sm py-1.5 text-white hover:text-purple-300" href="Inventory.html">Inventory</a></li>
                            <li><a id="mobile-Market-link" class="flex font-medium text-sm py-1.5 text-white hover:text-purple-300" href="Market.html">Market</a></li>
                            <li><a id="mobile-Account-link" class="flex font-medium text-sm py-1.5 text-white hover:text-purple-300" href="Account.html">Account</a></li>
                        </ul>
                    </nav>
    
                </div>
    
            </div>
        </div>
    </header>`,
        data() {
            return {
                expanded: false, 
                tab: null,
                textStylePrimary: 'text-gray-800',
                hoverTextStylePrimary: 'hover:text-purple-600',
                signUpButtonText: "text-gray-800",
                signUpButtonHover: "hover:text-purple-600",
                signUpButtonGradient: "bg-white bg-opacity-80 border-2 border-purple-500",
                signUpButtonArrow: "text-purple-500",
            };
        },
    });
                    