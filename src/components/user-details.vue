<script setup lang="ts">
import { usePagination } from "@/composables/use-pagination";
import useUserDetails from "@/composables/use-user-details";
import { useRoute } from "vue-router";

const { viewUserDetails, uuid, displayName} = usePagination();

const {
  isLoading,
  userDetails,
  mouseOverName,
  mouseOverAddress,
  mouseOverMail,
  mouseOverPhone,
} = useUserDetails();

const route = useRoute();

const id = route.params.uuid;
uuid.value = id.toString();

</script>

<template>
    <div class="user-holder">
      <div class="img-box">
        <img
          class="img-thumbnail rounded-circle mt-2 img-holder"
          :src="viewUserDetails.picture.large"
        />
      </div>
      <div class="info-holder">
        <h3 v-show="!isLoading">
          {{ displayName[0] }}
          <!-- TODO: Create Computed -->
        </h3>
        <h3>{{ userDetails }}</h3>
      </div>
      <div class="mt-3">
        <ul class="icon-list">
          <li class="info-list" @mouseover="mouseOverName">
            <img class="icon-holder name-icon" src="@/assets/icons/name.png" />
          </li>
          <li class="info-list" @mouseover="mouseOverMail">
            <img class="icon-holder mail-icon" src="@/assets/icons/mail.png" />
          </li>
          <li class="info-list" @mouseover="mouseOverAddress">
            <img
              class="icon-holder address-icon" src="@/assets/icons/address.png"/>
          </li>
          <li class="info-list" @mouseover="mouseOverPhone">
            <img
              class="icon-holder phone-icon" src="@/assets/icons/phone-num.png"/>
          </li>
        </ul>
      </div>
    </div>
</template>

<style>
a:hover {
  background-color: none !important;
}

.info-list {
  display: inline-block;
}

.user-holder {
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 57px;
  text-align: center;
}
.img-box {
  background-color: rgb(183, 183, 183);
  height: 11%;
}

.img-holder {
  background-color: rgb(183, 183, 183);
  filter: drop-shadow(5px 5px 2px #9d9d9d);
}

.info-holder {
  margin-top: 6%;
}

.icon-holder {
  margin-right: 20px;
  margin-left: 20px;
  margin-top: 20px;
}

.icon-holder:hover {
  background-color: rgba(119, 176, 250, 0.69) !important;
  border-radius: 5px;
  padding: 3px;
}

.name-icon {
  width: 50px;
  height: 50px;
}
.mail-icon {
  width: 50px;
  height: 50px;
}
.address-icon {
  width: 50px;
  height: 50px;
}
.phone-icon {
  width: 50px;
  height: 50px;
}
</style>
