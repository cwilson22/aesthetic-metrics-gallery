<script>
    import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
    import logo from '$lib/assets/nodesize.svg';
</script>

<Navbar class="w-full m-2">
<NavBrand href="/">
    <img src={logo} class="me-3 h-6 sm:h-9" alt="Logo" />
    <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Gallery of Optimal Layered Graph Aesthetics</span>
</NavBrand>
<NavHamburger />
<NavUl>
    <NavLi href="/">Gallery</NavLi>
    <NavLi href="/about">About</NavLi>
</NavUl>
</Navbar>