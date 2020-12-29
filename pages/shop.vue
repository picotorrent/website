<template>
  <section>
    <div class="container">
      <h2 class="text-center">
        PicoTorrent merchandise
      </h2>
      <p class="lead">
        If you want to support PicoTorrent and also get cool swag, this is the place.
        All proceeds from the shop will go towards funding PicoTorrent development.
      </p>
      <div class="card">
        <img src="/images/stickers.jpg">
        <div class="content">
          <h3>Stickers (5x)</h3>
          <h5>Free worldwide shipping</h5>
          <p class="lead">
            A pack of five (5) cool blue PicoTorrent stickers. Use it on your laptop, car
            or whatever hardware you want to double the value of!
          </p>
          <p>
            <b>Sticker size:</b> <em>8cm across.</em>
          </p>
          <div class="row">
            <div class="col">
              <button class="btn" :disabled="decreaseDisabled" @click="decrease">
                <svg viewBox="0 0 448 512">
                  <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                </svg>
              </button>
            </div>
            <div class="col">
              <input v-model="stickersCount" type="number" min="1" max="10" class="text-center">
            </div>
            <div class="col">
              <button class="btn" :disabled="increaseDisabled" @click="increase">
                <svg viewBox="0 0 448 512">
                  <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                </svg>
              </button>
            </div>
          </div>
          <button v-show="stripeLoaded" class="btn btn-buy" :disabled="!checkoutEnabled" @click="checkout">
            Buy for €{{ totalPrice }}
          </button>
        </div>
      </div>
      <p>
        <small class="text-muted">
          All payments are processed by <a href="https://stripe.com" target="_blank">Stripe</a>.
          Prices in EUR. Free shipping by letter (air mail/par avion).
          <br>
          A receipt of your purchase will be sent to your e-mail when the order has been confirmed.
        </small>
      </p>
    </div>
    <!-- Modal -->
    <div ref="success-modal" class="modal">
      <h3>We ❤️ you!</h3>
      <p>
        Thank you for your purchase! We will dispatch trained monkeys to pack and ship
        your order as soon as possible.
      </p>

      <p>
        An email receipt will be sent to you as soon as the order is confirmed.
      </p>
      <button class="btn" to="/">
        Go back to PicoTorrent.org
      </button>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      stripeCheckoutLoading: false,
      stripeLoaded: false,
      stickersPrice: 10,
      stickersCount: 1
    };
  },
  computed: {
    checkoutEnabled () {
      if (this.stripeCheckoutLoading) {
        return false;
      }
      return this.stickersCount >= 1 && this.stickersCount <= 10;
    },
    decreaseDisabled () {
      return this.stickersCount <= 1;
    },
    increaseDisabled () {
      return this.stickersCount >= 10;
    },
    totalPrice () {
      return this.stickersPrice * this.stickersCount;
    }
  },
  mounted () {
    if ('success' in this.$route.query) {
      this.$refs['success-modal'].show();
    }
  },
  methods: {
    async checkout () {
      this.stripeCheckoutLoading = true;

      const cancelUrl = `${location.protocol}//${location.host}${location.pathname}?cancel`;
      const successUrl = `${location.protocol}//${location.host}${location.pathname}?success`;

      // eslint-disable-next-line no-undef
      const stripe = Stripe(this.$config.stripePublishableKey);
      const result = await stripe.redirectToCheckout({
        lineItems: [{
          price: this.$config.stripePriceId,
          quantity: Number(this.stickersCount)
        }],
        mode: 'payment',
        successUrl,
        cancelUrl,
        shippingAddressCollection: {
          allowedCountries: [
            'AC', 'AD', 'AE', 'AF', 'AG', 'AI', 'AL', 'AM', 'AO', 'AQ', 'AR', 'AT', 'AU', 'AW', 'AX', 'AZ', 'BA', 'BB', 'BD', 'BE', 'BF', 'BG', 'BH', 'BI', 'BJ', 'BL', 'BM', 'BN', 'BO', 'BQ', 'BR', 'BS', 'BT', 'BV', 'BW', 'BY', 'BZ', 'CA', 'CD', 'CF', 'CG', 'CH', 'CI', 'CK', 'CL', 'CM', 'CN', 'CO', 'CR', 'CV', 'CW', 'CY', 'CZ', 'DE', 'DJ', 'DK', 'DM', 'DO', 'DZ', 'EC', 'EE', 'EG', 'EH', 'ER', 'ES', 'ET', 'FI', 'FJ', 'FK', 'FO', 'FR', 'GA', 'GB', 'GD', 'GE', 'GF', 'GG', 'GH', 'GI', 'GL', 'GM', 'GN', 'GP', 'GQ', 'GR', 'GS', 'GT', 'GU', 'GW', 'GY', 'HK', 'HN', 'HR', 'HT', 'HU', 'ID', 'IE', 'IL', 'IM', 'IN', 'IO', 'IQ', 'IS', 'IT', 'JE', 'JM', 'JO', 'JP', 'KE', 'KG', 'KH', 'KI', 'KM', 'KN', 'KR', 'KW', 'KY', 'KZ', 'LA', 'LB', 'LC', 'LI', 'LK', 'LR', 'LS', 'LT', 'LU', 'LV', 'LY', 'MA', 'MC', 'MD', 'ME', 'MF', 'MG', 'MK', 'ML', 'MM', 'MN', 'MO', 'MQ', 'MR', 'MS', 'MT', 'MU', 'MV', 'MW', 'MX', 'MY', 'MZ', 'NA', 'NC', 'NE', 'NG', 'NI', 'NL', 'NO', 'NP', 'NR', 'NU', 'NZ', 'OM', 'PA', 'PE', 'PF', 'PG', 'PH', 'PK', 'PL', 'PM', 'PN', 'PR', 'PS', 'PT', 'PY', 'QA', 'RE', 'RO', 'RS', 'RU', 'RW', 'SA', 'SB', 'SC', 'SE', 'SG', 'SH', 'SI', 'SJ', 'SK', 'SL', 'SM', 'SN', 'SO', 'SR', 'SS', 'ST', 'SV', 'SX', 'SZ', 'TA', 'TC', 'TD', 'TF', 'TG', 'TH', 'TJ', 'TK', 'TL', 'TM', 'TN', 'TO', 'TR', 'TT', 'TV', 'TW', 'TZ', 'UA', 'UG', 'US', 'UY', 'UZ', 'VA', 'VC', 'VE', 'VG', 'VN', 'VU', 'WF', 'WS', 'XK', 'YE', 'YT', 'ZA', 'ZM', 'ZW', 'ZZ'
          ]
        }
      });

      if (result.error) {
        throw new Error(result.error);
      }
    },
    decrease () {
      this.stickersCount--;
      if (this.stickersCount < 1) { this.stickersCount = 1; }
    },
    increase () {
      this.stickersCount++;
      if (this.stickersCount > 10) { this.stickersCount = 10; }
    }
  },
  head () {
    return {
      bodyAttrs: {
        class: 'page-shop'
      },
      script: [
        {
          hid: 'stripe',
          src: 'https://js.stripe.com/v3/',
          defer: true,
          callback: () => { this.stripeLoaded = true; }
        }
      ]
    };
  }
};
</script>
