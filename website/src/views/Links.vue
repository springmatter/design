
<template>
  <div>
    <main v-if="notes" class="p79">
      <CNotes />
    </main>
    <template v-if="!notes">
      <main>
        <div class="flex-center flex-col h100">
          <div class="flex-center">
            <a href="https://www.youtube.com/watch?v=GuJQSAiODqI" target="blank">
              I'm a link to somewhere else
            </a>
            <a href="https://springmatter.com" target="blank" class="black">
              I'm a black link
            </a>
          </div>
          <br />
          <a href="" class="fig">
            <figure>
              <figcaption>
                <h5>no. 38</h5>
                <h3>I'm a Linked Figure</h3>
                <h4>Driving With Pets</h4>
              </figcaption>
              Unrestrained pets can interfere with your driving and distract your attention from driving. In a collision or sudden stop, unrestrained pets or cages can be thrown around inside the vehicle and hurt you or your passengers. Besides, the pets can be hurt under these situations. It is also for their own safety that pets should be properly restrained in your vehicle. Restrain a pet with a special traveling harness which can be se- cured to the rear seat with a seatbelt or use a pet car- rier which can be secured to the rear seat by routing a seatbelt through the carrier’s handle. Never restrain pets or pet carriers in the front passenger’s seat. For further information, consult your veterinarian, local an- imal protection society or pet shop.
            </figure>
          </a>
        </div>
      </main>
    </template>
  </div>
</template>

<script>
import CNotes from "@/notes/a.md";

export default {
  components: {
    CNotes
  },
  computed: {
    notes: function() {
      return this.$route.fullPath.endsWith("notes");
    }
  }
};
</script>

<style scoped>
.fig {
  width: calc(var(--sp9) * 5);
}
</style>
