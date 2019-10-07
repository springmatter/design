<template>
  <SmTextLayout>
      <ComponentSpec compName="SmCard" />
      <SmButton kind="primary" @click="modal = true">Open modal card</SmButton>
      <SmCard v-if="modal" class="w-1/3" @close="modal = false" modal>
        <h5>I am a modal testing testing testingtesting t</h5>
        Close me if you dare
      </SmCard>
      <SmCard>
        <template #title>Driving With Pets</template>
        <template #sidetitle>no. 38</template>
        <template #subtitle>An SmCard with a title, subtitle, and sidetitle</template>
        Unrestrained pets can interfere with your driving and distract your
        attention from driving. In a collision or sudden stop, unrestrained pets
        or cages can be thrown around inside the vehicle and hurt you or your
        passengers. Besides, the pets can be hurt under these situations. It is
        also for their own safety that pets should be properly restrained in
        your vehicle. Restrain a pet with a special traveling harness which can
        be se- cured to the rear seat with a seatbelt or use a pet car- rier
        which can be secured to the rear seat by routing a seatbelt through the
        carrier’s handle. Never restrain pets or pet carriers in the front
        passenger’s seat. For further information, consult your veterinarian,
        local an- imal protection society or pet shop.
      </SmCard>
      <SmCard class="w-10">
        I'm a SmCard with just text. Before you operate your vehicle, carefully
        read this manual. To protect yourself and extend the service life of
        your vehicle, follow the instructions in this manual. Failure to observe
        these instructions may result in se- rious injury and damage to your
        vehicle.
      </SmCard>
      <SmCard>
          <template #sidetitle>no. 42</template>
          <template #title>Seatbelt Safety</template>
          <template #subtitle>A SmCard with titles and image</template>
        <img class="img" :src="fig1" />
      </SmCard>
      <SmCard>
        <img class="img" :src="fig2" />
      </SmCard>
      <a href="">
        <SmCard>
            <template #sidetitle>no. 38</template>
            <template #title>I'm a Linked Figure</template>
            <template #subtitle>A SmCard with a title, subtitle, and sidetitle</template>
          Unrestrained pets can interfere with your driving and distract your
          attention from driving. In a collision or sudden stop, unrestrained
          pets or cages can be thrown around inside the vehicle and hurt you or
          your passengers. Besides, the pets can be hurt under these situations.
          It is also for their own safety that pets should be properly
          restrained in your vehicle. Restrain a pet with a special traveling
          harness which can be se- cured to the rear seat with a seatbelt or use
          a pet car- rier which can be secured to the rear seat by routing a
          seatbelt through the carrier’s handle. Never restrain pets or pet
          carriers in the front passenger’s seat. For further information,
          consult your veterinarian, local an- imal protection society or pet
          shop.
        </SmCard>
      </a>
  </SmTextLayout>
</template>

<script>
import fig1 from "../assets/fig1.png";
import fig2 from "../assets/fig2.png";

export default {
  data: function() {
    return {
      fig1: fig1,
      fig2: fig2,
      modal: false
    };
  }
};
</script>

<style scoped>
</style>
