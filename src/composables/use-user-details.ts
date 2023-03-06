import { ref } from "vue"
import { usePagination } from "./use-pagination"

const {viewUserDetails} = usePagination();

export default function useUserDetails(){

const userDetails = ref("");
const isLoading = ref(false);

const mouseOverName = () => {
    userDetails.value = viewUserDetails.value.name.first + " " + viewUserDetails.value.name.last
    isLoading.value = true
};

const mouseOverMail = () => {
    userDetails.value = viewUserDetails.value.email
    isLoading.value = true
};

const mouseOverAddress = () => {
    userDetails.value = viewUserDetails.value.location.street.number + " " + viewUserDetails.value.location.street.name
    isLoading.value = true
};

const mouseOverPhone = () => {
    userDetails.value = viewUserDetails.value.phone
    isLoading.value = true
};
    return{
        userDetails,
        isLoading,
        mouseOverName,
        mouseOverMail,
        mouseOverAddress,
        mouseOverPhone
    }
}