<template>
  <b-container id="shop-container" class="pb-3">
    <b-row>
      <b-col class="mt-5 mb-3 text-center">
        <img id="logo" src="images/logo.png" width="128">
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <h2 class="text-center">
          PicoTorrent merchandise
        </h2>
        <p>
          If you want to support PicoTorrent and also get cool swag, this is the place.
          All proceeds from the shop will go towards funding PicoTorrent development.
        </p>
      </b-col>
    </b-row>
    <nuxt />
    <b-row>
      <b-col class="mt-3 text-center">
        <p>
          <small class="text-muted">
            All payments are processed by <a href="https://stripe.com" target="_blank">Stripe</a>.
            Prices in EUR. Free shipping by letter (air mail/par avion).
          </small>
        </p>
        <p>
          <small class="text-muted">
            A receipt of your purchase will be sent to your e-mail when the order has been confirmed.
          </small>
        </p>
      </b-col>
    </b-row>

    <b-modal ref="success-modal" hide-footer hide-header>
      <div class="d-block text-center">
        <h3>We ❤️ you!</h3>
        <p>
          Thank you for your purchase! We will dispatch trained monkeys to pack and ship
          your order as soon as possible.
        </p>

        <p>
          An email receipt will be sent to you as soon as the order is confirmed.
        </p>
      </div>
      <b-button to="/" class="mt-3" variant="outline-dark" block>
        <font-awesome-icon :icon="['fas', 'long-arrow-alt-left']" />
        Go back to PicoTorrent.org
      </b-button>
    </b-modal>
  </b-container>
</template>

<script>
export default {
  mounted () {
    if ('success' in this.$route.query) {
      this.$refs['success-modal'].show();
    }
  }
};
</script>

<style>
#shop-container {
    max-width: 480px;
}
</style>
