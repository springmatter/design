<template>
  <SmTextLayout>
    <div class="figs">
      <figure>
        <figcaption>
          <h5>no. 38</h5>
          <h3>Driving With Pets</h3>
          <h4>A figure with a title, subtitle, and sidetitle</h4>
        </figcaption>
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
      </figure>
      <figure>
        I'm a figure with just text. Before you operate your vehicle, carefully
        read this manual. To protect yourself and extend the service life of
        your vehicle, follow the instructions in this manual. Failure to observe
        these instructions may result in se- rious injury and damage to your
        vehicle.
      </figure>
      <figure>
        <figcaption>
          <h5>no. 42</h5>
          <h3>Seatbelt Safety</h3>
          <h4>A figure with titles and image</h4>
        </figcaption>
        <img class="img" :src="fig1" />
      </figure>
      <figure>
        <img class="img" :src="fig2" />
      </figure>
      <a href="">
        <figure>
          <figcaption>
            <h5>no. 38</h5>
            <h3>I'm a Linked Figure</h3>
            <h4>A figure with a title, subtitle, and sidetitle</h4>
          </figcaption>
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
        </figure>
      </a>
    </div>
  </SmTextLayout>
</template>

<script>
import fig1 from "../assets/fig1.png";
import fig2 from "../assets/fig2.png";

export default {
  data: function() {
    return {
      fig1: fig1,
      fig2: fig2
    };
  }
};
</script>

<style scoped>
.figs {
  width: 80%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
}

.figs figure {
  margin: var(--sp4) 0;
  width: 500px;
}

.img {
  width: 100%;
}
</style>
