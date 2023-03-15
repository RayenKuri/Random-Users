import { ref } from "vue";
import type Users from "@/types/users";

const users = ref<Users[]>([]);

export function useFetchApi() {
  async function getUsers(url: string) {
    try {
      const response = await fetch(url, {
        method: "GET",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
        redirect: "follow",
        referrerPolicy: "no-referrer",
      });

      const data = await response.json();
      users.value = data.results;
        
    } catch (error) {
      console.log(error);
    }
  }

  return { getUsers, users};
}
