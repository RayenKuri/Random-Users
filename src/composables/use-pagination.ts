import { useFetchApi } from "@/composables/use-fetch-api";
import { ref, computed } from "vue";

//pagination
const { users } = useFetchApi();
const totalUsers = ref(100);
const rows = ref(10);
const first = ref(0);

//search filter
const searchValue = ref("");

//gender filter
const gender = ref(["Female", "Male", "Both"]);
const selectedGender = ref("");

const isSearchBarEmpty = ref(false);

//routes
const uuid = ref("");

export function usePagination() {
  //displays 10 users per page
  const displayUsers = computed(() => {
    const startIndex = first.value;
    const endIndex = first.value + rows.value;
    return users.value.slice(startIndex, endIndex);
  });

  const displayUsersByGender = computed(() => {
    const firstIndex = first.value;
    const lastIndex = first.value + rows.value;
    return users.value
      .filter((user) =>
        user.gender.toLowerCase().startsWith(selectedGender.value.toLowerCase())
      )
      .slice(firstIndex, lastIndex);
  });

  function onPage(event: { first: number }) {
    return (first.value = event.first);
  }

  const filterUsers = computed(() => {
    if (isSearchBarEmpty) {
      if (selectedGender.value !== "") {
        if (selectedGender.value === "Both") selectedGender.value = "";
        else {
          return displayUsersByGender.value;
        }
      } else if (searchValue.value !== "") {
        return users.value.filter((user) => {
          const fullname = user.name.first + " " + user.name.last;
          return fullname
            .toLowerCase()
            .includes(searchValue.value.toLowerCase());
        });
      }
      return displayUsers.value.filter(
        (user) =>
          user.name.first
            .toLowerCase()
            .includes(searchValue.value.toLowerCase()) ||
          user.name.last.toLowerCase().includes(searchValue.value.toLowerCase())
      );
    }
  });

  const viewUserDetails = computed(() => {
    return users.value.filter((user) =>
      user.login.uuid.includes(uuid.value))[0]
  });

  const displayName = computed(() => {
    return users.value.map((user) => viewUserDetails.value.name.first + ' ' +viewUserDetails.value.name.last)
  })

  return {
    totalUsers,
    rows,
    first,
    displayUsers,
    onPage,
    searchValue,
    selectedGender,
    gender,
    filterUsers,
    isSearchBarEmpty,
    viewUserDetails,
    uuid,
    displayName
  };
}
