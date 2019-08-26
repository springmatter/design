<template>
  <SmTextLayout>
    <button @click="toggleModal">Open Modal</button>
    <div id="modal-overlay" :style="{ display: 'none' }">
      <figure>
        <figcaption>
          <h3>I'm a modal</h3>
        </figcaption>
        If you make a <code>div#modal-overlay</code> and put a
        <code>figure</code> inside of it, you get a modal! Nicely centered and
        positioned at the top of the layer stack. The figure is just a normal
        figure, so you can put whatever you want in it: titles with a figcaption
        tag, images, forms, buttons, or just text. Be sure to give your users a
        way to close the modal. Usually a button with
        <code>@click="closeModal"</code> works nicely.
        <br />
        <br />
        <button class="secondary" @click="toggleModal">Got it.</button>
      </figure>
    </div>
  </SmTextLayout>
</template>

<script></script>

<style scoped></style>
