<template>
  <b-card img-src="images/stickers.jpg" img-top>
    <b-card-title class="text-center">
      Stickers (5x)
    </b-card-title>

    <b-card-sub-title class="text-center">
      Free worldwide shipping
    </b-card-sub-title>

    <b-card-body>
      <p>
        A pack of five (5) cool blue PicoTorrent stickers. Use it on your laptop, car
        or whatever hardware you want to double the value of!
      </p>

      <p>
        <em>8cm across.</em>
      </p>

      <b-row>
        <b-col cols="12">
          <b-input-group class="">
            <template v-slot:append>
              <b-button variant="outline-dark" :disabled="increaseDisabled" @click="increase">
                <font-awesome-icon :icon="['fas', 'plus']" />
              </b-button>
            </template>
            <template v-slot:prepend>
              <b-button variant="outline-dark" :disabled="decreaseDisabled" @click="decrease">
                <font-awesome-icon :icon="['fas', 'minus']" />
              </b-button>
            </template>
            <b-form-input v-model="stickersCount" type="number" min="1" max="10" class="text-center" />
          </b-input-group>
        </b-col>
        <b-col cols="12">
          <b-button
            v-show="stripeLoaded"
            class="pico-primary mt-3"
            block
            variant="primary"
            :disabled="!checkoutEnabled"
            @click="checkout"
          >
            Buy for €{{ totalPrice }}
          </b-button>
        </b-col>
      </b-row>
    </b-card-body>
  </b-card>
</template>

<script>
export default {
  layout: 'shop',
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

<style>
.pico-primary, .pico-primary:active {
  background-color: #35b1e1;
  border: 0;
  color: #fff;
  font-weight: 700;
}

.pico-primary:hover, .pico-primary:active, .pico-primary:focus {
  background-color: #35b1e1;
  outline: none !important;
}
</style>
