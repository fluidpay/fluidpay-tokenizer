<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({})
</script>

<style lang="scss">
  .header {
    display: flex;
    flex-direction: column;
    width: 100%;

    .title {
      font-size: 42px;
      font-weight: bold;
      color: var(--color-white);
      text-align: center;
      padding: var(--spacing-half) 0 var(--spacing-quarter) 0;
    }

    .menu {
      display: flex;
      flex-direction: column;
      padding: var(--spacing) var(--spacing) 0 var(--spacing);

      .row{
        display: flex;
        flex-direction: row;
        justify-content: center;

        a {
          color: var(--color-white);
          font-size: 16px;
          font-weight: bold;
          margin: 0 var(--spacing-half) var(--spacing-half) var(--spacing-half);
        }
      }
    }
  }
</style>

<template>
  <div class="header">
    <div class="title">
      FluidPay Tokenizer Form
    </div>
    <div class="menu">
      <div class="row">
        <router-link to="/home">
          Home
        </router-link>
        <router-link to="/methods">
          Methods
        </router-link>
        <router-link to="/styles">
          Styles
        </router-link>
        <router-link to="/sections">
          Sections
        </router-link>
      </div>
      <div class="row">
        <router-link to="/payments">
          Payments
        </router-link>
        <router-link to="/stripe">
          Stripe
        </router-link>
        <router-link to="/calculatefees">
          Calculate Fees
        </router-link>
        <router-link to="/threeds">
          3D-Secure
        </router-link>
        <router-link to="/apple-pay">
          Apple Pay
        </router-link>
      </div>
    </div>
  </div>
</template>
