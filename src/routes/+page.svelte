<script>
  import { Icon } from '@steeze-ui/svelte-icon';
  import { EnvelopeOpen, LockClosed } from '@steeze-ui/heroicons';
</script>

<div class="navbar bg-base-100">
  <div class="navbar-start">
    <a href="/" class="btn btn-ghost normal-case text-xl">AidCone</a>
  </div>
  <div class="navbar-center hidden lg:flex" />
  <div class="navbar-end">
    <a href="/?" class="btn btn-primary text-white"
      ><Icon src={LockClosed} size="1rem" /> Inloggen</a
    >
  </div>
</div>

<div class="hero py-6">
  <div class="hero-content text-center">
    <div>
      <h1 class="text-7xl font-bold">Software voor</h1>
      <h1
        class="text-7xl font-bold bg-gradient-to-r from-[#4b8bd6] to-[#093569] inline-block text-transparent bg-clip-text"
      >
        EHBO helden
      </h1>
      <div class="max-w-md">
        <p class="py-6">
          AidCone is administratie software voor EHBO verenigingen met een ingebouwd ledenportaal,
          dat is voor iedereen handig.
        </p>
      </div>
    </div>
  </div>
</div>

<div class="mockup-browser border bg-base-300">
  <div class="mockup-browser-toolbar">
    <div class="input">https://uwvereniging.aidcone.nl/</div>
  </div>
  <img src="./images/mockup-browser.png" alt="Mockup" />
</div>

<div
  class="card mt-10 p-10 bg-gradient-to-r from-primary to-[#093569] text-neutral-content flex flex-row justify-between"
>
  <div>
    <h3 class="text-3xl font-bold">Geïnteresseerd?</h3>
    <p class="mt-3">Bent u klaar om uw vereniging naar het volgende niveau te tillen?</p>
  </div>
  <div class="flex items-center">
    <a href="mailto:ruben@uijtdewilligenbv.nl" class="btn btn-[#093569]">
      <Icon src={EnvelopeOpen} size="1rem" />Contact opnemen
    </a>
  </div>
</div>

<footer class="footer pt-16 footer-center p-4 text-base-content">
  <aside>
    <p>
      Copyright © 2023-heden
      <a href="https://nispentech.nl">
        <img src="./images/nispentech-logo.svg" alt="NispenTech" height="1rem" />
      </a>
    </p>
  </aside>
</footer>
