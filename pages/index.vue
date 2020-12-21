<template>
  <div>
    <b-row>
      <b-col class="mb-3 text-center text-sm-left">
        <h2>PicoTorrent is a BitTorrent client</h2>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="12" sm="8" order="2" order-sm="1" class="pr-3 text-center text-sm-left mt-3 mt-sm-0">
        <p>PicoTorrent is designed to be a friendly BitTorrent client for Windows with high performance and low memory usage.</p>
        <h3>At a glance</h3>
        <ul>
          <li>Strong encryption with support for tunneling via I2P, SOCKS4, SOCKS5 and HTTP(S)</li>
          <li>Works with both IPv4 and IPv6</li>
          <li>Multi-lingual user interface</li>
          <li>Free, open source, with a great community</li>
        </ul>
      </b-col>
      <b-col cols="12" sm="4" order="1" order-sm="2" class="text-center text-sm-left">
        <img id="logo" src="images/logo.png" width="256" height="256">
      </b-col>
    </b-row>
    <b-row>
      <b-col class="mt-2">
        <b-button to="/download" class="d-block d-sm-inline-block pico-btn dl mr-0 mr-sm-2 mb-3 mb-sm-0">
          <font-awesome-icon :icon="['fas', 'download']" />
          Download PicoTorrent
        </b-button>

        <b-button to="/shop" class="d-block d-sm-inline-block pico-btn merch">
          <font-awesome-icon :icon="['fas', 'heart']" />
          Buy merch
        </b-button>
      </b-col>
    </b-row>
    <b-row>
      <b-col class="my-3">
        <hr class="separator">
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="12" class="text-center">
        <img src="/images/screenshot1.png" width="614" class="screenshot">
      </b-col>

      <b-col cols="12 mt-4">
        <b-row>
          <b-col cols="12" sm="6">
            <feature awesome-icon="window-maximize">
              <h5>Native look and feel</h5>
              <p>PicoTorrent is built directly on the Windows APIs and will look native on all supported Windows platforms.</p>
            </feature>
          </b-col>

          <b-col cols="12" sm="6" class="mt-3 mt-sm-0">
            <feature awesome-icon="lock">
              <h5>Privacy oriented</h5>
              <p>Setting up a proxy connection is easy. PicoTorrent supports I2P, SOCKS4, SOCKS5 and HTTP(S) proxies as well as strong encryption.</p>
            </feature>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import Feature from '@/components/Feature';

export default {
  components: { Feature }
};
</script>

<style>
#logo {
  height: auto;
  max-width: 100%;
}

.pico-btn {
  border-radius: 5px;
  font-weight: 700;
  padding: 10px 25px;
}

a.dl, a.dl:active {
  background-color: #35b1e1;
  border: 0;
  color: #fff;
  font-weight: 700;
}

a.dl:hover, a.dl:active, a.dl:focus {
  background-color: #35b1e1;
  outline: none !important;
  text-decoration: underline;
}

a.merch {
  background-color: transparent;
  border-color: #35b1e1;
  border-style: dashed;
  border-width: thin;
  color: #35b1e1;
}

a.merch:hover {
  background-color: transparent;
  text-decoration: underline;
  color: #35b1e1;
  border-color: #35b1e1;
}

hr.separator {
  border: 0;
  border-top: 1px dashed #ccc;
}

.screenshot {
  height: auto;
  max-width: 100%;
}
</style>
